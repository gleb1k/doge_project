import React, { useEffect, useState } from "react"
import axios from "axios"
import './style/Dogs.css';
import { useLocation } from "react-router-dom";

const Dogeinfo = (props) => {

    //научиться проинимать ид
    const apiSrc = "https://api.thedogapi.com/v1/images/BJa4kxc4X"
    const [dog, setDog] = useState([])
    const location = useLocation()
    const data = location.state?.data;

    useEffect(() => {
        axios.get(apiSrc)
            .then(response => setDog(response.data))
    }, [])

    console.log(dog)
    console.log(data)

    return (
         <div className="Dogeinfo">
            <h1>Порода собаки: {location.state?.name}</h1>
             <img alt="Loading..." src={location.state?.url} width="400"></img>
             <p>Вес: {location.state?.weight} кг</p>
             <p>Размер: {location.state?.height} см</p>
             <p>Продолжительность жизни: {location.state?.life_span}</p>
         </div>
    );
}

export default Dogeinfo;