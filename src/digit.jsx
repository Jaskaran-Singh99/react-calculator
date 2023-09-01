import {ACTIONS} from './calculator'
const Digit = ({digit, dispatch})=>{

    return <div className="operand" onClick={()=>dispatch({type:ACTIONS.Operand,digit})}>{digit}</div>
}

const ClearDigit = ({dispatch})=>{
    return <div className='operand' onClick={()=>dispatch({type:ACTIONS.Clear})}>C</div>
}

const Backspace = ({dispatch, digit})=>{
    return <div className='operand' onClick={()=>dispatch({type:ACTIONS.Backspace})}>{digit}</div>
}
//adg 
const Equals = ({dispatch})=>{
    return <div className='operand equals' onClick={()=>dispatch({type:ACTIONS.Equals})}>=</div>
}


export  {Digit, ClearDigit, Backspace, Equals}