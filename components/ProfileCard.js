"use client";
import ClipboardJS from "clipboard";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProfileCard = () => {
 const [toggle, setToggle] = useState(false);
 useEffect(() => {
  new ClipboardJS(".btn-copy");
 }, []);

 const toggleBtn = () => {
  setToggle(true);
  const timerId = setTimeout(() => {
   setToggle(false);
  }, 700);
  return () => {
   clearTimeout(timerId);
  };
 };

 const socialItems = [
  { id: 1, url: "#", name: "Facebook", icon: "fab fa-facebook" },
  { id: 2, url: "#", name: "Github", icon: "fab fa-github" },
  { id: 3, url: "https://youtube.com/@LLMGem", name: "Youtube", icon: "fab fa-youtube" },
  { id: 3, url: "https://x.com/LLMGem", name: "Twitter", icon: "fab fa-twitter" },
 ];

 return (
  <div className="card profile-card">
   <div className="card-body">
    <div className=" text-center">
     <img 
       src="/assets/img/images/profile-pic-1.jpeg" 
       alt="profile" 
       className="img-fluid rounded profile-img"
       />
    </div>
    <div className="text">
     <h3 className="card-title">Paul Hendricks 👋</h3>
     <p>
      A Passionate <span>Full Stack Developer</span> 🖥️ &amp;{" "}
      <span>Entrepreneur</span> with a strong focus on <span>AI Solutions</span>{" "}
      and a history of working on innovative projects.
     </p>
     <div className="common-button-groups">
      <a className="btn btn-call" href="#">
       <PhoneCallIcon size={20} className="me-2"/>
       Book A Call
      </a>
      <button
       className={`btn btn-copy ${toggle ? "active" : ""}`}
       data-clipboard-text="founder@cleanazcoding.com"
       onClick={() => toggleBtn()}
      >
       <svg
        className="icon"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
         d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
        />
       </svg>
       Copy Email
      </button>
     </div>
     <div className="social-media-icon">
      <ul className="list-unstyled">
       {socialItems.map((item) => (
        <li key={item.id}>
         <Link href={item.url}>
          <i className={item.icon} />
         </Link>{" "}
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
  </div>
 );
};
export default ProfileCard;
