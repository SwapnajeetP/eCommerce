import React, { useEffect, useReducer, useState } from "react";
import data from "./Data";
import "./Productsstyle.css";

const initialState = {
  sorting_value: "lowest",
};

const reducer = (state, action) => {
  let newSortData;

  switch (action.type) {
    case "sortElement":
      let userSort = document.getElementById("sort");
      let sortVal = userSort.options[userSort.selectedIndex].value;

      // console.log(sortVal);

      return {
        ...state,
        sorting_value: sortVal,
      };

    case "effectSort":
      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = action.payload.sort(sortingProducts);
      }

      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = action.payload.sort(sortingProducts);
      }

      if (state.sorting_value === "AtoZ") {
        const sortingProducts = (a, b) => {
          return a.name.localeCompare(b.name);
        };
        newSortData = action.payload.sort(sortingProducts);
      }

      if (state.sorting_value === "ZtoA") {
        const sortingProducts = (a, b) => {
          return b.name.localeCompare(a.name);
        };
        newSortData = action.payload.sort(sortingProducts);
      }

      return { ...state };

    default:
      return state;
  }
};

export default function Products({
  filterprod,
  handleAdd,
  filterItem,
  AllItems,
}) {
  // const [home, setHome] = useState(true);
  // const [clothes, setClothes] = useState(true);
  // const [electronics, setElectronics] = useState(true);
  // const [decor, setDecor] = useState(true);
  // const [utility, setUtility] = useState(true);

  // const handleCheck = (data) => {
  //   if (data === "home") {
  //     if (home == true) {
  //       filterItem(data);
  //     } else {
  //       setHome(false);
  //     }
  //   }

  //   if (data === "clothes") {
  //     if (clothes == true) {
  //       filterItem(data);
  //     } else {
  //       setClothes(false);
  //     }
  //   }

  //   if (data === "electronics") {
  //     if (electronics == true) {
  //       filterItem(data);
  //     } else {
  //       setElectronics(false);
  //     }
  //   }

  //   if (data === "decor") {
  //     if (decor == true) {
  //       filterItem(data);
  //     } else {
  //       setDecor(false);
  //     }
  //   }

  //   if (data === "utility") {
  //     if (utility == true) {
  //       filterItem(data);
  //     } else {
  //       setUtility(false);
  //     }
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = () => {
    dispatch({ type: "sortElement" });
  };

  useEffect(() => {
    dispatch({ type: "effectSort", payload: filterprod });
    // console.log("Hii");
  }, [state.sorting_value]);

  return (
    <>
      <div className="parent">
        <div className="catBtn">
          <button className="btn btn-secondary filterbtn" onClick={AllItems}>
            All
          </button>

          <button
            className="btn btn-secondary filterbtn"
            onClick={() => filterItem("home")}
          >
            Home Usage
          </button>
          <button
            className="btn btn-secondary filterbtn"
            onClick={() => filterItem("clothes")}
          >
            Clothes
          </button>
          <button
            className="btn btn-secondary filterbtn"
            onClick={() => filterItem("electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-secondary filterbtn"
            onClick={() => filterItem("decor")}
          >
            Decoration
          </button>
          <button
            className="btn btn-secondary filterbtn"
            onClick={() => filterItem("utility")}
          >
            Utility
          </button>
        </div>

        <div className="sort-section">
          <label htmlFor="">Sort - </label>
          <form action="">
            <select className="select" name="" id="sort" onChange={sorting}>
              <option value="" disabled></option>
              <option value="lowest">Low-High</option>
              <option value="" disabled></option>
              <option value="highest">High-Low</option>
              <option value="" disabled></option>
              <option value="AtoZ">a-z</option>
              <option value="" disabled></option>
              <option value="ZtoA">z-a</option>
            </select>
          </form>
        </div>
      </div>
      {/* <div className="leftProduct">
        <input
          type="checkbox"
          value={home}
          onChange={() => handleCheck("home")}
        />{" "}
        Home <br />
        <input
          type="checkbox"
          value={clothes}
          onChange={() => handleCheck("clothes")}
        />{" "}
        Clothes <br />
        <input
          type="checkbox"
          value={electronics}
          onChange={() => handleCheck("electronics")}
        />{" "}
        Electronics <br />
        <input
          type="checkbox"
          value={decor}
          onChange={() => handleCheck("decor")}
        />{" "}
        Decoration <br />
        <input
          type="checkbox"
          value={utility}
          onChange={() => handleCheck("utility")}
        />{" "}
        Utility <br />
      </div> */}
      <div className="shop-section">
        {filterprod.map((item) => (
          <div className="box1s box">
            <div className="box-img">
              <img src={item.img} alt="" className="img1" />
            </div>
            <div className="box-title">
              <span className="featuretext"> {item.name} </span>
            </div>
            <div className="box-border">
              <div className="rateDiv">
                <span className="star rated">{item.rating}</span>
                <span className="star rated">{item.rating}</span>
                <span className="star rated">{item.rating}</span>
                <span className="star unrated">{item.rating}</span>
                <span className="star unrated">{item.rating}</span>
                <span className="num">(679)</span>
              </div>
              <hr className="hrline" />

              <div className="price">
                <span className="fnt">Rs.{item.price}</span>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-secondary w-100 addCartbtn"
                  onClick={() => handleAdd(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
