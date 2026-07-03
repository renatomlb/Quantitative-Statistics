import { useState, useEffect, useRef } from 'react';

const BTN_COLOR  = '#2e86ab';
const DARK_COLOR = '#1a3a5c';
const FORM_URL   = 'https://forms.office.com/e/EqgawvChtr?embed=true';

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  // Focus modal on open; close on Escape
  useEffect(() => {
    if (!open) return;
    modalRef.current?.focus();
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open feedback form"
        aria-haspopup="dialog"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000,
          background: BTN_COLOR,
          color: '#fff',
          border: 'none',
          borderRadius: '24px',
          padding: '10px 18px',
          fontFamily: 'inherit',
          fontSize: '0.875rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'background 0.15s',
        }}
      >
        💬 Feedback
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Feedback form"
          ref={modalRef}
          tabIndex={-1}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.45)',
            padding: '16px',
            outline: 'none',
          }}
        >
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '660px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              background: DARK_COLOR,
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>
                💬 Share your feedback
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close feedback form"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  lineHeight: 1,
                  padding: '0 4px',
                  transition: 'color 0.15s',
                }}
              >
                ×
              </button>
            </div>

            {/* Embedded Microsoft Form */}
            <iframe
              src={FORM_URL}
              title="Feedback form"
              width="100%"
              style={{ flex: 1, border: 'none', minHeight: '520px' }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
