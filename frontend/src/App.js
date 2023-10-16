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
// import categories from "./components/Category";
import "./components/Category/index.css"

import "./index.css";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const support = [
  "Support", "Help Center", "DormCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighborhood concern"
]
const hosting = [
  "Hosting", "Dormbnb your home", "DormCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibility", "Dormbnb-friendly apartments"
]
const airbnb = [
  "Dormbnb", "Newsroom", "New features", "Careers", "Investors", "Gift cards", "Dormbnb.org emergency stays"
]

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

      <div className="categories-container">
        {categories.map((category, i) => {
          if (i > 0) {
            return (
              <div className="category-type">
                {/* {category.icon} */}
                <div className="category-icon">
                  <category.icon />
                </div>
                <div className="category-label">
                  {category.label}</div>
              </div>
            )
          }
          return null
        })}
      </div>

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
