import ColorBlock from './colorBlock';
import { NextPage } from 'next';
import { CONSTANCE } from '../helper/constance';

const SolidColors: NextPage = () => {
    const colors = CONSTANCE.SOLID_COLORS;
    return (
        <div>
            <ColorBlock colors = {colors}/>
        </div>
    )
}

export default SolidColors;