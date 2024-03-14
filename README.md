# Base-Convertor
Base Convertor is a Node.js package that allows you to convert numeric values between different numeral bases, including binary, decimal, octal, and hexadecimal. Please note that this package currently supports non-fractional values only.

## Installation
To install my-base-convertor, you need to have Node.js installed on your system. Then, you can follow these steps : 

- Navigate to the directory where you want to use the package.
- Initialize npm by running ( in your terminal ) :
  ```javascript
  npm init
  ```
- Install the package by running ( in your terminal ) : 
  ```javascript
  npm install my-base-convertor
  ```

  ## Usage

After installing the package, you can use it in your projects by requiring it.Write the below code under your index.js( or as your file name ) file.

```javascript
const calculateAge = require('my-base-convertor');

const converter = new BaseConversion();
converter.performConversion();
```
Then run the below command ( in your terminal ) :
  ```javascript
  node index.js   
  ```
Upon running the module, it prompts the user to enter the base they want to convert from, the base they want to convert to, and the value they wish to convert. After receiving the input, it performs the conversion and outputs the result.

## License
This package is licensed under the Apache 2.0 License.
