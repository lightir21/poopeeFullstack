import React from "react";
import Form from "./Form";

const Pee = ({
  pee,
  setPee,
  date,
  setDate,
  description,
  setDescription,
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
          setPee={setPee}
          setDate={setDate}
          setDescription={setDescription}
          date={date}
          time={time}
          setTime={setTime}
          description={description}
          pee={pee}
        />
      </article>
      <ul className="list-item__container">
        {pee &&
          pee.map((item, index) => {
            const { id, date, time, description } = item;
            return (
              <div className="list-item" key={id}>
                {index + 1}: {date} at {time}{" "}
                {description ? `additional info: ${description}` : ""}
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default Pee;
