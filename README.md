# LUHN-ALGORITHM-IMPL

Luhn-algorithm-impl is a Typescript/Javascript library implementation of official algorithm for Credit Card, IMEI and French SIRET number verification.

[Luhn Algorithm](https://fr.wikipedia.org/wiki/Formule_de_Luhn)

## Installation

Use the [npm](https://npmjs.com) package manager to install Luhn-algorithm-impl.

```shell
npm i luhn-algorthim-impl
```

## Usage

```Typescript
import { checkSumLuhn } from 'luhn-algorthim-impl';

# returns true
checkSumLuhn('972487086');

# returns false
checkSumLuhn('972-487-086');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)