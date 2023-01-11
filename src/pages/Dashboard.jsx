import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from  "../assests/dummy-data/recommendCars"

const carObj = {
  title: "Energy",
  percentage: 45,
  icon: "ri-flashlight-line",
};

const tripObj = {
  title: "Range",
  percentage: 57,
  icon: "ri-arrow-up-line",
};

const clientObj = {
  title: "Break fluid",
  percentage: 9,
  icon: "ri-drop-line",
};

const distanceObj = {
  title: "Tire Wear",
  percentage: 25,
  icon: "ri-coin-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <p><span className="bg-info rounded p-1">Day</span > <span className="p-1">week</span> <span>Month</span></p>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <p>20 February 2022</p>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;