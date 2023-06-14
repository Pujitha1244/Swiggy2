import {CDN_URL} from "../utils/contants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, costForTwo, deliveryTime } = resData?.data
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={ CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3> 
        <p>{resData.data.cuisines.join(", ")}</p>
        <div className="res-card-info">
          <ul>
            <li>{resData?.data?.avgRating}</li>
            <li>{costForTwo / 100} for two</li>
            <li>{deliveryTime} mins</li>
          </ul>
        </div>
      </div>
    )
  }

  export default RestaurantCard