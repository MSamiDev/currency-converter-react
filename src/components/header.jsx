// import { Menubar } from 'primereact/menubar';
import logo from '../assets/images/logo.png'

const Header = () => {
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