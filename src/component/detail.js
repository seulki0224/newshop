/* eslint-disable */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import dataShoesImg from '../data/data_shoes_img';
//useParams() + Find함수로 데이터 맵핑 + props 함수선언식

function Detail(props) {
  let { id } = useParams();
  let fineProduct = props.shoes.find((x) => x.id == id );
  let [alert, setAlert] = useState(true);
  let [cntNum , setCount] = useState(3);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState(' ');
  let [fadeTab, setFadeTab] = useState(' ');

  // let [num, setNum] = useState(''); //1.숫자만 입력
  let shoesImg = dataShoesImg;

  //Popup창
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

  useEffect(() => {
    let fadeTime = setTimeout(()=>{setFade('fadeEnd ')}, 100)
    return () => {
      clearTimeout(fadeTime);
      setFade(' ');
    }
  },[])

  //2. 숫자만입력 / 입력창
  // useEffect(()=>{
  //   if (isNaN(num) == true) {
  //     console.log('숫자만 입력 가능합니다.');
  //   }
  // }, [num]);

  return (
    <div className='detail'>

      {/*3. 숫자만 입력
      <input onChange={(e) => {setNum(e.target.value) }} />
      */}

      {
        alert == true
        ? <div className="alert alert-warning">
            {cntNum}초 후에 창이 닫침
          </div>
        : null
      }

      <div className={'container ' + 'fadeStart ' + fade}>
        <div className="row">
          <div className="col-md-6">
            {/* <img src={'https://codingapple1.github.io/shop/shoes'+ [fineProduct.id+1] +'.jpg'} width='80%'/> */}
            <img src={`${shoesImg[id].ShoesImg}`} width='80%'/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{fineProduct.title}</h4>
            <p>{fineProduct.content}</p>
            <p>{fineProduct.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">Tab 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} fadeTab={fadeTab} setFadeTab={setFadeTab} />

    </div>
  )
}
function TabContent({tab, fadeTab, setFadeTab}){
  // let [fade, setFade] = useState(' ');

  useEffect(() => {
    let fadeTabTime = setTimeout(()=>{setFadeTab('fadeTabEnd ')}, 100)

    return () => {
      clearTimeout(fadeTabTime);
      setFadeTab(' ');
    }
  }, [tab])

  return(<div className={'fadeTabStart ' + fadeTab}>
    {[
      <div>TabContentArray 0</div>,
      <div>TabContentArray 1</div>,
      <div>TabContentArray 2</div>
    ][tab]}
  </div>
  )
}

export default Detail;