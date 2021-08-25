import powerArray from "./ConvertCase/powerArray"



describe("#powerArray", () => {
    // Overall testing pattern ZOM(BIES)
    // Zero
    // One case
    // Many and More complex

    test("the fuction exist", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 0 ;
        const inputArray = [];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = powerArray(inputArray,inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(-1);
    });

    test("the fuction exist", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 2 ;
        const inputArray = [1,2,3,4];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = powerArray(inputArray,inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(9);
    });

    test("the fuction exist", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = 3 ;
        const inputArray = [2,4,8,9];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = powerArray(inputArray,inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(81);
    });

    test("the fuction exist", () => {
        // Arrange / Act / Assert (Prepare / Run / Expect) (Setup / Execute / Assert)
        // Setup
        const inputvalue = -3 ;
        const inputArray = [2,4,8,9];
        // Execute - call the code (pretend this function exists that
        // converts from Farenheit to Celsius)
        const actual = powerArray(inputArray,inputvalue);

        // Assert - check that the state of the program matches our expectation
        expect(actual).toEqual(-1);
    });

});