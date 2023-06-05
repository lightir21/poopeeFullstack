import React from "react";

const Form = ({
  isActive,
  setIsActive,
  time,
  setTime,
  date,
  setDate,
  description,
  setDescription,
  setPoo,
  currPage,
  setPee,
  amount,
  setAmount,
  poo,
  pee,
  feed,
  setFeed,
}) => {
  const resetDateNTime = () => {
    setDate("");
    setTime("");

    currPage !== "feed" && setDescription("");

    currPage === "feed" && setAmount("");
  };

  if (isActive) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (currPage === "poo") {
        if (date && time) {
          const event = {
            id: new Date().getTime().toString(),
            date,
            time,
            description,
          };
          await setPoo((poo) => [...poo, event]);
          localStorage.setItem("poo", JSON.stringify([...poo, event]));
        }
      }
      if (currPage === "pee") {
        if (date && time) {
          const event = {
            id: new Date().getTime().toString(),
            date,
            time,
            description,
          };
          setPee((pee) => {
            return [...pee, event];
          });
          localStorage.setItem("pee", JSON.stringify([...pee, event]));
        }
      }
      if (currPage === "feed") {
        if (date && time && amount) {
          const event = {
            id: new Date().getTime().toString(),
            date,
            time,
            amount,
          };
          setFeed((feed) => {
            return [...feed, event];
          });
          localStorage.setItem("feed", JSON.stringify([...feed, event]));
        }
      }
      resetDateNTime();
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {currPage === "feed" ? (
          <div>
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label htmlFor="description">Description (optional): </label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}

        <button className="btn--form" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    );
  } else if (currPage === "") {
    return <button className="btn--add_empty">Add Event</button>;
  } else {
    return (
      <button className="btn--add" onClick={() => setIsActive(true)}>
        Add Event
      </button>
    );
  }
};

export default Form;
