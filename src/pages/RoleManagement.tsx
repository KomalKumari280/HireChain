import { FaUserShield, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function RoleManagement() {
  const roles = [
    {
      role: "SUPER ADMIN",
      color: "text-red-400",
      permissions: {
        upload: true,
        verify: true,
        blockchain: true,
        audit: true,
        userManagement: true,
        roleManagement: true,
      },
    },
    {
      role: "ADMIN",
      color: "text-cyan-400",
      permissions: {
        upload: true,
        verify: true,
        blockchain: true,
        audit: true,
        userManagement: false,
        roleManagement: false,
      },
    },
    {
      role: "EMPLOYEE",
      color: "text-green-400",
      permissions: {
        upload: true,
        verify: true,
        blockchain: false,
        audit: false,
        userManagement: false,
        roleManagement: false,
      },
    },
  ];

  const Permission = ({ value }: { value: boolean }) =>
    value ? (
      <FaCheckCircle className="text-green-400 text-lg mx-auto" />
    ) : (
      <FaTimesCircle className="text-red-500 text-lg mx-auto" />
    );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Role Management
        </h1>

        <p className="text-slate-400 mt-2">
          Configure access permissions for each role in HireChain.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-2xl p-6 border border-red-500/20">
          <FaUserShield className="text-red-400 text-3xl mb-4" />
          <h2 className="text-xl font-bold">Super Admin</h2>
          <p className="text-slate-400 mt-2">
            Complete system access including user and role management.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">
          <FaUserShield className="text-cyan-400 text-3xl mb-4" />
          <h2 className="text-xl font-bold">Admin</h2>
          <p className="text-slate-400 mt-2">
            Can verify documents, manage blockchain records and audit logs.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-green-500/20">
          <FaUserShield className="text-green-400 text-3xl mb-4" />
          <h2 className="text-xl font-bold">Employee</h2>
          <p className="text-slate-400 mt-2">
            Can upload and verify assigned documents only.
          </p>
        </div>

      </div>

      {/* Permission Matrix */}

      <div className="bg-slate-900 rounded-3xl border border-cyan-500/20 p-8">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Permission Matrix
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-center">Upload</th>
                <th className="p-4 text-center">Verify</th>
                <th className="p-4 text-center">Blockchain</th>
                <th className="p-4 text-center">Audit Logs</th>
                <th className="p-4 text-center">Users</th>
                <th className="p-4 text-center">Roles</th>

              </tr>

            </thead>

            <tbody>

              {roles.map((item) => (

                <tr
                  key={item.role}
                  className="border-b border-slate-800 hover:bg-slate-800/40"
                >

                  <td className={`p-4 font-bold ${item.color}`}>
                    {item.role}
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.upload} />
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.verify} />
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.blockchain} />
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.audit} />
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.userManagement} />
                  </td>

                  <td className="p-4 text-center">
                    <Permission value={item.permissions.roleManagement} />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Security Information */}

      <div className="bg-slate-900 rounded-3xl border border-cyan-500/20 p-8">

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Security Policy
        </h2>

        <ul className="space-y-3 text-slate-300">

          <li>• Every document upload generates a SHA-256 hash.</li>

          <li>• Duplicate hashes are rejected before blockchain storage.</li>

          <li>• Only Admin and Super Admin can access blockchain records.</li>

          <li>• Only Super Admin can manage users and roles.</li>

          <li>• Every action is recorded in immutable audit logs.</li>

          <li>• Metadata integrity is verified before document upload.</li>

        </ul>

      </div>

    </div>
  );
}