'use strict'

import { combineReducers } from 'redux'
import test, { ITestState } from './test'

export type ICombineState = ITestState

export default combineReducers<ICombineState>({
    test
})
