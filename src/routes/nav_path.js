/* eslint-disable */
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

let NavBtn = styled.button`
  background : #00000000;
  border : none;
`
function Nav_Path() {
  let navigate = useNavigate();
  return (
    <div className="nav_path">
      <Navbar bg='light' variant='light'>
        <Container>
          {/* Logo */}
          {/* <Navbar.Brand href='/'>ShoeShop</Navbar.Brand> */}
          <Navbar.Brand href='/' className="logo"></Navbar.Brand>

          {/* Nav */}
          <Nav className='me-auto'>
            <NavBtn className='nav-link' onClick={()=>{ navigate('/'); }}>Home</NavBtn>
            <NavBtn className='nav-link' onClick={()=>{ navigate('/about') }}>About</NavBtn>
            {/* <NavBtn className='nav-link' onClick={()=>{ navigate('/Detail/1') }}>Detail</NavBtn> */}
            <NavBtn className='nav-link' onClick={()=>{ navigate('/detail/2') }}>Detail</NavBtn>
            <NavBtn className='nav-link' onClick={()=>{ navigate('/장바구니') }}>장바구니</NavBtn>
          </Nav>
          {/* Event */}
          <Nav>
            <NavBtn className='nav-link' onClick={()=>{ navigate('/event') }}>Event</NavBtn>
            {/* <NavBtn className='nav-link' onClick={()=>{ navigate('/event/a') }}>Event/양배추</NavBtn> */}
            {/* <NavBtn className='nav-link' onClick={()=>{ navigate('/event/b') }}>Event/생일</NavBtn> */}
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default Nav_Path;