import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router'
import { ConfigProvider, theme, Button } from 'antd';
import styled from 'styled-components'
const { useToken } = theme;
function App() {
  // const [count, setCount] = useState(0)
  const [algorithm, setAlgorithm] = useState('darkAlgorithm')
  const { token } = useToken();
  return (
    <>
      <StyleBox background={algorithm === 'defaultAlgorithm' ? '#333' : '#fff'} color={algorithm === 'defaultAlgorithm' ? '#fff' : '#333'}>
      {/* <StyleBox style={{background: algorithm === 'defaultAlgorithm' ? '#333' : '#fff', color: algorithm === 'defaultAlgorithm' ? '#fff' : '#333',}}> */}
        <StyleBtns>
          风格: 
          <Button onClick={() => setAlgorithm('defaultAlgorithm')}>
            关灯
          </Button>
          <Button onClick={() => setAlgorithm('darkAlgorithm')}>
            开灯
          </Button>
        </StyleBtns>
        <ConfigProvider
          theme={{
            // 1. 单独使用暗色算法
            algorithm: theme[algorithm],

            // 2. 组合使用暗色算法与紧凑算法
            // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </StyleBox>


      {/* <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        更新
      </p> */}
    </>
  )
}

export default App
const StyleBtns = styled.div`
    position: fixed;
    top: 0;
    right: 0;
`
const StyleBox = styled("div")`
    min-width: 100vw;
    min-height: 100vh;
    background: ${(props) => props.background };
    color: ${(props) => props.color };
`
