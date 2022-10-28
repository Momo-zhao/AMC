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
                return action.resultInfo || {}
            default:
                return state
        }
    }
}
export default UseStore