export const generateIdsMatch = () => {
    const generatedIds = [];

    while (generatedIds.length < 2) {
        const randomNum = Math.floor(Math.random() * 6);

        if (generatedIds.indexOf(randomNum) === -1) {
            generatedIds.push(randomNum);
        }
    }
    return generatedIds;
} 