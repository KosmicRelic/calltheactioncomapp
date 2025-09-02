
import { useState } from 'react';
import BookingForm from './Booking Form/BookingForm';


export default function Partner() {
  const [step, setStep] = useState(1);
  const [clientCapacity, setClientCapacity] = useState('');
  const [industry, setIndustry] = useState('');
  const [quality, setQuality] = useState('');
  const [acquisitionBottleneck, setAcquisitionBottleneck] = useState('');

  return (
  <div style={{ marginTop: 40, marginLeft: 'auto', marginRight: 'auto', maxWidth: 800, position: 'relative' }}>
    {/* Progress Bar */}
    <div style={{ width: '100%', maxWidth: 800, margin: '0 auto 24px auto', height: 18, background: '#e5e7eb', borderRadius: 9, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <div
        style={{
          height: '100%',
          width: `${(step - 1) / 4 * 100}%`,
          background: 'linear-gradient(90deg, #1976d2 60%, #00c6fb 100%)',
          borderRadius: 9,
          transition: 'width 0.4s cubic-bezier(.4,0,.2,1)',
          boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
        }}
      />
    </div>
      {step === 1 && (
  <div style={{ margin: '0 auto 32px auto', padding: '32px 32px 80px 32px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 800, textAlign: 'center', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-1px', marginBottom: 18, fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif', color: '#222' }}>
            Welcome! Let’s get to know your business
          </h1>
          <p style={{ fontSize: 20, color: '#555', marginBottom: 28, fontWeight: 400, fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
            To help us match you with the right opportunities, tell us about your current capacity.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%', maxWidth: 420, background: clientCapacity === '50' ? '#f0f8ff' : '#f9f9f9', border: clientCapacity === '50' ? '2px solid #1976d2' : '1px solid #e5e7eb', borderRadius: 12, padding: '18px 24px', boxShadow: clientCapacity === '50' ? '0 2px 8px rgba(25,118,210,0.08)' : '0 1px 4px rgba(0,0,0,0.03)' }}>
              <input
                type="radio"
                name="clientCapacity"
                value="50"
                checked={clientCapacity === '50'}
                onChange={e => setClientCapacity(e.target.value)}
                style={{ marginRight: 18, accentColor: '#1976d2', width: 24, height: 24 }}
              />
              <span style={{ fontSize: 18, fontWeight: 500, color: clientCapacity === '50' ? '#1976d2' : '#222' }}>Up to 50 clients</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%', maxWidth: 420, background: clientCapacity === '100' ? '#f0f8ff' : '#f9f9f9', border: clientCapacity === '100' ? '2px solid #1976d2' : '1px solid #e5e7eb', borderRadius: 12, padding: '18px 24px', boxShadow: clientCapacity === '100' ? '0 2px 8px rgba(25,118,210,0.08)' : '0 1px 4px rgba(0,0,0,0.03)' }}>
              <input
                type="radio"
                name="clientCapacity"
                value="100"
                checked={clientCapacity === '100'}
                onChange={e => setClientCapacity(e.target.value)}
                style={{ marginRight: 18, accentColor: '#1976d2', width: 24, height: 24 }}
              />
              <span style={{ fontSize: 18, fontWeight: 500, color: clientCapacity === '100' ? '#1976d2' : '#222' }}>Up to 100 clients</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%', maxWidth: 420, background: clientCapacity === 'over100' ? '#f0f8ff' : '#f9f9f9', border: clientCapacity === 'over100' ? '2px solid #1976d2' : '1px solid #e5e7eb', borderRadius: 12, padding: '18px 24px', boxShadow: clientCapacity === 'over100' ? '0 2px 8px rgba(25,118,210,0.08)' : '0 1px 4px rgba(0,0,0,0.03)' }}>
              <input
                type="radio"
                name="clientCapacity"
                value="over100"
                checked={clientCapacity === 'over100'}
                onChange={e => setClientCapacity(e.target.value)}
                style={{ marginRight: 18, accentColor: '#1976d2', width: 24, height: 24 }}
              />
              <span style={{ fontSize: 18, fontWeight: 500, color: clientCapacity === 'over100' ? '#1976d2' : '#222' }}>More than 100 clients</span>
            </label>
          </div>
          <div style={{ position: 'absolute', left: 32, bottom: 32, width: 'calc(100% - 64px)', display: 'flex', gap: 12, justifyContent: 'flex-start' }}>
            <button
              disabled
              style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#e0e0e0', color: '#888', border: 'none', fontWeight: 600, cursor: 'not-allowed' }}
            >
              Previous
            </button>
            <button
              disabled={!clientCapacity}
              onClick={() => setStep(2)}
              style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#007bff', color: '#fff', border: 'none', fontWeight: 600, cursor: clientCapacity ? 'pointer' : 'not-allowed', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
  <div style={{ margin: '0 auto 32px auto', padding: '32px 32px 80px 32px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 800, textAlign: 'center', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: 18, fontWeight: 500, fontSize: 22 }}>
            What industry are you in?
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
            {['Healthcare', 'IT', 'Finance', 'Education', 'Retail', 'Construction', 'Legal', 'Hospitality'].map(option => (
              <button
                key={option}
                onClick={() => setIndustry(option)}
                style={{
                  padding: '14px 32px',
                  fontSize: 18,
                  borderRadius: 8,
                  background: industry === option ? '#1976d2' : '#f9f9f9',
                  color: industry === option ? '#fff' : '#222',
                  border: industry === option ? '2px solid #1976d2' : '1px solid #e5e7eb',
                  fontWeight: 500,
                  cursor: 'pointer',
                  boxShadow: industry === option ? '0 2px 8px rgba(25,118,210,0.08)' : '0 1px 4px rgba(0,0,0,0.03)'
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <div style={{ position: 'absolute', left: 32, bottom: 32, width: 'calc(100% - 64px)', display: 'flex', gap: 12, justifyContent: 'flex-start' }}>
            <button
              onClick={() => setStep(1)}
              style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#e0e0e0', color: '#222', border: 'none', fontWeight: 600, cursor: 'pointer' }}
            >
              Previous
            </button>
            <button
              disabled={!industry}
              onClick={() => setStep(3)}
              style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#007bff', color: '#fff', border: 'none', fontWeight: 600, cursor: industry ? 'pointer' : 'not-allowed', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
  <div style={{ margin: '0 auto 32px auto', padding: '32px 32px 80px 32px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 800, textAlign: 'center', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <label htmlFor="quality" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
            How would you rate the quality of your service?
          </label>
          <select
            id="quality"
            value={quality}
            onChange={e => setQuality(e.target.value)}
            style={{ padding: '8px 12px', fontSize: 16, borderRadius: 4, border: '1px solid #ccc', width: '100%', marginBottom: 16 }}
          >
            <option value="">Select quality</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Needs Improvement">Needs Improvement</option>
          </select>
            <div style={{ position: 'absolute', left: 32, bottom: 32, width: 'calc(100% - 64px)', display: 'flex', gap: 12, justifyContent: 'flex-start' }}>
              <button
                onClick={() => setStep(2)}
                style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#e0e0e0', color: '#222', border: 'none', fontWeight: 600, cursor: 'pointer' }}
              >
                Previous
              </button>
              <button
                disabled={!quality}
                onClick={() => setStep(4)}
                style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#007bff', color: '#fff', border: 'none', fontWeight: 600, cursor: quality ? 'pointer' : 'not-allowed', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                Next
              </button>
            </div>
        </div>
      )}
      {step === 4 && (
  <div style={{ margin: '0 auto 32px auto', padding: '32px 32px 80px 32px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 800, textAlign: 'center', minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <label htmlFor="acquisitionBottleneck" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
            Is client acquisition the main bottleneck preventing your business from scaling?
          </label>
          <div style={{ marginBottom: 16 }}>
            <label style={{ marginRight: 16 }}>
              <input
                type="radio"
                name="acquisitionBottleneck"
                value="Yes"
                checked={acquisitionBottleneck === 'Yes'}
                onChange={e => setAcquisitionBottleneck(e.target.value)}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="acquisitionBottleneck"
                value="No"
                checked={acquisitionBottleneck === 'No'}
                onChange={e => setAcquisitionBottleneck(e.target.value)}
              /> No
            </label>
          </div>
            <div style={{ position: 'absolute', left: 32, bottom: 32, width: 'calc(100% - 64px)', display: 'flex', gap: 12, justifyContent: 'flex-start' }}>
              <button
                onClick={() => setStep(3)}
                style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#e0e0e0', color: '#222', border: 'none', fontWeight: 600, cursor: 'pointer' }}
              >
                Previous
              </button>
              <button
                disabled={!acquisitionBottleneck}
                onClick={() => setStep(5)}
                style={{ padding: '14px 40px', fontSize: 18, borderRadius: 8, background: '#007bff', color: '#fff', border: 'none', fontWeight: 600, cursor: acquisitionBottleneck ? 'pointer' : 'not-allowed', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                Next
              </button>
            </div>
        </div>
      )}
      {step > 4 && (
        <BookingForm lang="en" partnerMode />
      )}
    </div>
  );
}
