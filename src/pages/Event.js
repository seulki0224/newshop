/* eslint-disable */
import { Outlet } from 'react-router-dom';

function Event() {
  return (
    <div className='mainArea event'>
      오늘의 이벤트
      <Outlet/>
    </div>
  )
}

export default Event;