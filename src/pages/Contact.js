import './Contact.css';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaTiktok, 
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaYoutube 
} from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      "service_04krrk4",      
      "template_6tylwqp",    
      data,
      "TrtI9U_9dFF7-Npax"          
    )
    .then((response) => {
      alert('Message sent successfully!');
      reset();
    }, (error) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind or want to discuss opportunities? Reach out!</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Full Name <span className="required">*</span></label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              {...register('subject')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              id="message"
              rows="6"
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  value: 20,
                  message: 'Message must be at least 20 characters'
                }
              })}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <span className="btn-icon">→</span>
          </button>
        </form>

        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <a href="s.pahasara2001@gmail.com">s.pahasara2001@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <a href="tel:+94765509618">+94 765509618</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>No.166/2/3, Miriswatta Rd, Mahavila, Panadura, Sri Lanka</p>
            </div>
          </div>

          <div className="social-icons">
          <a href="https://www.facebook.com/sandunpahasara.weerasinghe?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" title="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/sandun-pahasara-weerasinghe-b03462306/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" title="LinkedIn" />
          </a>
          <a href="https://github.com/SandunPahasara" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" title="GitHub" />
          </a>
          <a href="https://www.instagram.com/sp_pikka?igsh=ZjU2MTUzcTgzNnFo&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" title="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@sp_pikka?_t=ZS-8vkC83L2uHf&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon" title="TikTok" />
          </a>
          <a href="https://youtube.com/@sandunpahasara?si=OKpWn-Qd7IdBtoyj" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" title="YouTube" />
          </a>
            </div>

          <div className="availability">
            <h4>Availability</h4>
            <p>Monday - Friday: 9am - 5pm (IST)</p>
            <p>Response time: Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;