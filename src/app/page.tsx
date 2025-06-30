import ClientData from "@/components/ClientData";
import ServerDemoData from "@/components/ServerDemoData";
import User from "@/components/Users";
import UserClientSide from "@/components/UsersClientSide";
import Posts from "@/components/Posts";
import UserData from "@/components/UserDataSWR";

export default function Home() {
  return (
    <div className="layout-container">
      <p>Hello Next.js</p>
      <ClientData />
      <ServerDemoData />
      <User />
      <UserClientSide />
      <Posts />
      <UserData />
    </div>
  );
}
