import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useEffect, useState } from "react";
import axios from "axios";
import { thunkCreateSpot } from '../../store/spots';
// import Navigation from "../Navigation";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SpotsFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/' + id).then(response => {
      const { data } = response;
      setName(data.name);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setCity(data.city);
      setState(data.state);
      setCountry(data.country);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);
  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      name, address, addedPhotos,
      description, perks, extraInfo,
      checkIn, checkOut, maxGuests, price,
    };
    const newSpot = {
      name, address, description,
      city, state, country, price,
    }
    if (id) {
      // update
      await axios.put('/places', {
        id, ...placeData
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/places', placeData);
      const photosArray = makePhotosArray(addedPhotos);
      const spot = dispatch(thunkCreateSpot(newSpot, photosArray));
      history.push(`/spots/${spot.id}`);
      setRedirect(true);
    }

  }

  const makePhotosArray = (photosObject) => {
    let urlArray = Object.values(photosObject);
    let resultArray = [];
    for(let i = 0; i < urlArray.length; i++){
      let obj = {};
      obj["url"] = urlArray[i];
      if(i === 0){
        obj["preview"] = true;
      } else{
        obj["preview"] = false;
      }
      resultArray.push(obj);
    }
    return resultArray;
  }

  console.log(makePhotosArray(addedPhotos));
  console.log(Object.keys(makePhotosArray(addedPhotos)[0]));
  console.log("does this work?");
  console.log("does this work?");
  console.log(addedPhotos);
  console.log("who is this?");
  console.log(Object.keys(addedPhotos));
  console.log("who is this?");
  console.log(typeof addedPhotos);
  console.log("who is this?");
  console.log("who is this?");
  console.log("who is this?");

  if (redirect) {
    return <NavLink to={'/account/places'} />
  }

  return (
    <>
      <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">
        {/* <Navigation /> */}
        <form onSubmit={savePlace}>
          {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="title, for example: My lovely apt" />
          {preInput('Address', 'Address to this place')}
          <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" />
          <span className="inline-flex space-x-9">
            <div>
              {preInput('City', '')}
              <input type="text" value={city} onChange={ev => setCity(ev.target.value)} placeholder="city" />
            </div>
            <div>
              {preInput('State', '')}
              <input type="text" value={state} onChange={ev => setState(ev.target.value)} placeholder="state" />
            </div>
            <div>
              {preInput('Country', '')}
              <input type="text" value={country} onChange={ev => setCountry(ev.target.value)} placeholder="country" />
            </div>
          </span>
          {preInput('Photos', 'more = better')}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          {preInput('Description', 'description of the place')}
          <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
          {preInput('Perks', 'select all the perks of your place')}
          <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks selected={perks} onChange={setPerks} />
          </div>
          {preInput('Extra info', 'house rules, etc')}
          <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
          {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input type="text"
                value={checkIn}
                onChange={ev => setCheckIn(ev.target.value)}
                placeholder="12:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text"
                value={checkOut}
                onChange={ev => setCheckOut(ev.target.value)}
                placeholder="12:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="number" value={maxGuests}
                onChange={ev => setMaxGuests(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Price per night</h3>
              <input type="number" value={price}
                onChange={ev => setPrice(ev.target.value)} />
            </div>
          </div>
          {/* <button className="primary my-4">Save</button> */}
          <button className="primary my-4 bg-primary p-2 w-full text-white rounded-2xl">Save</button>
        </form>
      </div>
    </>
  );
}
