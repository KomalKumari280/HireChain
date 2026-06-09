import { useState } from "react";
import {
  getDocuments,
} from "../services/documentService";

import {
  addLog,
} from "../services/auditService";

export default function VerifyDocument() {
  const [result, setResult] =
    useState("");

  const [hash, setHash] =
    useState("");

  const verifyFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

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

    const generatedHash =
      hashArray
        .map((b) =>
          b
            .toString(16)
            .padStart(2, "0")
        )
        .join("");

    setHash(generatedHash);

    const documents =
      getDocuments();

    const match =
      documents.find(
        (doc) =>
          doc.hash === generatedHash
      );

    if (match) {
      setResult(
        "✅ VERIFIED"
      );

      addLog(
        `Verified ${file.name}`
      );
    } else {
      setResult(
        "❌ TAMPERED / NOT FOUND"
      );

      addLog(
        `Failed verification for ${file.name}`
      );
    }
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Verify Document
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
        <label className="block">

          <div
            className="
            border-2
            border-dashed
            border-cyan-500
            rounded-2xl
            p-12
            text-center
            cursor-pointer
            hover:bg-cyan-500/5
            transition
            "
          >
            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-semibold text-cyan-400">
              Select Document To Verify
            </h2>

            <p className="text-gray-400 mt-2">
              Upload the document again
            </p>

            <input
              type="file"
              onChange={verifyFile}
              className="hidden"
            />

          </div>

        </label>

        {hash && (
          <div
            className="
            mt-8
            bg-slate-800
            rounded-2xl
            p-6
            "
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Generated Hash
            </h3>

            <p
              className="
              break-all
              font-mono
              text-sm
              text-cyan-300
              "
            >
              {hash}
            </p>
          </div>
        )}

        {result && (
          <div
            className={`
            mt-8
            p-6
            rounded-2xl
            text-2xl
            font-bold
            ${
              result.includes(
                "VERIFIED"
              )
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }
          `}
          >
            {result}
          </div>
        )}

      </div>

    </div>
  );
}