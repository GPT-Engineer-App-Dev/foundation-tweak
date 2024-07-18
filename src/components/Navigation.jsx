import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Bare-Bones App
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;