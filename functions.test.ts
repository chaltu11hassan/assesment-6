// const {shuffleArray} = require('./utils')

// let testArr = [4, 5, 10, 11, 13];
// describe('shuffleArray should', () => {
//     test('returns length of array', ()=>{
//         let results = shuffleArray(testArr)
//         expect(testArr.length).toEqual(results.length)

//         // test()
//         // test()
//     })// CODE HERE
// })

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be an array', () => {
        const testArray = [4, 5, 10, 11, 13]
        const testVar = shuffleArray(testArray)
        expect(Array.isArray(testVar)).toBe(true)
  });
  test('should be all the same items in the array', () => {
    const testArray = [4, 5, 10, 11, 13]
    const testVar = shuffleArray(testArray)
    expect(testArray.length).toEqual(testVar.length);
  })
})