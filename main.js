const polylinearScale = require('polylinear-scale');

class NodeScaler {

    /**
     * 
     * @param {number[]} data Array of numbers to scale
     * @param {number} outputRangeMin Min value in output range
     * @param {number} outputRangeMax Max value in output range
     */
    scaleValues(data, outputRangeMin, outputRangeMax) {
        if (!Array.isArray(data)) {
            throw new Error('Invalid data type. Must be array of numbers');
        }

        data = data.map((value) => parseFloat((value)));

        let min = Infinity;
        let max = -Infinity;

        for (const value of data) {
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }

        const linear = polylinearScale([min, max], [outputRangeMin, outputRangeMax]);
        const scaledValues = data.map((value) => linear(value));

        this.min = min;
        this.max = max;

        this.outputRangeMin = outputRangeMin;
        this.outputRangeMax = outputRangeMax;

        return {
            values: scaledValues,
            scaleValue: (value) => linear(value),
            unscaleValues: (values) => this.unscaleValues(values, min, max, outputRangeMin, outputRangeMax),
        };
    }
    /**
     * 
     * @param {number[]} values Array of values to unscale
     * @param {number} minDomain Min value in domain
     * @param {number} maxDomain Max value in domain
     * @param {number} outputRangeMin Output value min
     * @param {number} outputRangeMax Output value max
     */
    unscaleValues(values, minDomain, maxDomain, outputRangeMin, outputRangeMax) {
        if (this.min === undefined || this.max === undefined) {
            throw new Error('No previously scaled values state found');
        }

        return values
            .map((value) => polylinearScale([minDomain, maxDomain], [outputRangeMin, outputRangeMax])(value));
    }
}

module.exports = NodeScaler;
