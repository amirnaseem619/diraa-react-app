import { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext.jsx";

const steps = [
  { title: "Let's get started", badge: "STEP 1 OF 3" },
  { title: "Contact information", badge: "STEP 2 OF 3" },
  { title: "Final details", badge: "STEP 3 OF 3" },
];

const initialForm = {
  email: "",
  name: "",
  phone: "",
  country: "Pakistan",
  industry: "Business / Finance",
  jobTitle: "",
  company: "",
  datetime: "",
  info: "",
  consent: false,
};

export default function GetStartedModal() {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) setStep(0);
  }, [isOpen]);

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const isLast = step === 2;

  const handleNext = () => {
    if (isLast) {
      alert("Request submitted! We will be in touch.");
      setForm(initialForm);
      closeModal();
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div
      className={`modal-overlay${isOpen ? " active" : ""}`}
      id="modalOverlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-box">
        <button className="modal-close" id="modalClose" aria-label="Close" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-header">
          <h3 id="modalTitle">{steps[step].title}</h3>
          <span id="modalBadge">{steps[step].badge}</span>
        </div>

        <div className="modal-progress" id="modalProgress">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`modal-progress-seg${i <= step ? " filled" : ""}`} />
          ))}
        </div>

        {/* Step 1 */}
        <div className={`modal-step${step === 0 ? " active" : ""}`} id="mStep1">
          <div className="modal-field">
            <label className="modal-label">
              Work email <span>*</span>
            </label>
            <div className="modal-input-icon">
              <i className="fa-regular fa-envelope"></i>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={update("email")}
              />
            </div>
            <p className="modal-hint">Use your business email for faster verification.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`modal-step${step === 1 ? " active" : ""}`} id="mStep2">
          <div className="modal-field">
            <label className="modal-label">
              Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="modal-input"
              value={form.name}
              onChange={update("name")}
            />
          </div>
          <div className="modal-row">
            <div className="modal-field">
              <label className="modal-label">Phone number</label>
              <input
                type="tel"
                placeholder="+966 5xxxxxxxx"
                className="modal-input"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>
            <div className="modal-field">
              <label className="modal-label">
                Country <span>*</span>
              </label>
              <select className="modal-input" value={form.country} onChange={update("country")}>
                <option>Pakistan</option>
                <option>Saudi Arabia</option>
                <option>Egypt</option>
                <option>UAE</option>
                <option>Afghanistan</option>
              </select>
            </div>
          </div>
          <div className="modal-field">
            <label className="modal-label">
              Industry / Sector <span>*</span>
            </label>
            <select className="modal-input" value={form.industry} onChange={update("industry")}>
              <option>Business / Finance</option>
              <option>Government</option>
              <option>Healthcare</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Step 3 */}
        <div className={`modal-step${step === 2 ? " active" : ""}`} id="mStep3">
          <div className="modal-row">
            <div className="modal-field">
              <label className="modal-label">
                Job title <span>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Security Engineer"
                className="modal-input"
                value={form.jobTitle}
                onChange={update("jobTitle")}
              />
            </div>
            <div className="modal-field">
              <label className="modal-label">
                Company <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="modal-input"
                value={form.company}
                onChange={update("company")}
              />
            </div>
          </div>
          <div className="modal-field">
            <label className="modal-label">
              Preferred date and time <span>*</span>
            </label>
            <div className="modal-input-icon">
              <i className="fa-regular fa-calendar"></i>
              <input type="datetime-local" value={form.datetime} onChange={update("datetime")} />
            </div>
            <p className="modal-hint">We'll confirm the final slot by email.</p>
          </div>
          <div className="modal-field">
            <label className="modal-label">Additional information</label>
            <textarea
              className="modal-input"
              rows="3"
              placeholder="Tell us about your goals..."
              value={form.info}
              onChange={update("info")}
            />
          </div>
          <label className="modal-check">
            <input type="checkbox" checked={form.consent} onChange={update("consent")} />
            I agree to receive communications from Diraa about products and services.
          </label>
        </div>

        <div className="modal-btns" id="modalBtns">
          {step > 0 && (
            <button className="modal-btn-back" onClick={() => setStep((s) => s - 1)}>
              <i className="fa-solid fa-chevron-left"></i> Back
            </button>
          )}
          <button className="modal-btn-next" onClick={handleNext}>
            {isLast ? (
              "Submit request"
            ) : (
              <>
                Continue <i className="fa-solid fa-chevron-right"></i>
              </>
            )}
          </button>
        </div>

        <p className="modal-footer-text">
          SECURE &amp; CONFIDENTIAL &bull; <a href="/privacy-policy">PRIVACY POLICY</a>
        </p>
      </div>
    </div>
  );
}
