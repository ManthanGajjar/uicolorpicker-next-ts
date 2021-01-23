import { CONSTANCE } from '../../helper/constance';
export const SetTab = ( isSolidColor: boolean) => {
    return { type: isSolidColor ? CONSTANCE.TAB_TYPES[0] : CONSTANCE.TAB_TYPES[1] }
}
