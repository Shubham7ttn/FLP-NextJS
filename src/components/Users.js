import { fetchUserData } from "@/api/generic";

export default async function User() {
    const data = await fetchUserData();
    return (
        <div className = "user-container">
            <div className = "title">1. fetch() inside a server component</div>
            <div>{data?.firstname}</div>
            <div>{data?.email}</div>
        </div>
    )
}