// Code your solution in this file!
let hq=42

function distanceFromHqInBlocks(distance){
    if (distance > hq)
    return distance - hq
    else if (hq > distance)
     return hq - distance
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264
}
function distanceTravelledInFeet(start, destination){
    if (destination > start)
    return (destination - start) * 264
    else if (start > destination)
    return (start - destination) *264
}
function calculatesFarePrice(start, destination){
    const travel= distanceTravelledInFeet(start,destination)
    if (travel < 400)
    return 0
    else if (travel <= 2000)
    return (travel -400)* .02
    else if (travel > 2000 && travel <2500)
    return 25
    else 
    return 'cannot travel that far'
}