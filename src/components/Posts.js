import { fetchPostsData } from "@/api/generic";

export default async function Posts() {
    const data = await fetchPostsData();
    return (
        <div className = "post-container">
            <div className = "title">3. Time based revalidation - Cached data will be revalidated after every 60 seconds - Posts fetch API by id</div>
            <div className="card">
                <img src={data?.image} alt="Post Image" />
                <div className="card-title">{data?.title}</div>
                <div className="card-content">{data?.content}</div>
            </div>
        </div>
    )
}