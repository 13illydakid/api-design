
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllSpots, thunkGetSpotInfo } from "../../store/spots";
import { NavLink } from "react-router-dom";
import './AllSpots.css';
import { useParams } from "react-router-dom";


const generatePreviewImage = (previewImage) => {
  if (previewImage === "There are no preview images for this spot") {
    previewImage = "https://st2.depositphotos.com/1000507/50672/v/600/depositphotos_506729114-stock-illustration-photo-allowed-restaurant-protect-privacy.jpg";
    return previewImage;
  } else
    return previewImage;
}

function AllSpots() {

  const dispatch = useDispatch();
  const spots = Object.values(useSelector(state => state.spots.allSpots));
  // const spots = useSelector(state => state.spots.allSpots);
  // console.log(spots)

  useEffect(() => {
    dispatch(thunkGetAllSpots());
  }, [dispatch])

  //USE THIS OR CODE BREAKS!!!
  if (!Object.keys(spots).length) {
    return (
      <i className="fa-solid fa-truck-ramp-box spot-info-loading">LOADING...</i>
    )
  }

  return (
    // <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-flow-row">
    <div className="all-spots-container">
      {spots.map(spot =>
        <NavLink to={`/spots/${spot.id}`} key={spot.id} className="spot-container">
          <div title={spot.name} className="spot-info-container">
            <div className='spot-image-container'>

              <img
                className="all-spots-image"
                // src={generatePreviewImage(spot.previewImage)}
                src={spot.previewImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://st3.depositphotos.com/26272052/33085/v/600/depositphotos_330852614-stock-illustration-color-delete-folder-icon-isolated.jpg"
                }}
                // alt={`${spot.name}'s photo unavailable`}>
                alt="">
              </img>
            </div>
            <div className="mini-title">
              <h2>{spot.name}</h2>
            </div>
            <div className="city-state-star-container">
              <p className="spot-info">
                {spot.city}, {spot.state}
              </p>
              <p className="spot-info">
                <i className="fa-solid fa-star fa-xl"></i>
                {spot.avgRating === "There are no current ratings for this spot" ? <strong className="all-spots-price">New</strong> :
                  <strong className="all-spots-rating">
                    {`${Number(spot.avgRating).toFixed(1)}`}
                  </strong>
                }
              </p>
            </div>
            <div className="spot-info">
              <span className="all-spots-price">${Number(spot.price).toFixed(2)}</span>
              <span className="price-night-text">/night</span>
            </div>
          </div>
        </NavLink>)}
    </div>

  );
};

export default AllSpots;
/*
{/* <div className='big-box-div'>
<div className="all-spots-container">
    {spots.map(({ id, city, state, avgRating, price, previewImage }) => (
        <div key={id} className='spot-container' onClick={() => history.push(`/spots/${id}`)}>
            <div>
                <div className='spot-image-container'>
                    <img className='all-spots-image' src={previewImage} alt='preview-img'></img>
                </div>
                <div className='city-state-star-container'>
                    <div className='flex-column'>
                        <div className='spot-info'> {`${city},${state}`}</div>
                        <div className='spot-info'>{`$${price} night`}</div>
                    </div>
                    <div className='flex-column'>
                        <div className='all-spots-rating'>
                            <i className="fas fa-star">{avgRating}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
</div> */
