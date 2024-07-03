import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
function Home () {
  const navigate = useNavigate();
  // 使用navigate函数进行跳转
  function handleNavigation() {
    // navigate('/User');
  }
  return (
    <>
      <div style={{fontSize: '30px'}}>
        home
        <Title>222</Title>
        <Button onClick={handleNavigation}>333</Button>
        </div>
    </>
  )
}

export default Home
const Title = styled.div`
    color: red;
`
