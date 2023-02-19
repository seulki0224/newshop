/* eslint-disable */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
//useParams() + Find함수로 데이터 맵핑 + props 함수선언식

function DetailTab(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id );
  let [alert, setAlert] = useState(true);
  let [cntNum , setCount] = useState(3);
  let [탭, 탭변경] = useState(0);
  let [num, setNum] = useState('');

  //Popup칭
  useEffect(()=>{
    //2. 실행
    let timeCnt = setInterval(()=> { setCount(--cntNum) }, 1000);
    let cntAlert = setTimeout(() => { setAlert(false)}, 3000);
    return ()=>{
      //1.Clean up function : 기존 요청 충돌 제거
      clearInterval(timeCnt);
      clearTimeout(cntAlert);
    }
  },[])

  //입력창
  useEffect(()=>{
    if (isNaN(num) == true) {
      console.log('숫자만 입력 가능합니다.');
    }
  }, [num]);

  return (
    <div className='detailTab'>
      {
        alert == true
        ? <div className="alert alert-warning">
            {cntNum}초 후에 창이 닫침
          </div>
        : null
      }

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+ [찾은상품.id+1] +'.jpg'} width='80%'/>
          </div>

          <div>
            {/*
              숙제 useEffect 사용하여 숫자만 입력가능한 인풋 만들기
            만약 숫자가 아니면 그러지마세요 보여주기
            */}
            <input onChange={(e) => {setNum(e.target.value) }} />
          </div>

          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭}/>

      {/*
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>
      */}
    </div>
  )
}
function TabContent(props){
  if (props.탭 === 0){
    return <div>내용0</div>
  }
  if (props.탭 === 1){
    return <div>내용1</div>
  }
  if (props.탭 === 2){
    return <div>내용2</div>
  }
}


/* function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id );
  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+ [찾은상품.id+1] +'.jpg'} width='80%'/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  )
} */


export default DetailTab;
// export {Detail, DetailTab};