const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4];
describe('shuffleArray should', () => {
    test('returns length of array', ()=>{
        let results = shuffleArray(testArr)
        expect(testArr.length).toEqual(results.length)

        // test()
        // test()
    })// CODE HERE
})

