import { validateMobileNum } from "@utils/helpers"

describe('MOBILE NUMBER VALIDATION TESTS', ()=>{
    test('Empty mobile number test', ()=>{
        expect(validateMobileNum('')).toBe('Enter Mobile Number');
    })

    test('Mobile number <10 digits', ()=>{
        expect(validateMobileNum('7878')).toBe('Mobile number must be of 10 digits');
    })

    test('Correct Mobile Number', ()=>{
        expect(validateMobileNum('1234567890')).toBe('');
    })
})




// helper functions single file for test cases