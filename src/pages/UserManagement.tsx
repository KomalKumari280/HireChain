export default function UserManagement() {
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@hirechain.com",
      role: "Super Admin",
      status: "Active",
      documents: 34,
      lastLogin: "Today, 10:45 AM",
    },
    {
      id: 2,
      name: "Aman Singh",
      email: "aman@hirechain.com",
      role: "Admin",
      status: "Active",
      documents: 18,
      lastLogin: "Today, 09:10 AM",
    },
    {
      id: 3,
      name: "Priya Patel",
      email: "priya@hirechain.com",
      role: "Employee",
      status: "Blocked",
      documents: 5,
      lastLogin: "Yesterday",
    },
    {
      id: 4,
      name: "Karan Mehta",
      email: "karan@hirechain.com",
      role: "Employee",
      status: "Active",
      documents: 12,
      lastLogin: "2 Hours Ago",
    },
  ];

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        User Management
      </h1>

      <p className="text-slate-400">
        Manage users who can access secure blockchain documents.
      </p>

      {/* Security Overview */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">
          <h3 className="text-slate-400">Total Users</h3>
          <p className="text-4xl font-bold mt-3 text-cyan-400">24</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">
          <h3 className="text-slate-400">Active Users</h3>
          <p className="text-4xl font-bold mt-3 text-green-400">20</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">
          <h3 className="text-slate-400">Blocked Users</h3>
          <p className="text-4xl font-bold mt-3 text-red-400">4</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">
          <h3 className="text-slate-400">MFA Enabled</h3>
          <p className="text-4xl font-bold mt-3 text-yellow-400">18</p>
        </div>

      </div>

      {/* Search */}

      <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">

        <input
          type="text"
          placeholder="Search User..."
          className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-500"
        />

      </div>

      {/* User Table */}

      <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-slate-300">

              <th className="text-left p-4">User</th>

              <th className="text-left p-4">Email</th>

              <th className="text-left p-4">Role</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Documents</th>

              <th className="text-left p-4">Last Login</th>

              <th className="text-left p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b border-slate-800 hover:bg-slate-800/50"
              >

                <td className="p-4 font-semibold">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">

                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </span>

                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="p-4">
                  {user.documents}
                </td>

                <td className="p-4">
                  {user.lastLogin}
                </td>

                <td className="p-4 flex gap-2">

                  <button className="bg-cyan-600 hover:bg-cyan-500 px-3 py-2 rounded-lg">
                    View
                  </button>

                  <button className="bg-yellow-600 hover:bg-yellow-500 px-3 py-2 rounded-lg">
                    Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-500 px-3 py-2 rounded-lg">
                    Suspend
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}