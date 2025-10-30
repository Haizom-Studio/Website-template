import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Result = ({ type, message }: { type: 'success' | 'error', message: string }) => {
  return (
    <Alert variant={type} className={`${type === 'success' ? 'success-msg' : 'error-msg'}`}>
      {message}
    </Alert>
  );
};

const FormTwoSimple = () => {
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
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
This message was sent from the Haizom Studio contact form.
      `);

      const mailtoLink = `mailto:contact@haizomstudio.com?subject=${subject}&body=${body}`;
      
      // Open user's default email client
      window.open(mailtoLink, '_blank');
      
      setResult({
        type: 'success',
        message: 'Your default email client has opened with the message pre-filled. Please send the email to complete your inquiry.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setResult({
        type: 'error',
        message: 'There was an error opening your email client. Please contact us directly at contact@haizomstudio.com'
      });
    } finally {
      setIsLoading(false);
    }

    // Auto-hide success message after 8 seconds
    setTimeout(() => {
      setResult(null);
    }, 8000);
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
          {isLoading ? 'Opening Email...' : 'Send via Email'}
        </button>
      </div>
      <div className="form-group">
        {result && <Result type={result.type} message={result.message} />}
      </div>
      <div className="form-group">
        <p style={{ fontSize: '14px', color: '#666', margin: '10px 0 0 0' }}>
          <strong>Alternative:</strong> You can also email us directly at{' '}
          <a href="mailto:contact@haizomstudio.com" style={{ color: '#1c8745' }}>
            contact@haizomstudio.com
          </a>
        </p>
      </div>
    </form>
  );
};

export default FormTwoSimple;
