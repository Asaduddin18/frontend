import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate=useNavigate()
  const navigateToDay2=()=>{
    navigate('/day2')
  }
  const navigateToday1=()=>{
    navigate('/day1')
  }
  return (
    <>
    
    

    <div className='App'>
    {/* <Header></Header>
    <Main>
      
    </Main>
    <Footer>

    </Footer> */}
  
  <button onClick={navigateToday1}>Day1</button>
     <button onClick={navigateToDay2}>Day2</button>
    </div>
    
    </>
  )
}

export default Home