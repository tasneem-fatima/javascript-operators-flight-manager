function Prices() {
    const calculateFinalPrice = (basePrice, passengerTypePercent, flightTypePercent)=> {
        let finalPrice = basePrice
        finalPrice *= 1+passengerTypePercent/100;
        finalPrice *= 1+flightTypePercent/100;

        return finalPrice.toFixed(2);
    }
    const calculateDefaultFinalPrice =(basePrice, passengerType, flightType)=> {
        let finalPrice = basePrice;

        switch(passengerType.toUpperCase()){
            case 'REGULAR': finalPrice *=0.95
            break;
            case 'VIP': finalPrice *=1.05
            break;
        }
        switch(flightType.toUpperCase()){
            case 'ECONOMY': finalPrice *=0.97
            break;
            case 'BUSINESS': finalPrice*=1.1
            break;
        }
    }
    const calculateTotalFinalPrice = (seats, basePrice, passengerType, flightType )=> {
        return seats * calculateDefaultFinalPrice(basePrice, passengerType, flightType)
    }
    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}
module.exports=Prices();


