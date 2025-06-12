import './App.css'
import Accordian from './components/accordian'
import RandomColorGenerator from './components/random-color-generator'

function App() {
  return (
    <div className='App'>
      {/* 아코디언 컴퍼넌트 */}
      <Accordian />
      {/* 랜덤 컬러 생성기 */}
      <RandomColorGenerator />
    </div>
  )
}

export default App
