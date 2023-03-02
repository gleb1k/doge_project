import React, { useEffect, useState } from "react"
import axios from "axios"
import './Dogs.css';

const Dogeinfo = (props) => {

    //научиться проинимать ид
    const api2 = "https://api.thedogapi.com/v1/breeds/1"
    const apiSrc = "https://api.thedogapi.com/v1/images/BJa4kxc4X"
    const apiKey = "live_rOuqiEI0j2qAQUZMDnHDzegt5x6uP7PVA3EUdt8KY88WgGno5hxYumlDRGs2vusP"
    const header = {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        }
    }
    const [dog, setDog] = useState([])

    useEffect(() => {
        axios.get(api2, header)
            .then(data => console.log(data))
            .then(response => setDog(response.data))
    }, [])

    console.log(dog)

    return (
        <div className="Dogeinfo">
            <h1>{dog.id}</h1>
            <h1>Порода собаки: {dog.name}</h1>
            <img alt="Loading..." scr={dog.url}></img>
            <p>Вес: {dog.breeds[0].weight.metric} кг</p>
            <p>Размер: {dog.breeds[0].height.metric} см</p>
            <p>Продолжительность жизни: {dog.breeds[0].life_span}</p>
        </div>
    );
}

export default Dogeinfo;