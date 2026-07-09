import { useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaEye,
} from "react-icons/fa";

export default function AuthorizedUsers() {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@hirechain.com",
      role: "Super Admin",
      status: "Active",
      documents: 36,
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@hirechain.com",
      role: "Admin",
      status: "Active",
      documents: 18,
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex@hirechain.com",
      role: "Employee",
      status: "Inactive",
      documents: 5,
    },
    {
      id: 4,
      name: "Emma Brown",
      email: "emma@hirechain.com",
      role: "Employee",
      status: "Active",
      documents: 11,
    },
    {
      id: 5,
      name: "David Smith",
      email: "david@hirechain.com",
      role: "Admin",
      status: "Active",
      documents: 24,
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const roleColor = (role: string) => {
    switch (role) {
      case "Super Admin":
        return "bg-purple-500/20 text-purple-400";
      case "Admin":
        return "bg-cyan-500/20 text-cyan-400";
      default:
        return "bg-green-500/20 text-green-400";
    }
  };

  const statusColor = (status: string) => {
    return status === "Active"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";
  };

  return (
    <div className="text-white">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Authorized Users
          </h1>

          <p className="text-slate-400 mt-1">
            Manage users who can securely access HireChain.
          </p>
        </div>

        <button
          className="
          flex
          items-center
          gap-2
          bg-cyan-500
          hover:bg-cyan-600
          px-5
          py-3
          rounded-xl
          font-semibold
          transition
          "
        >
          <FaPlus />
          Add User
        </button>

      </div>

      {/* Search */}

      <div
        className="
        flex
        items-center
        gap-3
        bg-slate-900
        border
        border-cyan-500/20
        rounded-xl
        px-4
        py-3
        mb-6
        "
      >
        <FaSearch className="text-cyan-400" />

        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          bg-transparent
          outline-none
          flex-1
          text-white
          placeholder:text-slate-500
          "
        />
      </div>

      {/* Table */}

      <div
        className="
        bg-slate-900
        rounded-xl
        border
        border-cyan-500/20
        overflow-hidden
        "
      >
        <table className="w-full">

          <thead className="bg-slate-800">

            <tr className="text-slate-300">

              <th className="text-left p-4">
                Name
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Role
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Documents
              </th>

              <th className="text-center p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="
                border-t
                border-slate-800
                hover:bg-slate-800/40
                transition
                "
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4 text-slate-400">
                  {user.email}
                </td>

                <td className="p-4">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      ${roleColor(user.role)}
                    `}
                  >
                    {user.role}
                  </span>

                </td>

                <td className="p-4">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      ${statusColor(user.status)}
                    `}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="p-4">
                  {user.documents}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="
                      p-2
                      rounded-lg
                      bg-cyan-500/20
                      hover:bg-cyan-500/30
                      text-cyan-400
                      "
                    >
                      <FaEye />
                    </button>

                    <button
                      className="
                      p-2
                      rounded-lg
                      bg-yellow-500/20
                      hover:bg-yellow-500/30
                      text-yellow-400
                      "
                    >
                      <FaEdit />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}
