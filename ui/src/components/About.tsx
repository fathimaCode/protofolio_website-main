
interface Props {
    cv: string;
    aboutme: string;
    profile:string;
    bgcolor: string;

  }
  const About: React.FC<Props> = ({ aboutme,bgcolor,profile,cv }) => {
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
    <div className="aboutme" id="#about" style={{backgroundColor:bgcolor}}>
        <h2>About Me</h2>
        <div className="about_container">
            <div className="profileimage">
            <img  src={`http://localhost:3001/protofolio_files_images/${profile}`} alt="" />
            </div>
            <div className="about_content">
                {aboutme}
                <button className="downloadBtn" onClick={handleDownloadCV}>Download CV</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default About