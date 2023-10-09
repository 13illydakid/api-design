 // frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpots from "./components/AllSpots";
import SpotInfo from "./components/SpotInfo";
import CreateSpotForm from "./components/CreateSpotForm"
import ManageSpots from "./components/ManageSpots";
import UpdateSpotForm from "./components/UpdateSpotForm";
import ScrollToTop from "./ScrollToTop";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://api-design-63mg.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [message]);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
    </>
  );
}

export default App;
