import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">Welcome to Our dashboard</h1>
            <div className="flex">
            <div className="w-1/4 grid justify-center items-center text-2xl mt-10 font-semibold">
                <Link className="hover:bg-red-600 rounded" to="/dashboard">Dashboards</Link>
                <Link className="hover:bg-red-600 rounded" to="/dashboard/profile">Profile</Link>
                <Link className="hover:bg-red-600 rounded" to="/dashboard/editprofile">Edit profile</Link>
            </div>
            <div className="w-3/4 text-xl mt-10 p-5 mx-5 rounded bg-orange-400 text-zinc-950">
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;