import Link from "next/link";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      category: "Inbound Voice Assistant",
      img: "/assets/img/projects/call-az.png",
    },
    {
      id: 2,
      category: "Appointment Booking Service",
      img: "/assets/img/projects/barber-az.png",
    },
  ];
  return (
    <div className="card card-projects h-auto">
      <div className="card-body">
        <h3 className="card-title">
          Recent Projects{" "}
          <Link className="link-btn" href="/portfolio">
            All Projects
            <svg
              className="icon"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h3>
        <div className="projects-main mt-24">
          <div className="row g-4 parent-container">
            {projectItems.map((item) => (
              <div className="col-lg-12" key={item.id}>
                <div className="project-item">
                  <div className="image">
                    <img
                      src={item.img}
                      alt={item.category}
                      className="img-fluid w-100"
                    />
                    <div className="info">
                      <span className="category">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
