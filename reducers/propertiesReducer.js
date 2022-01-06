import { PROPERTY_LIST_FAIL, PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS } from "../constants/propertiesConstants";

export const propertyListReducer = (state = {}, action) => {
    switch(action.type){
        case PROPERTY_LIST_REQUEST:
            return { loading: true };
        case PROPERTY_LIST_SUCCESS:
            return { loading: false, propertyList: action.payload };
        case PROPERTY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
