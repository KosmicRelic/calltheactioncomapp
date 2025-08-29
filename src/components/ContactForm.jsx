import { useState } from 'react';
import styles from '../App.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className={styles.contact} id="partner">
      <h2>Partner With Us</h2>
      <p>Ready to get more customers? Fill out the form and we’ll reach out to discuss your goals.</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input className={styles.input} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input className={styles.input} name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input className={styles.input} name="company" placeholder="Company Name" value={form.company} onChange={handleChange} required />
        <textarea className={styles.input} name="message" placeholder="Tell us about your business" value={form.message} onChange={handleChange} required />
        <button className={styles.submitButton} type="submit">Request Partnership</button>
      </form>
      {submitted && <div className={styles.scheduleText}>Thank you! We’ll be in touch soon.</div>}
    </section>
  );
}
