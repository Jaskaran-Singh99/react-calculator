import {BsBackspaceReverseFill} from 'react-icons/bs'
import { useReducer } from 'react'
import {Backspace, Digit, Equals} from './digit.jsx'
import {ClearDigit} from './digit.jsx'
import './index.css'

export const ACTIONS = {
    Operand:'Operand',
    Clear:'Clear',
    Backspace:'Backspace',
    Equals:'Equals'
}
const Calculator = ()=>{ 
   
    const reducer = (state,action)=>{
        if(action.type === "Operand"){
           let newState;
            newState = {number:state.number + action.digit}
            console.log(state)
            return {...newState, newState}
        }
        if(action.type === "Clear"){
            state = {number:''}
        }

        if(action.type === 'Backspace'){
            return state = {number:state.number.substring(0, state.number.length -1)}
        }

        if(action.type === 'Equals'){
            return state = {number:eval(state.number)}
        }
        return state

    }

    const initialState ={
        number:'', 
        Clear:''
    }

    const [state , dispatch] = useReducer(reducer,initialState)

return(
    <>
    <div className='heading'>React Calculator</div>
    <div className="container">
        <div id="input">{state.number}</div>
        <div className="operand-grid">
            <ClearDigit digit="C" dispatch={dispatch}></ClearDigit>
            <Digit digit="%" dispatch={dispatch}></Digit>
            <Backspace digit={<BsBackspaceReverseFill></BsBackspaceReverseFill>} dispatch={dispatch}></Backspace>
            <Digit digit="/" dispatch={dispatch}></Digit>
        
            <Digit digit="7" dispatch={dispatch}></Digit>
            <Digit digit="8" dispatch={dispatch}></Digit>
            <Digit digit="9" dispatch={dispatch}></Digit>

            <Digit digit="*" dispatch={dispatch}></Digit>
            <Digit digit="4" dispatch={dispatch}></Digit>
            <Digit digit="5" dispatch={dispatch}></Digit>
            <Digit digit="6" dispatch={dispatch}></Digit>

            <Digit digit="-" dispatch={dispatch}></Digit>
            <Digit digit="1" dispatch={dispatch}></Digit>
            <Digit digit="2" dispatch={dispatch}></Digit>
            <Digit digit="3" dispatch={dispatch}></Digit>

            <Digit digit="+" dispatch={dispatch}></Digit>
            <Digit digit="0" dispatch={dispatch}></Digit>
            <Digit digit="00" dispatch={dispatch}></Digit>
            <Digit digit="." dispatch={dispatch}></Digit>
            <Equals digit="=" dispatch={dispatch}></Equals>

        </div>
    
    </div>
    </>
)
}
export default Calculator 