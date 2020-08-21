
function nb_year(currentPopulation, growthInPercentage, newInhabitants, targetPopulation) {
    let numYearsToTarget = 0;
    growthInPercentage = growthInPercentage / 100;

   while (currentPopulation < targetPopulation) {
        currentPopulation = currentPopulation + (currentPopulation * growthInPercentage) + newInhabitants;
        numYearsToTarget++;
   }

   console.log(`It will take ${numYearsToTarget} years to get a population greater or equal to ${targetPopulation}`);
}

nb_year(1000, 2, 50, 1200);
nb_year(1500, 5, 100, 5000);
nb_year(1500000, 2.5, 10000, 2000000);


// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// nb_year(1000, 2, 50, 1200); -> 3





