function Passengers() {
    const checkFlightCapacity=(flightCapacity,passengersArray)=>{
        let passengers =0;
        for(let i = 0; i<passengersArray.length; i++){
            passengers +=passengersArray[i];
        }
        if (passengers < flightCapacity){
            return passengers;
        }
        else{
            throw new Error('Number of Passengers greater than capacity')
        }
    }
    const distributeAllSeatsToAllPassengers=(numOfVipPass,numOfRegPass,numOfFlights,numOfBusinessSeats,numOfEconomySeats)=> {
        if (numOfVipPass > numOfBusinessSeats * numOfFlights ){
            vipWithBusiness = numOfBusinessSeats
            vipWithEconomy = (numOfVipPass - numOfBusinessSeats)
            regWithBusiness = 0
            regWithEconomy=  (numOfEconomySeats - vipWithEconomy )
        }
        else if (numOfVipPass < numOfBusinessSeats * numOfFlights){
            vipWithBusiness=numOfVipPass
            vipWithEconomy=0
            regWithBusiness=(numOfBusinessSeats-numOfVipPass)
            regWithEconomy=(numOfRegPass-regWithBusiness)
            }
        
        return {vipWithBusiness, vipWithEconomy, regWithBusiness, regWithEconomy}
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();
