import { thunkGetSpotInfo } from '../../store/spots';
import { thunkGetAllSpotReviews } from '../../store/reviews';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import OpenModalMenuItem from '../OpenModalButton';
import './SpotInfo.css';
import CreateReviewModal from '../CreateReviewModal';
import ConfirmDeleteReviewModal from '../ConfirmDeleteReviewModal';

const months = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

function SpotInfo() {

    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spotInfo = useSelector(state => state.spots.singleSpot);
    const currentUser = useSelector(state => state.session.user);
    const allSpotReviews = useSelector(state => state.reviews.spot);
    const allSpotReviewsArray = Object.values(allSpotReviews);
    const allReviewsUserIdsArray = allSpotReviewsArray.map(review => review.User.id)

    // console.log('dsfsdfsdfdsfdsfdsfd', allReviewsUserIdsArray.length)

    useEffect(() => {
        dispatch(thunkGetSpotInfo(spotId));
        dispatch(thunkGetAllSpotReviews(spotId));
    }, [dispatch, spotId]);



    function reserveClick() {
        alert('Feature Coming Soon');
    };


    //USE THIS OR CODE BREAKS!!!
    if (!Object.keys(spotInfo).length) {
        return (
            <i className="fa-solid fa-truck-ramp-box spot-info-loading">LOADING...</i>
        )
    }

    const defaultImages =
        [
            'https://st2.depositphotos.com/1000507/50672/v/600/depositphotos_506729114-stock-illustration-photo-allowed-restaurant-protect-privacy.jpg',
            'https://st.depositphotos.com/2718383/56503/i/600/depositphotos_565035748-stock-photo-abstract-background-retro-camera-rendering.jpg',
            'https://st4.depositphotos.com/10376142/28942/v/600/depositphotos_289421728-stock-illustration-blue-photo-camera-with-screwdriver.jpg',
            'https://st.depositphotos.com/1077687/3338/v/600/depositphotos_33383877-stock-illustration-camera-design.jpg',
            'https://st2.depositphotos.com/2619903/6028/v/600/depositphotos_60287149-stock-illustration-no-image-signs-for-web.jpg'
        ]

    const defaultImagesBackup =
        [
            'https://st3.depositphotos.com/26272052/33085/v/600/depositphotos_330852614-stock-illustration-color-delete-folder-icon-isolated.jpg',
            'https://st3.depositphotos.com/17253096/35924/v/600/depositphotos_359242572-stock-illustration-photo-camera-icon-flat-color.jpg',
            'https://st3.depositphotos.com/3326513/19442/v/600/depositphotos_194428038-stock-illustration-black-linear-photo-camera-logo.jpg',
            'https://st.depositphotos.com/1443681/1815/v/600/depositphotos_18152983-stock-illustration-no-image-icon-set.jpg',
            'https://st2.depositphotos.com/2619903/7015/v/600/depositphotos_70152407-stock-illustration-no-image-creative-vector-illustrations.jpg'
        ]


    if (spotInfo.SpotImages.length < 5) {
        if (!spotInfo.SpotImages[0].url) {
            spotInfo.SpotImages[0] = { url: defaultImages[0] };
        }
        if (!spotInfo.SpotImages[1]) {
            spotInfo.SpotImages[1] = { url: defaultImages[1] };
        }
        if (!spotInfo.SpotImages[2]) {
            spotInfo.SpotImages[2] = { url: defaultImages[2] };
        }
        if (!spotInfo.SpotImages[3]) {
            spotInfo.SpotImages[3] = { url: defaultImages[3] };
        }
        if (!spotInfo.SpotImages[4]) {
            spotInfo.SpotImages[4] = { url: defaultImages[4] };
        }
    }

    // console.log("SPOT INFO", spotInfo);

    return (
        <div className='single-spot-info-container'>
            <div>
            </div>
            <div className='overal-single-spot'>
                <div className='spot-listing-name'>
                    <h1>{spotInfo.name}</h1>
                </div>

                <div className='city-state-review-div'>
                    <div className='below-name-details' style={{ marginBottom: '1rem' }}>
                        <div className='star-and-superhost-div'>
                            <i className="fa-regular fa-star" />
                            <span>{spotInfo.avgStarRating} Reviews</span>
                            <span style={{ marginLeft: '1rem' }} >{spotInfo.numReview}</span>
                            <span style={{ marginLeft: '1rem' }}>{spotInfo.city},{spotInfo.state},{spotInfo.country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='single-spot-info'>
                <h2>{spotInfo.name}</h2>
                <p>{`${spotInfo.city}, ${spotInfo.state}, ${spotInfo.country}`}</p>
                <div className='single-spot-image-container'>
                    <div className='big-image-container'>
                        <img
                            className='big-image'
                            src={spotInfo.SpotImages[0].url}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultImagesBackup[0];
                            }}
                            // alt={`${spot.name}'s photo unavailable`}>
                            alt="">
                        </img>
                    </div>
                    <div className='small-images-container'>
                        {spotInfo.SpotImages.map((image, i) => {
                                          if (i > 0 && i < spotInfo.SpotImages.length - 1) {
                                            return (
                                              // <div className="pic">
                                              <div id={`pic${i}`}>
                                                <img src={image.url} height="350" width="500" alt={`${i}`}></img>
                                                <a className="previous" href={`#pic${i - 1}`}>&lt;</a>
                                                <a className="next" href={`#pic${i + 1}`}>&gt;</a>
                                              </div>
                                            )
                                          } else {
                                            if (i === 0) {
                                              return (
                                                <div id={`pic${i}`}>
                                                {/* <div className="pic"> */}
                                                  <img src={image.url} height="350" width="500" alt={`${i}`}></img>
                                                  <a className="previous" href={`#pic${spotInfo.SpotImages.length - 1}`}>&lt;</a>
                                                  <a className="next" href={`#pic${i + 1}`}>&gt;</a>
                                                </div>
                                              )
                                            } else {
                                              return (
                                                <div id={`pic${i}`}>
                                                {/* <div className="pic"> */}
                                                  <img src={image.url} height="350" width="500" alt={`${i}`}></img>
                                                  <a className="previous" href={`#pic${i - 1}`}>&lt;</a>
                                                  <a className="next" href={`#pic${0}`}>&gt;</a>
                                                </div>
                                              )
                                            }
                                          }

                            // if (i > 0) {
                            //     return (
                            //         <img
                            //             className='small-images'
                            //             src={image.url}
                            //             onError={(e) => {
                            //                 e.target.onerror = null;
                            //                 e.target.src = defaultImagesBackup[i];
                            //             }}
                            //             alt={spotInfo.name}
                            //             key={i}
                            //         />
                            //     );
                            // }
                            // return null;
                        })}
                        {/* <img
                            className='small-images'
                            src={spotInfo.SpotImages[1].url}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultImagesBackup[1];
                            }}
                            // alt={`${spot.name}'s photo unavailable`}>
                            alt="">
                        </img>
                        <img
                            className='small-images'
                            src={spotInfo.SpotImages[2].url}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultImagesBackup[2]
                            }}
                            alt={spotInfo.name}>
                        </img>
                        <img
                            className='small-images'
                            src={spotInfo.SpotImages[3].url}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultImagesBackup[3];
                            }}
                            alt={spotInfo.name}>
                        </img>
                        <img
                            className='small-images'
                            src={spotInfo.SpotImages[4].url}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultImagesBackup[4];
                            }}
                            alt={spotInfo.name}>
                        </img> */}
                    </div>
                </div>
                <div className='host-info-reserve-container'>

                    <div className='host-info-container'>
                        <h3>Hosted by {spotInfo.Owner.firstName} {spotInfo.Owner.lastName}</h3>
                        <p>{spotInfo.description}</p>
                    </div>
                    <div className='price-reserve-container'>
                        <div className='price-rating-info'>
                            <p><strong>${Number(spotInfo.price).toFixed(2)}</strong>/night</p>
                            <p className='reserve-div-reviews'>
                                <i className="fa-solid fa-star  fa-xl"></i>
                                {spotInfo.numReviews === 1 && ` ${Number(spotInfo.avgStarRating).toFixed(1)} · ${spotInfo.numReviews} review`}
                                {spotInfo.numReviews > 1 && ` ${Number(spotInfo.avgStarRating).toFixed(1)} · ${spotInfo.numReviews} reviews`}
                                {spotInfo.numReviews === 0 ? ' New' : null}
                            </p>
                        </div>
                        <div className='reserve-container' onClick={reserveClick}>
                            <button className='reserve-button'>RESERVE</button>
                        </div>

                    </div>
                </div>
                <div className='reviews-info'>
                    <p>
                        <i className="fa-solid fa-star fa-xl"></i>
                        <strong>
                            {spotInfo.numReviews === 1 && ` ${Number(spotInfo.avgStarRating).toFixed(1)} · ${spotInfo.numReviews} review`}
                            {spotInfo.numReviews > 1 && ` ${Number(spotInfo.avgStarRating).toFixed(1)} · ${spotInfo.numReviews} reviews`}
                            {spotInfo.numReviews === 0 ? ' New' : null}
                        </strong>
                    </p>
                </div>
                {currentUser && spotInfo.Owner.id !== currentUser.id && !allReviewsUserIdsArray.includes(currentUser.id) && (
                    // <div className='post-review-button'>
                    <OpenModalMenuItem
                        itemText="Post Your Review"
                        modalComponent={<CreateReviewModal spotId={spotId} />}
                    />
                    // </div>
                )
                }
                <div className="review-info-section">
                    {allSpotReviewsArray.length !== 0 && allSpotReviewsArray.map(review =>
                        <div key={review.id} className='review-info-container'>
                            <p className='review-username'>{review.User.firstName}</p>
                            <p className='review-date'>{months[Number(review.createdAt.split('-')[1] - 1)]} {review.createdAt.split('-')[0]}</p>
                            <p className='review-content'>{review.review}</p>

                            {review.User.id === currentUser?.id &&
                                // <div className='delete-review-button'>
                                <OpenModalMenuItem
                                    itemText='Delete'
                                    modalComponent={<ConfirmDeleteReviewModal reviewId={review.id} spotId={spotId} />}
                                />

                                // </div>
                            }
                        </div>
                    )}
                </div>
                {allSpotReviewsArray.length === 0 && currentUser && spotInfo.Owner.id !== currentUser.id && (
                    <div className='first-review-message'>Be the first to post a review!</div>
                )}

            </div>
        </div>

    )

}


export default SpotInfo;
