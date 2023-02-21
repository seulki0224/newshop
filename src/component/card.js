/* eslint-disable */
import dataShoesImg from '../data/data_shoes_img';

//카드컴포넌트
//key = idx
let shoesImg = dataShoesImg

function Card (props) {
  return (
    <div className='col-md-4'>
      <img src={`${shoesImg[props.idx].ShoesImg}`} width='80%' />
      <h4>{props.shoes[props.idx].title}</h4>
      <p>{props.shoes[props.idx].content}</p>
      <p>{props.shoes[props.idx].price}</p>
    </div>

  )
}

// list_num 7보다 크면 숫자 증가하지 않음
// function calculateListNumber(listNum, idx) {
//   return listNum <= 7
//   ? idx + 1
//   : idx = Math.floor(Math.random() * (6 - 1)) + 1; ;
// }

export default Card;