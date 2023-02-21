/* eslint-disable */
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';

import data from '../data/data';

import Detail from '../component/detail';

import Spinner from '../component/spinner';
import Card from '../component/card';
import Event from '../component/event';

function Routes_() {
  let [shoes, setShoes] = useState(data);
  let [btnCnt, setBtnCnt] = useState(1);
  let [spinner, setSpinner] = useState(false);
  let [mainBG, setMainBG] = useState(true);
  return(
    <Routes>

      {/* 메인페이지 + 기본 신발 리스트 */}
      <Route path='/' element={
        <>
          {/* 메인배경 */}
          {
            mainBG === true
            ?
              <div style={{position:"relative"}} className='main-bg'/>
            : null
          }
          <button style={{position:"absolute",top:"80px", left:"10px"}} onClick={()=>{ setMainBG(!mainBG);}}>Img</button>

          {/* 로딩중 */}
          {spinner == true ? <Spinner/> : null}

          <br/>
          {/* 더보기버튼 */}
          <button onClick={()=>{
            // 로딩중
            setSpinner(!spinner);
            setTimeout(() => { setSpinner(false)}, 1000);

            setBtnCnt(++btnCnt);
            // console.log('btnCnt = ', btnCnt);
            // console.log('1. shoes = ',shoes);
            axios
            .get('https://codingapple1.github.io/shop/data' + btnCnt +'.json')
            .then((결과)=>{
              // console.log('2. 결과.data = ', 결과.data)
              let copy = [...shoes, ...결과.data]//...으로 괄호벗기기 {이형태}
              // console.log('3. copy = ', copy);
              setShoes(copy)
              // console.log('데이터불러오기완료')
            })
            .catch(()=>{
              console.log('실패함')
              alert('더이상 상품이 없습니다.')
            })
          }}>더보기</button>
          <br/>
          <br/>

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

        </>
      }/>

      {/* 404 */}
      <Route path='*' element={<>404</>} />
      <Route path='*/*' element={<>404</>} />

      {/* About */}
      <Route path='/about' element={<>About</>}/>

      {/* <Route path="/Detail/:id" element={ <Detail shoes={shoes} /> }/> */}
      <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>

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