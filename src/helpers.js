const getRandIndex = (arr)=>{

    let max = arr.length-1;
    return Math.floor(Math.random() * (max - 0 + 1));
}

const shuffleArr = (items) => {

    let shuffledArr = [];

    while(items.length > 0){
        let randIndex = getRandIndex(items);
        shuffledArr.push(items[randIndex]);
        items.splice(randIndex,1);
    }
    console.log('Shuffled Answer Keys: ', shuffledArr);
    return shuffledArr;
}

const getRandItems = (arr, numItems) => {

    console.log('arr: ', arr);
    let arrCopy = [...arr];
    let randItems = [];

    for(let i=0; i<numItems; i++){
        let randIndex = getRandIndex(arr);
        randItems.push(arr.splice(randIndex,1));
    }

    console.log('randItems: ', randItems);
    return randItems;
}

export {getRandIndex, shuffleArr, getRandItems};

