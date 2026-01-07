'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EnquiryFormData } from '@/lib/types';
import { FiSend, FiCheckCircle, FiAlertCircle, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>();

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-bold mb-6 shadow-xl">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Get In Touch
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Request a <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Quote</span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Let's discuss how we can help transform your logistics operations
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Contact Card */}
            <div className="relative group bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <FiPhone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Call Us</p>
                      <a href="tel:+919876543210" className="text-white font-semibold text-lg hover:text-cyan-400 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <FiMail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Email Us</p>
                      <a href="mailto:info@suryatransport.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                        info@suryatransport.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                      <FiMapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Visit Us</p>
                      <p className="text-white font-semibold">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-blue-200">Support Available</div>
              </div>
              <div className="relative bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/30 text-center">
                <div className="text-4xl font-black text-indigo-400 mb-2">&lt;24h</div>
                <div className="text-sm text-blue-200">Response Time</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className={`w-full px-5 py-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500 ring-2 ring-red-400/50' : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1 font-semibold">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email',
                        },
                      })}
                      type="email"
                      className={`w-full px-5 py-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500 ring-2 ring-red-400/50' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1 font-semibold">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone required' })}
                      type="tel"
                      className={`w-full px-5 py-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500 ring-2 ring-red-400/50' : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1 font-semibold">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="service">
                    Service Required *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`w-full px-5 py-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                      errors.service ? 'border-red-500 ring-2 ring-red-400/50' : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <option value="" className="bg-slate-900">Select a service</option>
                    <option value="transport" className="bg-slate-900">Long Distance Transport</option>
                    <option value="warehousing" className="bg-slate-900">Warehousing Solutions</option>
                    <option value="express" className="bg-slate-900">Express Delivery</option>
                    <option value="container" className="bg-slate-900">Container Services</option>
                    <option value="maintenance" className="bg-slate-900">Vehicle Maintenance</option>
                    <option value="fleet" className="bg-slate-900">Fleet Management</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1 font-semibold">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className={`w-full px-5 py-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500 ring-2 ring-red-400/50' : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="Tell us about your logistics requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1 font-semibold">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <div className="relative group/btn">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-xl blur opacity-75 group-hover/btn:opacity-100 transition duration-500 animate-pulse" />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 px-6 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <FiSend className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-5 bg-green-500/20 border-2 border-green-400/50 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                    <FiCheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-green-100 font-semibold">
                      Success! We'll contact you within 24 hours.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-5 bg-red-500/20 border-2 border-red-400/50 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                    <FiAlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <p className="text-red-100 font-semibold">
                      Oops! Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
