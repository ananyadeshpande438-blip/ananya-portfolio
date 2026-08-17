import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Configuration Check:');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey ? publicKey.substring(0, 10) + '...' : 'missing');

      if (!serviceId || serviceId === 'your_service_id_here' || 
          !templateId || templateId === 'your_template_id_here' ||
          !publicKey || publicKey === 'your_public_key_here') {
        throw new Error('EmailJS credentials not configured. Please check .env file.');
      }

      console.log('Sending email with data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      console.log('EmailJS Response:', response);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      console.error('EmailJS Error Details:', err);
      console.error('Error text:', err.text);
      console.error('Error status:', err.status);
      
      if (err.text && err.text.includes('Private key')) {
        setError('Configuration error: Private key detected. Please use Public Key only.');
      } else if (err.text && err.text.includes('service_id')) {
        setError('Configuration error: Invalid Service ID. Please check your EmailJS Service ID.');
      } else if (err.text && err.text.includes('template_id')) {
        setError('Configuration error: Invalid Template ID. Please check your EmailJS Template ID.');
      } else {
        setError(`Failed to send message: ${err.text || err.message || 'Unknown error'}. Please try again or contact me directly via email.`);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="CONTACT ME" className="bg-white/40">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's talk about your project!</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#FED7AA] transition-colors group">
              <div className="w-12 h-12 bg-[#FAF7F0] rounded-lg flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500">Email</div>
                <div className="font-medium text-slate-800">{portfolioData.personal.email}</div>
              </div>
            </a>

            <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#FED7AA] transition-colors group">
              <div className="w-12 h-12 bg-[#FAF7F0] rounded-lg flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500">Phone</div>
                <div className="font-medium text-slate-800">{portfolioData.personal.phone}</div>
              </div>
            </a>

            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#FED7AA] transition-colors group">
              <div className="w-12 h-12 bg-[#FAF7F0] rounded-lg flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500">LinkedIn</div>
                <div className="font-medium text-slate-800">Connect with me</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass rounded-xl">
              <div className="w-12 h-12 bg-[#FAF7F0] rounded-lg flex items-center justify-center text-[#F97316]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500">Location</div>
                <div className="font-medium text-slate-800">{portfolioData.personal.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form className="glass p-8 rounded-3xl" onSubmit={handleSubmit}>
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700" role="alert" aria-live="polite">
                <AlertCircle size={20} aria-hidden="true" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700" role="status" aria-live="polite">
                <CheckCircle size={20} aria-hidden="true" />
                <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8E4DC] focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Your Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8E4DC] focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?" 
                required
                aria-required="true"
                aria-invalid={error ? 'true' : 'false'}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8E4DC] focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="Hello Ananya, I would like to talk about..." 
                required
                aria-required="true"
                aria-invalid={error ? 'true' : 'false'}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8E4DC] focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all ${
                isSubmitted 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-gradient-btn'
              } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              aria-live="polite"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" aria-hidden="true"></span> Sending...
                </span>
              ) : isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  <Send size={20} aria-hidden="true" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </SectionWrapper>
  );
}
