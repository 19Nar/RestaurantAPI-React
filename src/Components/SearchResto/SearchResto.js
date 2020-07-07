import React, { useState, useEffect } from "react";

import "./SearchResto.css";

import RestoResults from "../RestoResults/RestoResults";

const SearchResto = () => {
  const [items, setRestos] = useState([]);

  useEffect(() => {
    fetch(`https://opentable.herokuapp.com/api/restaurants?city=san%20diego`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRestos(response.results);
      });
  }, []);

  return (
      <div> 
          {items &&
        items.map((item) => (
          <RestoResults items={item} key={item.id} />
        ))}
    </div>
  );
};

export default SearchResto;
