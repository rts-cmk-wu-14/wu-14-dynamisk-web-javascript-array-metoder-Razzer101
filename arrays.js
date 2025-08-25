document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    let newNumbers = numbersArray.filter((elm)=> elm < 20)
    console.log("Opgave 1", newNumbers)

    catsArray.push("Sniffles")
    console.log("Opgave 2", catsArray)

    dogsArray.includes("Trixie") ? dogAnswer1 = "True" : dogAnswer1 = "False"
    console.log("Opgave 3a", dogAnswer1)

    dogsArray.includes("Baxter") ? dogAnswer2 = "True" : dogAnswer2 = "False"
    console.log("Opgave 3b", dogAnswer2)

    catsArray.includes("Bagheera") ? catAnswer1 = "Bagheera" : catAnswer1 = "Undefined"
    console.log("Opgave 4a", catAnswer1)

    catsArray.includes("Salem") ? catAnswer2 = "Salem" : catAnswer2 = "Undefined"
    console.log("Opgave 4b", catAnswer2)

    const newArray = numbersArray.map((elm) => elm * 3)
    console.log("Opgave 5", newArray)

    console.log("Opgave 6", dogsArray.join("").toString())
})