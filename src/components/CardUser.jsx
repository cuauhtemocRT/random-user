import React from "react";
import "../App.css";

const CardUser = ({ user }) => {
  return (
    <section className="card__section">
      <div className="card__name">
        <img src={user?.picture.large} alt="" />
        <h2>
        {`${user?.name.title} ${user?.name.first} ${user?.name.last}`}
        </h2>
      </div>
      <hr />
      <div className="card__description">
      <ul>
        <li>
          <span>Email: </span>
          {user?.email}
        </li>
        <li>
          <span>Gender: </span>
          {user && user.gender}
        </li>
        <li>
          <span>Location: </span>
          {`${user?.location.country}, ${user?.location.city}`}
        </li>
      </ul>
      </div>
      <hr />
      <div className="card__btn">
        <a href="https://glistening-toffee-68ca24.netlify.app/">New user random</a>
      </div>
    </section>
  );
};

export default CardUser;
