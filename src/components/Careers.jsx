import React, { useState } from 'react';
import styles from '../App.module.css';

const roles = [
  'Marketing',
  'Sales',
  'Business Development',
  'Content Creation',
  'Other',
];

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: roles[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or email service
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontWeight: 600, fontSize: 16, lineHeight: 1 }}>Work With</span>
        <div className={styles.blackLogo} style={{ display: 'inline-block', marginLeft: 10 }}>
          <span className={styles.blackLogoC}>C</span>ALL
          <span className={styles.blackLogoT}>T</span>HE
          <span className={styles.blackLogoA}>A</span>CTION
          <span className={styles.blackLogoDotCom}>.COM</span>
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(90deg, #f8fafc 0%, #e3e9f7 100%)',
        borderRadius: 10,
        padding: '18px 20px',
        marginBottom: 18,
        boxShadow: '0 2px 12px rgba(83,138,216,0.07)'
      }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: '#374151', marginBottom: 6, letterSpacing: 0.2 }}>
          We don’t hire often. But when we do, we look for the few who want to build something legendary.
        </div>
        <div style={{ fontSize: 15, color: '#222', marginBottom: 0 }}>
          <div style={{ marginBottom: 8 }}>
            We’re not here to play small. We’re here to win, to grow, and to set the standard for what’s possible. If you want to be part of a team that pushes hard, celebrates big, and never settles, you might belong here.
          </div>
          <ul style={{ paddingLeft: 22, margin: 0, fontSize: 15, color: '#222', listStyle: 'disc inside' }}>
            <li style={{ marginBottom: 6 }}><b>High Standards:</b> We expect a lot from ourselves and each other. Good isn’t good enough.</li>
            <li style={{ marginBottom: 6 }}><b>Relentless Improvement:</b> We’re always leveling up—skills, mindset, and results.</li>
            <li style={{ marginBottom: 6 }}><b>Team Obsessed:</b> We win together, we lose together, and we always have each other’s back.</li>
            <li style={{ marginBottom: 6 }}><b>Results-Driven:</b> We care about impact, not just effort. If you want to coast, this isn’t your place.</li>
            <li style={{ marginBottom: 6 }}><b>Ambitious Culture:</b> We celebrate wins, learn from losses, and always aim higher.
            </li>
          </ul>
          <div style={{ marginTop: 10, color: '#3b82f6', fontWeight: 600, fontSize: 15 }}>
            If you’re a high performer who wants to do work that matters, apply below. We’re always on the lookout for the best.
          </div>
        </div>
      </div>

      {submitted ? (
        <div style={{ color: 'green', marginTop: 24 }}>
          Thanks for raising your hand. If you’re a fit, we’ll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
          </label>
          <label>
            Role
            <select name="role" value={form.role} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }}>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </label>
          <label>
            What makes you a top performer?
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ width: '100%', minHeight: 120, maxHeight: 200, padding: 8, marginTop: 4, resize: 'vertical' }}
            />
          </label>
          <button type="submit" style={{ padding: '10px 0', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>
            Apply
          </button>
        </form>
      )}
    </div>
  );
}
