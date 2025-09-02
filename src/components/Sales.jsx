import React from "react";
import styles from "./Sales.module.css";

const salesStory = [
  {
    text: `After mastering the art of marketing, the journey continues with sales—the bridge between the value you offer and the results your customers achieve. Sales is not about pushing products, but about guiding people to solutions that truly help them.`,
    highlight: "Sales as Service"
  },
  {
    text: `It starts with understanding. Listen deeply to your customers’ needs, their challenges, and their goals. Every conversation is an opportunity to build trust and show genuine care.`,
    highlight: "Active Listening"
  },
  {
    text: `Present your solution as the natural next step in their journey. Connect the dots between what they want and what you provide. Make it easy for them to see the value and envision their success.`,
    highlight: "Solution Presentation"
  },
  {
    text: `Handle objections with empathy. Every concern is a chance to clarify, educate, and reassure. The best salespeople turn doubts into confidence by being transparent and supportive.`,
    highlight: "Empathetic Objection Handling"
  },
  {
    text: `Finally, celebrate the decision. Welcome new customers warmly and set the stage for a lasting relationship. Sales is not the end—it’s the beginning of delivering on your promises and exceeding expectations.`,
    highlight: "Relationship Building"
  }
];

function Sales() {
  return (
    <div className={styles.salesPage}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>The Sales Journey</h1>
        <p className={styles.subtitle}>A story-driven guide to connecting value with results through authentic sales.</p>
      </div>
      <div className={styles.storySection}>
        {salesStory.map((block, idx) => (
          <div key={idx} className={styles.storyBlock}>
            <span className={styles.highlight}>{block.highlight}:</span>
            <span className={styles.storyText}>{block.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
