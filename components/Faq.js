"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      title: "What skills should a web developer have?",
      answer:
        "A web developer should be proficient in HTML, CSS, JavaScript, and frameworks like React or NextJS. Knowledge of back-end technologies such as Node.js or Python is also valuable.",
    },
    {
      id: 2,
      title: "What is the role of a web developer in a project?",
      answer:
        "A web developer is responsible for building and maintaining websites and web applications. They ensure the functionality, performance, and responsiveness of the site.",
    },
    {
      id: 3,
      title: "What is the difference between front-end and back-end development?",
      answer:
        "Front-end development focuses on the user interface and experience, using technologies like HTML, CSS, and JavaScript. Back-end development involves server-side logic, databases, and application integration.",
    },
    {
      id: 4,
      title: "How do web developers keep up with the latest trends?",
      answer:
        "Web developers keep up with trends through continuous learning, attending workshops, participating in online communities, and experimenting with new tools and technologies.",
    },
    {
      id: 5,
      title: "What tools do web developers use in their workflow?",
      answer:
        "Web developers use code editors like VS Code, version control systems like Git, task runners, and various testing and debugging tools to streamline their workflow.",
    },
  ];

  const [active, setActive] = useState("collapse1");

  return (
    <div className="frequently-asked-questions">
      <h2 className="main-common-title">Frequently Asked Questions</h2>
      <div className="frequently-asked-questions-main">
        <Accordion className="accordion" defaultActiveKey={active}>
          {faqItems.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h4 className="accordion-header">
                <Accordion.Toggle
                  as={"button"}
                  className={`accordion-button ${
                    `collapse${item.id}` == active ? "" : "collapsed"
                  }`}
                  eventKey={`collapse${item.id}`}
                  onClick={() =>
                    setActive(
                      active == `collapse${item.id}`
                        ? null
                        : `collapse${item.id}`
                    )
                  }
                >
                  {item.title}
                  <span className="ms-auto">
                    <span className="icon ms-4">
                      <img
                        className="icon-plus"
                        src="assets/img/icons/plus.svg"
                        alt="plus"
                      />
                      <img
                        className="icon-minus d-none"
                        src="assets/img/icons/minus.svg"
                        alt="minus"
                      />
                    </span>
                  </span>
                </Accordion.Toggle>
              </h4>
              <Accordion.Collapse eventKey={`collapse${item.id}`}>
                <div className="accordion-body">
                  <p>
                    {item.answer}
                  </p>
                </div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default Faq;
