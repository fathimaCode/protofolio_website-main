import axios from "axios";
import { useState, useEffect } from "react";
import { Website } from "../model/website";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const WebsiteList: React.FC = () => {
    const userid = localStorage.getItem('userid');
    const [proList, setProList] = useState<Website[]>([]);
    const handleDelete =async (id:any)=>{
      try {
       
        const response = await axios.delete(`http://localhost:3001/proroutes/delete/${id}`);
        Swal.fire({
          title: "Deleted",
          text: `${id} is deleted in Pro Builder`,
          icon: "success"
        });

        fetchData();
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
    }



    const fetchData = async () => {
        try {
            const userData = {
                userid: userid
            };
            const response = await axios.post('http://localhost:3001/proroutes/getByuserId', userData);
            const proListData = response.data.data;
            setProList(proListData);
           console.log(proList)
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    };
    useEffect(() => {
       

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <>
            <div className="pro_card">
                <h2>View Website</h2>
              
                <div className="website_card">

       
                <TableContainer component={Paper}>
                   <Table sx={{ minWidth: 120 }} aria-label="simple table">
                     <TableHead>
                       <TableRow>
                        
                         <TableCell>S.No</TableCell>
                         <TableCell align="right">Website Id</TableCell>
                         <TableCell align="right">For whom Created</TableCell>
                         <TableCell align="right">Action</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                     {proList.map((website: Website, index:number) => (

                         <TableRow
                           key={index}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                           <TableCell component="th" scope="row">
                             {index+1}
                           </TableCell>
                           <TableCell align="right">{website._id}</TableCell>
                           <TableCell align="right">{website.name}</TableCell>
                           <TableCell align="right"><Link to={`/mywebsite/${website._id}`} target="_blank" rel="noopener noreferrer">View</Link></TableCell>
                           <TableCell align="right"><span onClick={() => handleDelete(website._id)}>Delete</span> </TableCell>
                           
                         </TableRow>
                       ))}
                     </TableBody>
                   </Table>
                 </TableContainer>
                   

                </div>
               
            </div>
        </>
    )
}

export default WebsiteList;
