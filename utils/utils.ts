import copy from 'copy-to-clipboard';

export class Utils {
    public static getRandomEmoji () {
        const totalEmojis = ['😋', '😇', '😍', '😎', '😴', '🤯', '👻', '🤑'];
        const totalLen = totalEmojis.length;
        const randomIndex = Math.floor(Math.random()*(totalLen));
        return totalEmojis[randomIndex];
    }

    public static copyToClipboard(text: string) {
        copy(text);
    }
}