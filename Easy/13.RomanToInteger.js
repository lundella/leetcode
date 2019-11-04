/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanSet = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    let result = [];
    let ii = 0;

    let characterList = s.split("");

    let translateInt = characterList.map((char, index)=>{
      return romanSet[char];
    })

    console.log(translateInt);
    
    for(let i=0; i < characterList.length-1; i++) {
      if(i === 0) { result += translateInt[i]; }

      if(translateInt[i] === translateInt[i+1]) {
        result[ii] += translateInt[i+1];
      } else if(translateInt[i] < translateInt[i+1]){
        result[ii] = translateInt[i+1] - result[ii];
        // ii++;
      } else if(translateInt[i] > translateInt[i+1]){
        result[ii] += translateInt[i+1];
      }
    }



    // result = characterList;



    return result;
};


console.log(romanToInt("MCMXCIV"));