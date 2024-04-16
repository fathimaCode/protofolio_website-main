import React from "react";
import { Link } from "react-router-dom";

interface Props {
  logoName: string;
  bgColor: string;
  gender: string;
  linkendin: string;
  insta: string;
  userid: string;
  toggleContact: () => void; // Function to toggle visibility of Contact component
}

const PROHEADER: React.FC<Props> = ({
  logoName,
  bgColor,
  gender,
  linkendin,
  insta,
  userid,
  toggleContact,
}) => {
  return (
    <>
      <div className="builder_navbar">
        <h1>Protofolio_builder</h1>
        <div className="menu"><a href={`/proHome/${userid}`}>Home</a></div>
          <div className="menu"><a href={`/proAbout/${userid}`}>About</a></div>
          <div className="menu"><a href={`/proContact/${userid}`}>Contact</a></div>
        <div className="genderReveal">
          {gender === "female" ? (
            <img
              width={80}
              height={80}
              src={`http://localhost:3001/protofolio_files_images/icons/gender.png`}
              alt=""
            />
          ) : (
            <img
              width={80}
              height={80}
              src={`http://localhost:3001/protofolio_files_images/icons/gender2.png`}
              alt=""
            />
          )}
          
        </div>
        <div className="social">
         
          
       
          <Link to="/projects" target="_blank" rel="noopener noreferrer">
            <img
              width={50}
              height={50}
              src={`http://localhost:3001/protofolio_files_images/icons/pro.png`}
              alt=""
            />
          </Link>
          <a href={`${linkendin}`}>
            <img
              width={50}
              height={50}
              src={`http://localhost:3001/protofolio_files_images/icons/link.png`}
              alt=""
            />
          </a>
          <a href={`${insta}`}>
            <img
              height={50}
              width={80}
              src={`http://localhost:3001/protofolio_files_images/icons/insta.png`}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PROHEADER;
