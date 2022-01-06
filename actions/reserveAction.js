// // import axios from 'axios';

import { RESERVE_SAVE_JOINING_DATE, RESERVE_SAVE_ROOM_TYPE } from "../constants/ReserveConstants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveJoiningDate = (info) => (dispatch) => {
    dispatch({
        type: RESERVE_SAVE_JOINING_DATE,
        payload: info
    });
    
}

export const saveRoomType = (info) => (dispatch) => {
    dispatch({
        type: RESERVE_SAVE_ROOM_TYPE,
        payload: info
    });
    
}
