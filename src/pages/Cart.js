/* eslint-disable */
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'

function Cart() {

  let b = useSelector((state) => {
    return (
      state.reduxShoes
    )
  })

  //1. 장바구니 Data만들기
  return (
    <div className="cart">
    {/* {reduxShoes.} */}
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          b.map((item) =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>{item.id}</td>
            </tr>
          )
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Cart;