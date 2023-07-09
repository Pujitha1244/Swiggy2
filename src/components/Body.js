import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data =   await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.466697726414033&lng=78.33917311751942&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[2].data.data.cards);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const filterTopRatedRestro = () => {
    const filteredTopRestro = restaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setRestaurants(filteredTopRestro);
  };

  const setAllRestro = () => {
    setRestaurants(resObj);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  // resObj.filter(res=> res.data.avgRating > 4)
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          
          <button
            onClick={() => {
              console.log(searchText)
              const filteredrestro = restaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurants(filteredrestro);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRatedRestro}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={setAllRestro}>
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
            <Link key={restaurant?.data?.id} to={'/restaurants/'+restaurant.data.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
