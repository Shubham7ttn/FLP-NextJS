"use client"

import React, {useEffect, useState} from "react";

const ClientData = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData("Client side data fetched");
        }, 2000);
    }, []);

    return (
        <div className = "client-component-container">
            <p>{data ?? 'Loading...'}</p>
            <div className="description">Loading will be observed first as the page is loaded on the client side</div>
        </div>
    )
}

export default ClientData;