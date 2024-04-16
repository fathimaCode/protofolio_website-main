import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../protofolio.css'
import axios from "axios";
import PROHEADER from "../components/pro_header";
import PROMAIN from "../components/pro_main";

import Contact from "../components/Contact";

import { myprojects } from "../model/myprojects";

const ProHome: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  console.log("about"+id)
  let accessid = localStorage.getItem("accessuserid")
  const [username, setUsername] = useState('');
  const [userid, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [keySkill, setkeySkill] = useState('');
    const [bgcolor, setbgcolor] = useState('');
    const [pro, setProject] = useState<myprojects[]>([]);
    const [aboutme, setaboutme] = useState('');
    const [insta, setinsta] = useState('');
    const [link, setlink] = useState('');
    const [gender, setgender] = useState('');
    const [programLanguage, setprogramLanguage] = useState('');
    const [experience, setexperience] = useState('');
    const [location, setlocation] = useState('');
    const [profile, setprofile] =useState('');
    const [cv, setcv] = useState('');
   
    const [showContact, setShowContact] = useState(false); 
    const toggleContact = () => {
      setShowContact(!showContact); // Toggle the visibility of Contact component
    };

  const fetchData = async () => {
    
    try {
      const response = await axios.get(`http://localhost:3001/proroutes/get/${accessid}`);
      console.log(`http://localhost:3001/proroutes/get/${accessid}`)
      const proListData = response.data.data;
      console.log(proListData)
      setUsername(proListData.name)
      setEmail(proListData.email)
      setTitle(proListData.title)
      setContact(proListData.contact)
      setkeySkill(proListData.keySkill)
      setbgcolor(proListData.bgcolor)
      setaboutme(proListData.aboutme)
      setinsta(proListData.insta)
      setlink(proListData.link)
      setUserId(proListData.userid)
      setgender(proListData.gender)
      setexperience(proListData.experience)
      setprogramLanguage(proListData.programLanguage)
      setlocation(proListData.location)
      setprofile(proListData.profileImage)
      setcv(proListData.cv)
      localStorage.setItem("myemail",proListData.email)
     
      
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); 
  const logo = username?username.substring(0,2):'ER'
  return (
    <div className="pro_body">
      
      <PROHEADER logoName={logo} bgColor={bgcolor} gender={gender} linkendin={link} insta={insta} userid={accessid||''}  toggleContact={toggleContact} />
    
      <PROMAIN aboutme={aboutme} name={username} keyskill={keySkill} cv={cv} title={title} experience={experience} profile={profile} bgcolor={bgcolor} pgm={programLanguage}/>
      
    </div>
  );
};

export default ProHome;
