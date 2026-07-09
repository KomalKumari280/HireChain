import {
  FaCube,
  FaFileAlt,
  FaShieldAlt,
  FaHome,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";
import { Roles } from "../auth/roles";

export default function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
      roles: [
        Roles.SUPER_ADMIN,
        Roles.ADMIN,
        Roles.EMPLOYEE,
      ],
    },
    {
      name: "Documents",
      path: "/verify",
      icon: <FaFileAlt />,
      roles: [
        Roles.SUPER_ADMIN,
        Roles.ADMIN,
        Roles.EMPLOYEE,
      ],
    },
    {
      name: "Blockchain",
      path: "/blockchain",
      icon: <FaCube />,
      roles: [
        Roles.SUPER_ADMIN,
        Roles.ADMIN,
      ],
    },
    {
      name: "Audit Logs",
      path: "/audit",
      icon: <FaShieldAlt />,
      roles: [
        Roles.SUPER_ADMIN,
        Roles.ADMIN,
      ],
    },
    {
      name: "User Management",
      path: "/users",
      icon: <FaUsers />,
      roles: [
        Roles.SUPER_ADMIN,
      ],
    },
    {
      name: "Role Management",
      path: "/roles",
      icon: <FaUserShield />,
      roles: [
        Roles.SUPER_ADMIN,
      ],
    },
  ];

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-slate-950
        border-r
        border-cyan-500/20
      "
    >
      <div className="p-8">
        <h1
          className="
            text-4xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          HireChain
        </h1>

        <p className="text-slate-500 mt-2">
          Secure Verification
        </p>

        <div className="mt-6 border-t border-slate-700 pt-4">
          <p className="text-white font-semibold">
            {user.name}
          </p>

          <p className="text-cyan-400 text-sm">
            {user.role.replace("_", " ")}
          </p>
        </div>
      </div>

      <nav className="px-4 space-y-3">
        {menuItems
          .filter((item) => item.roles.includes(user.role))
          .map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                transition
                ${
                  location.pathname === item.path
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "hover:bg-slate-800 text-white"
                }
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
      </nav>
    </aside>
  );
}