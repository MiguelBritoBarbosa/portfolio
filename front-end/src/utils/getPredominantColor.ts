import Vibrant from 'node-vibrant';

export const getPredominantColor = async (url: string) => {
    const imagePath = url;
    let color = [124, 77, 255];
    const vibrant = new Vibrant(imagePath);

    await vibrant.getPalette((err, palette) => {
        if (err) {
            console.error(err);
            return;
        }
        if (palette !== undefined) {
            if (palette.Vibrant !== null && palette.Vibrant !== undefined) {
                color = palette.Vibrant.rgb;
            }
        }
    });

    return color;
};
