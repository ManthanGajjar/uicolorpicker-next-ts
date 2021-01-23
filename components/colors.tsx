import { CONSTANCE } from "../helper/constance";
import { useSelector } from 'react-redux';
import SolidColors from "./solidColors";
import GradientColors from "./gradientColors";


const Colors = () => {
    const selectedTab = useSelector(state => state.SwitchReducer);
    const availableTabs = CONSTANCE.TAB_TYPES;
    return(
        <div>
         {
            selectedTab === availableTabs[0] ?  <SolidColors/> : 
            selectedTab === availableTabs[1] ?  <GradientColors/> : ''
         }
        </div>
    )
}


export default Colors;

