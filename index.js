function distanceFromHqInBlocks(distance) {
     const HQ = 42;
     if (distance <= 42){
        return HQ - distance
     } else {
        return (distance - HQ); 
     }
}

function distanceFromHqInFeet(distance) {
   const HQ = 42;
   if (distance <= 42){
      return (HQ - distance) * 264;
   } else {
      return (distance - HQ) * 264; 
   }
}

function distanceTravelledInFeet(start, destination) {
   if (destination >= start){
      return (destination - start) * 264;
   }
   if (destination <= start){
      return (start - destination) * 264;
   }
}

function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start, destination) 
   if (distance <= 400){
      return (destination) * 0
   }
   if (distance > 400 && distance < 2000){
      return (distance - 400) * .02;
   }
   if (distance > 2000 && distance < 2500){
      return (25) 
   }
    else { 
      return ('cannot travel that far')
   }
}
