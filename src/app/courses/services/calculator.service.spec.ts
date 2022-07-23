import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

/*

x[describe | it] to skip test
f[describe | it] to focus/run only marked functions

Unit test p1 - Summary:

1) iIt blocks are used to test one of the methods per specification
2) Mock all the immediate dependencies
3) Do not inject real intense, instead provide alternative test-only implementations using Jasmin spys.
4) Isolate multiple tests by using the beforeEach() function
**NB) why mock, to test the method/functionality in isolation**

*/

// To describe a test suite
describe('CalculatorService', () => {
    let calculator: CalculatorService,
        loggerSpy: any;

    //  user the beforeEach(() =>{}); syntax to initialize objects and services before each specification is called
    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        
        // **to define the return method of the jasmin sypOn object**
            // loggerSpy.log.and.return('working')

        // Use TestBed.configureTestingModule({})to implement dependency injection
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy }
            ]
        })
        calculator = TestBed.get(CalculatorService);

    })
    //  To define a specification
    it('should add two numbers', () => {
        const res = calculator.add(1,2);

        expect(res).toBe(3);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    });

    it('should subtract two numbers', () => {
        const res = calculator.subtract(1,2);

        expect(res).toBe(-1)
    })

})