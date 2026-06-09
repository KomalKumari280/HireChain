import {
  FaCube,
  FaFileAlt,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Documents",
      path: "/verify",
      icon: <FaFileAlt />,
    },
    {
      name: "Blockchain",
      path: "/blockchain",
      icon: <FaCube />,
    },
    {
      name: "Audit Logs",
      path: "/audit",
      icon: <FaShieldAlt />,
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

      </div>

      <nav className="px-4 space-y-3">

        {menuItems.map((item) => (

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
            {item.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}