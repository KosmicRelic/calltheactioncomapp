import React from "react";
import styles from "./Marketing.module.css";

const marketingStory = [
  {
    text: `Building a business that lasts means thinking beyond the first sale. It starts with a Value Ladder: offering something simple, then guiding your customers upward, step by step, to greater value and deeper trust.`,
    highlight: "Value Ladder"
  },
  {
    text: `The journey begins with an Irresistible Offer. Make your audience feel like saying yes is the only logical choice. Your offer should be so compelling, people feel they’re missing out if they don’t act.`,
    highlight: "Irresistible Offer"
  },
  {
    text: `Once you have their attention, nurture it. Follow-Up Systems—automated and personal—keep your brand top of mind. Be present wherever your customer is, building the relationship and maximizing conversions.`,
    highlight: "Follow-Up Systems"
  },
  {
    text: `Retention is the secret to growth. Loyalty programs, exclusive content, and regular communication keep customers engaged and coming back. Focus on delivering ongoing value, long after the first purchase.`,
    highlight: "Retention Campaigns"
  },
  {
    text: `Finally, Referral Programs turn your best customers into advocates. Reward those who bring others into your world. Word of mouth is the most powerful marketing there is.`,
    highlight: "Referral Programs"
  }
];

function Marketing() {
  return (
    <div className={styles.marketingPage}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Best Marketing Tactics</h1>
        <p className={styles.subtitle}>A story-driven guide to building lifetime value and lasting customer relationships.</p>
      </div>
      <div className={styles.storySection}>
        {marketingStory.map((block, idx) => (
          <div key={idx} className={styles.storyBlock}>
            <span className={styles.highlight}>{block.highlight}:</span>
            <span className={styles.storyText}>{block.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketing;
