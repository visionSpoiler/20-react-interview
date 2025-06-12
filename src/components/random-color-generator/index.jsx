import { useState} from 'react'
import "./style.css"

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const handleCreateRandomHexColor = () => {
  
  }

  const handleCreateRandomRHBColor = () => {
  
  }

  return (
    <div style={{backgroundColor: color}} className='container'>
      <button onClick={() => setTypeOfColor('hex')}>HEX 컬러 생성</button>
      <button onClick={() => setTypeOfColor('rgb')}>RGB 컬러 생성</button>
      <button>
        랜덤 컬러 생성
      </button>
    </div>
  )
}

export default RandomColorGenerator