import ContactForm from "./components/ContactForm";
import ContactLinks from "./components/ContactLinks";
import SectionTitle from "./components/SectionTitle";

function Contact() {
  return (
    <section className="contact">
      <div className="contact_wrapper">
      <SectionTitle classname='contact_title' num='03.' title='Contact' />
      <p className="contact_p">
        Currently looking for a good opportunity. Send me a message and I will get back to you!
      </p>
      <div className="form_wrapper">
        <ContactLinks />
        <ContactForm />
      </div>
      </div>
    </section>
  )
}

export default Contact;