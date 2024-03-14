class BaseConversion {
    constructor() {
        this.conversionMap = {
            'binary': {
                'decimal': this.binaryToDecimal,
                'hexadecimal': this.binaryToHexadecimal,
            },
            'decimal': {
                'binary': this.decimalToBinary,
                'hexadecimal': this.decimalToHexadecimal,
                'octal': this.decimalToOctal,
            },
            'hexadecimal': {
                'binary': this.hexadecimalToBinary,
                'decimal': this.hexadecimalToDecimal,
            },
            'octal': {
                'decimal': this.octalToDecimal,
            }
        };
    }

    // Binary to Decimal
    binaryToDecimal(binary) {
        return parseInt(binary, 2);
    }

    // Decimal to Binary
    decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2);
    }

    // Binary to Hexadecimal
    binaryToHexadecimal(binary) {
        return parseInt(binary, 2).toString(16).toUpperCase();
    }

    // Hexadecimal to Binary
    hexadecimalToBinary(hexadecimal) {
        return parseInt(hexadecimal, 16).toString(2);
    }

    // Decimal to Hexadecimal
    decimalToHexadecimal(decimal) {
        return (decimal >>> 0).toString(16).toUpperCase();
    }

    // Hexadecimal to Decimal
    hexadecimalToDecimal(hexadecimal) {
        return parseInt(hexadecimal, 16);
    }

    // Decimal to Octal
    decimalToOctal(decimal) {
        return (decimal >>> 0).toString(8);
    }

    // Octal to Decimal
    octalToDecimal(octal) {
        return parseInt(octal, 8);
    }

    // Method to take user input and perform conversion
    performConversion() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log();
        console.log("Enter 'binary' for Binary Base");
        console.log("Enter 'decimal' for Decimal Bae");
        console.log("Enter 'octal' for Octal Base");
        console.log("Enter 'hexadecimal' for Hexadecimal Base");
        console.log();
        readline.question('Enter the base to convert from: ', (fromBase) => {
            readline.question('Enter the base to convert to: ', (toBase) => {
                readline.question('Enter the value to convert: ', (value) => {
                    try {
                        const convertedValue = this.convert(fromBase, toBase, value);
                        console.log(`Converted value: ${convertedValue}`);
                    } catch (error) {
                        console.error(error.message);
                    }
                    readline.close();
                });
            });
        });
    }

    // Convert method
    convert(fromBase, toBase, value) {
        if (!this.conversionMap[fromBase] || !this.conversionMap[fromBase][toBase]) {
            throw new Error('Unsupported conversion');
        }

        const conversionFunction = this.conversionMap[fromBase][toBase];
        return conversionFunction(value);
    }
}

module.exports = BaseConversion;

// How to use 
// const converter = new BaseConversion();
// converter.performConversion();