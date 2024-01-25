// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpots from "./components/AllSpots";
import SpotInfo from "./components/SpotInfo";
import CreateSpotForm from "./components/CreateSpotForm"
import ManageSpots from "./components/ManageSpots";
import UpdateSpotForm from "./components/UpdateSpotForm";
import ScrollToTop from "./ScrollToTop";
// import categories from "./components/Category";
// import "./components/Category/index.css"

import "./index.css";
import { categories } from "./components/Category/CategoriesList";
import Categorie from "./components/Category";


const support = [
  "Support", "Help Center", "DormCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighborhood concern"
]
const hosting = [
  "Hosting", "Dormbnb your home", "DormCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibility", "Dormbnb-friendly apartments"
]
const airbnb = [
  "Dormbnb", "Newsroom", "New features", "Careers", "Investors", "Gift cards", "Dormbnb.org emergency stays"
]


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = false;


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("https://api-design-63mg.onrender.com")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, [message]);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      <Categorie categories={categories}/>

      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <AllSpots />
          </Route>
          <Route exact path='/spot/createSpotForm'>
            <ScrollToTop />
            <CreateSpotForm />
          </Route>
          <Route exact path='/spot/:spotId/updateSpotForm'>
            <ScrollToTop />
            <UpdateSpotForm />
          </Route>
          <Route exact path='/spots/current'>
            <ScrollToTop />
            <ManageSpots />
          </Route>
          <Route exact path='/spots/:spotId'>
            <ScrollToTop />
            <SpotInfo />
          </Route>
        </Switch>
      )}

      <div className="break-line">
        <hr />
      </div>

      <div className="footer-background">

        <div className="footer-container">
          <div className="footer-info">
            {support.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
          <div className="footer-info">
            {hosting.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
          <div className="footer-info">
            {airbnb.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
        </div>
      <div className="break-line-bottom">
        <hr />
      </div>
      </div>


    </>
  );
}

export default App;
