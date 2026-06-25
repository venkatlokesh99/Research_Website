import React, { useState, useEffect } from 'react';
import { X, Loader } from 'lucide-react';
import './MailingListModal.css';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbzJ9cNsdLb60P20H2GHWfnCUUEtoJ97jk1siTfdjVsQ3_LY8iD4rlw3j8mZpbYRvt59/exec';

interface MailingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MailingListModal({ isOpen, onClose }: MailingListModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // If the placeholder URL is not changed, warn the user and fake success for testing/demonstration
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.warn('Google Apps Script Web App URL is still set to placeholder. Simulating successful local submission.');
        setSubmitStatus('success');
        setStatusMessage('Demo Success: Connection simulated successfully! (Make sure to replace the Google Apps Script Web App URL in production).');
        setIsSubmitting(false);
        return;
      }

      // We send the JSON data as text/plain to avoid preflight OPTIONS requests,
      // which Google Apps Script does not handle cleanly.
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'You have been added to the mailing list!');
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Mailing list submission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Failed to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          className="modal-close-icon-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {submitStatus === 'success' ? (
          <div className="modal-success-state">
            <h2 className="modal-title halftone-title yellow-accent">YOU'RE IN!</h2>
            <p className="modal-success-description pagella-body">
              {statusMessage || 'Thank you for joining our mailing list. You will receive updates about upcoming events and research releases.'}
            </p>
            <button className="modal-btn modal-submit-btn nav-font" onClick={onClose}>
              AWESOME
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form-layout">
            <h2 id="modal-title" className="modal-title halftone-title pink-accent">JOIN THE LIST</h2>
            <p className="modal-subtitle wire-font">GET THE LATEST NEWS AND EVENTS</p>

            {submitStatus === 'error' && (
              <div className="modal-error-alert" role="alert">
                {statusMessage}
              </div>
            )}

            <div className="modal-form-group">
              <label htmlFor="name-input" className="modal-label nav-font">FULL NAME <span className="pink-accent">*</span></label>
              <input
                id="name-input"
                type="text"
                className={`modal-input ${errors.name ? 'input-error' : ''}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                }}
                disabled={isSubmitting}
                placeholder="John Doe"
              />
              {errors.name && <span className="modal-field-error">{errors.name}</span>}
            </div>

            <div className="modal-form-group">
              <label htmlFor="email-input" className="modal-label nav-font">EMAIL ADDRESS <span className="pink-accent">*</span></label>
              <input
                id="email-input"
                type="email"
                className={`modal-input ${errors.email ? 'input-error' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                }}
                disabled={isSubmitting}
                placeholder="john@example.com"
              />
              {errors.email && <span className="modal-field-error">{errors.email}</span>}
            </div>

            <div className="modal-form-group">
              <label htmlFor="message-input" className="modal-label nav-font">WHAT INTERESTS YOU? <span className="modal-optional-label wire-font">(OPTIONAL)</span></label>
              <textarea
                id="message-input"
                className="modal-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                placeholder="Tell us what areas of our research or events you are most interested in..."
                rows={3}
              />
            </div>

            <div className="modal-actions">
              <button 
                type="button" 
                className="modal-btn modal-cancel-btn nav-font" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                CANCEL
              </button>
              <button 
                type="submit" 
                className="modal-btn modal-submit-btn nav-font" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="submit-loading-wrapper">
                    <Loader className="spinner" size={16} /> SUBMITTING...
                  </span>
                ) : 'SUBMIT'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
