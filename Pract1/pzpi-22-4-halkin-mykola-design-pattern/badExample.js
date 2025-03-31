class Shipping {
    constructor(type, zone, time) {
        this.type = type
        this.zone = zone
        this.time = time
    }

    calculateCost(weight) {
        if (this.type === "standard") {
            if (this.zone === "urban") {
                return weight * 5
            } else {
                return weight * 7
            }
        } else if (this.type === "express") {
            if (this.time === "night") {
                return weight * 12
            } else {
                return weight * 10
            }
        } else if (this.type === "overnight") {
            return weight * 6
        } else {
            throw new Error("unknown type")
        }
    }
}

const standardShipping = new Shipping("standard", "urban", "day")
console.log(standardShipping.calculateCost(2))

const expressShipping = new Shipping("express", "suburban", "night")
console.log(expressShipping.calculateCost(2))

const overnightShipping = new Shipping("overnight", "rural", "day")
console.log(overnightShipping.calculateCost(2))