import React, {useState} from 'react'
import './App.css'

function Counter() {

    const [count, setCount] = useState(0)


    const add = () => {
        setCount(count + 1)
    }
      
      const  subtract = () => {
        setCount(count > 0 ? count - 1: count)
      }
    
        const reset = () => {
            setCount(0)
        }



        return(
            <div>
                <div className="title">
            <h1>How Much</h1>
            </div>
            <div className="number">
            <button onClick={subtract}><span>-</span></button>
            <p>{count}</p>
            <button onClick={add}><span>+</span></button>
            </div>
            <div class="reset">
            <button onClick={reset}><span>Reset</span></button>
            </div>
                </div>
        )
    }

    export default Counter