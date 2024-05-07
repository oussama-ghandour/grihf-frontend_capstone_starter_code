import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ReportsForm() {
  const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const files = event.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  // Function to handle report viewing
  const handleView = (filename) => {
    const file = uploadedFiles.find((file) => file.name === filename);
    if (file) {
      // Open the file in a new tab
      window.open(URL.createObjectURL(file), "_blank");
    }
  };

  return (
    <div>
      <Table style={{ marginTop: "200px", width: "70%", marginLeft: "100px" }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#42a5f5",
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
                align: "center",
              }}
            >
              S.No.
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#42a5f5",
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              }}
              align="center"
            >
              Doctor Name
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#42a5f5",
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              }}
              align="center"
            >
              Doctor Speciality
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#42a5f5",
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              }}
              align="center"
            >
              View Report
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#42a5f5",
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              }}
              align="center"
            >
              Upload Report
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storedDoctorData.map((doctor, index) => (
            <TableRow key={doctor.name}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{doctor.name}</TableCell>
              <TableCell align="center">{doctor.speciality}</TableCell>
              <TableCell align="center">
                {/* View Report Button */}
                <button onClick={() => handleView(doctor.reportFilename)}>
                  View
                </button>
              </TableCell>
              <TableCell align="center">
                {/* Upload Report Button */}
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileUpload}
                    multiple
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReportsForm;

