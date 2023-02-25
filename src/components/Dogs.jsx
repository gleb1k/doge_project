import React, {useEffect, useState} from "react"

const Dogs = (props) => {

    const [data,setData] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                'x-api-key': 'live_rOuqiEI0j2qAQUZMDnHDzegt5x6uP7PVA3EUdt8KY88WgGno5hxYumlDRGs2vusP'
            },
        };

        fetch("https://api.thedogapi.com/v1/images/search?format=json&limit=100&has_breeds=1", requestOptions)
        .then(c => c.json())
        .then(data =>setData(data));
    }, [])

    return (
        <div className="Dog">
            {
                data.map((x)=>
                     <div>
                        <p>{x.breeds[0].name}</p>
                        <img alt="Loadig" src={x.url} style={{ width: 240}} ></img>
                     </div>                    
                ) 
            }
        </div>
    );
}

export default Dogs;