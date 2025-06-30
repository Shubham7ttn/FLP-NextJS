export async function GET() {
    const data = {
        name: "Shubham",
        empId: 5199,
        email: "shubham@tothenew.com",
        company: {
            name: "To The New",
            location: "Noida, India"
        }
    }

    return Response.json(data);
}