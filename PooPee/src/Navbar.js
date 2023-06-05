import React from "react";
import { FaPoo, FaBaby, FaCentercode } from "react-icons/fa";
import { GiBabyBottle } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ setCurrPage, setIsActive, setDate, setTime }) => {
  // const turnPage = (curr){
  //   setIsActive(false)
  // }

  const resetDateNTime = () => {
    setDate("");
    setTime("");
  };

  return (
    <div className="container-center">
      <h3>What would you like to track?</h3>
      <div className="icons-container">
        <Link
          to="/poo"
          className="poo item"
          onClick={() => {
            setIsActive(false);
            setCurrPage("poo");
            resetDateNTime();
          }}
        >
          <FaPoo />
          <span className="text">poo</span>
        </Link>
        <Link
          to="/pee"
          className="pee item"
          onClick={() => {
            setIsActive(false);
            setCurrPage("pee");
            resetDateNTime();
          }}
        >
          <FaBaby />
          <span className="text">pee</span>
        </Link>
        <Link
          to="/feed"
          className="feed item"
          onClick={() => {
            setIsActive(false);
            setCurrPage("feed");
            resetDateNTime();
          }}
        >
          <GiBabyBottle />
          <span className="text">feed</span>
        </Link>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;
