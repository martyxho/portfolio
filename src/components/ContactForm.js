import arrow from '../assets/images/arrow.png';

function ContactForm () {
  <button className="contact_form_send" type="submit" value="Send" aria-label="Send your message">
    <div className='link_wrapper'>
      <div className="link">
        <span>Send</span>
      </div>
      <div className="link_arrow">
        <img src={arrow} />
      </div>
    </div>
  </button>

  return (
    <form className="form" action="https://api.web3forms.com/submit" method="POST">
      
      <input type="hidden" name="access_key" value={process.env.REACT_APP_WEBFORM_API_KEY} />
      
      <input aria-label="Enter your name" className="form_name" type='text' name="name" placeholder="Name" required/>
      <input aria-label="Enter your email address" className="form_email" type='email' name="email" placeholder="Email" required/>
      <textarea aria-label="Enter your message" className="form_message" name="message" placeholder="Message" required></textarea>
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <button className="contact_form_send" type="submit" value="Send" aria-label="Send your message">
        <div className='link_wrapper'>
          <div className="link">
            <span>Send</span>
          </div>
          <div className="link_arrow white">
            <img src={arrow} />
          </div>
        </div>
      </button>
    </form>
  )
}

export default ContactForm;