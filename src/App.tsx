import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UserManagement from "./pages/UserManagement";


import DashboardLayout from "./layouts/DashboardLayout";
import BlockDetails from "./pages/BlockDetails";

import UploadDocument from "./pages/UploadDocument";
import VerifyDocument from "./pages/VerifyDocument";
import BlockchainLedger from "./pages/BlockchainLedger";
import AuditLogs from "./pages/AuditLogs";

import AuthorizedUsers from "./pages/AuthorizedUsers";
import RoleManagement from "./pages/RoleManagement";
import DocumentAccess from "./pages/DocumentAccess";

import RoleGuard from "./auth/RoleGuard";
import { Roles } from "./auth/roles";



function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>

          {/* Dashboard - Everyone */}
          <Route
            path="/"
            element={
              <RoleGuard
                allowedRoles={[
                  Roles.SUPER_ADMIN,
                  Roles.ADMIN,
                  Roles.EMPLOYEE,
                ]}
              >
                <UploadDocument />
              </RoleGuard>
            }
          />

          {/* Verify - Everyone */}
          <Route
            path="/verify"
            element={
              <RoleGuard
                allowedRoles={[
                  Roles.SUPER_ADMIN,
                  Roles.ADMIN,
                  Roles.EMPLOYEE,
                ]}
              >
                <VerifyDocument />
              </RoleGuard>
            }
          />

          {/* Blockchain - Admin & Super Admin */}
          <Route
            path="/blockchain"
            element={
              <RoleGuard
                allowedRoles={[
                  Roles.SUPER_ADMIN,
                  Roles.ADMIN,
                ]}
              >
                <BlockchainLedger />
              </RoleGuard>
            }
          />

          {/* Audit Logs - Admin & Super Admin */}
          <Route
            path="/audit"
            element={
              <RoleGuard
                allowedRoles={[
                  Roles.SUPER_ADMIN,
                  Roles.ADMIN,
                ]}
              >
                <AuditLogs />
              </RoleGuard>
            }
          />

          {/* Authorized Users - Super Admin Only */}
          <Route
            path="/authorized-users"
            element={
              <RoleGuard
                allowedRoles={[Roles.SUPER_ADMIN]}
              >
                <AuthorizedUsers />
              </RoleGuard>
            }
          />

          {/* Role Permissions - Super Admin Only */}
          <Route
  path="/roles"
  element={
    <RoleGuard
      allowedRoles={[Roles.SUPER_ADMIN]}
    >
      <RoleManagement />
    </RoleGuard>
  }
/>
          <Route
  path="/block/:id"
  element={
    <RoleGuard
      allowedRoles={[
        Roles.SUPER_ADMIN,
        Roles.ADMIN,
      ]}
    >
      <BlockDetails />
    </RoleGuard>
  }
/>


<Route
  path="/users"
  element={
    <RoleGuard allowedRoles={[Roles.SUPER_ADMIN]}>
      <UserManagement />
    </RoleGuard>
  }
/>

          {/* Document Access - Admin & Super Admin */}
          <Route
            path="/document-access"
            element={
              <RoleGuard
                allowedRoles={[
                  Roles.SUPER_ADMIN,
                  Roles.ADMIN,
                ]}
              >
                <DocumentAccess />
              </RoleGuard>
            }
          />

        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;