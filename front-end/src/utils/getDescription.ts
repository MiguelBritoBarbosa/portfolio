export const getDescription = (description: any) => {
    let result = '';
    let totalLength = 0;
    for (const item of description) {
        for (const child of item.children) {
            let text: string;
            if (child.type === 'text') {
                text = child.text;
            } else if (child.type === 'link' || child.type === 'list-item') {
                text = '';
                child.children.map((son: any) => {
                    if (son.type === 'link') {
                        text += son.children[0].text;
                    } else {
                        text += son.text;
                    }
                });
            } else {
                text = '';
            }
            const remainingLength = 160 - totalLength;

            if (text.length <= remainingLength) {
                result += text;
                totalLength += text.length;
            } else {
                result += text.slice(0, remainingLength);
                totalLength = 160;
                break;
            }

            if (totalLength < 160) {
                result += ' ';
                totalLength += 1;
            }

            if (totalLength >= 160) break;
        }

        if (totalLength >= 160) break;
    }
    return result.slice(0, 160);
};
