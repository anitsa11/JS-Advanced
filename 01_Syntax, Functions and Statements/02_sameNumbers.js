function sameNumber(num) {
    let numAsString = num.toString();

    let firstElement = Number(numAsString[0]);
    let sum = firstElement;
    let isSame = true

    for(let i = 1; i < numAsString.length; i++ ) {
        let currentNum = Number(numAsString[i]);

        if (currentNum !== firstElement) {
            isSame = false;
        }

        sum += currentNum;
    }

    console.log(isSame);
    console.log(sum);
}

sameNumber(222222);
sameNumber(1234);