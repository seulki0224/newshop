/* eslint-disable */
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import DetailTab from '../routes/detail';

import data from '../data';
import Card from '../component/card';
import Event from '../component/event';

function Routes_() {
  let [shoes, setShoes] = useState(data);
  return(
    <Routes>

      {/* 메인페이지 + 기본 신발 리스트 */}
      <Route path='/' element={
          <>
            <div className='main-bg' />
            <button onClick={()=>{
              //로딩중 UI 띄우기
              axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                console.log(결과.date);
                let copy = [...shoes, ...결과.data]//...으로 괄호벗기기
                setShoes(copy)
                //로딩중 UI 숨기기
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>더보기</button>

            <div className='container'>
              <div className='row'>
                {shoes.map((a, idx) => {
                  return (
                    <Card key={idx} shoes={shoes} idx={idx}/>
                  );
                })}
              </div>
            </div>
          </>
        }
      />

      {/* 404 */}
      <Route path='*' element={<>404</>} />
      <Route path='*/*' element={<>404</>} />

      {/* About */}
      <Route path='/about' element={<>About</>}/>

      {/* <Route path="/Detail/:id" element={ <Detail shoes={shoes} /> }/> */}
      <Route path="/detailTab/:id" element={ <DetailTab shoes={shoes}/> }/>

      {/* <Route path="/detail4/:id/sas/aa" element={ <Detail4 shoes={shoes}/> }/> */}

      <Route path="/장바구니" element={ <>장바구니</> }/>

      {/* 서브경로 nested routes / 컴포넌트 Outlet */}
      <Route path="/event" element={ <Event /> }>
        <Route path="a" element={ <div>첫 주문시 양배추즙 서비스</div> } />
        <Route path="b" element={ <div>생일기념 쿠폰받기</div> } />
      </Route>

    </Routes>
  )
}
export default Routes_;