function Flights() {
   const calculateNumberOfFlights = (numberOfPassengers, capacity) => {
    let numberOfFlights = 0;
    if(numberOfPassengers <0){
        throw new Error('The number of passengers must be a positive integer value')
    }
    if(capacity< 0){
        throw new Error('The capacity of the flight must be a positive integer value')
    }
    if (numberOfPassengers % capacity === 0) {
        numberOfFlights = numberOfPassengers / capacity
    }
    else {
        numberOfFlights = numberOfPassengers / capacity + 1
    }
    return numberOfFlights
}
    const checkAircraftRevision=(limit, distArray)=> {
        let sum = 0;
        for (let i = 0; i < distArray.length; i++) {
            sum += distArray[i];
        }
        if(sum <= limit/2){
            return 'The revision needs to be done within the next 3 months';
        }
        else if(sum > limit/2 && sum<=limit/3){
            return 'The revision needs to be done within the next 2 months';
        }
        else if(sum> limit/3 && sum<=limit){
            return 'The revision needs to be done within the next month'
        }
        if(sum>limit){
            throw new Error('Limit exceeded')
        }
    }
    return { calculateNumberOfFlights, checkAircraftRevision};
}
module.exports=Flights();