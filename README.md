# Node Scaler

Simple class for scaling array of numerical values

## Usage

### Example

```javascript
const NodeScaler = require('node-scaler');

// define our data we want to scale
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// create new instance of NodeScaler class
const scaler = new NodeScaler();

// scale all values between 0 and 1
const scaledValues = scaler.scaleValues(values, 0, 1);

console.log(scaledValues.values); // [ 0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1 ]

// unscale scaled values back to their original value
const unscaledValues = scaledValues.unscaleValues(scaledValues.values);

console.log(unscaledValues); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

### Methods

#### scaleValues

Accepts an array of numerical values and returns the following object:

```typescript
{
    // get the array of scaled values
    values: number[]

    // scale a new value using the previously scaled properties
    scaleValue: (value: number) => number

    // unscale an array of values to the original scale
    unscaleValues: (values: number[]) => number[]
}
```

#### unscaleValues

Method parameters:

```typescript
values: number[] // array of scaled values
minDomain: number // min value in domain
maxDomain: number // max value in domain
outputRangeMin: number // min output range value
outputRangeMax: number // max output range value
```

Returns an array of numerical unscaled values
