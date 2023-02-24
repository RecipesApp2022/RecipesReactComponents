export default (numberOfItems = 1, startAt = 0) => {    
    const arrayOfNumbers = [...Array(numberOfItems + startAt).keys()];

    return arrayOfNumbers.slice(startAt);
}