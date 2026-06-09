import {
  getDocuments,
} from "../services/documentService";

export default function BlockchainLedger() {
  const documents =
    getDocuments();

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
                    Size
                  </th>

                  <th className="p-4 text-left">
                    Type
                  </th>

                  <th className="p-4 text-left">
                    Upload Date
                  </th>

                  <th className="p-4 text-left">
                    Hash
                  </th>

                </tr>

              </thead>

              <tbody>

                {documents.map(
                  (doc) => (

                    <tr
                      key={doc.id}
                      className="
                      border-b
                      border-slate-800
                      hover:bg-slate-800/40
                      "
                    >

                      <td className="p-4">
                        {doc.fileName}
                      </td>

                      <td className="p-4">
                        {doc.fileSize}
                      </td>

                      <td className="p-4">
                        {doc.mimeType}
                      </td>

                      <td className="p-4">
                        {doc.uploadDate}
                      </td>

                      <td
                        className="
                        p-4
                        text-cyan-400
                        font-mono
                        text-xs
                        break-all
                        "
                      >
                        {doc.hash}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}