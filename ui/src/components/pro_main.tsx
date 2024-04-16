
interface Props {
    name: string;
    title: string;
    profile: string;
    experience: string;
    bgcolor: string;
    keyskill: string;
    pgm: string;
    aboutme: string;
    cv: string;
    
  }
const PROMAIN: React.FC<Props> = ({ name,title ,profile ,experience,bgcolor,keyskill,pgm,aboutme,cv }) => {
  const myKeySkills = keyskill.split(',');
  const handleDownloadCV = () => {
     
    const downloadLink = document.createElement('a');
    downloadLink.href = `http://localhost:3001/protofolio_files_images/${cv}`;
    downloadLink.download = 'CV.pdf'; // Specify the desired filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
  return (
    <>
    <div className="builder_body">
      <div className="builder_userInfo">
        <div className="builder_userimage">
            <img  src={`http://localhost:3001/protofolio_files_images/${profile}`} alt="" />
        </div>
        <div className="builder_basicinfo">
          <h1>Hello! My Name is  <span>{name}</span></h1>
         
          <h1>{title}</h1>
          <h2>Total Working Experience: {experience}</h2>
          <h3>My Skills:</h3>
          <div className="skill_grid"> 
        {myKeySkills.map((item, index) => (
           <img   key={index} height={150} width={150} src={`http://localhost:3001/protofolio_files_images/icons/${item}.png`} alt="" />
         
        ))}
      </div>
          
       {/*    <button className="downloadBtn" style={{backgroundColor:bgcolor}} onClick={handleDownloadCV}>Download CV</button> */}
        </div>
      </div>
    </div>
  
    </>
  )
}

export default PROMAIN