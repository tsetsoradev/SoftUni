function Lily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sum = 0
    let present = 10
    let toy = 0


    for (let year = 1; year <= age; year++) {
        if (year % 2 != 0) {
            toy += 1

        } else {
            sum = sum + present
            present += 10
            sum = sum - 1
        }

    }
    sum = sum + toy * toyPrice
    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`)
    }
}

Lily([4, 10, 6])