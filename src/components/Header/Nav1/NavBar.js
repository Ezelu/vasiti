// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';




// export default function NavBar() {
//   return (
//     <div sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{background: 'white', color: 'black'}} elevation={0}>
//         <Toolbar>
//           <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
//             Vasiti
//           </Typography>

//           <div>
//             <Button color="inherit">About Us</Button>
//             <Button color="inherit">Stories</Button>
//             <Button color="inherit">Contact</Button>
//             <Button color="inherit">Login</Button>
//             <Button color="inherit">Sign Up</Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }





































import * as React from 'react';
import './NavBar.css';
import { Container, Button } from '@mui/material';




export default function NavBar() {
  return (
    <Container>
      <div className='container'>
        <aside className='title'>
          <h1> Vasiti.<small>com</small> </h1>
        </aside>

        <aside className='nav'>
          <ol>
            <li>About Us</li>
            <li>Stories</li>
            <li>Contact</li>
            <li>Login</li>
            <button> Sign Up </button>
          </ol>
        </aside>
      </div>
    </Container>
  );
}

