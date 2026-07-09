import { useState } from "react";

export default function DocumentAccess() {

  const [documents] = useState([
    {
      id: 1,
      name: "Resume.pdf",
      owner: "John Doe",
      permission: "Read Only",
      shared: ["Admin", "HR", "Finance"],
      status: "Blockchain Verified",
    },
    {
      id: 2,
      name: "Certificate.pdf",
      owner: "Sarah",
      permission: "Read & Write",
      shared: ["Admin"],
      status: "Blockchain Verified",
    },
    {
      id: 3,
      name: "OfferLetter.pdf",
      owner: "Alex",
      permission: "Private",
      shared: [],
      status: "Pending Verification",
    },
  ]);

  return (
    <div className="text-white">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Document Access
        </h1>

        <p className="text-slate-400 mt-2">
          Manage document permissions and sharing.
        </p>

      </div>

      <div className="space-y-6">

        {documents.map((doc) => (

          <div
            key={doc.id}
            className="bg-slate-900 border border-cyan-500/20 rounded-xl p-6"
          >

            <div className="flex justify-between items-center mb-5">

              <div>

                <h2 className="text-xl font-semibold">
                  {doc.name}
                </h2>

                <p className="text-slate-400">
                  Owner: {doc.owner}
                </p>

              </div>

              <span
                className="
                bg-green-500/20
                text-green-400
                px-4
                py-2
                rounded-full
                text-sm
                "
              >
                {doc.status}
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <h3 className="font-semibold mb-3">
                  Shared With
                </h3>

                <div className="flex flex-wrap gap-2">

                  {doc.shared.length > 0 ? (
                    doc.shared.map((person) => (
                      <span
                        key={person}
                        className="
                        bg-cyan-500/20
                        text-cyan-400
                        px-3
                        py-1
                        rounded-full
                        "
                      >
                        {person}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500">
                      Not Shared
                    </span>
                  )}

                </div>

              </div>

              <div>

                <h3 className="font-semibold mb-3">
                  Permission
                </h3>

                <span
                  className="
                  bg-purple-500/20
                  text-purple-400
                  px-3
                  py-2
                  rounded-full
                  "
                >
                  {doc.permission}
                </span>

              </div>

            </div>

            <div className="mt-6">

              <button
                className="
                bg-cyan-500
                hover:bg-cyan-600
                px-5
                py-2
                rounded-lg
                transition
                "
              >
                Update Access
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}