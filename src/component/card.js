/* eslint-disable */

//카드컴포넌트
//key = idx
function Card (props) {
  const list_num = props.idx + 1;
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + calculateListNumber(list_num, props.idx) + '.jpg'} width='80%'/>
      <h4>{props.shoes[props.idx].title}</h4>
      <p>{props.shoes[props.idx].content}</p>
      <p>{props.shoes[props.idx].price}</p>
    </div>

  )
}

//list_num 7보다 크면 숫자 증가하지 않음
function calculateListNumber(listNum, idx) {
  return listNum <= 7
  ? idx + 1
  : idx = Math.floor(Math.random() * (6 - 1)) + 1; ;
}
export default Card;