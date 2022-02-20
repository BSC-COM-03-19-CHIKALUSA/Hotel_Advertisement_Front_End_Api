import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className = "cards">
        <h1>HOTEL PHYSICAL OUTLOOKS</h1>
        <div className="cards__container">
              <div className="cards__wrapper">
                  <ul className="cards__item">
                      <CardItem
                      src="images/slider1.jpg"
                      text="Executive and more confortable rooms"
                      label="Expensive"
                      path="/images"
                      />

                      <CardItem
                          src="images/slider2.jpg"
                          text="Best rooms you can enjoy"
                          label="medium"
                          path="/images"
                      />

                      <CardItem
                          src="images/slider3.jpg"
                          text="These are cheap rooms"
                          label="Cheap"
                          path="/images"
                      />
                  </ul>
              </div>
        </div>
    </div>
  )
}

export default Cards