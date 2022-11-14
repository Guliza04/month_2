// var array= [1,2,3,4];

// var customer = {
//   Surname: "Kiselev",
//   Name: "Evgenii",
//   Sex: true,
//   INN: "20101199000789",
//   IsResident: true,
//   HomeAddress: null,
//   PhoneNumber: undefined,
//   Account: {
//     AccountNo: "1561698198191",
//     Balance: 500,
//     Currency: "KGS",
//   },
//   PassportIssueDate: "",
//   Passport: {
//     IssueDate: "05-01-2012",
//     ExpiryDate: "05-01-2022",
//     Issuer: "MKK 09-25",
//   },
//   PhoneNumbers: ["+996555112233", '+996700112322', '+996707374724'],
//   "add-info": {
//     val1: 1,
//     val2: 2,
//   },
// };


let fruits = ['banana', 'cherry', 'apple', 'orange'];
let fruitForFound = 'melon';
let u = 0;
//цикл с пред условием
while (i < 5){
   if( fruits[i]=== fruitForFound)
       console.log("fruit found on index", i);
   i++;

}

//цикл с пост условием
// var ranNum = Math.floor( Math.random() * (9 - 0 + 1))
// do {
//     var num= Number(prompt('Enter number (1-9)'));
// } while (num !== ranNum);
// console.log('yyyy', ranNum)


//бесконечные циклы
for (var i = 1; i <= 12; i++){
    var month;
    var currentMonth = (new Date().getMonth() + 1);
    if(currentMonth === i) break;
    switch (i) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6: month = 'June'; continue;
        case 7: month = 'July'; break;
        case 8: month = 'August'; break;
        case 9: month = 'September'; break;
        case 10:month = 'Octomber'; break;
        case 11:month = 'November'; break;
        case 12:month = 'December'; break;
    }
    console.log((i === 1 ?
         "Year starts with "
        : "Then  ") + month);
}

for (var i = 0; i < customer.PhoneNumbers.length; i++){
    console.log(customer.PhoneNumbers[1]);
    var phone = customer.PhoneNumbers[1];
    +996707374724

    var countryCode = phone.substring(0, 4);
    var operatorCode = phone.substring(4, 7);
    var phonePart1= phone.substring(7, 9)
    var phonePart2= phone.substring(9, 11)
    var phonePart3 = phone.substring(11, 13)
    phone= countryCode + " "+ operatorCode +" " +phonePart1 + " "+ phonePart2+" "+ phonePart3
    console.log(phone);

}

function FormatForNumber(PhoneNumber) {
    var countryCode = phone.substring(0, 4);
         var operatorCode = PhoneNumber.substring(4, 7);
        var phonePart1= PhoneNumber.substring(7, 9)
        var phonePart2= PhoneNumber.substring(9, 11)
    var phonePart3 = PhoneNumber.substring(11, 13)
    return countryCode + " "+ operatorCode + " " + phonePart1 + " "+ phonePart2+" "+ phonePart3
    
}
for (var i = 0; i < customer.PhoneNumbers.length; i++) {
    var phone = customer.PhoneNumbers[i];
    console.log(FormatPhoneNumber(phone));

}



for (var fruit of fruits) {
    console.log(fruits.toUpperCase());
    
}

for (const phone of  customer.PhoneNumbers) {
    console.log(FormatForNumber(phone));
    
}

for (const phone of CustomElementRegistry.PhoneNumbers) {
    var isSecond = false;
    var sum = 0;
    for (var i = cadNumber.lenght; i >= 0; i--){
        
    }

}


function ValidateByLuhn(cadNumber) { //алгаритм по проверке карт

    if (!cadNumber) return;
        
    var isSecond = false;
    var sum = 0;
    for (var i = cadNumber.lenght; i >= 0; i--) {
        var cardNum = Number(cadNumber[i]);
        if (isSecond) {
            var doubleNum = (cadNumber * 2).toString().padStart(2, "0"); //0+5 1+8 
            sum += Number(doubleNum[0]) + Number(doubleNum[1])
       }  
        sum += cardNum;
        isSecond = !isSecond;
    }
    return sum % 10 === 0;
}

console.log(ValidateByLuhn('782467896387278') ? 'Card exirs' : 'Card validation Error');

//Falsy: false, 0, "", undefined, null, NaN
//True: все что не falsy))

var arr = [4, null, "", "card", NaN, undefined, true, false]

for (var item of arr) {
    if(item) console.log(item)
    
}

// операторы короткого объявления//+=  -=  /= *= %= **= ++=  --  &&= ||=

var num = 5;
num += 5;
++num;
    




