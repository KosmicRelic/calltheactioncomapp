import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';
import BookingForm from "./Booking Form/BookingForm";

export default function Partner() {
  const [step, setStep] = useState(1);
  const [clientCapacity, setClientCapacity] = useState('');
  const [industry, setIndustry] = useState('');
  const [quality, setQuality] = useState('');
  const [acquisitionBottleneck, setAcquisitionBottleneck] = useState('');

  const capacityOptions = [
    { value: '50', label: 'Up to 50 medical treatments/month', description: 'Perfect for small medical practices' },
    { value: '100', label: 'Up to 100 medical treatments/month', description: 'Great for established healthcare practices' },
    { value: 'over100', label: 'More than 100 treatments/month', description: 'Ideal for large medical centers' }
  ];

  const industryOptions = [
    'Dermatology', 'Medical Spa', 'Laser Hair Removal', 'Skin Rejuvenation', 
    'Aesthetic Medicine', 'Cosmetic Surgery', 'Medical Aesthetics', 'Healthcare Clinic'
  ];

  const qualityOptions = [
    { value: 'premium', label: 'Premium Service', description: '€200+ treatment value' },
    { value: 'standard', label: 'Standard Service', description: '€100-200 treatment value' },
    { value: 'volume', label: 'Volume Service', description: 'High volume, competitive pricing' }
  ];

  const bottleneckOptions = [
    'Not enough qualified leads',
    'High customer acquisition cost',
    'Low conversion rates',
    'Inconsistent booking volume',
    'Geographic limitations',
    'Marketing expertise shortage'
  ];

  return (
    <div className={styles.partnerPage}>
      {/* Hero Section */}
      <section className={styles.partnerHero}>
        <div className={styles.partnerHeroContent}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>🤝</span>
            <span>Partnership Application</span>
          </div>
          
          <h1 className={styles.partnerTitle}>
            Join Greece's Leading Healthcare Network
          </h1>
          
          <p className={styles.partnerSubtitle}>
            Get qualified healthcare patients delivered to your practice with zero upfront investment. 
            Complete our quick assessment to see if you qualify for partnership.
          </p>

          <div className={styles.partnerStats}>
            <div className={styles.partnerStat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Healthcare Partners</span>
            </div>
            <div className={styles.partnerStat}>
              <span className={styles.statNumber}>€1.8M+</span>
              <span className={styles.statLabel}>Revenue Generated</span>
            </div>
            <div className={styles.partnerStat}>
              <span className={styles.statNumber}>680%</span>
              <span className={styles.statLabel}>Average ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.partnerForm}>
        <div className={styles.partnerFormContainer}>
          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              />
            </div>
            <span className={styles.progressText}>
              Step {step} of 5
            </span>
          </div>

          {/* Step 1: Capacity */}
          {step === 1 && (
            <div className={styles.formStep}>
              <div className={styles.stepHeader}>
                <h2 className={styles.stepTitle}>What's your current clinic capacity?</h2>
                <p className={styles.stepDescription}>
                  Help us understand your treatment volume to match you with appropriate opportunities.
                </p>
              </div>

              <div className={styles.optionsGrid}>
                {capacityOptions.map((option) => (
                  <label key={option.value} className={`${styles.optionCard} ${clientCapacity === option.value ? styles.selected : ''}`}>
                    <input
                      type="radio"
                      name="clientCapacity"
                      value={option.value}
                      checked={clientCapacity === option.value}
                      onChange={(e) => setClientCapacity(e.target.value)}
                      className={styles.optionInput}
                    />
                    <div className={styles.optionContent}>
                      <span className={styles.optionLabel}>{option.label}</span>
                      <span className={styles.optionDescription}>{option.description}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className={styles.formActions}>
                <button disabled className={styles.btnSecondary}>Previous</button>
                <button
                  disabled={!clientCapacity}
                  onClick={() => setStep(2)}
                  className={styles.btnPrimary}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Industry */}
          {step === 2 && (
            <div className={styles.formStep}>
              <div className={styles.stepHeader}>
                <h2 className={styles.stepTitle}>What type of laser services do you offer?</h2>
                <p className={styles.stepDescription}>
                  Select your primary specialty to help us target the right clients for your clinic.
                </p>
              </div>

              <div className={styles.industryGrid}>
                {industryOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setIndustry(option)}
                    className={`${styles.industryOption} ${industry === option ? styles.selected : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className={styles.formActions}>
                <button onClick={() => setStep(1)} className={styles.btnSecondary}>Previous</button>
                <button
                  disabled={!industry}
                  onClick={() => setStep(3)}
                  className={styles.btnPrimary}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Quality */}
          {step === 3 && (
            <div className={styles.formStep}>
              <div className={styles.stepHeader}>
                <h2 className={styles.stepTitle}>What's your service level?</h2>
                <p className={styles.stepDescription}>
                  Understanding your positioning helps us match you with clients who value your expertise.
                </p>
              </div>

              <div className={styles.optionsGrid}>
                {qualityOptions.map((option) => (
                  <label key={option.value} className={`${styles.optionCard} ${quality === option.value ? styles.selected : ''}`}>
                    <input
                      type="radio"
                      name="quality"
                      value={option.value}
                      checked={quality === option.value}
                      onChange={(e) => setQuality(e.target.value)}
                      className={styles.optionInput}
                    />
                    <div className={styles.optionContent}>
                      <span className={styles.optionLabel}>{option.label}</span>
                      <span className={styles.optionDescription}>{option.description}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className={styles.formActions}>
                <button onClick={() => setStep(2)} className={styles.btnSecondary}>Previous</button>
                <button
                  disabled={!quality}
                  onClick={() => setStep(4)}
                  className={styles.btnPrimary}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Bottleneck */}
          {step === 4 && (
            <div className={styles.formStep}>
              <div className={styles.stepHeader}>
                <h2 className={styles.stepTitle}>What's your biggest client acquisition challenge?</h2>
                <p className={styles.stepDescription}>
                  Identifying your main bottleneck helps us provide the most effective solution.
                </p>
              </div>

              <div className={styles.bottleneckGrid}>
                {bottleneckOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setAcquisitionBottleneck(option)}
                    className={`${styles.bottleneckOption} ${acquisitionBottleneck === option ? styles.selected : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className={styles.formActions}>
                <button onClick={() => setStep(3)} className={styles.btnSecondary}>Previous</button>
                <button
                  disabled={!acquisitionBottleneck}
                  onClick={() => setStep(5)}
                  className={styles.btnPrimary}
                >
                  Complete Assessment
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Booking Form */}
          {step === 5 && (
            <div className={styles.formStep}>
              <div className={styles.stepHeader}>
                <h2 className={styles.stepTitle}>Perfect! You qualify for our partnership program</h2>
                <p className={styles.stepDescription}>
                  Based on your responses, we can help you scale your laser clinic. Schedule a consultation to discuss your personalized growth strategy.
                </p>
              </div>

              <div className={styles.qualificationSummary}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Capacity:</span>
                  <span className={styles.summaryValue}>
                    {capacityOptions.find(o => o.value === clientCapacity)?.label}
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Specialty:</span>
                  <span className={styles.summaryValue}>{industry}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Service Level:</span>
                  <span className={styles.summaryValue}>
                    {qualityOptions.find(o => o.value === quality)?.label}
                  </span>
                </div>
              </div>

              <BookingForm />

              <div className={styles.formActions}>
                <button onClick={() => setStep(4)} className={styles.btnSecondary}>Previous</button>
                <Link to="/" className={styles.btnPrimary}>Return Home</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
