/* eslint-disable */
import { Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import data from './data/data';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Event from './pages/Event';

let NavBtn = styled.button`
  background : #00000000;
  border : none;
`
function NavPath(){
  let navigate = useNavigate();
  return (
    <div className="navPath">
      <Navbar bg='light' variant='light'>
        <Container>

          <Nav className="logo">
            <Navbar.Brand href='/' />
          </Nav>

          <Nav className="me-auto navBtn">
            <NavBtn onClick={()=>{ navigate('/Home'); }}>Home</NavBtn>
            <NavBtn onClick={()=>{ navigate('/About') }}>About</NavBtn>
            {/* <NavBtn onClick={()=>{ navigate('/Detail/1') }}>Detail</NavBtn> */}
            <NavBtn onClick={()=>{ navigate('/Detail/2') }}>Detail</NavBtn>
            <NavBtn onClick={()=>{ navigate('/Cart') }}>Cart</NavBtn>
          </Nav>

          <Nav className="event">
            {/* <NavBtn onClick={()=>{ navigate('/Event') }}>Event</NavBtn> */}
            {/* <NavBtn onClick={()=>{ navigate('/Event/Service') }}>Service</NavBtn> */}
            <NavBtn onClick={()=>{ navigate('/Event/Coupon') }}>Coupon</NavBtn>
          </Nav>

          <NavDropdown title="Event" id="basic-nav-dropdown" onClick={()=>{ navigate('/Event') }}>
            <NavDropdown.Item onClick={()=>{ navigate('/Event/Service') }}>Service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Coupon</NavDropdown.Item>
          </NavDropdown>

        </Container>
      </Navbar>
    </div>
  )
}

function Router() {
  let [shoes,   setShoes]   = useState(data);
  return(
    <Routes>
      {/* MainPage / .Main-bg, .Spinner, */}
      <Route path='/' element={
        <div className="MainPage">
          <Home />
        </div>
      }/>

      <Route path='/Home' element={
        <div className="MainPage">
          <Home />
        </div>
      }/>

      {/* 404 */}
      <Route path='*' element={<>404</>} />
      <Route path='*/*' element={<>404</>} />

      {/* About */}
      <Route path='/About' element={<About />} />

      {/* Detail / component */}
      <Route path='/Detail/:id' element={<Detail shoes={shoes}/>} />

      {/* 장바구니 <Route path="/detail4/:id/sas/aa" element={ <Detail4 shoes={shoes}/> }/> */}
      <Route path='/Cart' element={<Cart />} />

      {/* Event / component 서브경로 nested routes / 컴포넌트 Outlet */}
      <Route path='/Event' element={<Event />}>
        <Route path='Service' element={<div>첫 주문시 양배추즙 서비스</div>} />
        <Route path='Coupon' element={<div>생일기념 쿠폰받기</div>} />
      </Route>

    </Routes>
  )
}

export {NavPath, Router};