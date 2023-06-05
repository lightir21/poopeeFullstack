import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import Poo from "./Poo";
import Feed from "./Feed";
import Pee from "./Pee";
import Navbar from "./Navbar";
import { useState } from "react";

const App = () => {
  const [poo, setPoo] = useState([]);
  const [pee, setPee] = useState([]);
  const [feed, setFeed] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [currPage, setCurrPage] = useState("");
  const [isActive, setIsActive] = useState(false);

  const pooFromLocal = localStorage.getItem("poo");
  const peeFromLocal = localStorage.getItem("pee");
  const feedFromLocal = localStorage.getItem("feed");

  useEffect(() => {
    setIsActive(false);

    if (pooFromLocal) setPoo(JSON.parse(pooFromLocal));
    if (peeFromLocal) setPee(JSON.parse(peeFromLocal));
    if (feedFromLocal) setFeed(JSON.parse(feedFromLocal));
  }, [feedFromLocal, peeFromLocal, pooFromLocal]);

  return (
    <>
      <Navbar
        setCurrPage={setCurrPage}
        setIsActive={setIsActive}
        setTime={setTime}
        setDate={setDate}
      />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="feed"
          element={
            <Feed
              amount={amount}
              setAmount={setAmount}
              feed={feed}
              setFeed={setFeed}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              isActive={isActive}
              setIsActive={setIsActive}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          }
        />
        <Route
          path="poo"
          element={
            <Poo
              poo={poo}
              setPoo={setPoo}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              description={description}
              setDescription={setDescription}
              isActive={isActive}
              setIsActive={setIsActive}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          }
        />
        <Route
          path="pee"
          element={
            <Pee
              pee={pee}
              setPee={setPee}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              description={description}
              setDescription={setDescription}
              isActive={isActive}
              setIsActive={setIsActive}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
