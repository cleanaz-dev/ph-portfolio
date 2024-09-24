import Faq from "@/components/Faq";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import { contactForm } from "@/utility/actions";

const page = () => {
  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card contact-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Let's 👋 <span>Work</span> Together
                </h1>
                <p>
                I'm here to help if you're looking for a web developer to turn your vision into a functional, dynamic website or a tech partner to elevate your business with modern web solutions.
                </p>
              </div>
            </div>
            <div className="contact-area">
              <div className="leave-comments-area">
                <div className="comments-box">
                  <form
                    id="contact-form"
                    action={contactForm}
                  >
                    <div className="row gx-3">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Name</label>
                          <input
                            name="name"
                            required=""
                            type="text"
                            className="form-control shadow-none"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Email</label>
                          <input
                            name="email"
                            required=""
                            type="email"
                            className="form-control shadow-none"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Subject</label>
                          <input
                            name="subject"
                            required=""
                            type="text"
                            className="form-control shadow-none"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Budget</label>
                          <select
                            name="budget"
                            required=""
                            className="form-select shadow-none"
                            defaultValue={"select"}
                          >
                            <option disabled={true} value={"select"}>
                              Select budget...
                            </option>
                            <option value="$5000">$5000</option>
                            <option value="$5000 - $1000">
                              $5000 - $10000
                            </option>
                            <option value="$10000 - $2000">
                              $10000 - $20000
                            </option>
                            <option value="$20000">$20000+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-4">
                          <label className="form-label">Message</label>
                          <textarea
                            name="message"
                            className="form-control shadow-none"
                            rows={4}
                            placeholder="Type details about your inquiry"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="submit-btn" type="submit">
                          Send Message
                          
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
              <div className="contact-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.673275332155!2d-79.38317808456557!3d43.65442467922043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d46ae14563%3A0xb3f7c9b2801c05e1!2sDowntown%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1693816360585!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
