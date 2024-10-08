import { Drawer, IconButton } from "@material-tailwind/react";
import React from "react";
import { FiSidebar } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import Logout from "../../utils/Logout";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <div className="bg-gray-100 text-neutral">
        <div className="h-screen flex overflow-hidden bg-gray-200">
          <React.Fragment>
            <Drawer
              open={open}
              onClose={closeDrawer}
              className="p-4 bg-neutral"
            >
              <div className="mb-6 flex items-center justify-between text-base-100">
                <h1 className="text-xl font-semibold uppercase">Our Dream Gol</h1>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>

              <div className="p-4">

                <ul className="mt-4 ">
                  <li
              

                   className="mb-2">
                    <NavLink
                      to="/dashboard"
                      onClick={closeDrawer}
                      className="block text-base-100 hover:text-indigo-400"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="/dashboard/product"
                      onClick={closeDrawer}

                      className="block text-base-100 hover:text-indigo-400"
                    >
                  Items customized
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="/dashboard/users"
                      onClick={closeDrawer}

                      className="block text-base-100 hover:text-indigo-400"
                    >
                     Message
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="/dashboard/post"
                      onClick={closeDrawer}

                      className="block text-base-100 hover:text-indigo-400"
                    >
                      Create New
                    </NavLink>
                  </li>
               
                  <li className="mb-2">
                    <NavLink
                      to="/"
                      className="block text-base-100 hover:text-indigo-400"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Drawer>
          </React.Fragment>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white shadow">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-2">
                  <h1 className="text-xl font-semibold">Dashboard</h1>
                 <div className="flex gap-6 items-center">
                  <button
                    onClick={openDrawer}
                    className="text-gray-500 hover:text-gray-600"
                    id="open-sidebar"
                  >
                    <FiSidebar className="text-2xl text-neutral hover:text-warning" />
                  </button>
                 <Logout />
                 </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
