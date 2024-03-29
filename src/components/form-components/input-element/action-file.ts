export const changeInputValue = (model: string, value: string) => {
    return ({type: model, payload: value});
}