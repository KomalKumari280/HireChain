import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import UploadDocument from "./pages/UploadDocument";
import VerifyDocument from "./pages/VerifyDocument";
import BlockchainLedger from "./pages/BlockchainLedger";
import AuditLogs from "./pages/AuditLogs";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route
            path="/"
            element={<UploadDocument />}
          />

          <Route
            path="/verify"
            element={<VerifyDocument />}
          />

          <Route
            path="/blockchain"
            element={<BlockchainLedger />}
          />

          <Route
            path="/audit"
            element={<AuditLogs />}
          />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;