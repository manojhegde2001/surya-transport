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
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
            <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Request a <span className="text-purple-600 dark:text-purple-400">Quote</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can help transform your logistics operations
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-800">
                    <FiPhone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-gray-900 dark:text-white font-semibold text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-800">
                    <FiMail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email Us</p>
                    <a href="mailto:info@suryatransport.com" className="text-gray-900 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      info@suryatransport.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-800">
                    <FiMapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Visit Us</p>
                    <p className="text-gray-900 dark:text-white font-semibold">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt;24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2" htmlFor="email">
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
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone required' })}
                      type="tel"
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2" htmlFor="service">
                    Service Required *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.service ? 'border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="transport">Long Distance Transport</option>
                    <option value="warehousing">Warehousing Solutions</option>
                    <option value="express">Express Delivery</option>
                    <option value="container">Container Services</option>
                    <option value="maintenance">Vehicle Maintenance</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Tell us about your logistics requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      Success! We'll contact you within 24 hours.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                    <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-800 dark:text-red-300 font-medium">
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
