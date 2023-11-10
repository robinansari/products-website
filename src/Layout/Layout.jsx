import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md p-7">
                <div>
                    <h1 className="text-7xl font-bold text-orange-800"><span className="text-blue-800">Mobile</span>Dukan</h1>
                </div>
                <nav>
                    <ul className="flex gap-5 text-2xl font-semibold">

                        <NavLink   to="/"
                        className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "bg-sky-600" : ""
                            }>Home
                            
                        </NavLink>
                        <NavLink   to="/products"
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-sky-600" : ""
                      }>Products
                            
                        </NavLink>
                        <NavLink   to="/dashboard"
                                  className={({ isActive, isPending }) =>
                             isPending ? "pending" : isActive ? "bg-sky-600" : ""
                               }>Dashboard
                            
                        </NavLink>
                        
                        
                       
                    </ul>
                </nav>
            
            </section>
           <div className="min-h-screen mb-10">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;