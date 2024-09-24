import React from "react";

import ThankYouLayout from "@/layout/ThankYouLayout";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export default function page() {
 return (
  <ThankYouLayout>
   <div className="d-flex align-items-center justify-content-center card mt-4 mx-3">
    <div className="text-center p-4 w-75">
     <h1 className="main-title mb-2">
      <span style={{ color: "#4770ff" }}>Thank You!</span>
     </h1>
     <CheckCircle2 size={40} className="mb-2" style={{ color: "#4770ff" }}/>
     <p className="mb-4">
      Thank you for reaching out! I’ve received your message and will contact
      you soon to discuss your needs. I appreciate your patience!
     </p>

     <Link href="/">
      <button type="button" className="btn btn-primary">
       Back to Homepage 🏠
      </button>
     </Link>
    </div>
   </div>
  </ThankYouLayout>
 );
}
