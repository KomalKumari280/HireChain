import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import { useAuth } from "../auth/AuthContext";
import { Roles } from "../auth/roles";

export default function Navbar() {
  const { user, setUser } = useAuth();

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold">
          HireChain Dashboard
        </h1>

        <p className="text-slate-400">
          Blockchain Document Verification
        </p>
      </div>

      <div className="flex items-center gap-6">

        <FaBell
          size={22}
          className="text-cyan-400 cursor-pointer"
        />

        <select
          value={user.role}
          onChange={(e) =>
            setUser({
              ...user,
              role: e.target.value as Roles,
            })
          }
          className="
            bg-slate-900
            border
            border-cyan-500/30
            rounded-lg
            px-3
            py-2
            text-white
          "
        >
          <option value={Roles.SUPER_ADMIN}>
            Super Admin
          </option>

          <option value={Roles.ADMIN}>
            Admin
          </option>

          <option value={Roles.EMPLOYEE}>
            Employee
          </option>
        </select>

        <div className="flex items-center gap-3">

          <div className="text-right">

            <p className="font-semibold">
              {user.name}
            </p>

            <p className="text-cyan-400 text-sm">
              {user.role.replace("_", " ")}
            </p>

          </div>

          <FaUserCircle
            size={32}
            className="text-cyan-400"
          />

        </div>

      </div>

    </div>
  );
}