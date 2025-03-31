class Shipping {
    calculateCost(weight, zone, time) {
        throw new Error("unimplemented")
    }
}

class StandardShipping extends Shipping {
    calculateCost(weight, zone) {
        return zone === "urban" ? weight * 5 : weight * 7
    }
}

class ExpressShipping extends Shipping {
    calculateCost(weight, _, time) {
        return time === "night" ? weight * 12 : weight * 10
    }
}

class OvernightShipping extends Shipping {
    calculateCost(weight) {
        return weight * 6
    }
}

class ShippingCreator {
    createShipping() {
        throw new Error("unimplemented")
    }

    calculateCost(weight, zone, time) {
        const shipping = this.createShipping()
        return shipping.calculateCost(weight, zone, time)
    }
}

class StandardShippingCreator extends ShippingCreator {
    createShipping() {
        return new StandardShipping()
    }
}

class ExpressShippingCreator extends ShippingCreator {
    createShipping() {
        return new ExpressShipping()
    }
}

class OvernightShippingCreator extends ShippingCreator {
    createShipping() {
        return new OvernightShipping()
    }
}

const standardCreator = new StandardShippingCreator()
console.log(standardCreator.calculateCost(2, "urban", "day"))

const expressCreator = new ExpressShippingCreator()
console.log(expressCreator.calculateCost(2, "suburban", "night"))

const overnightCreator = new OvernightShippingCreator()
console.log(overnightCreator.calculateCost(2, "rural", "day"))