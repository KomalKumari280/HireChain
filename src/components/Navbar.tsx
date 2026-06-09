import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
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

        <FaUserCircle
          size={32}
          className="text-cyan-400"
        />
      </div>

    </div>
  );
}