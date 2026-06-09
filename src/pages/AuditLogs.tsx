import {
  getLogs,
} from "../services/auditService";

export default function AuditLogs() {
  const logs =
    getLogs();

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Audit Logs
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

        {logs.length === 0 ? (

          <div className="text-slate-400">
            No audit records found.
          </div>

        ) : (

          <div className="space-y-4">

            {logs.map(
              (log) => (

                <div
                  key={log.id}
                  className="
                  bg-slate-800
                  rounded-xl
                  p-4
                  border
                  border-slate-700
                  "
                >

                  <div className="font-medium">
                    {log.action}
                  </div>

                  <div
                    className="
                    text-slate-400
                    text-sm
                    mt-2
                    "
                  >
                    {log.timestamp}
                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>
  );
}