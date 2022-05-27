"use strict";
//======================================================
// The first solution :
//======================================================

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];


  for (let i = 0; i< sampleSize; i++){

    let randomNumber = Math.floor(Math.random() * 6)+1;

    valueCounts[randomNumber - 1]++

  }

  const results = [];

  for (const count of valueCounts) {

    let procent = (count/sampleSize)* 100;

    procent = procent.toFixed(2);

    results.push(procent);

  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];


  for (const size of sampleSizes){

    console.log (`The experiment size is : ${size}`);
    console.log(runExperiment(size));
  }
 
}

main();


//=============================================
// The second solution:
//=============================================

function runExperiment(){

const valueCounts = [0, 0, 0, 0, 0, 0];

const sampleSizes = [100, 1000, 1000000];

for (let i = 0; i<sampleSizes.length; i++){

  for (let a = 0; a< sampleSizes[i]; a++){

  let randomNumber = Math.floor(Math.random() * 6)+1;

  valueCounts[randomNumber - 1]++ ;

      }

      let myResult = valueCounts.map(ele => ele=((ele/sampleSizes[i])* 100).toFixed(2));

      console.log (`The experiment size is : ${sampleSizes[i]}`);
      console.log(myResult);
}
}

runExperiment();


//===========================================================
// The third solution:
//===========================================================


function runExperiment() {

  const valueCounts = [0, 0, 0, 0, 0, 0];

  const sampleSizes = [100, 1000, 1000000];


  for (const size of sampleSizes){

  for (let i = 0; i< size; i++){ // I changed from simple size to size

    let randomNumber = Math.floor(Math.random() * 6)+1;

    switch(randomNumber){

        case 1:
            valueCounts[0]=valueCounts[0]+1;
            break;

        case 2:
            valueCounts[1]=valueCounts[1]+1;
            break;

        case 3:
            valueCounts[2]=valueCounts[2]+1;
            break;

        case 4:
            valueCounts[3]=valueCounts[3]+1;
            break;

        case 5:
            valueCounts[4]=valueCounts[4]+1;
            break;

        case 6:
            valueCounts[5]=valueCounts[5]+1;
            break;
    }

  }

  const results = [];

  for (const count of valueCounts) {

    let procent = (count/size)* 100; // I changed from simpleseze to size

    procent = procent.toFixed(2);

    results.push(procent);

  }
  console.log (`The experiment size is : ${size}`);
  console.log(results); // I added the console here.

  }
}
runExperiment();





