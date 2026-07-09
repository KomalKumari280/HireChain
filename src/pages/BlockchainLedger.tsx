import { Link } from "react-router-dom";
import { getDocuments } from "../services/documentService";

export default function BlockchainLedger() {
  const documents = getDocuments();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Blockchain Ledger
      </h1>

      <div
        className="
        bg-slate-900
        border
        border-cyan-500/20
        rounded-3xl
        p-8
        "
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Stored Blockchain Records
        </h2>

        {documents.length === 0 ? (
          <div
            className="
            text-center
            text-slate-400
            py-12
            "
          >
            No records found.
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-700">

                  <th className="p-4 text-left">
                    File Name
                  </th>

                  <th className="p-4 text-left">
                    Uploaded By
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>

                  <th className="p-4 text-left">
                    Verified By
                  </th>

                  <th className="p-4 text-left">
                    Upload Date
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
                    Hash
                  </th>

                  <th className="p-4 text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {documents.map((doc) => (

                  <tr
                    key={doc.id}
                    className="
                    border-b
                    border-slate-800
                    hover:bg-slate-800/40
                    transition
                    "
                  >

                    <td className="p-4 font-medium">
                      {doc.fileName}
                    </td>

                    <td className="p-4">
                      {(doc as any).uploadedBy || "John Doe"}
                    </td>

                    <td className="p-4">

                      <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/20
                        text-cyan-400
                        text-sm
                        "
                      >
                        {(doc as any).role || "Employee"}
                      </span>

                    </td>

                    <td className="p-4">
                      {(doc as any).verifiedBy || "Admin"}
                    </td>

                    <td className="p-4">
                      {doc.uploadDate}
                    </td>

                    <td className="p-4">

                      <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-green-500/20
                        text-green-400
                        text-sm
                        "
                      >
                        {(doc as any).status || "Verified"}
                      </span>

                    </td>

                    <td
                      className="
                      p-4
                      text-cyan-400
                      font-mono
                      text-xs
                      break-all
                      max-w-xs
                      "
                    >
                      {doc.hash}
                    </td>

                    <td className="p-4 text-center">

                      <Link
                        to={`/block/${doc.id}`}
                        className="
                        bg-cyan-500
                        hover:bg-cyan-600
                        px-4
                        py-2
                        rounded-lg
                        text-white
                        transition
                        "
                      >
                        View Details
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}