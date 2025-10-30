import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

const Result = ({ type, message }: { type: 'success' | 'error', message: string }) => {
  return (
    <Alert variant={type} className={`${type === 'success' ? 'success-msg' : 'error-msg'}`}>
      {message}
    </Alert>
  );
};

const FormTwo = () => {
  const form = useRef(null);
  const [result, setResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      if (form.current) {
        // Replace these with your actual EmailJS credentials
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

        const response = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        
        if (response.status === 200) {
          setResult({
            type: 'success',
            message: 'Your message has been successfully sent! We will get back to you within 24 hours.'
          });
          if (form.current) {
            (form.current as HTMLFormElement).reset();
          }
        } else {
          throw new Error('Failed to send email');
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResult({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at contact@haizomstudio.com'
      });
    } finally {
      setIsLoading(false);
    }

    // Auto-hide success message after 5 seconds
    if (result?.type === 'success') {
      setTimeout(() => {
        setResult(null);
      }, 5000);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="contact-name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="contact-email" required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" name="contact-phone" required />
      </div>
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea className="form-control" name="contact-message" rows={4}></textarea>
      </div>
      <div className="form-group">
        <button 
          type="submit" 
          className="axil-btn btn-fill-primary btn-fluid btn-primary" 
          name="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Get Pricing Now'}
        </button>
      </div>
      <div className="form-group">
        {result && <Result type={result.type} message={result.message} />}
      </div>
    </form>
  );
};

export default FormTwo;
