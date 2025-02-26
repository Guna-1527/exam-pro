import { redirect } from "next/navigation";
import { auth } from "../../lib/Firebase";

const Dashboard = () => {
  let user;
  const varSignOut = async () => {
    try {
      user = await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    redirect("/login");
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={varSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
