import { useRef } from "react";
import styles from "./ResumeModal.module.css";

export default function ResumeModal({ open, onClose }) {
  const overlayRef = useRef();

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!open) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.letterWrap}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <div className={styles.letter}>
          <iframe
            src="/Krinna_Resume.pdf"
            title="Resume"
            className={styles.pdf}
            frameBorder={0}
          />
        </div>
        <div className={styles.actions}>
          <a href="/Krinna_Resume.pdf" download className={styles.actBtn}>Download</a>
          <button onClick={() => window.print()} className={styles.actBtn}>Print</button>
        </div>
      </div>
    </div>
  );
}
