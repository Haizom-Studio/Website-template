import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Result = ({ type, message }: { type: 'success' | 'error', message: string }) => {
  return (
    <Alert variant={type} className={`${type === 'success' ? 'success-msg' : 'error-msg'}`}>
      {message}
    </Alert>
  );
};

const FormTwoAPI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [result, setResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult({
          type: 'success',
          message: 'Your message has been successfully sent! We will get back to you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send email');
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
    <form onSubmit={sendEmail} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input 
          type="tel" 
          className="form-control" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea 
          className="form-control" 
          name="message" 
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <button 
          type="submit" 
          className="axil-btn btn-fill-primary btn-fluid btn-primary" 
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

export default FormTwoAPI;
