import React from "react";
import Form from "./Form";

const Feed = ({
  feed,
  setFeed,
  date,
  setDate,
  amount,
  setAmount,
  time,
  setTime,
  isActive,
  setIsActive,
  currPage,
  setCurrPage,
}) => {
  return (
    <>
      <article className="container-pages">
        <h2 className="page-title">{currPage}</h2>
        {currPage && <div className="title--underline"></div>}
        <Form
          isActive={isActive}
          setIsActive={setIsActive}
          currPage={currPage}
          setCurrPage={setCurrPage}
          setFeed={setFeed}
          setDate={setDate}
          setAmount={setAmount}
          date={date}
          time={time}
          setTime={setTime}
          amount={amount}
          feed={feed}
        />
      </article>
      <ul className="list-item__container">
        {feed &&
          feed.map((item, index) => {
            const { id, date, time, amount } = item;
            return (
              <div className="list-item" key={id}>
                {index + 1}: {date} at {time} {amount}
              </div>
            );
          })}
      </ul>
  
    </>
  );
};

export default Feed;
