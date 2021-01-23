import copy from 'copy-to-clipboard';
import { CONSTANCE } from '../helper/constance';

export class Utils {
    public static getRandomEmoji () {
        const totalEmojis = ['😋', '😇', '😍', '😎', '😴', '🤯', '👻', '🤑'];
        const totalLen = totalEmojis.length;
        const randomIndex = this.getRandomNum(totalLen);
        return totalEmojis[randomIndex];
    }

    public static copyToClipboard(text: string) {
        copy(text);
    }

    public static getRandomNum(totalNum) {
        const randomIndex = Math.floor(Math.random()*(totalNum));
        return randomIndex;
    }

    public static randomGradientPair(totalArraysToLoad: number) {
        const allGradients = CONSTANCE.GRADIENT_COLORS;
        const gradientLen = allGradients.length;
        const colorArray = [];
        for(let i = 0; i < totalArraysToLoad; i++ ) {
            const firstId = this.getRandomNum(gradientLen);
            const secId = this.getRandomNum(gradientLen);
            colorArray.push({ firstId: allGradients[firstId], secId: allGradients[secId] });
        }
        return colorArray;
    }
}