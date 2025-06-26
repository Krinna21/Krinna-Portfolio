import { useRef, useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

 const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
 const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
 const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('fail');
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2>Contact</h2>
        <p className={styles.desc}>
          Want to collaborate or just say hi? Drop a message and I’ll get back ASAP.
        </p>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.field}>
            <label>Name</label>
            <input type="text" name="user_name" required minLength={2} />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea name="message" rows="4" required minLength={8}></textarea>
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>
          {status === 'success' && (
            <div className={styles.success}>Message sent! 🎉</div>
          )}
          {status === 'fail' && (
            <div className={styles.fail}>Oops, failed to send. Try again.</div>
          )}
        </form>
      </div>
    </section>
  );
}
