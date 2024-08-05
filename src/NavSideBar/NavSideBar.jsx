import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaShoppingCart, FaUndo, FaUsers, FaTruck, FaCogs, FaCalculator, FaChartLine, FaUser } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";

function NavSideBar() {
  return (
    <div className="h-screen w-[350px] bg-white text-gray-600 flex flex-col">
      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <MdDashboard className="w-5 h-5 mr-2" />
          Dashboard
        </NavLink>
        <NavLink 
          to="/inventory" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaBox className="w-5 h-5 mr-2" />
          Inventory
        </NavLink>
        <NavLink 
          to="/order" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaShoppingCart className="w-5 h-5 mr-2" />
          Order
        </NavLink>
        <NavLink 
          to="/returns" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaUndo className="w-5 h-5 mr-2" />
          Returns
        </NavLink>
        <NavLink 
          to="/customers" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaUsers className="w-5 h-5 mr-2" />
          Customers
        </NavLink>
        <NavLink 
          to="/shipping" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaTruck className="w-5 h-5 mr-2" />
          Shipping
        </NavLink>
        <NavLink 
          to="/channel" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaCogs className="w-5 h-5 mr-2" />
          Channel
        </NavLink>
        <NavLink 
          to="/integrations" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaCogs className="w-5 h-5 mr-2" />
          Integrations
        </NavLink>
        <NavLink 
          to="/calculators" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaCalculator className="w-5 h-5 mr-2" />
          Calculators
        </NavLink>
        <NavLink 
          to="/reports" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaChartLine className="w-5 h-5 mr-2" />
          Reports
        </NavLink>
        <NavLink 
          to="/account" 
          className={({ isActive }) => `flex items-center p-2 text-base font-normal rounded-lg ${isActive ? 'bg-pink-200 text-gray-700' : 'text-gray-700 hover:bg-pink-200'}`}
        >
          <FaUser className="w-5 h-5 mr-2" />
          Account
        </NavLink>
      </nav>
    </div>
  );
}

export default NavSideBar;
