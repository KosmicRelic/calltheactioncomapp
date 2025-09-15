import { useState, useEffect } from 'react';
import styles from '../App.module.css';

const testimonials = [
  {
    id: 1,
    quote: 'CallTheAction revolutionized our medical practice completely. In just 6 months, we went from 15 appointments per month to over 120 patient consultations. Our revenue has grown by 750% with zero upfront investment.',
    author: 'Anastasia K.',
    title: 'CEO & Founder',
    company: 'Athens Medical Center',
    industry: 'Healthcare & Medical Services',
    location: 'Athens, Greece',
    revenue: '€180K',
    timeframe: '6 months',
    image: '👩‍⚕️',
    rating: 5,
    results: [
      { metric: 'Revenue Growth', value: '750%' },
      { metric: 'Monthly Patients', value: '120+' },
      { metric: 'Patient Retention', value: '92%' }
    ]
  },
  {
    id: 2,
    quote: 'Working with CallTheAction has been transformative for our healthcare center. They specialize in medical practices and understand our market perfectly. We now serve patients from across the Greek islands.',
    author: 'Dimitris Papadopoulos',
    title: 'Founder',
    company: 'Santorini Health Center',
    industry: 'Medical Treatments & Healthcare',
    location: 'Santorini, Greece',
    revenue: '€240K',
    timeframe: '8 months',
    image: '👨‍⚕️',
    rating: 5,
    results: [
      { metric: 'Annual Revenue', value: '890%' },
      { metric: 'Service Expansion', value: '5 specialties' },
      { metric: 'Island Coverage', value: '3 islands' }
    ]
  },
  {
    id: 3,
    quote: 'Finally, a partnership that understands healthcare. No more wasted advertising on unqualified leads. Just real patients ready for professional medical treatments and healthcare services.',
    author: 'Maria Konstantinou',
    title: 'Director',
    company: 'Thessaloniki Medical Spa',
    industry: 'Healthcare & Wellness',
    location: 'Thessaloniki, Greece',
    revenue: '€195K',
    timeframe: '7 months',
    image: '👩‍⚕️',
    rating: 5,
    results: [
      { metric: 'Patient Bookings', value: '+680%' },
      { metric: 'Qualified Leads', value: '85/month' },
      { metric: 'Conversion Rate', value: '89%' }
    ]
  },
  {
    id: 4,
    quote: 'The partnership exceeded all expectations for our medical practice. We scaled from a small Athens practice to serving patients across Northern Greece. The quality of leads for healthcare services is exceptional.',
    author: 'Yannis Theodorakis',
    title: 'CEO',
    company: 'Elite Medical Solutions',
    industry: 'Advanced Healthcare Treatments',
    location: 'Athens, Greece',
    revenue: '€320K',
    timeframe: '10 months',
    image: '👨‍⚕️',
    rating: 5,
    results: [
      { metric: 'Territory Expansion', value: 'Northern Greece' },
      { metric: 'Staff Growth', value: '8 specialists' },
      { metric: 'Yearly Revenue', value: '€320K' }
    ]
  }
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentTestimonial = testimonials[selectedTestimonial];

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsHeader}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeIcon}>⭐</span>
          <span>Success Stories</span>
        </div>
        
        <h2 className={styles.testimonialsTitle}>
          Real Results from Real Partners
        </h2>
        
        <p className={styles.testimonialsSubtitle}>
          Don't just take our word for it. See how healthcare practices across Greece 
          have transformed their growth with our partnership program.
        </p>
      </div>

      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialMeta}>
                <div className={styles.authorImage}>{currentTestimonial.image}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{currentTestimonial.author}</div>
                  <div className={styles.authorTitle}>
                    {currentTestimonial.title}, {currentTestimonial.company}
                  </div>
                  <div className={styles.authorDetails}>
                    {currentTestimonial.industry} • {currentTestimonial.location}
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialRating}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
            </div>

            <blockquote className={styles.testimonialQuote}>
              "{currentTestimonial.quote}"
            </blockquote>

            <div className={styles.resultsGrid}>
              {currentTestimonial.results.map((result, index) => (
                <div key={index} className={styles.resultCard}>
                  <div className={styles.resultValue}>{result.value}</div>
                  <div className={styles.resultMetric}>{result.metric}</div>
                </div>
              ))}
            </div>

            <div className={styles.testimonialFooter}>
              <div className={styles.revenueHighlight}>
                <span className={styles.revenueLabel}>Revenue Generated:</span>
                <span className={styles.revenueValue}>{currentTestimonial.revenue}+</span>
                <span className={styles.timeframe}>in {currentTestimonial.timeframe}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialControls}>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.testimonialDot} ${index === selectedTestimonial ? styles.active : ''}`}
                onClick={() => {
                  setSelectedTestimonial(index);
                  setAutoPlay(false);
                }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className={styles.testimonialNavigation}>
            <button
              className={styles.navButton}
              onClick={() => setSelectedTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              className={styles.navButton}
              onClick={() => setSelectedTestimonial((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          
          <button
            className={styles.autoPlayToggle}
            onClick={() => setAutoPlay(!autoPlay)}
            aria-label={autoPlay ? 'Pause autoplay' : 'Start autoplay'}
          >
            {autoPlay ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardAuthor}>
                <div className={styles.cardImage}>{testimonial.image}</div>
                <div className={styles.cardAuthorInfo}>
                  <div className={styles.cardName}>{testimonial.author}</div>
                  <div className={styles.cardCompany}>{testimonial.company}</div>
                </div>
              </div>
              <div className={styles.cardRating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.cardStar}>⭐</span>
                ))}
              </div>
            </div>
            
            <p className={styles.cardQuote}>"{testimonial.quote}"</p>
            
            <div className={styles.cardResults}>
              <div className={styles.cardRevenue}>
                <span className={styles.cardRevenueValue}>{testimonial.revenue}+</span>
                <span className={styles.cardRevenueLabel}>Revenue in {testimonial.timeframe}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
