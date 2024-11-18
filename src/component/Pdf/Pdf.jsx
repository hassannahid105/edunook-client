import { Worker, Viewer } from "@react-pdf-viewer/core"; // PDF Worker for better performance
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "../../assets/demo.pdf";
const Pdf = () => {
  return (
    <div
      style={{ height: "auto", width: "50%" }}
      className="mx-auto my-10 p-10 bg-slate-400"
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdf} />
        </Worker>
      </div>
    </div>
  );
};

export default Pdf;
