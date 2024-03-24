import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import menuIcon from '../../../assets/nav/menuIcon.png';
import closeIcon from '../../../assets/nav/closeIcon.png';

const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false);
    const [showMenuIcon, setShowMenuIcon] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowMenuIcon(window.innerWidth <= 830);
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                {showMenuIcon && ( // Conditionally render the menu icon based on screen width
                    <img 
                        className={styles.menuBtn} 
                        src={menuOpen ? closeIcon : menuIcon} 
                        alt="Menu" 
                        onClick={() => setMenuOpen(!menuOpen)} 
                    />
                )}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li> <a href='#about'>About</a> </li>
                    <li> <a href='#experience'>Experience</a> </li>
                    <li> <a href='#projects'>Projects</a> </li>
                    <li> <a href='#contact'>Contact</a> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;





// import React, { useState } from "react";
// import menuIcon from '../../../assets/nav/menuIcon.png'
// import closeIcon from '../../../assets/nav/closeIcon.png'
// import styles from "./Navbar.module.css";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <a className={styles.title} href="/">
//         Portfolio
//       </a>
//       <div className={styles.menu}>
//         <img
//           className={styles.menuBtn}
//           src={
//             menuOpen
//               ? closeIcon
//               : menuIcon
//           }
//           alt="menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//         <ul
//           className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//           onClick={() => setMenuOpen(false)}
//         >
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#experience">Experience</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#about">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;