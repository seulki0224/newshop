/* eslint-disable */
import styled from 'styled-components'
import spinner from '../images/spinner.gif';

const SpinnerIMG = styled.img.attrs({
  src: `${spinner}`
})`
width: 100px;
position : fixed;
top: 350px;
`;
let SpinnerIMG2 = styled.img.attrs({
  src: `${'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F233F6D505786DA870A'}`
})`
  width: 100px;
  position : fixed;
  top: 400px;
`;
let SpinnerIMG3 = styled.img`
  width: 100px;
  position : fixed;
  top: 400px;
`;
function Spinner() {
  return(
    <div className="Spinner">
      <SpinnerIMG/>
      {/* <SpinnerIMG3 src={'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F233F6D505786DA870A'}/> */}
      {/* <SpinnerIMG2/> */}
    </div>
  )
}

export default Spinner;