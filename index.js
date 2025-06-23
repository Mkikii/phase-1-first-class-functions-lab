// Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that creates fare multipliers
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Double the fare
const fareDoubler = createFareMultiplier(2);

// Triple the fare
const fareTripler = createFareMultiplier(3);

// Select different drivers based on the function provided
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}