import { useState } from 'react';
import styles from '../App.module.css';

const benefits = [
  {
    id: 'cost',
    title: "Zero Financial Risk",
    subtitle: "No upfront investment for healthcare practices",
    description: 'Start your healthcare partnership with zero capital investment. No retainers, no advertising fees, no hidden costs. You only succeed when we deliver qualified patients for your medical practice.',
    icon: '💰',
    features: [
      'No setup fees for healthcare partners',
      'Zero advertising costs',
      'No long-term contracts required',
      'Performance-based pricing only'
    ],
    color: 'green'
  },
  {
    id: 'marketing',
    title: 'Healthcare-Focused Marketing',
    subtitle: "Specialized medical practice marketing",
    description: 'Our expert team specializes in healthcare and medical services marketing. We understand the unique needs of medical practices, patient acquisition, and healthcare services in the Greek market.',
    icon: '🎯',
    features: [
      'Medical practice-specific campaigns',
      'Healthcare patient qualification',
      'Multi-channel medical promotion',
      'Real-time appointment tracking'
    ],
    color: 'blue'
  },
  {
    id: 'growth',
    title: 'Practice Scaling Excellence',
    subtitle: "Rapid healthcare business expansion",
    description: 'Get a predictable stream of patients seeking medical services, healthcare treatments, and medical consultations. Scale your practice from local to regional coverage across Greece.',
    icon: '📈',
    features: [
      'Predictable patient appointments',
      'Scalable practice operations',
      'No additional staff hiring needed',
      'Proven healthcare growth methodology'
    ],
    color: 'purple'
  },
  {
    id: 'support',
    title: 'Healthcare Industry Expertise',
    subtitle: "Specialized medical practice support",
    description: 'Work directly with experienced professionals who understand the healthcare and medical industry. Get ongoing support, strategy optimization, and dedicated account management for your practice.',
    icon: '🤝',
    features: [
      'Dedicated healthcare industry manager',
      'Medical practice expertise',
      'Regular practice strategy sessions',
      '24/7 Greece-focused support'
    ],
    color: 'orange'
  }
];

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState('cost');

  const selectedData = benefits.find(b => b.id === selectedBenefit);

  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsHeader}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeIcon}>⚡</span>
          <span>Partnership Benefits</span>
        </div>
        
        <h2 className={styles.benefitsTitle}>
          Why Choose Our Partnership Program?
        </h2>
        
        <p className={styles.benefitsSubtitle}>
          Join over 10 successful healthcare practices who've scaled their revenue with our proven system. 
          Zero risk, maximum reward—see why we're the trusted choice for growth-focused medical practices.
        </p>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsTabs}>
          {benefits.map((benefit) => (
            <button
              key={benefit.id}
              className={`${styles.benefitTab} ${selectedBenefit === benefit.id ? styles.active : ''}`}
              onClick={() => setSelectedBenefit(benefit.id)}
            >
              <span className={styles.tabIcon}>{benefit.icon}</span>
              <div className={styles.tabContent}>
                <span className={styles.tabTitle}>{benefit.title}</span>
                <span className={styles.tabSubtitle}>{benefit.subtitle}</span>
              </div>
              <span className={styles.tabIndicator}></span>
            </button>
          ))}
        </div>

        <div className={styles.benefitDetail}>
          <div className={styles.detailHeader}>
            <div className={styles.detailIcon}>
              {selectedData.icon}
            </div>
            <div className={styles.detailTitles}>
              <h3 className={styles.detailTitle}>{selectedData.title}</h3>
              <p className={styles.detailSubtitle}>{selectedData.subtitle}</p>
            </div>
          </div>

          <p className={styles.detailDescription}>
            {selectedData.description}
          </p>

          <div className={styles.featureList}>
            <h4 className={styles.featuresTitle}>Key Features:</h4>
            <div className={styles.features}>
              {selectedData.features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <span className={styles.featureIcon}>✓</span>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.detailActions}>
            <button className={styles.learnMoreBtn}>
              Learn More About {selectedData.title}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
