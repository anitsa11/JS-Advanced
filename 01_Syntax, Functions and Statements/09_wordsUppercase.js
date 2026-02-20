function wordsUppercase(text) {
    let wordArr = text.split(/[\W]/);
    let resultArr = wordArr.filter(x => x !== "");

    let result = resultArr.join(", ").toUpperCase();

    console.log(result);
}

wordsUppercase('Hi, how are you?')