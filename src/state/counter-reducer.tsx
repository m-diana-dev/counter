import {countType} from "../components/Counter/Counter";

type incrementCounterActionType = ReturnType<typeof incrementCounterAC>
type resetCounterActionType = ReturnType<typeof resetCounterAC>
type settingsCounterActionType = ReturnType<typeof settingsModeCounterAC>
type settingCounterActionType = ReturnType<typeof settingCounterAC>
type changingCounterValuesActionType = ReturnType<typeof changingCounterValuesAC>

export type ActionType = incrementCounterActionType
    | resetCounterActionType
    | settingsCounterActionType
    | settingCounterActionType
    | changingCounterValuesActionType



export const INITIAL_MIN_VALUE = 0;
export const INITIAL_MAX_VALUE = 5;

const INITIAL_STATE: countType = {
    value: INITIAL_MIN_VALUE,
    maxValue: INITIAL_MAX_VALUE,
    minValue: INITIAL_MIN_VALUE,
    setting: false,
    error: {
        max: '',
        start: ''
    }
}

export const counterReducer = (state: countType = INITIAL_STATE, action: ActionType): countType => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            return {...state, value: state.value + 1}
        case "RESET-COUNTER":
            return {...state, value: state.minValue}
        case "SETTINGS-MODE-COUNTER":
            return {...state, setting: true, value: 0}
        case "SETTING-COUNTER":
            return {...state, setting: false, value: state.minValue}
        case "CHANGING-COUNTER-VALUES":
            const params = {
                ...state,
                minValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                setting: true
            }
            if (action.payload.maxValue < 0) {
                return {...params, error: {...state.error, max: 'incorrect value'}}
            } else if (action.payload.startValue < 0 || action.payload.startValue > action.payload.maxValue) {
                return {...params, error: {...state.error, start: 'incorrect value'}}
            } else if (action.payload.maxValue === action.payload.startValue) {
                return {...params, error: {...state.error, max: 'incorrect value', start: 'incorrect value'}}
            } else {
                return {...params, error: {...state.error, max: '', start: ''}}
            }

        default:
            return state
    }
}

export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER'} as const)
export const resetCounterAC = () => ({type: 'RESET-COUNTER'} as const)
export const settingsModeCounterAC = () => ({type: 'SETTINGS-MODE-COUNTER'} as const)
export const settingCounterAC = () => ({type: 'SETTING-COUNTER'} as const)
export const changingCounterValuesAC = (start: number, max: number) => {
    return {
        type: 'CHANGING-COUNTER-VALUES' as const,
        payload: {
            startValue: start,
            maxValue: max
        }
    }
}