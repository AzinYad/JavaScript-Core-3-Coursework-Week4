function sales(carsSold) {
  let result = {
    Ford: 0,
    Honda: 0,
    "Land Rover": 0,
    Toyota: 0,
  };
  carsSold.forEach((car) => {
    if (car.make === "Ford") {
      result.Ford += car.price;
    } else if (car.make === "Honda") {
      result.Honda += car.price;
    } else if (car.make === "Land Rover") {
      result["Land Rover"] += car.price;
    } else if (car.make === "Toyota") {
      result.Toyota += car.price;
    }
  });
  return result;
}
console.log(
  sales([
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
  ])
);
module.exports = sales;
