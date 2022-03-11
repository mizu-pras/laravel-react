import { TEST_ACTION } from '../constants'
import { IAction } from '../actions/testAction'

export interface IInitState {
    message: string
}

export interface ITestState {
    test: IInitState
}

const initState: IInitState = {
    message: ""
}

const testReducer = (state: IInitState = initState, action: IAction): IInitState => {
    switch(action.type) {
        case TEST_ACTION:
            return {...state, message: action.message}
        default:
            return state
    }
}

export default testReducer
