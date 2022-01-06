import { RESERVE_SAVE_JOINING_DATE, RESERVE_SAVE_ROOM_TYPE } from "../constants/ReserveConstants";

export const reserveCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case RESERVE_SAVE_JOINING_DATE:
          return {
            ...state,
            joiningDate: action.payload
          }
        case RESERVE_SAVE_ROOM_TYPE:
          return {
            ...state,
            room: action.payload
          }
        default:
            return state;
    }
}

// export const reserveDetailsReducer = (state = {}, action) => {
//     switch(action.type) {
//         case RESERVE_DETAILS_REQUEST:
//             return { loading: true }
//         case RESERVE_DETAILS_SUCCESS:
//             return { loading: false, order: action.payload }
//         case RESERVE_DETAILS_FAIL:
//             return { loading: false , error: action.payload }
//         default:
//             return state;
//     }
// }