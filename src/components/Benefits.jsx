import styles from '../App.module.css';

const benefits = [
  {
    title: 'No Upfront Cost',
    desc: 'You only pay for closed customers. No retainers, no wasted ad spend.'
  },
  {
    title: 'Done-For-You Marketing',
    desc: 'We handle all the marketing, sales, and qualification. You focus on delivery.'
  },
  {
    title: 'Scale Fast',
    desc: 'Get a steady stream of new customers without hiring or extra overhead.'
  },
  {
    title: 'Transparent Pricing',
    desc: 'You set your price. We agree on a fee per closed customer.'
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2>Why Partner With Us?</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map((b, i) => (
          <div className={styles.benefitCard} key={i}>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
