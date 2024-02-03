import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Toggle from './Toggle';


function Header({theme,settheme}) {

  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  return (
    <div className='Header py-5'>
      <MDBNavbar expand='lg' style={{ boxShadow: 'none' }}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavColorSecond}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 me-5'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#banner'>
                <p> Home</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#aboutme'><p>About Me</p></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#skills'><p>Skills</p></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#projects'><p>Projects</p></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Toggle isChecked={theme}
                  handleChange={() => settheme(!theme)} />
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header