import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
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
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="Left">Name</TableCell>
                <TableCell align="right">Altura</TableCell>
                <TableCell align="right">Peso</TableCell>
                <TableCell align="right">Cor do Cabelo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.height}</TableCell>
                  <TableCell align="right">{row.mass}</TableCell>
                  <TableCell align="right">{row.hair_color}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
    }