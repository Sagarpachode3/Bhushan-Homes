import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="c-wrapper">
    
      <div className="paddings innerWidth flexCenter c-container">
      <h4 style={{color:"#1f3e72"}}>Loan facility available with</h4>
        <img src="./ICICI.jpg" alt="Icici Bank" />
        <img src="./sbi1.jpg" alt="SBI Bank" />
        <img src="./BOB3.png" alt="Baroda Bank" />
        <img src="./IDFC.jpg" alt="Idfc bank" />
      </div>
    </section>
  );
};

export default Companies;
