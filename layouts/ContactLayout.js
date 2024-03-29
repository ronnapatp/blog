import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
function ContactForm() {
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM_ID}`)
  if (state.succeeded) {
    return <p>Thanks for contact!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="mt-1 block w-full rounded-md dark:bg-slate-800 border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <span>Message</span>
      <textarea
        id="message"
        name="message"
        className="mt-1 py-6 block w-full rounded-md dark:bg-slate-800 border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="w-full bg-red-500 dark:bg-red-400 dark:text-white rounded-md mt-5 py-2 font-bold"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App
