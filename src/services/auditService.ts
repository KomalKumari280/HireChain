export interface AuditLog {
  id: number;
  action: string;
  timestamp: string;
}

const STORAGE_KEY = "hirechain_logs";

export const getLogs = (): AuditLog[] => {
  const logs =
    localStorage.getItem(STORAGE_KEY);

  return logs ? JSON.parse(logs) : [];
};

export const addLog = (
  action: string
) => {
  const logs = getLogs();

  logs.unshift({
    id: Date.now(),
    action,
    timestamp:
      new Date().toLocaleString(),
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(logs)
  );
};