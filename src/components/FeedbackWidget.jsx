import { useState, useEffect, useRef } from 'react';

const QUESTIONS = [
  { key: 'clarity',      label: 'The content is clearly explained.' },
  { key: 'usefulness',   label: 'This resource is useful for my learning.' },
  { key: 'usability',    label: 'This resource is easy to navigate and use.' },
  { key: 'difficulty',   label: 'The difficulty level is appropriate.' },
  { key: 'satisfaction', label: 'Overall, I am satisfied with this resource.' },
];

const STORAGE_KEY = 'qs_feedback_responses';
const BLUE = '#2563eb';
const EMPTY_ANSWERS = { clarity: null, usefulness: null, usability: null, difficulty: null, satisfaction: null };

function exportCSV(responses) {
  const headers = ['timestamp', 'clarity', 'usefulness', 'usability', 'difficulty', 'satisfaction', 'comments'];
  const rows = responses.map(r => [
    r.timestamp,
    r.answers.clarity,
    r.answers.usefulness,
    r.answers.usability,
    r.answers.difficulty,
    r.answers.satisfaction,
    `"${(r.comments || '').replace(/"/g, '""')}"`,
  ]);
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `feedback_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function BtnStyle(bg) {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '9px 20px',
    fontSize: 13.5,
    fontWeight: 600,
    cursor: 'pointer',
  };
}

export default function FeedbackWidget({ showExport = false }) {
  const [open, setOpen]         = useState(false);
  const [answers, setAnswers]   = useState({ ...EMPTY_ANSWERS });
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const el = modalRef.current;
    if (!el) return;
    el.focus();
    function trapTab(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        setAnswers({ ...EMPTY_ANSWERS });
        setComments('');
        setSubmitted(false);
        setShowError(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = Array.from(
        el.querySelectorAll('[role="button"], [role="radio"], textarea, [tabindex]:not([tabindex="-1"])')
      ).filter(node => !node.hasAttribute('disabled'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    el.addEventListener('keydown', trapTab);
    return () => el.removeEventListener('keydown', trapTab);
  }, [open]);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setAnswers({ ...EMPTY_ANSWERS });
    setComments('');
    setSubmitted(false);
    setShowError(false);
  }

  function handleSelect(key, value) {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setShowError(false);
  }

  function handleSubmit() {
    const allAnswered = QUESTIONS.every(q => answers[q.key] !== null);
    if (!allAnswered) {
      setShowError(true);
      return;
    }
    const entry = {
      timestamp: new Date().toISOString(),
      answers: { ...answers },
      comments: comments.trim(),
    };
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    setSubmitted(true);
  }

  function handleExport() {
    const responses = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (responses.length === 0) {
      alert('No feedback responses stored yet.');
      return;
    }
    exportCSV(responses);
  }

  return (
    <>
      {showExport && (
        <div
          onClick={handleExport}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleExport()}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 176,
            zIndex: 9999,
            background: '#16a34a',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 16px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          ⬇ Export CSV
        </div>
      )}

      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleOpen()}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          background: BLUE,
          color: '#fff',
          borderRadius: 8,
          padding: '10px 18px',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        💬 Feedback
      </div>

      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
            tabIndex={-1}
            style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              padding: '28px 32px',
              width: '100%',
              maxWidth: 520,
              maxHeight: '90vh',
              overflowY: 'auto',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              outline: 'none',
            }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <h2 style={{ margin: '0 0 8px', color: '#1e3a5f', fontSize: 20, fontWeight: 700 }}>
                  Thank you for your feedback!
                </h2>
                <p style={{ color: '#555', margin: '0 0 24px', fontSize: 14, lineHeight: 1.5 }}>
                  Your response has been recorded anonymously.
                </p>
                <div onClick={handleClose} role="button" tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && handleClose()}
                  style={BtnStyle(BLUE)}>
                  Close
                </div>
              </div>
            ) : (
              <>
                <h2 id="feedback-modal-title" style={{ margin: '0 0 6px', color: '#1e3a5f', fontSize: 18, fontWeight: 700 }}>
                  Resource Feedback
                </h2>
                <p style={{ margin: '0 0 22px', color: '#555', fontSize: 13, lineHeight: 1.5 }}>
                  Help us improve this learning resource. All responses are anonymous.
                </p>

                {QUESTIONS.map(({ key, label }) => (
                  <div key={key} style={{ marginBottom: 22 }}>
                    <p style={{ margin: '0 0 10px', fontSize: 13.5, fontWeight: 600, color: '#1e3a5f', lineHeight: 1.4 }}>
                      {label}
                      {showError && answers[key] === null && (
                        <span style={{ color: '#dc2626', fontWeight: 400, marginLeft: 6, fontSize: 12 }}>
                          * required
                        </span>
                      )}
                    </p>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      {[1, 2, 3, 4, 5].map(v => {
                        const selected = answers[key] === v;
                        return (
                          <div
                            key={v}
                            onClick={() => handleSelect(key, v)}
                            role="radio"
                            aria-checked={selected}
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && handleSelect(key, v)}
                            style={{
                              width: 34,
                              height: 34,
                              borderRadius: '50%',
                              border: `2px solid ${BLUE}`,
                              background: selected ? BLUE : '#fff',
                              color: selected ? '#fff' : BLUE,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 13,
                              fontWeight: 700,
                              cursor: 'pointer',
                              userSelect: 'none',
                              flexShrink: 0,
                              transition: 'background 0.12s',
                            }}
                          >
                            {v}
                          </div>
                        );
                      })}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 11,
                      color: '#888',
                      marginTop: 5,
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}>
                      <span>Strongly Disagree</span>
                      <span>Strongly Agree</span>
                    </div>
                  </div>
                ))}

                <div style={{ marginBottom: 20 }}>
                  <p style={{ margin: '0 0 8px', fontSize: 13.5, fontWeight: 600, color: '#1e3a5f' }}>
                    Any other comments?{' '}
                    <span style={{ fontWeight: 400, color: '#888' }}>(optional)</span>
                  </p>
                  <textarea
                    value={comments}
                    onChange={e => setComments(e.target.value)}
                    rows={3}
                    placeholder="Share any additional thoughts..."
                    data-gramm="false"
                    data-gramm_editor="false"
                    data-enable-grammarly="false"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      border: '1.5px solid #d1d5db',
                      borderRadius: 6,
                      padding: '8px 10px',
                      fontSize: 13,
                      color: '#333',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                {showError && (
                  <p style={{ color: '#dc2626', fontSize: 12.5, margin: '-8px 0 14px', fontWeight: 500 }}>
                    Please answer all 5 questions before submitting.
                  </p>
                )}

                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                  <div
                    onClick={handleClose}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && handleClose()}
                    style={BtnStyle('#6b7280')}
                  >
                    Cancel
                  </div>
                  <div
                    onClick={handleSubmit}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    style={BtnStyle(BLUE)}
                  >
                    Submit
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
