const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
    it('When the grade value is not a number, then the result return should have a valid value of FALSE', () => {
        // Arrange
        let studentGrade = 'Not a valid grade';

        // Act
        let result = gradeClassifier(studentGrade);

        // Assert
        expect(result.valid).toEqual(false);
    });

    it('When the grade value is a number and it is outside of the grade classifier range, then the result return should have a valid value of FALSE', () => {
        // Arrange
        let studentGrade = 104;

        // Act
        let result = gradeClassifier(studentGrade);

        // Assert
        expect(result.valid).toEqual(false);
    });

    it('When the grade value a number and it is within the grade range, then the result return should have a valid value of TRUE with its corresponding details', () => {
        // Arrange
        let studentGrade = 94;

        // Act
        let result = gradeClassifier(studentGrade);
        
        // Assert
        expect(result.valid).toEqual(true);
        if(studentGrade <= 74.99) {
            expect(result.letter).toEqual('D');
            expect(result.value).toEqual('Did not Meet Expectation');
        } else if(studentGrade >= 75 && studentGrade <= 79.99) {
            expect(result.letter).toEqual('N');
            expect(result.value).toEqual('Needs Improvement');
        } else if(studentGrade >= 80 && studentGrade <= 84.99) {
            expect(result.letter).toEqual('S');
            expect(result.value).toEqual('Satisfactory');
        } else if(studentGrade >= 85 && studentGrade <= 89.99) {
            expect(result.letter).toEqual('G');
            expect(result.value).toEqual('Good');
        } else if(studentGrade >= 90 && studentGrade <= 94.99) {
            expect(result.letter).toEqual('V');
            expect(result.value).toEqual('Very Good');
        } else {
            expect(result.letter).toEqual('O');
            expect(result.value).toEqual('Outstanding');
        }
    });
});
