import ColorBlock from './colorBlock';
import { NextPage } from 'next';
import { CONSTANCE } from '../helper/constance';

const SolidColors: NextPage = () => {
    const colors = CONSTANCE.SOLID_COLORS;
    console.log(colors);
    return (
        <div>
            <ColorBlock colors = {colors}/>
        </div>
    )
}

export default SolidColors;