// "empty string = false | no empty เป็น true"
// array object funtion เก็บได้หลายค่า เเละ มีcollection มันเก็บตำเเหน่งของเเต่ละcontent 
// function declaration
function getFreqOfWords(text) {
    if (!text) {
        return undefined;
    }
    const words = text.toLowerCase().split(" ")
    const freq = {};
    for (word of words) {
        if (word) {
            freq[word] = (freq[word] || 0) +1;
        }
    }
    return freq
}

console.log(getFreqOfWords("  "));