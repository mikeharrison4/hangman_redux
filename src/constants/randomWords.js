export const randomWords = `Atlanta
Austin
Boston
Chicago
Columbus
Dallas
Denver
Indianapolis
Los Angeles
Miami
Montgomery County
Nashville
Newark
New York City
Northern Virginia
Philadelphia
Pittsburgh
Raleigh
Toronto
Washington`.split('\n');

export const randomWord = () => {
    const random = Math.floor(Math.random() * randomWords.length);
    return randomWords[random].toLowerCase();
};
