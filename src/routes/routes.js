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
  let [btnCnt, setBtnCnt] = useState(2);
  return(
    <Routes>

      {/* 메인페이지 + 기본 신발 리스트 */}
      <Route path='/' element={
          <>
            {/* 메인배경 */}
            <div className='main-bg' />

            {/* 기본신발노출 */}
            <div className='container'>
              <div className='row' >
                {shoes.map((shoes배열, idx) => {
                  // console.log('shoes배열 = ', shoes배열);
                  return (
                    //카드컴포넌트
                    <Card key={idx} shoes={shoes} idx={idx}/>
                  );
                })}
              </div>
            </div>

            {/* 더보기버튼 */}
            <button onClick={()=>{
              setBtnCnt(btnCnt++);
              console.log('btnCnt = ', btnCnt);
              console.log('1. shoes = ',shoes);
              axios
              //1,2
              .get('https://codingapple1.github.io/shop/data' + btnCnt +'.json')
              .then((결과)=>{
                console.log('2. 결과.data = ', 결과.data)
                let copy = [...shoes, ...결과.data]//...으로 괄호벗기기
                console.log('3. copy = ', copy);
                setShoes(copy)
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>data2더보기</button>

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