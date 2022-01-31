
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
    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports =Util();

