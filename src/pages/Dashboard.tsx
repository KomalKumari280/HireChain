import Navbar from "../components/Navbar";
import SecurityOrb from "../components/SecurityOrb";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="p-8">
      <Navbar />

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Documents"
          value="125"
          subtitle="+12 today"
        />

        <StatCard
          title="Verified"
          value="120"
          subtitle="96%"
        />

        <StatCard
          title="Blocks"
          value="350"
          subtitle="+8"
        />

        <StatCard
          title="Integrity"
          value="99.99%"
          subtitle="Secure"
        />
      </div>

      <div
        className="
        mt-10
        bg-white/5
        rounded-3xl
        border
        border-cyan-500/20
        "
      >
        <SecurityOrb />
      </div>
    </div>
  );
}