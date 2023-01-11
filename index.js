function distanceFromHqInBlocks(a){
    if (a > 42) {
        return (a - 42);
    } else if (a < 42){
        return (42-a)
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(a){
    return distanceFromHqInBlocks(a) * 264
}
distanceFromHqInFeet(distanceFromHqInBlocks(43))

function distanceTravelledInFeet(start,destination){
    if (start < destination){
        return (destination  -start) * 264;
    } else if (start > destination){
        return (start - destination) * 264
    }
    }
distanceTravelledInFeet(43,48)

function calculatesFarePrice(start, destination){
    const ft = distanceTravelledInFeet(start,destination);
    if (ft <=400) {
        return 0;
    }
    if (ft >= 401 && ft <= 2000){
        return (ft-400) * .02
            } else if (ft >= 2001 && ft <= 2500){
                return 25;
            } else if (ft >= 2501){
                 return `cannot travel that far`
            } else if (ft <= 400) {
                 return 25;
    }
}
calculatesFarePrice(distanceTravelledInFeet(start,destination));