import { useState } from "react";
import StatCard from "../components/StatCard";
import { saveDocument } from "../services/documentService";

interface Metadata {
  fileName: string;
  fileSize: string;
  mimeType: string;
  uploadDate: string;
}

export default function UploadDocument() {
  const [hash, setHash] = useState("");
  const [metadata, setMetadata] =
    useState<Metadata | null>(null);

  const generateHash = async (
    file: File
  ) => {
    const buffer =
      await file.arrayBuffer();

    const hashBuffer =
      await crypto.subtle.digest(
        "SHA-256",
        buffer
      );

    const hashArray = Array.from(
      new Uint8Array(hashBuffer)
    );

    const hashHex = hashArray
      .map((b) =>
        b.toString(16).padStart(2, "0")
      )
      .join("");

    setHash(hashHex);
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setMetadata({
      fileName: file.name,
      fileSize:
        (
          file.size /
          1024 /
          1024
        ).toFixed(2) + " MB",
      mimeType: file.type,
      uploadDate:
        new Date().toLocaleString(),
    });

    await generateHash(file);
  };

  const handleUpload = () => {
  if (!metadata || !hash) {
    alert("Please select a file first.");
    return;
  }

  saveDocument({
    id: Date.now(),

    fileName: metadata.fileName,
    fileSize: metadata.fileSize,
    mimeType: metadata.mimeType,
    uploadDate: metadata.uploadDate,
    hash: hash,

    uploadedBy: "Demo User",
    role: "Employee",
    verifiedBy: "Admin",
    status: "Verified",
  });

  alert("Document uploaded successfully!");

  setMetadata(null);
  setHash("");
};
  return (
    <div className="space-y-8">

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Documents"
          value="124"
          subtitle="+12 this week"
        />

        <StatCard
          title="Verified"
          value="98"
          subtitle="79% verified"
        />

        <StatCard
          title="Blockchain Records"
          value="124"
          subtitle="100% secured"
        />

        <StatCard
          title="Audit Logs"
          value="342"
          subtitle="+28 today"
        />

      </div>

      {/* Upload Section */}

      <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Upload Secure Document
        </h2>

        <label className="block">

          <div className="border-2 border-dashed border-cyan-500 rounded-2xl p-12 text-center cursor-pointer hover:bg-cyan-500/5 transition">

            <div className="text-5xl mb-4">
              📄
            </div>

            <h3 className="text-2xl font-semibold text-cyan-400">
              Drag & Drop File
            </h3>

            <p className="text-gray-400 mt-2">
              or click to browse
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg"
              onChange={handleFileChange}
              className="hidden"
            />

          </div>

        </label>

        {/* Metadata */}

        {metadata && (
          <div className="mt-8 bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Metadata
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <p className="text-gray-400">
                  File Name
                </p>

                <p>
                  {metadata.fileName}
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  File Size
                </p>

                <p>
                  {metadata.fileSize}
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  MIME Type
                </p>

                <p>
                  {metadata.mimeType}
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  Uploaded At
                </p>

                <p>
                  {metadata.uploadDate}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Hash */}

        {hash && (
          <div className="mt-6 bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-400 mb-4">
              SHA-256 Hash
            </h3>

            <div className="bg-black/40 rounded-xl p-4">

              <p className="break-all font-mono text-cyan-300 text-sm">
                {hash}
              </p>

            </div>

          </div>
        )}

        <button
          onClick={handleUpload}
          className="
            mt-8
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:from-cyan-400
            hover:to-blue-500
            transition
            font-bold
            text-lg
          "
        >
          Upload To Blockchain
        </button>

      </div>

      {/* Recent Documents */}

      <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Documents
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="text-left p-4">
                  File Name
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Upload Date
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-slate-800">

                <td className="p-4">
                  Resume.pdf
                </td>

                <td className="p-4 text-green-400">
                  Verified
                </td>

                <td className="p-4">
                  Today
                </td>

              </tr>

              <tr>

                <td className="p-4">
                  Certificate.pdf
                </td>

                <td className="p-4 text-yellow-400">
                  Pending
                </td>

                <td className="p-4">
                  Yesterday
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}