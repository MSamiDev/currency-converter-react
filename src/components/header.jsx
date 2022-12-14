// import { Menubar } from 'primereact/menubar';
import { useRef } from 'react';

import logo from '../assets/images/logo.png'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

const Header = () => {


   const menu = useRef(null);
   // const toast = useRef(null);
   const items = [
      {
         label: 'Menu',
         items: [
            {
               label: 'Home',
               url: 'https://reactjs.org/'
            },
            {
               label: 'About',
               url: 'https://reactjs.org/'
            },

            {
               label: 'Contact',
               url: 'https://reactjs.org/'
            },

         ]
      },
      {
         label: 'Sign Up',
         items: [

            {
               label: 'Sign In',
               url: 'https://reactjs.org/'
            },
            {
               label: 'Register',
               url: 'https://reactjs.org/'
            }
         ]
      }
   ];

   return (
      <>
         <div className="header">
            {/* <Menubar
               start={<h2>Curency Converter</h2>}
               end={<Menubar model={items} />}
            /> */}
            <div className='container'>
               <div className="logoContainer">
                  <img src={logo} alt="Currency Converter" />
                  <h2>Currency Converter</h2>
               </div>
               <div className="menu">
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/">About</a></li>
                     <li><a href="/">Contact</a></li>
                  </ul>
               </div>
               <div className="login">
                  <a href="/">Sign In</a>
                  <a href="/" className="register">Register</a>
               </div>

            </div>
            <Menu model={items} popup ref={menu} id="popup_menu" />
            <Button icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup className='button' />

         </div>
      </>
   );
}
// const items = [
//    {
//       label: 'File',
//       icon: 'pi pi-fw pi-file',
//    },
//    {
//       label: 'Edit',
//       icon: 'pi pi-fw pi-pencil',

//    },
//    {
//       label: 'Users',
//       icon: 'pi pi-fw pi-user',

//    }
// ];
export default Header;