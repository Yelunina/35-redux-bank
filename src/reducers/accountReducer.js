import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
// state = {
//     balance: number,
//     owner: string,
//     accNumber: number,
//     address: {
//         country: string,
//         city: string,
//         street: string,
//         building: number,
//         aprt: number
//     }
// }

export const accountReducer = (state, action) => {

    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const res = state.balance - action.payload;
            return { ...state, balance: res < 0 ? state.balance : res }
        default:
            return state;
    }
}