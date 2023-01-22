import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Chartjs from "./Chartjs";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Expanse = () => {
  const [isTrue,setIsTrue]=useState(true);
  const selector = useSelector((state) => state);
  const data = selector.expance.totalExpanse;
  console.log(data);
  return (
    <div>
      <button
        style={{
          margin: "10px 0px 0px 10px",
          padding: "10px",
          background: "light-grey",
        }}
        onClick={() => setIsTrue(!isTrue)}
      >
        {isTrue?'Show Chart':'Hide Chart'}
      </button>
      <h1 style={{ textAlign: "center" }}>Expances</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {item.category}
                </StyledTableCell>
                <StyledTableCell>{item.date}</StyledTableCell>
                <StyledTableCell>$ {item.expanse}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isTrue?null:<Chartjs expanse={data}/>}
    </div>
  );
};

export default Expanse;
