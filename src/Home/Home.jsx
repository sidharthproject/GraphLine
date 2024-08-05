import React from 'react'
import NavSideBar from '../NavSideBar/NavSideBar'
import LineChart from '../MiddleSectin/LineChart'
import PieChatSection from '../RIghtSection/PieChatSection'
function Home() {
  return (
    <>
    <div  className='flex justify-start items-center w-full h-full bg-gray-200'>
        <NavSideBar/>
        <LineChart/>
        <PieChatSection/>
        </div>
    </>
  )
}

export default Home