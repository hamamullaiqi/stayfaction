import React from "react";

import hero from "assets/images/hero.jpg";
import frame from "assets/images/frame.jpg";
import IcCities from "assets/icons/ic_cities.svg";
import IcTravelers from "assets/icons/ic_traveler.svg";
import IcTreasures from "assets/icons/ic_treasure.svg";
import Button from "elements/Button";

import formatNumber from "utils/thousandSparator"

export default function Hero(props) {
  const showMeNow = () => {
    window.scroll({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-3 mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto pe-5" style={{ width: 500 }}>
          <h1 className="fw-bold lh-base mb-3" style={{fontSize: 42}}>
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="text-gray-500 fw-light w-75 mb-4 lh-lg">
            We provide what you need to enjoy your holiday with family. Time to make another
            memorable moments.
          </p>
          <Button className="btn px-5 mb-5" isPrimary hasShadow onClick={showMeNow}>
            Show Me Now
          </Button>

          <div className="mt-3 row justify-content-between">
            <div className="col-auto">
              <img
                width="32"
                height="32"
                src={IcTravelers}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}
                <span className="text-gray-500 fw-light ms-1">travelers</span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width="32"
                height="32"
                src={IcTreasures}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}
                <span className="text-gray-500 fw-light ms-1">treasures</span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width="32"
                height="32"
                src={IcCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}
                <span className="text-gray-500 fw-light ms-1">cities</span>
              </h6>
            </div>

          </div>
        </div>
        <div className="col-6 mt-5 ps-5">
            <div style={{ width: 520, height: 410}}>
                <img src={hero} width="480" height="380px" alt="Room With Coushes" className="img-fluid position-absolute " style={{ margin: "-40px 0 0 -40px", zIndex: 1}} />
                <img src={frame} width="480" height="380px" alt="Room With Coushes Frame" className="img-fluid position-absolute " style={{ margin: "0 -15px -15px 0"}} />
            </div>
           

        </div>
      </div>
    </section>
  );
}
