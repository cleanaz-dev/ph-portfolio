import Shape from "@/components/Shape";
import ImageView from "@/components/popup/ImageView";
import { Fragment } from "react";
import Header from "./Header";

const BentoFolioLayout = ({ children, homePage = false }) => {
 return (
  <Fragment>
   <ImageView />
   <Header />
   <main className="d-flex flex-column ">
    <section className={homePage ? "home-area" : "content-box-area mt-4"}>
     <div className="d-flex flex-grow-1 align-items-center justify-content-center ">
      {children}
     </div>
     <Shape />
    </section>
   </main>
  </Fragment>
 );
};

export default BentoFolioLayout;
