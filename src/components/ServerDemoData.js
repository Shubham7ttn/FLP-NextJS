import { fetchServerDemoData } from "../api/generic";

export default async function ServerDemoData() {
    const data = await fetchServerDemoData();

    return (
        <div className = "server-component-container">
            <p>{data ?? 'Loding...'}</p>
            <div className="description">No Loading will be observed, as the page is loaded on the server side</div>
        </div>
    )
};