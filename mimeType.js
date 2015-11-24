
var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.

var mimeTypeMap = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0]; // file extension
    var MT = inputs[1]; // MIME type.
    mimeTypeMap[EXT.toLowerCase()] = MT;
}

for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var fileSplit = FNAME.split('.');
    if (fileSplit.length < 2) { //not an extension
        print('UNKNOWN');
    } else {
        var fileExtension = fileSplit[fileSplit.length - 1].toLowerCase();
        printErr(FNAME + ' - ' + fileExtension + ': ' + (mimeTypeMap[fileExtension] || 'UNKNOWN') )
        if (mimeTypeMap.hasOwnProperty(fileExtension)) {
            print(mimeTypeMap[fileExtension]);
        } else {
            print('UNKNOWN');
        }
    }
}

