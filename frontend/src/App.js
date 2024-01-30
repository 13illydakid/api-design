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
import SpotsFormPage from "./components/SpotsFormPage";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";

import "./index.css";
import { categories } from "./components/Category/CategoriesList";
import Categorie from "./components/Category";


// axios.defaults.baseURL = 'postgres://default:XBy6wI9ibYcH@ep-bitter-feather-72486321.us-west-2.postgres.vercel-storage.com:5432/verceldb';
// axios.defaults.baseURL = '../../../backend/routes/api';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;


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
            <SpotsFormPage />
            {/* <CreateSpotForm /> */}
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

      <Footer />

    </>
  );
}

export default App;
