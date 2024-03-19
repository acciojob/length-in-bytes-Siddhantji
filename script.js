const byteSize = (str) => {
  // write your code here
	// Create a new Blob object with the string
    var blob = new Blob([str], {type: 'text/plain'});
    // Return the size of the Blob object
    return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
