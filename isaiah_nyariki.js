// Function to remove vowels from a string
function removeVowels(name) {
    return name.replace(/[aeiouAEIOU]/g, '');
}

// If the script is run directly
if (require.main === module) {
    // Get the name from command line arguments
    const inputName = process.argv[2];

    if (!inputName) {
        console.log("Please provide a name. Example usage: node isaiah_nyariki.js Joshua");
    } else {
        const result = removeVowels(inputName);
        console.log(`Original name: ${inputName}`);
        console.log(`Without vowels: ${result}`);
    }
}
