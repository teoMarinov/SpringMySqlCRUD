import { useState, useEffect } from "react";
import { request } from "../../axios_helper";
import axios from 'axios'

export const AuthContent = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('http://localhost:8080/messages', {
            auth: {
                username: 'user',
                password: 'a1f0ab54-0e67-4c5d-ad44-27831df9d81b'
            }
        })
            .then((response) => {
                console.log(response.data)
                setData(response.data);
            })

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <p className="card-text">Content:</p>
                        {Array.isArray(data) && data.map(item => (
                            <ul key={item}>
                                {item}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
