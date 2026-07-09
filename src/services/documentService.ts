export interface DocumentRecord {
  id: number;
  fileName: string;
  fileSize: string;
  mimeType: string;
  uploadDate: string;
  hash: string;

  // Optional fields for frontend testing
  uploadedBy?: string;
  role?: string;
  verifiedBy?: string;
  status?: string;
}
const STORAGE_KEY = "hirechain_documents";

export const getDocuments = (): DocumentRecord[] => {
  const docs = localStorage.getItem(STORAGE_KEY);

  return docs ? JSON.parse(docs) : [];
};

export const saveDocument = (
  document: DocumentRecord
) => {
  const documents = getDocuments();

  documents.push(document);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(documents)
  );
};