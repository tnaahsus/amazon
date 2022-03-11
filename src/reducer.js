export const initialState = {
    basket: [],
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'AddCart':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "RemoveCart":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}