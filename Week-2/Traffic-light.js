
// The first solution :
//==================================

const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  
  let cycle = 0;

  while (cycle < 2) {

    trafficLight.stateIndex =0;
  
    for ( let i = 0 ; i<trafficLight.possibleStates.length; i++){
  
      console.log(`The traffic light is on : ${trafficLight.possibleStates[trafficLight.stateIndex]}` );

      trafficLight.stateIndex++
  
    }
        cycle++ ;
  }

  //==========================================
  // The second solution :
  //===========================================


const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {

    trafficLight.stateIndex = 0;

  for ( let i = 0 ; i<trafficLight.possibleStates.length; i++){

    currentState = trafficLight.possibleStates[trafficLight.stateIndex] ;

    trafficLight.stateIndex++

    switch ( currentState){

      case 'green':
        console.log("The traffic light is on", currentState);
        break;

      case "orange":
        console.log("The traffic light is on", currentState);
        break;

      case 'red':
        console.log("The traffic light is on", currentState);
        break;
      
    } 
  }
      cycle++ ;
}