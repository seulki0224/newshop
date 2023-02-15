/* eslint-disable */
function Card (props) {
  let list_num = props.idx + 1;
  return (
      <div className='col-md-4'>
        <img
          src={'https://codingapple1.github.io/shop/shoes' + list_num + '.jpg'}
          width='80%'
        />
        <h4>{props.shoes[props.idx].title}</h4>
        <p>{props.shoes[props.idx].content}</p>
        <p>{props.shoes[props.idx].price}</p>
      </div>
  );
}
export default Card;