/* eslint-disable */
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';
import data from '../data/Data';

import Home from '../pages/Home';
import About from '../pages/About';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';
import Event from '../pages/Event';

import Spinner from '../components/Spinner';
import Card from '../components/Card';

function Routes_() {

  let [shoes,   setShoes]   = useState(data);
  let [mainBG,  setMainBG]  = useState(true);
  let [btnCnt,  setBtnCnt]  = useState(1);
  let [spinner, setSpinner] = useState(false);

  return(
    <Routes>

      {/* MainPage / .Main-bg, .Spinner, */}
      <Route path='/' element={
        <div className="MainPage">

          {/* 메인배경 */}
          {
            mainBG === true
            ? <div style={{ position: 'relative' }} className="Main-bg" />
            : null
          }

          <button
            className="Btn_MainBg_Img_Toggle"
            style={{ position: 'absolute' , top: '80px', left: '10px' }}
            onClick={()=>{ setMainBG(!mainBG)}}>
            Img
          </button>

          {/* Spinner / component : 로딩이미지 */}
          {
            spinner == true
            ? <Spinner />
            : null
          }

          {/* 더보기버튼  : Shoes Data Api */}
          <button
            className="Btn_More_Shoes_Data"
            onClick={()=>{
            setBtnCnt(++btnCnt) // console.log(btnCnt)
            setSpinner(!spinner);
            setTimeout(() => {setSpinner(false)}, 1000);
            axios
              .get('https://codingapple1.github.io/shop/data' + btnCnt +'.json')
              .then((결과)=>{
                let copy = [...shoes, ...결과.data]//...으로 괄호벗기기 {이형태}
                setShoes(copy)
              })
              .catch(()=>{
                alert('더이상 상품이 없습니다.')
                console.log('실패함')
            })
          }}>More</button>

          {/* Card / component  기본신발노출 */}
          <div className="container">
            <div className="row">
              {shoes.map((shoes배열, idx) => {
                return (
                  //카드컴포넌트
                  <Card key={idx} shoes={shoes} idx={idx}/>
                );
              })}
            </div>
          </div>

        </div>
      }/>

      {/* 404 */}
      <Route path='*' element={<>404</>} />
      <Route path='*/*' element={<>404</>} />

      {/* About */}
      <Route path='/About' element={<>About</>} />

      {/* Detail / component */}
      <Route path='/Detail/:id' element={<Detail shoes={shoes}/>} />

      {/* 장바구니 <Route path="/detail4/:id/sas/aa" element={ <Detail4 shoes={shoes}/> }/> */}
      <Route path='/Cart' element={<>장바구니</>} />

      {/* Event / component 서브경로 nested routes / 컴포넌트 Outlet */}
      <Route path='/Event' element={<Event />}>
        <Route path='a' element={<div>첫 주문시 양배추즙 서비스</div>} />
        <Route path='b' element={<div>생일기념 쿠폰받기</div>} />
      </Route>

    </Routes>
  )
}
export default Routes_;