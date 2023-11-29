// Define a base object for Automobile
const automobilePrototype = {
    start: function () {
      console.log("The engine is started.");
    },
    stop: function () {
      console.log("The engine is stopped.");
    },
  };
  
  // Create a fourWheeler object inheriting from automobilePrototype
  const fourWheeler = Object.create(automobilePrototype);
  
  // Add additional properties for fourWheeler
  fourWheeler.wheels = 4;
  fourWheeler.fuelType = "Petrol";
  
  // Example usage
  fourWheeler.start();
  console.log(`Number of Wheels: ${fourWheeler.wheels}`);
  console.log(`Fuel Type: ${fourWheeler.fuelType}`);
  fourWheeler.stop();
  