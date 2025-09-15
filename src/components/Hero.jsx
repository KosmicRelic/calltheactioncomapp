import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: 'Healthcare Revenue Generated', value: '€1.8M+', icon: '💰' },
    { label: 'Greek Healthcare Partnerships', value: '10+', icon: '🤝' },
    { label: 'Patient Satisfaction Rate', value: '97%', icon: '⭐' },
    { label: 'Average ROI for Practices', value: '680%', icon: '📈' }
  ];

  const benefits = [
    'Zero upfront costs for healthcare practices',
    'Specialized medical marketing & leads',
    'Pre-qualified healthcare patients',
    'Scale your practice to €300K+ revenue'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.heroAnnouncement}>
            <span className={styles.announcementBadge}>⚡ PROVEN SYSTEM</span>
            <span className={styles.announcementText}>
              Join 10+ successful Greek healthcare partnerships
            </span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Get <span className={styles.freeWord}>qualified healthcare patients</span> delivered
            <span className={styles.heroSubtitle}>without any upfront costs</span>
          </h1>
          
          <p className={styles.heroDescription}>
            Partner with our specialized healthcare marketing team to scale your practice across Greece. 
            We handle lead generation and patient qualification—you focus on treatments.
          </p>

          <div className={styles.heroBenefits}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroActions}>
            <Link to="/partner" className={styles.primaryCta}>
              <span className={styles.ctaIcon}>🚀</span>
              Start Your Partnership
              <span className={styles.ctaArrow}>→</span>
            </Link>
            
            <Link to="/about" className={styles.secondaryCta}>
              <span className={styles.secondaryIcon}>▶</span>
              See How It Works
            </Link>
          </div>

          <div className={styles.socialProof}>
            <span className={styles.proofText}>Trusted by businesses across 12+ industries</span>
            <div className={styles.industryIcons}>
              <span title="Construction">🏗️</span>
              <span title="HVAC">❄️</span>
              <span title="Plumbing">🔧</span>
              <span title="Landscaping">🌿</span>
              <span title="Cleaning">✨</span>
              <span title="More">➕</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.statsCard}>
            <div className={styles.statDisplay}>
              <span className={styles.statIcon}>{stats[currentStat].icon}</span>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{stats[currentStat].value}</div>
                <div className={styles.statLabel}>{stats[currentStat].label}</div>
              </div>
            </div>
            
            <div className={styles.statIndicators}>
              {stats.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.statIndicator} ${index === currentStat ? styles.active : ''}`}
                  onClick={() => setCurrentStat(index)}
                  aria-label={`View stat ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement} style={{ '--delay': '0s' }}>💼</div>
            <div className={styles.floatingElement} style={{ '--delay': '1s' }}>📈</div>
            <div className={styles.floatingElement} style={{ '--delay': '2s' }}>⚡</div>
          </div>
        </div>
      </div>

      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb} style={{ '--x': '20%', '--y': '30%' }}></div>
        <div className={styles.gradientOrb} style={{ '--x': '80%', '--y': '70%' }}></div>
      </div>
    </section>
  );
}