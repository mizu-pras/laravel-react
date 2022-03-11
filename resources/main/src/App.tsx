import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { IInitState as TestState } from './reducers/test'
import { ICombineState } from './reducers/index'
import { testAction } from './actions/testAction'

import './App.css';

type Imsg = string

const Message = (): JSX.Element => {
    const test: TestState = useSelector((state: ICombineState) => state.test)

    return (
        <p>Message : { test.message }</p>
    )
}

const App = (): JSX.Element => {
    const [msg, setMsg] = useState<Imsg>('')

    const dispatch = useDispatch()

    const handleInput = (e: React.FormEvent<{ value: string }>) => {
        setMsg(e.currentTarget?.value)
    }

    const handleUpdate = () => {
        dispatch(testAction(msg))

        setMsg('')
    }

    return (

        <div className="App">
            <header className="App-header">
                <h1>Lucky Safe V3</h1>
            </header>

            <br/><br/>

            <input
                value={msg}
                onChange={handleInput}
            />

            <button
                type='button'
                style={{ marginLeft: '20px' }}
                onClick={handleUpdate}
            >Update</button>

            <Message />
        </div>

    );
}



export default App;
