import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { TEST_ACTION } from '../constants'

export interface ISetMessage {
    type: 'TEST_ACTION';
    message: string
}

export type IAction = ISetMessage

export const testAction = (msg: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch({ type: TEST_ACTION, message: msg })
    }
}
