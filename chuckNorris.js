
var MESSAGE = readline();

print(encodeMessage(MESSAGE));


function encodeMessage(message) {

    var binaryFormOfString = message.split('').map(function(c) {
        return toBinary(c)
    }).join('');
    return binaryToChuckNorris(binaryFormOfString);
    
    function toBinary(input) {
        var out = '';
        for (i=0; i < input.length; i++) {
         	out +=input[i].charCodeAt(0).toString(2);
        }
        //pad with zeroes
        if (out.length < 7) {
            out = getZeroString(7 - out.length) + out;
        }
        printErr(out);
        return out;
    }
    
    function binaryToChuckNorris(binaryString) {
        var encodingMap = {
          '0': '00',
          '1': '0'
        };
        
        var unaryString = '';
        var binaryChars = binaryString.split('');
        var len = binaryChars.length;
        var currentChar = binaryChars[0];
        var currentCharCount = 0;
        
        for (var i = 0; i < len; i++) {
            var thisChar = binaryChars[i];
            if (thisChar !== currentChar) {
                // printErr('This:' + thisChar);
                // printErr('Curr:' + currentChar);
                // printErr('Count:' + currentCharCount);
                unaryString += encodingMap[currentChar] + ' ' + getZeroString(currentCharCount) + ' ';
                // printErr('String:' + unaryString);
                currentChar = thisChar;
                currentCharCount = 1;
            } else {
                currentCharCount += 1;
            }
        }
        //add the final character
        unaryString  += encodingMap[currentChar] + ' ' + getZeroString(currentCharCount);
        printErr('String:' + unaryString);
        
        return unaryString;
    }
    
    function getZeroString(num) {
        var i = 0;
        returnString = '';
        while (i < num) {
            returnString += '0';
            i += 1;
        }
        return returnString;
    }
    
}



