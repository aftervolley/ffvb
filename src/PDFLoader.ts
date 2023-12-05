import { PDFPageProxy, getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export async function fetchFirstPage(url: string): Promise<PDFPageProxy> {
  const pdf = await getDocument(url).promise;
  const pages = await Promise.all(
    Array.from({ length: pdf.numPages }, (_, i) => pdf.getPage(i + 1)),
  );
  return pages[0];
}
