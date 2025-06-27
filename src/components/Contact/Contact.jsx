import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("fail");
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2>Contact <span className={styles.highlight}>Me</span></h2>
        <p className={styles.desc}>
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
        <div className={styles.formGlass}>
          <h3 className={styles.formTitle}>
            Get in Touch{" "}
            <span className={styles.iconShare}>
              <svg width="22" height="22" fill="none"><path d="M15 5l5 5-5 5M20 10H7.5a5.5 5.5 0 1 0 0 11h1.5" stroke="#a98bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </h3>
          <div className={styles.formSubtext}>
            Have something to discuss? Send me a message and let's talk.
          </div>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.field}>
              <input type="text" name="user_name" placeholder="Your Name" required minLength={2} />
            </div>
            <div className={styles.field}>
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className={styles.field}>
              <textarea name="message" rows="4" placeholder="Your Message" required minLength={8}></textarea>
            </div>
            <button
              type="submit"
              className={styles.button}
              disabled={status === "sending"}
            >
              <span style={{ marginRight: 8, fontSize: 15 }}></span>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <div className={styles.success}>Message sent! 🎉</div>
            )}
            {status === "fail" && (
              <div className={styles.fail}>Oops, failed to send. Try again.</div>
            )}
          </form>
          <div className={styles.socialBlock}>
            <div className={styles.socialTitle}>
              <span className={styles.socialAccent}></span>
              Connect With Me
            </div>
            <a
              className={styles.socialCard}
              href="https://www.linkedin.com/in/krinna72i98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} color="#5396f7" style={{ marginRight: 16 }} />
              <div>
                <div className={styles.socialLabel}>Let's Connect</div>
                <div className={styles.socialDesc}>on LinkedIn</div>
              </div>
            </a>
            <a
              className={styles.socialCard}
              href="https://github.com/Krinna21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} color="#c2c8d8" style={{ marginRight: 16 }} />
              <div>
                <div className={styles.socialLabel}>Github</div>
                <div className={styles.socialDesc}>@Krinna21</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
