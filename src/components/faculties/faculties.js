import {FacultiesData , AdvisoryBoard } from "./facultiesdata";
import "./faculties.css";
import React from "react";

const Faculties = () => {
  // Group faculties by role
  const groupedByRole = FacultiesData.reduce((acc, faculty) => {
    if (!acc[faculty.role]) {
      acc[faculty.role] = [];
    }
    acc[faculty.role].push(faculty);
    return acc;
  }, {});

  return (
    <React.Fragment>
      <div className="product-carousel" >
        <section className="faculties-section" id="committee">
        <header className="faculties-heading ">
          Organizing Committee
        </header>
          <br />
          {Object.entries(groupedByRole).map(([role, members], idx) => (
            <div key={idx} className="faculties-group">
              <h3 className="faculties-role-heading">{role}</h3>
              <div className="faculties-row">
                {members.map((faculty, index) => (
                  <div className="faculties-card" key={index}>
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="faculties-image"
                    />
                    <h3 className="faculties-name">{faculty.name}</h3>
                    <div className="faculties-position">{faculty.title}</div>
                  </div>
                ))}
              </div>
              <div className="animated-line" />
            </div>
          ))}
        </section>
      </div>
      <div className="product-carousel" >
        <section className="faculties-section" id="committee">
        <header className="faculties-heading ">
          Advisory Committee
        </header>
          <br />
           <div className="faculties-row">
                {AdvisoryBoard.map((faculty, index) => (
                  <div className="faculties-card" key={index}>
                    <h3 className="faculties-name">{faculty.name}</h3>
                    <div className="faculties-position">{faculty.description}</div>
                  </div>
                ))}
              </div>
              <div className="animated-line" />
        </section>
      </div>
    
    </React.Fragment>
  );
};

export default Faculties;
