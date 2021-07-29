'use strict'

// a class that .. well represents a font
class Font {
    #name; //the name of this font, same as fontFile, excluding extension
    #supportedChars;

    constructor(details) {
        var detailsArray = details.split(' ');
        this.#name = detailsArray[0].split(".")[0];
        this.#supportedChars =
            (detailsArray[1].includes("AZ") ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
            (detailsArray[1].includes("az") ? "abcdefghijklmnopqrstuvwxyz" : "") +
            (detailsArray[1].includes("10") ? "1234567890" : "") +
            (detailsArray[2] ? detailsArray[2] : "");
    }

    getName() {
        return this.#name;
    }

    getSupportedChars() {
        return this.#supportedChars;
    }
}

//a function that will read the fontFaceDetails.txt and will create the Font Objects
function readCreateFont(filePath) {
    // Requiring fs module in which
// readFile function is defined.
    const fs = require('fs')

// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'
    fs.readFile('fonts/fontFaceDetails.txt', 'utf-8', (err, data) => {
        if (err) throw err;

        // Converting Raw Buffer to text
        // data using tostring function.
        console.log(data);
    })
}

readCreateFont("")