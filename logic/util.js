
function Util() {
    const calculateTotalDistributedPassengers=({vipWithBusiness, vipWithEconomy, regWithBusiness, regWithEconomy})=> {
        passengers = vipWithBusiness + vipWithEconomy + regWithBusiness + regWithEconomy
        return passengers;
    }
    const calculateTotalNumberOfPassengers=(numbersArray)=> {
    let sum = 0;
    for(i=0;i<numbersArray.length;i++){
        sum += numbersArray[i]
    }
    }
    const checkInput = (input) => {
        if (!input) {
            throw new Error('Incorrect Values!')
        }
        if (isNaN(input)) {
            throw new Error('Incorrect Values!')
        }
    }
    const calculateTotalDistance=(distanceArray)=> {
    let sum =0;
    let distance;
        for (distance of distanceArray){
        if(distance <0){
            continue;
        }
        sum += distance;
        }
        return sum;

    }
    const calculateBonusPoints=(businessDistArray, economyDistArray,businessBonus, economyBonus)=> {
        let totalBusinessDistance = calculateTotalDistance(businessDistArray);
        let totalEconomyDistance = calculateTotalDistance(economyDistArray);
        let points = (businessBonus * totalBusinessDistance )/100 +
            (economyBonus * totalEconomyDistance )/100
        return points;

    }
    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}
module.exports =Util();

