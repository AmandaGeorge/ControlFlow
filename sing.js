var bottles = Number(prompt("How many bottles of beer do you want?", "Enter a number"));
for (i = bottles; i > 0; i -= 1) {
    if (i > 1) {
        console.log(i + " bottles of beer on the wall,")
        console.log(i + " bottles of beer!")
        console.log("Take one down and pass it around,")
        if (i > 2) {
            console.log((i - 1) + " bottles of beer on the wall!")   
        }
        else if (i === 2) {
            console.log("1 bottle of beer on the wall!")
        }
    }
    else if (i === 1) {
        console.log(i + " bottle of beer on the wall,")
        console.log(i + " bottle of beer!")
        console.log("Take one down and pass it around,")
        console.log("No more bottles of beer on the wall!")
    }
}