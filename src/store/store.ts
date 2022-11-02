const UseStore = {
    SAVE_RESULT: 'save_result',
    defaultResultInfo: {
        '1':''
    },
    action: {
        save: (result) => {
            return {
                type: UseStore.SAVE_RESULT,
                resultInfo: result
            }
        }
    },
    reducer: (state = UseStore.defaultResultInfo, action) => {
        switch (action.type) {
            case UseStore.SAVE_RESULT:
                for (const key in action.resultInfo) {
                    if (Object.prototype.hasOwnProperty.call(action.resultInfo, key)) {
                        const element = action.resultInfo[key];
                        state[key] = element
                    }
                }
                return state
            default:
                return state
        }
    }
}
export default UseStore