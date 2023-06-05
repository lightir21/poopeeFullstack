import React from "react";

import Form from "./Form";

function Poo({
  poo,
  setPoo,
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
}) {
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
          setPoo={setPoo}
          setDate={setDate}
          setDescription={setDescription}
          date={date}
          time={time}
          setTime={setTime}
          description={description}
          poo={poo}
        />
      </article>
      <ul className="list-item__container">
        {poo &&
          poo
            .map((item, index) => {
              const { id, date, time, description } = item;
              return (
                <li className="list-item" key={id}>
                  {index + 1}: {date} at {time}
                  {description ? `additional info: ${description}` : ""}
                </li>
              );
            })
            .reverse()}
      </ul>
    </>
  );
}

export default Poo;
