const functions = {
    gradeClassifier: (grade) => {
        // TODO: Write code here
        const grade_dict = [
            { min: 0, max: 74.99, letter: 'D', value: 'Did not Meet Expectation' },
            { min: 75, max: 79.99, letter: 'N', value: 'Needs Improvement' },
            { min: 80, max: 84.99, letter: 'S', value: 'Satisfactory' },
            { min: 85, max: 89.99, letter: 'G', value: 'Good' },
            { min: 90, max: 94.99, letter: 'V', value: 'Very Good' },
            { min: 95, max: 100, letter: 'O', value: 'Outstanding' }
        ]

        if(isNaN(grade) || (!isNaN(grade) && (grade < 0 || grade > 100))) {
            return { valid: false }
        }

        result = grade_dict.find(val => grade >= val.min && grade <= val.max);
        return { valid: true, letter: result.letter, value: result.value };
    }
}

module.exports = functions;
