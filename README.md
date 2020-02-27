# Masked Credit Card Number

Masked Credit Card Number is a JavaScript library for hide part of credit cards that come from a string or object

## Installation

Use the package manager npm to install masked-credit-card-number.

```bash
npm i masked-credit-card-number
```

## Usage

```javascript
import * as masked from "masked-credit-card-number";

masked("1111-2222-3333-4444");
// returns '****-****-****-4444'
masked({
  firtsCreditCard: "1111-2222-3333-4444",
  SecondCreditCard: "4444 4444 4444 1111"
});
// returns {firtsCreditCard: "****-****-****-4444", SecondCreditCard:"**** **** **** 1111"}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
