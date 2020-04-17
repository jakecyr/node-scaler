# Node Scaler

Simple class for scaling array of numerical values


## Usage

```javascript
const NodeScaler = require('../main');

// define our data we want to scale
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// create new instance of NodeScaler class
const scaler = new NodeScaler();

// scale all values between 0 and 1
const scaledValues = scaler.scaleValues(values, 0, 1);

console.log(scaledValues.values); // [ 0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1 ]

// unscale scaled values back to their original value
const unscaledValues = scaledValues.unscaleValues([0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1]);

console.log(unscaledValues); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
