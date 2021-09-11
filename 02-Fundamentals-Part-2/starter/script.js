/*bill = {
    name: "Bill",
    birthYear: 1999,
    job: "web developer",
    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age
    },
    calcDriver: function() {
        if (this.age === undefined){
            this.calcAge()
        }
        if(this.age >= 16) {
            this.driver = true
        }
        else{
            this.driver = false
        }
    },
    getSummary: function() {
        return `${bill.name} is a ${bill.calcAge()}-year old ${bill.job}, and ${bill.calcDriver() ? 'has a drivers license':'does not have a drivers license'}`
    }
}

console.log(bill.getSummary)
*/

//coding challenge #3

/* john = {
    first: "John",
    last: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass/(this.height**2)
        return this.bmi
    }
}

mark = {
    first: "Mark",
    last: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass/(this.height**2)
        return this.bmi
    }
}

console.log(`${john.first} ${john.last} weight ${john.mass} kg and is ${john.height} m tall. \n
    ${mark.first} ${mark.last} is ${mark.mass} kg and is ${mark.height} m tall. \n
    ${mark.first} has a BMI of ${mark.calcBMI()} and ${john.first} has a BMI of ${john.calcBMI()}`) */

//coding challenge 4
calcTips = function(bill){
    return bill*.2
}
calcAvg = function(array) {
    sum = 0
    for (let i=0;i<array.length;i++){
        sum += array[i]
    }
    return sum/array.length
}

bills = [22,295,176,440,37,105,10,1100,86,52]
tips = []
totals = []

for (let i=0;i<bills.length;i++) {
    tips.push(calcTips(bills[i]))
}
for (let i=0;i<bills.length;i++) {
    totals.push(tips[i]+bills[i])
}
console.log(totals)
console.log(tips)
console.log(bills)
console.log(calcAvg(bills))
console.log(calcAvg(totals))