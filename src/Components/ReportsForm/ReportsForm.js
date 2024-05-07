import React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";


function ReportsForm() {
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    return (
        <div>
            <Table style={{marginTop:"200px", width:"70%",marginLeft:"100px"}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            backgroundColor:"#42a5f5", 
                            fontFamily:"sans-serif", 
                            fontSize:"16px",
                            fontWeight:"bold",
                            color:"white",
                            align:"center"
                            }}
                        >
                            S.No.
                        </TableCell>
                        <TableCell sx={{
                            backgroundColor:"#42a5f5", 
                            fontFamily:"sans-serif", 
                            fontSize:"16px",
                            fontWeight:"bold",
                            color:"white"
                            }}
                            align="center"
                            >
                            Docter Name
                        </TableCell>
                        <TableCell sx={{
                            backgroundColor:"#42a5f5", 
                            fontFamily:"sans-serif", 
                            fontSize:"16px",
                            fontWeight:"bold",
                            color:"white"
                            }}
                            align="center">
                            Doctor Speciallity
                        </TableCell>
                        <TableCell sx={{
                            backgroundColor:"#42a5f5", 
                            fontFamily:"sans-serif", 
                            fontSize:"16px",
                            fontWeight:"bold",
                            color:"white"
                            }}
                            align="center">
                            View Report
                        </TableCell>
                        <TableCell sx={{
                            backgroundColor:"#42a5f5", 
                            fontFamily:"sans-serif", 
                            fontSize:"16px",
                            fontWeight:"bold",
                            color:"white"
                            }}
                            align="center">
                            Download Report
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {storedDoctorData.map((doctor) => (
                        <TableRow key={doctor.name}>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">{doctor.name}</TableCell>
                            <TableCell align="center">{doctor.speciality}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default ReportsForm;