// Code your solution in this file!
const scuberHQ = 42;
function distanceFromHqInBlocks(pickup) {
    //returns the number of blocks given a value
    if (pickup > 42) {
        return pickup - scuberHQ
    }
    else if (pickup < 42) {
        return scuberHQ - pickup
    }
  }
  distanceFromHqInBlocks(50)
  distanceFromHqInBlocks(40)



  function distanceFromHqInFeet(pickup) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    const blocks = distanceFromHqInBlocks(pickup);
    return blocks*264
  }
  distanceFromHqInFeet(40)


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination){
    let feetTravelled = (destination - start)*264;
    return feetTravelled}
    else {
        return (start - destination)*264
    }
  }
  distanceTravelledInFeet(34, 38)


  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return distance*0
    }
    else if (distance > 400 && distance <= 2000 ){
       return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <2500){
        return 25;
    }
    else if (distance >= 2500) {
        return 'cannot travel that far'
    }
  }