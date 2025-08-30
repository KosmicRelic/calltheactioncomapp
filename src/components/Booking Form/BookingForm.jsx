import { useState } from 'react';
import styles from './BookingForm.module.css';

const translations = {
  en: {
    steps: [
      'Type of Cleaning',
      'Personal Info & Date',
    ],
    bookTitle: 'Book a Call with Us',
    cleaningType: 'What kind of cleaning are you looking for?',
    cleaningOptions: [
      { value: 'Standard', label: 'Standard Cleaning', comment: 'General cleaning for homes and apartments.' },
      { value: 'Deep', label: 'Deep Cleaning', comment: 'Thorough cleaning including hard-to-reach areas.' },
      { value: 'MoveOut', label: 'Move Out/In Cleaning', comment: 'Perfect for moving in or out of a property.' },
    ],
    name: 'Name',
    surname: 'Surname',
    email: 'Email (optional)',
    phone: 'Phone Number',
    next: 'Next',
    back: 'Back',
    submit: 'Submit',
    thankYou: 'Thank you for booking!',
    received: 'We’ll contact you soon to confirm your first clean.',
    fillContact: 'Please fill in all required contact details.',
    selectType: 'Please select a cleaning type.',
    selectDate: 'Please select a contact date.',
    contactTitle: 'When should we contact you?',
    pleaseFill: 'Please fill out the form before choosing your contact date.',
  },
  gr: {
    steps: [
      'Τύπος Καθαρισμού',
      'Στοιχεία & Ημερομηνία',
    ],
    bookTitle: 'Προγραμματίστε Μια Κλήση μαζί μας',
    cleaningType: 'Τι τύπου καθαρισμό ψάχνετε;',
    cleaningOptions: [
      { value: 'Standard', label: 'Κανονικός Καθαρισμός', comment: 'Γενικός καθαρισμός για σπίτια και διαμερίσματα.' },
      { value: 'Deep', label: 'Βαθύς Καθαρισμός', comment: 'Ενδελεχής καθαρισμός συμπεριλαμβανομένων δύσκολων σημείων.' },
      { value: 'MoveOut', label: 'Καθαρισμός Μετακόμισης', comment: 'Ιδανικό για μετακόμιση σε ή από ακίνητο.' },
    ],
    name: 'Όνομα',
    surname: 'Επώνυμο',
    email: 'Email (προαιρετικό)',
    phone: 'Τηλέφωνο',
    next: 'Επόμενο',
    back: 'Πίσω',
    submit: 'Υποβολή',
    thankYou: 'Ευχαριστούμε για την κράτηση!',
    received: 'Θα επικοινωνήσουμε σύντομα για επιβεβαίωση.',
    fillContact: 'Συμπληρώστε όλα τα απαιτούμενα στοιχεία.',
    selectType: 'Επιλέξτε τύπο καθαρισμού.',
    selectDate: 'Επιλέξτε ημερομηνία επικοινωνίας.',
    contactTitle: 'Πότε να επικοινωνήσουμε μαζί σας;',
    pleaseFill: 'Παρακαλώ συμπληρώστε τη φόρμα πριν επιλέξετε την ημερομηνία επικοινωνίας.',
  },
};

export default function BookingForm({ lang = 'en', partnerMode = false }) {
  const t = translations[lang];
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    contactDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Partner mode skips steps and only shows personal info

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or email service
  }

  function Calendar({ value, onChange, disabled }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    const startDay = firstDay.getDay();
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const isPrevDisabled = currentYear < today.getFullYear() || (currentYear === today.getFullYear() && currentMonth === today.getMonth());

    function handlePrevMonth() {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }

    function handleNextMonth() {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }

    return (
      <div className={styles.calendarCardAcq}>
        <div className={styles.calendarHeaderRowAcq}>
          <button className={styles.calendarNavButton} onClick={handlePrevMonth} disabled={isPrevDisabled}>&lt;</button>
          <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button className={styles.calendarNavButton} onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className={styles.calendarWeekRowAcq}>
          {weekDays.map(day => (
            <span key={day} className={styles.calendarWeekDayAcq}>{day}</span>
          ))}
        </div>
        <div className={styles.calendarGridAcq}>
          {[...Array(startDay)].map((_, idx) => <div key={'empty'+idx} className={styles.calendarCellEmptyAcq}></div>)}
          {days.map(day => {
            const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
            const isPast = new Date(dateStr) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            return (
              <button
                key={day}
                type="button"
                className={value === dateStr ? styles.calendarCellSelectedAcq : styles.calendarCellAcq}
                onClick={() => onChange({ target: { name: 'contactDate', value: dateStr } })}
                disabled={disabled || isPast}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
  <h1 className={styles.hormoziTitle}>{partnerMode ? "BOOK A CALL BELOW TO SEE IF YOU'RE A FIT" : t.bookTitle}</h1>
      <section className={styles.bookingSection}>
        <div className={styles.formContainer}>
          <form className={styles.bookingForm} aria-label="Partner Form" onSubmit={handleSubmit}>
            {!submitted ? (
              <div className={styles.stepTwoContainer}>
                <div className={styles.leftSide}>
                  <div className={styles.formSectionAcq}>
                    <label className={styles.sectionLabelAcq}>Personal Information</label>
                    <div className={styles.inputGroup}>
                      <div className={styles.inputRowAcq}>
                        <input type="text" id="name" name="name" placeholder="Name" value={form.name} onChange={handleChange} required aria-required="true" className={styles.inputField} />
                      </div>
                      <div className={styles.inputRowAcq}>
                        <input type="text" id="surname" name="surname" placeholder="Surname" value={form.surname} onChange={handleChange} required aria-required="true" className={styles.inputField} />
                      </div>
                      <div className={styles.inputRowAcq}>
                        <input type="email" id="email" name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} className={styles.inputField} />
                      </div>
                      <div className={styles.inputRowAcq}>
                        <input type="tel" id="phone" name="phone" value={form.phone} placeholder="Phone Number" onChange={handleChange} required aria-required="true" className={styles.inputField} />
                      </div>
                      <div className={styles.inputRowAcq}>
                        <input type="text" id="company" name="company" placeholder="Company" value={form.company} onChange={handleChange} className={styles.inputField} />
                      </div>
                      {!partnerMode && (
                        <div className={styles.inputRowAcq}>
                          <textarea id="message" name="message" placeholder="How can we help you?" value={form.message} onChange={handleChange} rows={4} className={styles.inputField} style={{ minHeight: 100, resize: 'vertical' }} />
                        </div>
                      )}
                    </div>
                    <p className={styles.agreement}>By entering information, I agree to <a href="#">Terms</a> & <a href="#">Privacy Policy</a></p>
                  </div>
                  <div className={styles.buttonRowAcq}>
                    <button type="submit" className={styles.hormoziCta}>Apply</button>
                  </div>
                </div>
                <div className={styles.calendarWrapper}>
                  <label className={styles.sectionLabelAcq}>Preferred Contact Date</label>
                  <Calendar value={form.contactDate} onChange={handleChange} disabled={false} />
                </div>
              </div>
            ) : (
              <div className={styles.bookingSuccess}>
                <h2 className={styles.successTitle}>Thank you for applying!</h2>
                <p className={styles.successMsg}>We’ll contact you soon to discuss partnership opportunities.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}