import Awards from "@/components/Awards";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";
import ServiceItem from "@/components/ServiceItem";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const serviceItems = [
    { id: 1, icon: "/assets/img/icons/responsive.svg", title: "Responsive" },
    { id: 2, icon: "/assets/img/icons/smartphone.svg", title: "Mobile App" },
    {
      id: 3,
      icon: "/assets/img/icons/edit_note.svg",
      title: "Content Generation",
    },
    { id: 4, icon: "/assets/img/icons/branding.svg", title: "Branding" },
    { id: 5, icon: "/assets/img/icons/phone.svg", title: "AI Voice Assistant " },
    { id: 6, icon: "/assets/img/icons/messages.svg", title: "AI Chat Assistant" },
    {
      id: 7,
      icon: "/assets/img/icons/code.svg",
      title: "Web Development",
    },
    { id: 8, icon: "/assets/img/icons/visibility.svg", title: "AI Visualization" },
  ];
  return (
    <BentoFolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Services I <span>Offered</span>
                </h1>
                <p>
                Transforming Ideas into Innovative Reality: <b>Elevate </b>Your Vision with <b>Full-Stack Development</b> and <b>AI Integration Services!</b>
                </p>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Hire
                </span>
              </div>
            </div>
            <div className="services">
              <div className="row g-4">
                <ServiceItem items={serviceItems} />
              </div>
              <div className="block-image">
                <img
                  src="assets/img/images/coding.jpg"
                  alt="blog-img-1"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            {/* <Brands /> */}
            {/* <Testimonial /> */}
            {/* <Awards /> */}
            <Faq />
            <WorkTogether />
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
