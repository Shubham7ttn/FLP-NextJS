"use client";

import { fetchUserData } from "@/api/generic";
import { useState } from "react";

const UserClientSide = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchHandler = async () => {
        setLoading(true);
        try{
            const data = await fetch("https://jsonplaceholder.org/users/1");
            if(!data?.json()){
                return
            }
            setUserData(data?.json());  
        }catch(e){
            console.error("Error fetching user data:", e);
            setError("Failed to fetch user data, try again..");
            return;
        }finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="user-container">
            <div className="title">2. fetch() inside a client component</div>
            <div className="ctaContainer">
                {
                userData?.length ? 
                <div className = "cta secondary" onClick={() => setUserData([])}>CLEAR</div> 
                : 
                <div className = "cta primary" onClick={fetchHandler}>{loading ? '...' : 'FETCH'}</div>
            }
            </div>
            {
                userData?.length ? 
                <div className = "userListContainer">
                    <div>{userData?.firstname}</div>
                    <div>{userData?.email}</div>
                </div> : error ? <div className="errorContainer">{error}</div> : null
            }
        </div>
    )
};

export default UserClientSide;