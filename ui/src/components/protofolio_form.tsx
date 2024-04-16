import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ChromePicker } from 'react-color';
import { ColorPicker, useColor } from 'react-color-palette';
import Multiselect from 'multiselect-react-dropdown';
const ProtoFolioForm: React.FC = () => {
    const redirect= useNavigate();
    const userid = localStorage.getItem('userid');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsid, setSelectedOptionsId] = useState([]);
    const [keySkill, setkeySkill] = useState('');
    const [bgcolor, setBgColor] = useState("#121212"); 
    const [aboutme, setaboutme] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [instagram, setinstagram] = useState('');
    const [gender, setgender] =  useState('');
    const [project, setProjects] = useState([{title:'',description:'', file: null, fileName: ''}]);
    const [programLanguage, setprogramLanguage] = useState('');
    const [experience, setexperience] = useState('');
    const [location, setlocation] = useState('');
    const [profile, setprofile] = useState<File | null>(null);
    const [cv, setcv] = useState<File | null>(null);
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      };

      const keySkillOptions = [
      
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "React" },
        { id: 5, name: "Angular" },
        { id: 6, name: "Vue.js" },
        { id: 7, name: "Node.js" },
        { id: 8, name: "Express.js" },
        // Mobile Development
        { id: 9, name: "Flutter" },
        { id: 10, name: "React Native" },
        { id: 11, name: "Swift" },
        { id: 12, name: "Kotlin" },
      
        { id: 13, name: "Copywriting" },
        { id: 14, name: "Content Writing" },
        { id: 15, name: "Technical Writing" },
        { id: 16, name: "Blogging" },
        // Hardware
        { id: 17, name: "Microcontrollers" },
        { id: 18, name: "Embedded Systems" },
        { id: 19, name: "Arduino" },
        { id: 20, name: "Raspberry Pi" },
     
    ];
    
      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
      const handletitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
      const handleBgColorChange = (color: any) => { 
        setBgColor(color.hex);
    };
      const handlecontactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
      };
      const handlekeySkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setkeySkill(e.target.value);
      };

     
      const uploadFile = async(file: any)=>{
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            return response.data; // Assuming the server responds with some data
          } catch (error) {
            console.error('Error uploading file:', error);
            throw error; // Rethrow the error to handle it in the calling code
          }
      }
      const handleaboutmeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setaboutme(e.target.value);
      };
      const handlegenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setgender(e.target.value);
      };
      const handleprogramLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setprogramLanguage(e.target.value);
      };

      const handleexperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setexperience(e.target.value);
      };
      const handlelocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setlocation(e.target.value);
      };
      const handleprofileFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setprofile(event.target.files[0]);
        }
      };
      const handleCVFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setcv(event.target.files[0]);
        }
      };
      const updateProject = () => {
        const formData = new FormData();
        formData.append('email', email);
        project.forEach((projectData, index) => {

            let pro_form = {
              email:email,
              title:projectData.title,
              description:projectData.description,
              fileName:projectData.fileName|| ''
            }
            try {
              axios
              .post('http://localhost:3001/project_routes/create', pro_form)
              .then((response: { data: any; }) => {
                console.log(response.data)
                uploadFile(projectData.file)
              })
              .catch((error: any) => {
                // Handle error here
                console.error('There was a problem creating the user:', error);
                
              });
          } catch (error) {
              console.error('Error uploading image:', error);
          }
        });
   

        
    };
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProject()
        const protofolio_data = {
          name:username,
          email:email,
          profileImage:profile?profile.name:'',
          title:title,
          keySkill:selectedOptionsid,
          aboutme:aboutme,
          bgcolor:bgcolor,
          gender:gender,
          contact:contact,
          programmingLanguage:"",
          cv:cv ? cv.name : '',
          location:location,
          experience:experience,
          insta:instagram,
          link:linkedin,
          userid:userid
          }
          try {
              axios
              .post('http://localhost:3001/proroutes/create', protofolio_data)
              .then((response: { data: any; }) => {
                uploadFile(profile)
              uploadFile(cv)
            
                Swal.fire({
                    title: "Thank You",
                    text: `new website created in Pro Builder`,
                    icon: "success"
                  });
               redirect('/dashboard')
                console.log('pro info:!', response.data);
              })
              .catch((error: any) => {
                // Handle error here
                console.error('There was a problem creating the user:', error);
                
              });
          } catch (error) {
              console.error('Error uploading image:', error);
          }
       
    }
  function handleProject(index: number, e: React.ChangeEvent<HTMLInputElement>): void {
    const {name,value,files} = e.target
    
      const createProject = [...project]

      if(files){
        createProject[index] = {
          ...createProject[index], [name]:files[0],fileName:files[0].name
        }
       
      }
      else{
        createProject[index] = {
          ...createProject[index], [name]:value
        }
      }
     
      setProjects(createProject)
  }
  const addProject = () => {
    setProjects([...project, { title: '', description: '',file:null,fileName:'' }]);
    console.log("line 39:")
    console.log(project)
};
  function multiChangeHandler(selectedList: any, selectedItem: any): void {
    const selectedIds = selectedList.map((item: any) => item.id).join(',');
    setSelectedOptions(selectedList);
    setSelectedOptionsId(selectedIds);
    console.log("Selected Option IDs:", selectedIds);
   
  }

  function handleInstagramChange(event: ChangeEvent<HTMLInputElement>): void {
    setinstagram(event.target.value);
  }

  function handleLinkendinChange(event: ChangeEvent<HTMLInputElement>): void {
    setlinkedin(event.target.value);
  }

    return (
        <>
            <div className="pro_card">
                <h2>New Protofolio</h2>
                <div className='builder_forms'>
                <form onSubmit={handleSubmit} >
                  <div className='builder_user'>
                  <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder='Username'

                        />
                         <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='email'

                        />
                        
                         <input
                            type="text"
                            id="contact"
                            value={contact}
                            onChange={handlecontactChange}
                            placeholder='contact'

                        /> 
                        <input
                            type="text"
                            id="experience"
                            value={instagram}
                            onChange={handleInstagramChange}
                            placeholder='Instagram Profile link'

                        />
                          <input
                            type="text"
                            id="experience"
                            value={experience}
                            onChange={handleexperienceChange}
                            placeholder='experience'

                        />
                         <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={handlelocationChange}
                            placeholder='location'

                        />
                          <input type="file" name="image" placeholder='Upload Profile Picture'   className='profileupload' onChange={handleprofileFileChange}/>
                          <input type="file" className='cvupload' name="image" placeholder='Upload CV' onChange={handleCVFileChange} />
                  
                  </div>
                  <div className='builder_profile'>
                       <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handletitleChange}
                            placeholder='title'

                        />

                          <input
                            type="text"
                            id="experience"
                            value={linkedin}
                            onChange={handleLinkendinChange}
                            placeholder='Linkendin Profile link'

                        />
                         <select id="gender"  value={gender} onChange={handlegenderChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                          
                        
                          
                        <div className='skkill'>
                        <Multiselect 
                       options={keySkillOptions}
                       selectedValues={selectedOptions}
                       displayValue='name'
                       className='keySkillclass'
                       onSelect={multiChangeHandler}
                       />
                        </div>
   
                        <div className='colorpicker'>
                        <ChromePicker 
                        color={bgcolor} onChange={handleBgColorChange} />
                        </div>
                        <input
                            type="text"
                            id="bgcolor"
                            value={bgcolor}
                            onChange={(e) => setBgColor(e.target.value)}
                            placeholder='Background Color'
                        />

                          <textarea

                          id="aboutme"
                          value={aboutme}
                          onChange={handleaboutmeChange}
                          placeholder='aboutme'

                          />
                          <button type="button" className='addProject' onClick={addProject}>Add Project</button>
       
                          <div className='projectInfo' >
                              {project.map((item,index)=>(
                                <div key={index} >
                                  <input type="text"  name='title'  onChange={(e)=>handleProject(index,e)} placeholder={`project ${index+1} Title`}/>
                                  <input type="text"  name='description'  onChange={(e)=>handleProject(index,e)} placeholder={`project ${index+1} Description`}/>
                                  <input
                                              type="file"
                                              name="file"
                                              onChange={(e) => handleProject(index, e)}
                                          />
                                 </div>
                                ))}
                           </div>

                  </div>
                  <button type="submit" className='pro_website_btn'>Create Protofolio Website</button>
                </form>
                </div>
               

            </div>
        </>
    )
}

export default ProtoFolioForm