const string = "Привет! Как дела?";

const vowels = ["а", "у", "о", "ы", "и", "э","я", "ю", "ё", "е"];

const getVowels = filteredString => {
    let extractedVowels = "";

    for (let i = 0; i < filteredString.length; i++) {
        const currentLetter = filteredString[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
}

console.log(getVowels(string));