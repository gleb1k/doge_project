import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                'x-api-key': 'live_rOuqiEI0j2qAQUZMDnHDzegt5x6uP7PVA3EUdt8KY88WgGno5hxYumlDRGs2vusP'
            },
        };

        fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0", requestOptions)
        .then(response => response.json())
        .then(data =>console.log(data));
    }, [])


    const [count, setCount] = useState(0)

    function buttonClick() {
        console.log("ТЫК")
        setCount(count + 1)
    }

    return (
        <div className="App">
            <h1>App test fsedf {count}</h1>
            <button onClick={buttonClick}>Буба</button>
        </div>
    );

}

export default App;
