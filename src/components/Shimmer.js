import resObj from "../utils/mockData"

const Shimmer = () =>{
    console.log(resObj.length)
    return(
        <div className="shimmer-container">
            {resObj.map((res)=>
            <div className="shimmer-cards"></div>)}
            
            {/* <div className="shimmer-cards"></div> */}
        </div>
    )
}

export default Shimmer