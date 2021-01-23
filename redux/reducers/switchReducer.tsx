import { CONSTANCE } from '../../helper/constance';

// state is currant value, action which we need to perform ( sending via dispatch)
const SwitchReducer = (state, action) => {
    const types = CONSTANCE.TAB_TYPES;
    switch (action.type) {
        case types[0]:
            return state = types[0]
            break;
        case types[1]:
            return state = types[1]
            break;
    
        default:
            return state = types[0];
            break;
    }
}

export default SwitchReducer;