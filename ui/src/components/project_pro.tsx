import React, { useEffect, useState } from 'react'
import { myprojects } from '../model/myprojects';
import axios from 'axios';

const PROJECT_PRO: React.FC = () => {
  const email = localStorage.getItem("myemail")
  const [pro, setProject] = useState<myprojects[]>([]);
  console.log(email)
  const fetchData = async () => {
    const userData ={email:email}
    try {
      const response = await axios.post(`http://localhost:3001/project_routes/getByuserId/`,userData);
      const proListData = response.data.data;
      const projects:myprojects[]= proListData
     setProject(projects)
      
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  return (
    <>
    
    <div className='projectList' >
      <h2>Project List</h2>
      <div className='gridItem'>
      {pro.map((items,index)=>(
        <div className='pro_builder_Cards' key={index}>
             
             <img src={`http://localhost:3001/protofolio_files_images/${items.fileName}`} alt="" />
             <h3 className='tit'>{items.title}</h3>
             <span>Description:</span>
             <div className='pro_Des'>
             <span>{items.description}</span>
             </div>
        </div>
       
      ))}
      </div>
     
    </div>
    </>
  )
}

export default PROJECT_PRO