import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../services/api';
import './index.css';


  export default function SimpleTable() {
    
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.warning,
          color: theme.palette.info,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.disabled,
          },
        },
      }))(TableRow);
   
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
    

      const [rows, setRows] = useState([]);
      useEffect(()=>{
        api.get('people').then(response => {
            setRows(response.data.results);
            console.log(response.data.results)})
      },[])

    const classes = useStyles();

    return (
        <div className="wrapTable">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nome</StyledTableCell>
                    <StyledTableCell align="right">Altura</StyledTableCell>
                    <StyledTableCell align="right">Peso</StyledTableCell>
                    <StyledTableCell align="right">Cor do Cabelo</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.height}</StyledTableCell>
                      <StyledTableCell align="right">{row.mass}</StyledTableCell>
                      <StyledTableCell align="right">{row.hair_color}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          );
    }