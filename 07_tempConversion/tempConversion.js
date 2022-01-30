const ftoc = function(tempF) {
  const tempC = Math.round((tempF-32)/1.8*10)/10;
  return tempC;
};

const ctof = function(tempC) {
  const tempF = Math.round(((tempC*1.8) + 32)*10)/10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
