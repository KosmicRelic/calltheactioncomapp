import styles from '../App.module.css';

const testimonials = [
  {
    quote: 'We only pay for real customers. Our business has never grown faster!',
    author: 'Alex P., Plumbing Co.'
  },
  {
    quote: 'The leads are pre-sold and ready to go. We just do the work and get paid.',
    author: 'Maria S., Home Renovations'
  },
  {
    quote: 'No more wasted ad spend. This is the future of business partnerships.',
    author: 'James L., HVAC Services'
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Partners Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => (
          <div className={styles.testimonialCard} key={i}>
            <p>"{t.quote}"</p>
            <div className={styles.testimonialAuthor}>- {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
