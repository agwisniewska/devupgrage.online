/*  TODO: Get required data from external services: 
  1. minRPM and maxRPM
  2. currentRPM
  3. currentGear
  4. maxDrive (maksymalny dostępny bieg)
*/

class MyClass {
  constructor(min, max, maxDrive) {
    this.minRPM = min;
    this.maxRPM = max;
    this.maxDrive = maxDrive;
  }

  myMethod(currentGear, currentRPM) {
    if (currentRPM > this.maxRPM) {
      if (currentGear > this.maxDrive) {
        return currentGear;
      }

      return currentGear + 1;
    }

    if (currentRPM < this.minRPM) {
      if (currentGear === 1) {
        return currentGear;
      }
    }

    return currentGear - 1;
  }
}
