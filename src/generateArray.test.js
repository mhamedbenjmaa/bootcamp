import generateArray from "./ConvertCase/generateArray";
import convert from "./ConvertCase/generateArray";

describe("#generateArray", () => {
    // Overall testing pattern ZOM(BIES)
    // Zero
    // One case
    // Many and More complex

    test("the fuction exist", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 0 ;
        
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = generateArray(inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual([0]);
    });

    test("the fuction retrun an empty array as default", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 0 ;
        const retrunArray = [0];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = generateArray(inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(retrunArray);
    });

    test("the fuction retrun an array with values", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 5 ;
        const retrunArray = [0,1,2,3,4];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = generateArray(inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(retrunArray);
    });

    test("the fuction retrun an array with values", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 2 ;
        const retrunArray = [0,1];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = generateArray(inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(retrunArray);
    });

});