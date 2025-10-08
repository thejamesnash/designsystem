export const integerToPercent = (a,b) => {
    let percent;
    if( a ){
        percent = (a / b) * 100;
    } else {
        percent = Math.floor(Math.random() * 100) + 1;
    }
    
    return percent;
}