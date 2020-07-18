/**
** feetToMile Function
*/
let perFeet = 17000

function feetToMile(perFeet) {
    // We Know 1 Mile = 5280 Feet
    let perMile = perFeet / 5280
    return perMile
}
const resultFeetToMile = feetToMile(perFeet)
console.log(resultFeetToMile);




/**
** woodCalculator Function
*/
function woodCalculator(chair, table, bed) {
    // i Chair = 1 qbet feet wood
    let chairCount = chair * 1
    // i Table = 3 qbet feet wood
    let tableCount = table * 3
    // i Bed = 5 qbet feet wood
    let bedCount = bed * 5

    let totalWood = chairCount + tableCount + bedCount
    return totalWood
}
const resultWood = woodCalculator(6, 3, 3)
console.log(`Total Weed ${resultWood} qbet Feet}`);




/**
** brickCalculator Function
*/
let floor = 29
let numberOfBuildingFloor = 30
let perFeetBricks = 1000


function brickCalculator(numberOfBuildingFloor) {

    let totalBricks = 0

    for (let i = 1; i < numberOfBuildingFloor; i++) {
        if (floor <= 10) {
            totalBricks = i * perFeetBricks * 15 * floor
        } else if (floor <= 20) {
            let floor1To10 = 15 * perFeetBricks * 10
            let extraFloor10To20 = floor - 10
            extraFloor10To20 = extraFloor10To20 * 12 * perFeetBricks

            totalBricks = floor1To10 + extraFloor10To20
        } else if (floor <= 30) {
            floor1To10 = 15 * perFeetBricks * 10
            let floor11To20 = 12 * perFeetBricks * 10
            let extraFloor20To30 = floor - 20
            extraFloor20To30 = extraFloor20To30 * 10 * perFeetBricks

            totalBricks = floor1To10 + floor11To20 + extraFloor20To30
        }
        return totalBricks
    }
}
const resultBrick = brickCalculator(numberOfBuildingFloor)
console.log(resultBrick);




/**
** tinyFriend Function
*/
let friendName = ['Shakib_Al_Hasan', 'Tamim_Iqbal', 'Papon', 'Mushfiqur_Rahim', 'Mahmudullah_Riyad', 'Mashrafe_Bin_Mortaza']

function tinyFriend(friendName) {
    let minIndex = friendName[0]
    // condition check is array run this function without return a alert 'Please Provide Array'
    if (!Array.isArray(friendName)) return 'Please Provide Array'
    for (let i = 0; i < friendName.length; i++) {
        let element = friendName[i]
        if (element.length < minIndex.length) {
            minIndex = element
        }
    }
    return minIndex
}

const resultTinyFriend = tinyFriend(friendName)
console.log(resultTinyFriend);



