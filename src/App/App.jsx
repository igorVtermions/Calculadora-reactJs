import { useState, useEffect } from 'react'
import { GlobalStyle } from '../global/globalStyled'
import { Container } from './style'


export function App() {
    const [calFistValue, setCalFistValue] = useState()
    const [calSecondValue, setCalSecondValue] = useState()
    const [resultValue, setResultValue] = useState(0)
    
    function sum(){
      setResultValue(parseFloat(calFistValue) + parseFloat(calSecondValue))
    }

    function less(){
      setResultValue(parseFloat(calFistValue) - parseFloat(calSecondValue))
    }

    function div(){
      setResultValue(parseFloat(calFistValue) / parseFloat(calSecondValue))
    }

    function mult(){
      setResultValue(parseFloat(calFistValue) * parseFloat(calSecondValue))
    }

    function clear(){
      setResultValue("0")
    }


  return (
    <>
      <GlobalStyle />
      <Container>
          <h2 >{resultValue}</h2>

          <div className='inputValue'>
              <input type="number" name="fistValue" value={calFistValue}  className='fistValue' placeholder='primeiro valor'  onChange={(e) => setCalFistValue(e.target.value)} />

              <input type="number" name="secondValue" className='secondValue' placeholder='segundo valor' onChange={(e) => setCalSecondValue(e.target.value)} value={calSecondValue} />
          </div>

          <div className='btnGroup'>
              <button onClick={sum}>+</button>
              <button onClick={less}>-</button>
              <button onClick={div}>/</button>
              <button onClick={mult}>x</button>
              <button onClick={clear}>C</button>
          </div>


      </Container>
    </>
  )
}


