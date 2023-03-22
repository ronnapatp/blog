import ContactForm from '@/layouts/ContactLayout'
import { PageSEO } from '@/components/SEO'

export default function Contact() {
  return (
    <div className="md:space-x-6 md:mt-24 md:px-72">
      <PageSEO title={`Contact Form`} description="Contact me via form" />
      <div className="pt-6 pb-12 space-x-2 md:space-y-5">
        <h1 className="text-2xl font-extrabold text-center">Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  )
}
