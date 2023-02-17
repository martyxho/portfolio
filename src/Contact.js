import ContactForm from "./components/ContactForm";
import ContactLinks from "./components/ContactLinks";

function Contact() {
  return (
    <section className="contact">
      <div className="contact_wrapper">
      <h1 className="contact_title">
        <span>03.</span>
        <span>Contact</span>
      </h1>
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