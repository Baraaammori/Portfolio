import React, { useState } from 'react';
import Input from "../components/Input";
import emailjs from '@emailjs/browser';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    details: ''
  });
  
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailJS = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // EmailJS Credentials
    const serviceId = 'service_z1tm7q2';
    const templateId = 'template_blj9q5h'; 
    const publicKey = 'HdtulPjorVs_wqiel'; 
    
    // Ensure these keys match the {{variables}} inside your EmailJS Template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      timeline: formData.timeline,
      message: formData.details,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', timeline: '', details: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="w-full min-h-[70vh] flex flex-col justify-center items-center py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
        <div>
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">Let's Connect</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
             Ready to start your next project? Cultivating connections and building great products starts with a message.
        </p>         
    </div>
    <div className="w-full flex justify-center items-center">
      <form className="w-full max-w-4xl glass-panel p-8 rounded-3xl" onSubmit={handleEmailJS}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name="name" value={formData.name} onChange={handleChange} text="Your Name" />
          <Input name="email" value={formData.email} onChange={handleChange} text="Email Address" />
          <Input name="phone" value={formData.phone} onChange={handleChange} text="Phone Number" />
          <Input name="timeline" value={formData.timeline} onChange={handleChange} text="Timeline" />
          <div className="md:col-span-2">
            <Input name="details" value={formData.details} onChange={handleChange} text="Project Details" className="h-full min-h-[160px]" isTextArea={true} />
          </div>
        </div>
        
        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center font-medium">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center font-medium">
            Something went wrong. Please check your EmailJS configuration.
          </div>
        )}

        <div className="w-full flex justify-center mt-8">
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`text-white px-10 py-3.5 rounded-full font-bold shadow-lg transform transition-all duration-300 w-full sm:w-auto
                ${status === 'sending' 
                  ? 'bg-slate-600 cursor-not-allowed overflow-hidden' 
                  : 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/20 hover:-translate-y-1'}`}
            >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
        </div>
      </form>
    </div>

    </section>
  );
}

export default ContactMe;