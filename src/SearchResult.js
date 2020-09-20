import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

export const SearchResult = ({
  img,
  location,

  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchresult">
      {/* <h2>img,location,title,description,star,price,total</h2> */}
      <img src={img} alt="" />
      <FavoriteBorderIcon className="heart" />
      <div className="searchresult__info">
        <div className="searchresult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchresult__infoBottom">
          <div className="searchresuts__stars">
            <StarIcon className="star__icon" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchresult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};