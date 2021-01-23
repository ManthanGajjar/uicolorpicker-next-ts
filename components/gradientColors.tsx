import { CONSTANCE } from "../helper/constance";
import GradientBlock from "./gradientBlock";
import { useEffect } from "react";
import { Utils } from '../utils/utils';

const GradientColors = () => {
    let colors = Utils.randomGradientPair(CONSTANCE.GRADIENT_LIMIT);
    return (
        <div>
            <GradientBlock colors = {colors}/>
        </div>
    )
}

export default GradientColors;