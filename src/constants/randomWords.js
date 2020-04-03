export const randomWords = `appliances
bathroom
clothing
furniture
kitchen
Fabric and cloth
baby
plumbing
Home improvement
Parts of a house
relatives
Cooking in the kitchen
family
Emergency measures
Northern Virginia
Newspaper terms
Tool box`.split('\n');

export const randomWord = () => {
    const random = Math.floor(Math.random() * randomWords.length);
    return randomWords[random].toLowerCase();
};
