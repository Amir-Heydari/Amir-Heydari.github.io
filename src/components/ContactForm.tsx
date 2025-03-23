'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      // This is where you would integrate with your backend or form service
      // For demo purposes, we'll just simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', data)
      reset()
      setIsSubmitted(true)
    } catch (err) {
      setError('There was an error submitting your form. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="bg-border/10 backdrop-blur-sm p-8 rounded-lg border border-border">
      <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
          <p className="text-secondary mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center px-4 py-2 bg-border hover:bg-hover text-primary rounded-lg transition-colors duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full p-3 bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent`}
              placeholder="Your name"
              disabled={isSubmitting}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full p-3 bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent`}
              placeholder="Your email"
              disabled={isSubmitting}
              {...register('email', { 
                required: 'Email is required',
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: 'Invalid email address' 
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className={`w-full p-3 bg-background border ${errors.subject ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent`}
              placeholder="Subject of your message"
              disabled={isSubmitting}
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
              <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full p-3 bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent`}
              placeholder="Your message"
              disabled={isSubmitting}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-border hover:bg-hover text-primary rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  )
}