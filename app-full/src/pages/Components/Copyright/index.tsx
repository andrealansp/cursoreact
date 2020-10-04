import React from 'react'

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright : React.FC = () =>{
  return(
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ₢ '}
      <Link color='inherit' href='http://andrealves.eng.br'>André Alves</Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
  }

  export default Copyright;