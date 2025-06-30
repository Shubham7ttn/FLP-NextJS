export const fetchServerDemoData = async () => {
    await new Promise((response) => setTimeout(response, 5000));

    return "Server side data fetched";
};


export const fetchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.org/users/1");
    return response.json();
};

export const fetchPostsData = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts/1", {
        next: {
            revalidate: 60,
        },
    });
    return response.json();
}
