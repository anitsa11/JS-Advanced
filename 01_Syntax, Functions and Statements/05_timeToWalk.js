function timeToWalk (stepsN, length, speed ) {
    let numStemps = Number(stepsN);
    let footLenghtM = Number(length);
    let speedMeters = (Number(speed) * 1000)/3600;

    let breakTime = 0;

    let distanceM = numStemps * footLenghtM;

    if (distanceM >= (500)) {
        breakTime = Math.floor(distanceM/500);
    }   

    let resultTimeM = distanceM / speedMeters;

    resultTimeM += breakTime * 60;

    let hours = Math.floor(resultTimeM / 3600);
    let minutes = Math.floor((resultTimeM % 3600)/60);
    let seconds = Math.round ((resultTimeM % 60));

    console.log(distanceM)

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

}

timeToWalk(4000, 0.60, 5)