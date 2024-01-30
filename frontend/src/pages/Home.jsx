import React from 'react'
import DispalyCard from '../components/DispalyCard'

const Home = () => {
  const data={
    'title':'Camera man',
    'img':'frontend/src/assets/img.jpg',
    'Exp':3,
    'SpecialIn':'Slow mo'
  }
  return (
    <>
        <DispalyCard data={data}/>
    </>
  )
}

export default Home