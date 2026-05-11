import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact({ visitorCount }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u7bpvkt",
      "template_dqcq5bc",
      form.current,
      "3pDD4EIADPM-_Mvq3"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <div className="contact-wrapper">

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-content">

          <h2>CONTACT</h2>

          <div className="contact-container">

            {/* LEFT */}
            <div className="contact-info">

              <h3>Contact me!</h3>

              <p className="contact-description">
                새로운 프로젝트나 협업 기회에 언제든 열려 있습니다.
                <br />
                궁금한 점이 있다면 아래 폼이나 메일을 통해 연락주세요.
              </p>

              <div className="info-details">
                <p>📧 kmj020513@gmail.com</p>

                <div className="social-links">
                  <a
                    href="https://github.com/minjeongkim652"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                required
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">

          <p>
            © 2026 Minjeong Kim. All rights reserved.
          </p>

          <div className="visitor-count">
            👀 Visitors : {visitorCount}
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Contact;