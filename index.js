//Compressor of files by Hackenstaad.
//Use with caughtion!!!


//Declare & split user's string before processing
//var StringToCompress = "BAABAABAABAABAACCDBAFEFF";
/*  [1,"a"],
    [2,"b"],
    [3,"w"],
    //[4,"D"],
    //[5,"F"],
    //[6,"E"]
*/
    
var StringToCompress = "wabbawabba"; //string which we're going to compress.
var compressArr = StringToCompress.split(""); 
var endResult = "" //the final compressed string. This variable will be written into during compress
var c = "" // current character/string we're evaluating
var p = c // previous character/string we were evaluating.

//Declare two dimentional array (dictionary). 1 collum = Index/ordbox, 2 collum = string related to index
var dictionary = 
[
    [1,"a"],
    [2,"b"],
    [3,"w"],
    //[4,"D"],
    //[5,"F"],
    //[6,"E"]
 ];


function StrInArray(input){ //determine if string c+p is in our dictionary
    for (var dicInc = 0; dicInc < dictionary.length;dicInc ++){
     var stringcomp = c+p
     if (dictionary[dicInc][1] == input) {
          return dicInc + 1 //string is in dictionary
          }
    }
    
    return -1 //string is not in dictionary
}


for (var inc = 0; inc < compressArr.length; inc++) { //loop through whole array of compressedString 
    var lengthOfDictionary = dictionary.length //Update dictionary length as it's expanding..
    var c = compressArr[inc] //evalutate next character in string to be compressed
     
    if (StrInArray(p+c) >= 0){
        var p = p+ c    
    }
    else{
        dictionary.push([lengthOfDictionary-1,p+c])
        var num = (StrInArray(p))
        endResult = endResult + (StrInArray(p))
        console.log("endresult is updated to " + endResult)
        var p = c
    }
}

