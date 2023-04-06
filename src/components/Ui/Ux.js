import { useEffect, useState } from "react";

function Ui (){
    let [city,setCity]=useState("lahore")
    let [cityWeather,setCityweather]=useState(null)
    const handelInput=(event)=>{
        let input =event.target.value;
        setCity(input)
    }
    const liveWeather= async()=>{
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=204f1eccf07fdc3e3c4864645107c98d`)
        let weather= await response.json();
        setCityweather(weather.main)
    }
    useEffect(()=>{
        liveWeather()
    },)
return(
<div>
<section className="vh-100" style={{backgroundColor: "#4B515D"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">
    <h1 style={{color:"white",textAlign:"center",fontSize:"25px"}} className="" >My Weather App</h1>
    <hr style={{color:"white"}}/>
        <div className="card" style={{color: "#4B515D" ,borderRadius: "35px"}}>
          <div className="card-body p-4">

            <div className="d-flex">
              <input className="form-floating mb-3 form-control" onChange={handelInput} />
              </div>
            {
                !cityWeather ? (
                    <p>No Data Found</p>
                ):(
                    <>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {cityWeather.temp}°C </h6>
                <span  style={{color: "#868B94",fontSize:"20px",fontWeight:"bold"}}>{city}</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                  <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> Temp_Min: {" "} {cityWeather.temp_min}
                    </span></div>
                  <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> Temp_Max: {" "} {cityWeather.temp_max} </span>
                  </div>
                  <div><i className="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> Humidity: {" "} {cityWeather.humidity} </span>
                  </div>
                </div>
              </div>
              </>
  )
            }
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
</div>
);
}
export default Ui;