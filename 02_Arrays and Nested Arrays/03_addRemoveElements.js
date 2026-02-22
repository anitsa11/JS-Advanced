function addRemoveElements (arr) {
    let num = 1;
    let result = [];

    arr.forEach( command => {
        command === "add" ? result.push(num): result.pop();
        num ++; 
    });

    let buff = result.length ? result.join("\n") : "Empty";
    console.log(buff);
}

addRemoveElements (['add','add', 'remove', 'add', 'add'])