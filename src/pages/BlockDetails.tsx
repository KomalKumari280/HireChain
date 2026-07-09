import {
  FaCube,
  FaClock,
  FaFingerprint,
  FaCheckCircle,
  FaUserShield,
} from "react-icons/fa";

export default function BlockDetails() {
  const block = {
    blockId: "BLK-1024",
    document: "Resume.pdf",
    owner: "John Doe",
    sha256:
      "8d969eef6ecad3c29a3a629280e686cff8fabd9d7c2f2e9d...",
    previousHash:
      "4af34b5cd98aa239af93d91283c5d...",
    transactionId:
      "0x8A34D6EF912BFA45CD67234",
    timestamp: "04 July 2026 | 10:42 AM",
    metadata: "Filename, Size, Created Date",
    status: "Verified",
  };

  return (
    <div className="text-white">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Blockchain Block Details
        </h1>

        <p className="text-slate-400 mt-2">
          View blockchain information for a secured document.
        </p>

      </div>

      <div className="bg-slate-900 rounded-xl border border-cyan-500/20 p-8">

        <div className="grid md:grid-cols-2 gap-8">

          <InfoCard
            icon={<FaCube />}
            title="Block ID"
            value={block.blockId}
          />

          <InfoCard
            icon={<FaClock />}
            title="Timestamp"
            value={block.timestamp}
          />

          <InfoCard
            icon={<FaFingerprint />}
            title="SHA-256 Hash"
            value={block.sha256}
          />

          <InfoCard
            icon={<FaFingerprint />}
            title="Previous Hash"
            value={block.previousHash}
          />

          <InfoCard
            icon={<FaUserShield />}
            title="Uploaded By"
            value={block.owner}
          />

          <InfoCard
            icon={<FaCheckCircle />}
            title="Status"
            value={block.status}
          />

        </div>

        <div className="mt-8">

          <h2 className="text-xl font-semibold mb-3">
            Document
          </h2>

          <div className="bg-slate-800 rounded-lg p-4">
            {block.document}
          </div>

        </div>

        <div className="mt-6">

          <h2 className="text-xl font-semibold mb-3">
            Metadata
          </h2>

          <div className="bg-slate-800 rounded-lg p-4">
            {block.metadata}
          </div>

        </div>

        <div className="mt-6">

          <h2 className="text-xl font-semibold mb-3">
            Blockchain Transaction
          </h2>

          <div className="bg-slate-800 rounded-lg p-4 break-all">
            {block.transactionId}
          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-slate-800 rounded-lg p-5 border border-cyan-500/10">

      <div className="flex items-center gap-3 mb-2 text-cyan-400">
        {icon}
        <span className="font-semibold">
          {title}
        </span>
      </div>

      <p className="text-slate-300 break-all">
        {value}
      </p>

    </div>
  );
}