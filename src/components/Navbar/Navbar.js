import React, {useState, useEffect}from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { Button}  from "../../globalStyles";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItems, NavLinks, NavItemBtn, NavBtnLink} from './Navbar.elements';


const Navbar = () => {
     const[click, setClick] = useState(false);
     const [button, setButton ]  = useState(true);

     const handleClick = () => setClick(!click);

     const showButton = ()  =>  {
        if(window.innerWidth  <=960) {
            setButton(false)
        } else{
            setButton(true)
        }
     }
     useEffect(()  =>{
        showButton()
     }, [])

     window.addEventListener('resize', showButton);
  return (
    <>
    <IconContext.Provider value={{ color: '#0092ca' }}>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
            <NavIcon/>
            Cortés Accounting
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                <NavItems>
                    <NavLinks to='/'>
                        Home
                    </NavLinks>
                </NavItems>
               <NavItems>
                    <NavLinks to='/personal'>
                        Personal
                    </NavLinks>
                </NavItems>
             <NavItems>
                    <NavLinks to='/commercial'>
                       Commercial
                    </NavLinks>
                </NavItems>
                <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>Contact</Button>
                  </NavBtnLink>
                ) :(
                    <NavBtnLink to="/contact">
                       <Button   fontbig primary>
                        Contact
                       </Button>
                    </NavBtnLink>
                    
                )}
                </NavItemBtn>
            </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
