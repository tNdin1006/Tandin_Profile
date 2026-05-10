import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';

const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5000" 
  : "https://tandin-api.vercel.app";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- DEBUG ALERT ---
    // If you don't see this alert, the function isn't being called at all.
    alert("System: Submit function triggered!"); 

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you! Your message has been sent to Tandin Wangchuk.',
          icon: 'success',
          confirmButtonColor: '#4299E1',
          timer: 3000
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        throw new Error();
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      Swal.fire({ 
        title: 'Error!', 
        text: 'Could not connect to server. Check Console for details.', 
        icon: 'error' 
      });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tndin-wangchuk-a50261218/',
      gradient: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)'
    },
    {
      icon: <FiInstagram />,
      label: 'Instagram',
      url: 'https://instagram.com/mtf_thug',
      gradient: 'linear-gradient(135deg, #E4405F 0%, #FD1D1D 50%, #F77737 100%)'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      url: 'https://github.com/tNdin1006',
      gradient: 'linear-gradient(135deg, #333333 0%, #666666 100%)'
    },
    {
      icon: <FiMail />,
      label: 'Email',
      url: 'mailto:tandiny_wangchuk@srmus.edu.in',
      gradient: 'linear-gradient(135deg, #9F7AEA 0%, #805AD5 100%)'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Feel free to reach out!</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-form-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="connect-title">Send a Message</h3>
            
            {/* The form tag MUST have onSubmit */}
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="input-group">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              {/* The button MUST have type="submit" */}
              <button type="submit" className="modern-submit-btn">
                Send Message <FiSend style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </motion.div>

          <motion.div className="connect-section-wrapper" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="connect-section-container">
              <h3 className="connect-title">Connect With Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card" style={{ background: social.gradient }} whileHover={{ scale: 1.05, y: -5 }}>
                    <div className="social-icon-wrapper">{social.icon}</div>
                    <span className="social-label">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;