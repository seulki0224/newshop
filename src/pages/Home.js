/* eslint-disable */
import Spinner from '../components/Spinner';
import { useState } from 'react';
import data from '../data/data';
import axios from 'axios';
import Card from '../components/Card';

function Home() {

  let [spinner, setSpinner] = useState(false);
  let [shoes,   setShoes]   = useState(data);
  let [btnCnt,  setBtnCnt]  = useState(1);

  return (
    <div>
      {/* 메인배경 */}
      <div className="main-bg" />

      {/* Spinner / component : 로딩이미지 */}
      {
        spinner == true
        ? <Spinner />
        : null
      }

      <div className="mainText m20">
        <h3>A FEEL FOR EVERY YOU</h3>
        <p>
          몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.<br/>
          머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는 에너지를 만들 수 있어요.<br/>
          지금 나를 위한 모든 가능성을 느껴보세요.<br/>
        </p>
      </div>

      {/* 더보기버튼  : Shoes Data Api */}
      <button
        className="Btn_More_Shoes_Data btn_Round m50200"
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
        }}>More
      </button>

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
  )
}


export default Home;