import React from "react";
import "./InvestorCaseStudy.css";



const InvestorCaseStudy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study-investor" aria-labelledby="page-title-investor">
      
        <span>Case Study</span>
        <h1 id="page-title-investor">Investor: Project coming soon...</h1>
        {/* <h1 id="page-title">InGate: Revolutionizing Access Control with app</h1> */}
{/* 
      <p className="case-study-intro">
        InGate is a cutting-edge IoT solution designed to streamline and secure
        access control for residential and commercial properties. By leveraging
        advanced technology, InGate offers a seamless and efficient way to manage
        entry points, enhancing security while providing convenience for users.
      </p> */}

      {/* Add more sections and content as needed */}
    </main>
  );
};

export default InvestorCaseStudy;
