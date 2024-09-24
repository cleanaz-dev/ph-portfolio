import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import Link from "next/link";
const page = () => {
 const projectItems = [
  {
   id: 1,
   title: "Ticket Genie",
   subtitle:
    "A standard ticketing app enhanced with Anthropic AI for generating responses based on issues.",
   img: "/assets/img/projects/ticket-genie.png",
   technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "Anthropic AI"],
   url:"https://ticket-genie.vercel.app/"
  },
  {
   id: 2,
   title: "Barber AZ",
   subtitle:
    "Allows users to book appointments via a VoiceFlow chatbot, with email confirmations and AI-driven customer service. Includes an admin dashboard.",
   img: "/assets/img/projects/barber-az.png",
   technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "BlandAI", "VoiceFlow"],
   url:"https://barber-az.vercel.app/"
  },
  {
   id: 3,
   title: "Budget Buddy",
   subtitle:
    "Enables users to set budgets, upload receipts, and receive AI analysis of their spending.",
   img: "/assets/img/projects/budget-buddy.png",
   technologies: ["Next.js", "Prisma", "Clerk", "MongoDB", "Anthropic AI"],
   url:"https://budget-buddy-gamma.vercel.app/"
  },
  {
   id: 4,
   title: "Call AZ",
   subtitle:
    "Manages inbound calls with AI, producing call transcripts, audio URLs, and corresponding tickets, all accessible through a dashboard.",
   img: "/assets/img/projects/call-az.png",
   technologies: ["Next.js", "Prisma","Clerk","MongoDB","Bland AI"],
   url:"https://call-az.vercel.app/"
  },
 ];
 return (
  <BentoFolioLayout>
   <div className="col-xl-8">
    <div className="card content-box-card">
     <div className="card-body portfolio-card">
      <div className="top-info">
       <div className="text">
        <h1 className="main-title">
         Check Out My Latest <span>Projects</span>
        </h1>
        <p>
         I'm here to help if you're looking for a web developer to turn your
         ideas into reality or a technical partner to elevate your business with
         innovative web solutions.
        </p>
       </div>
      </div>
      <div className="portfolio-area">
       <div className="row g-4 parent-container">
        {projectItems.map((item) => (
         <div className="col-lg-12" key={item.id}>
          <div className="portfolio-item">
           <div className="image">
            <img
             src={item.img}
             alt={`project-${item.id}`}
             className="img-fluid w-100"
            />
        
           </div>
           <div className="text">
            <div className="info">
             <Link href="portfolio-details" className="title">
              {item.title}
             </Link>
             <p className="subtitle">{item.subtitle}</p>
             {/* Technologies displayed as badges flowing horizontally */}
             <div className="mt-2 d-flex flex-wrap">
              {item.technologies?.map((tech, index) => (
               <span
                key={index}
                className="badge bg-primary me-2 mb-2"
                style={{ fontSize: "0.85rem", fontWeight: "lighter" }}
               >
                {tech}
               </span>
              ))}
             </div>
            </div>
            <div className="visite-btn">
              <Link href={item.url}><h6 className="">Live</h6></Link>
             {/* <Link href="portfolio-details">Live</Link> */}
            </div>
           </div>
          </div>
         </div>
        ))}
       </div>
      </div>
      <WorkTogether />
     </div>
    </div>
   </div>
  </BentoFolioLayout>
 );
};
export default page;
