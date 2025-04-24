import React from 'react';

const DoctorSection = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      img: "https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1370.jpg?w=826",
      desc: "Expert in general dentistry and hygiene."
    },
    {
      name: "Dr. Jane Smith",
      img: "https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1381.jpg?w=826",
      desc: "Specialist in braces and orthodontics."
    },
    {
      name: "Dr. Emily White",
      img: "https://i.etsystatic.com/19468294/r/il/ec69f9/5951053912/il_1588xN.5951053912_1weo.jpg",
      desc: "Skilled in root canals and smile design."
    },
    {
      name: "Dr. Michael Brown",
      img: "https://i.pinimg.com/736x/92/ac/50/92ac504a1f8d0e1b3d37d867dfc2db25.jpg",
      desc: "Focuses on wisdom teeth & surgery."
    }
  ];

  return (
    <div className="doctor-section">
      <h2>Meet Our Doctors</h2>
      <div className="doctor-cards">
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <img src={doc.img} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p>{doc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSection;
