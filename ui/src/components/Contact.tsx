
interface Props {
    
    location: string;
    contact:string;
    bgcolor: string;
    email: string;

  }
  const Contact: React.FC<Props> = ({ email,location,bgcolor,contact}) => {
  return (
    <>
    <div className='Contact'>
       <h2 style={{color:bgcolor}}> Contact Me</h2>
       <div className='contact_info'>
        <div className='contact_image'>
            <img src="../public/contact.png" alt="" />
        </div>
        <div className='contact_details'>
        <span>Email Address: {email}</span>
            <span>contact: {contact}</span>
            <span>location: {location}</span>
        </div>
       </div>
    </div>
    </>
  )
}

export default Contact