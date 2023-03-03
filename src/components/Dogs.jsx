import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Card } from "antd"
import './style/Dogs.css';

const Dogs = (props) => {

    const apiSrc = "https://api.thedogapi.com/v1/images/search?format=json&limit=100&has_breeds=1"
    const apiKey = "live_rOuqiEI0j2qAQUZMDnHDzegt5x6uP7PVA3EUdt8KY88WgGno5hxYumlDRGs2vusP"
    const header = {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        }
    }
    const [data, setData] = useState([])

    var navigate = useNavigate();
    function ClickNavigate(name, url, weight, height, life_span) {
        navigate("/about", { state: { name: name, url: url, weight: weight, height: height, life_span: life_span } })
    }

    useEffect(() => {
        axios.get(apiSrc, header)
            .then(response => setData(response.data))
    }, [])

    console.log(data)

    return (
        <div className="Dog">
            {
                data.map(x => {
                    return (
                        <Card id="DogCard" key={x.id}
                            style={{ width: 400 }}
                            title={
                                <p>{x.breeds[0].name}</p>
                            }>
                            <img onClick={() => ClickNavigate(x.breeds[0].name, x.url, x.breeds[0].weight.metric, x.breeds[0].height.metric, x.breeds[0].life_span)} alt="Loadig" src={x.url} style={{ width: 240 }} ></img>
                        </Card>
                    );
                })
            }
        </div>
    );
}

export default Dogs;