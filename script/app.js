// 1



// let week = prompt("sonni kiriting: M/s 1 dan 7 gacha ")

// switch(week){
//     case "1":
//         document.write("Dushanba");
//     break;
//     case "2":
//         document.write("Seshanba");
//     break;
//     case "3":
//         document.write("Chorshanba");
//     break;
//     case "4":
//         document.write("Payshanba");
//     break;
//     case "5":
//         document.write("Juma");
//     break;
//     case "6":
//         document.write("Shanba");
//     break;
//     case "7":
//         document.write("Yakshanba");
//     break;
//     default:
//         document.write("iltimos sonlarni tugri kiriting: ")
// }




// 2



// let ball = prompt("ballni kiriting: 1 dan 5 gacha ");
 
// switch(ball){
//     case "1":
//         document.write("yomon");
//     break;  
//     case "2":
//         document.write("qoniqarsiz");
//     break;
//     case "3":
//         document.write("qoniqarli");
//     break;
//     case "4":
//         document.write("yaxshi");
//     break;
//     case "5":
//         document.write("a'lo");
//     break;
//     default:
//         document.write("iltimos sonni kiriting: ")

// }




// 3




// let moth = prompt("sonni kiriting: 1 dan 12 gacha ");

// switch(moth){
//     case "1":   
//         document.write("yanvar");
//     break;
//     case "2":
//         document.write("fevral");
//     break;
//     case "3":
//         document.write("mart");
//     break;
//     case "4":
//         document.write("aprel");
//     break;
//     case "5":
//         document.write("may");
//     break;
//     case "6":
//         document.write("iyun");
//     break;
//     case "7":
//         document.write("iyul");
//     break;
//     case "8":
//         document.write("avgust");
//     break;
//     case "9":
//         document.write("sentyabr");
//     break;
//     case "10":
//         document.write("oktyabr");
//     break;
//     case "11":
//         document.write("noyabr");
//     break;
//     case "12":
//         document.write("dekabr");
//     break;
//     default:
//         document.write("iltimos  sonni tugri kiriting: ")

// }


// 4



// let moth = prompt("sonni kiriting: 1 dan 12 gacha ");

// switch(moth){
//     case "1":
//         document.write("yanvar 31 kun");
//     break;
//     case "2":
//         document.write("fevral 28 kun");
//     break;
//     case "3":
//         document.write("mart 31 kun");
//     break;
//     case "4":
//         document.write("aprel 30 kun");
//     break;
//     case "5":
//         document.write("may 31 kun");
//     break;
//     case "6":
//         document.write("iyun 30 kun");
//     break;
//     case "7":
//         document.write("iyul 31 kun");
//     break;
//     case "8":
//         document.write("avgust 31 kun");
//     break;
//     case "9":
//         document.write("sentyabr 30 kun");
//     break;
//     case "10":
//         document.write("oktyabr 31 kun");
//     break;
//     case "11":
//         document.write("noyabr 30 kun");
//     break;
//     case "12":
//         document.write("dekabr 31 kun");
//     break;
//     default:
//         document.write("iltimos  sonni tugri kiriting: ")
// }



// 5



// let a = +prompt("a ni kiriting:");
// let b = prompt("Amalni kiriting: m/s +, -, *, /");
// let c = +prompt("b ni kiriting:");


// let natija;

// switch (b) {
//     case "+":
//         natija = a + c;
//         break;
//     case "-":
//         natija = a - c;
//         break;
//     case "*":
//         natija = a * c;
//         break;
//     case "/":
//         natija = a / c;
//         break;
//     default:
//         document.write("Noto'g'ri amal kiritildi");
// }

// document.write("Natija: " + natija);



// 6



// let clientName = prompt("Assalamu alaykum ismingizni kiriting: ");

// let baho = prompt(clientName + " iltimos bahoingizni kiriting: 1 dan 5 gacha ")

// switch(baho){
//     case "1":
//         document.write(clientName+  " Sizning stipendiyangiz 200 ming");
//     break;
//     case "2":   
//         document.write(clientName+  " Sizning stipendiyangiz 350 ming");
//     break;
//     case "3":
//         document.write(clientName+  " Sizning stipendiyangiz 500 ming");
//     break;
//     case "4":
//         document.write(clientName+  " Sizning stipendiyangiz 650 ming");
//     break;
//     case "5":
//         document.write(clientName+  " Sizning stipendiyangiz 800 ming");
//     break;

//     default:
//         document.write(clientName+  " iltimos bahoingizni tugri kiriting: ")
// }






// if and switch




// 1




// let number = +prompt("sonni kiriting: ")

// if (number > 0){
//     document.write("musbat son")
// }
// else if(number < 0){
//     document.write("manfiy son")
// }



// 2  and 3


// let number = +prompt("sonni kiriting: ")
//  if (number % 2 != 0){
//      document.write("toq son")
//  }
//  else if(number % 2 == 0){
//      document.write("juft son")
//  }



// 4

// a va b sonlarini olish
// let a = parseInt(+prompt("a ni kiriting:"));
// let b = parseInt(+prompt("b ni kiriting:"));

// let c = a + b;

// document.write("Natija: " + c);




// 5

// let son = +prompt("a sonni kiriting: ");
// let son2 = +prompt("b sonni kiriting: ");  
// let son3 = +prompt("c sonni kiriting: ");

// if (son > son2){
//     document.write("a soni katta b sonidan ")
// }
// else if (son2 >  son3){
//     document.write("b soni katta c sonidan ")
// }
// else if (son3 > son){
//     document.write("c soni katta a sonidan ")
// }



//  6



// let son = +prompt("a sonni kiriting: ");
// let son2 = +prompt("b sonni kiriting: ");
// let son3 = +prompt("c sonni kiriting: ");
 
// let result = parseInt((son + son3) / son2);

// document.write("b son a va c sonlar orasida: " + result + " marta yotadi" );


// 7


// let sonA = +prompt("a sonni kiriting: ");
// let sonB = +prompt("b sonni kiriting: "); 

// if ( sonA % 2 != 0){
//     document.write("kiritgan soningizdan a toq son")
// }
// else if (sonB % 2 != 0 ){
//     document.write( "kiritgan soningizdan b toq son")
// }

// else if (sonA % 2!= 0 && sonB % 2!= 0){
//     document.write("kiritgan soningizdan ikkala toq son")
// }
// else {
//     document.write("a va b sonlar toq son emas")
// }



// 8


// let sonA = +prompt ("a sonni kiritng: ");
// let sonB = +prompt ("b sonni kiritng: ");
// let sonC = +prompt ("c sonni kiritng: ");   
// let sonD = +prompt ("d sonni kiritng: ");

// if ( sonA > 0 && sonB > 0 && sonC > 0 && sonD > 0){
//     document.write("kiritgan sonlar musbat")    
// }   
// else if (sonA < 0 || sonB < 0 || sonC < 0 || sonD < 0){
//     document.write("kiritgan sonlar musbat emas")
// }



// 9



// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
//     document.write("Kamida ikkitasi musbat sonlar!");
// } else {
//     document.write("Kamida ikkitasi musbat son emas!");
// }



// 10



// let week = prompt("sonni kiriting: M/s 1 dan 7 gacha ")

// switch(week){
//     case "1":
//         document.write("Dushanba");
//     break;
//     case "2":
//         document.write("Seshanba");
//     break;
//     case "3":
//         document.write("Chorshanba");
//     break;
//     case "4":
//         document.write("Payshanba");
//     break;
//     case "5":
//         document.write("Juma");
//     break;
//     case "6":
//         document.write("Shanba");
//     break;
//     case "7":
//         document.write("Yakshanba");
//     break;
//     default:
//         document.write("iltimos sonlarni tugri kiriting: ")
// }






//  11


// let numberCode = prompt("Raqam kodini kiriting va men sizga bu kod qaysi kompaniyaga tegishli ekanini kursatib beraman :  m/s +998 ** ");

// switch(numberCode){
//     case "+99833":
//         document.write("Kompaniya nomi: Humans");
//     break;
//     case "+99890":
//     case "+99891":
//         document.write("Kompaniya nomi: Beeline");
//     break;
//     case "+99899":
//     case "+99895":
//     case "+99877":
//         document.write ("Kompaniya nomi: Uzmobile");
//     break;
//     case "+99893":
//     case "+99894":
//     case "+99850":
//         document.write("Kompaniya nomi: Ucell");
//     break;
//     case "+99888":
//     case "+99897":
//         document.write("Kompaniya nomi: MobiUz");
//     break;
//     default:    
//         document.write("Bu raqam kodida kompaniya topilmadi");
// }



// 12



// let son = +prompt("sonni kiriting: ");

// if (son > 0){
//     document.write(son + 1)
// }
// else if (son < 0){
//     document.write(son - (-1))
// }



// 13


// let son = +prompt("sonni kiriting: ");

// if (son > 0){
//     document.write(son + 3)
// }
// else if (son < 0){
//     document.write(son - 1)
// }



// 14


// let sonA = +prompt("a sonni kiriting:");
// let sonB = +prompt("b sonni kiriting:");

// if (sonA > sonB) {
//     document.write("a son katta:");
// } else if (sonB > sonA) {
//     document.write("b son katta");
// } else {
//     document.write("Ikkita son ham bir xil!");
// }



// 15



// let sonA = +prompt("a sonni kiriting:");
// let sonB = +prompt("b sonni kiriting:");
// let sonC = +prompt("c sonni kiriting:");

// if (sonA > sonB && sonA > sonC) {
//     document.write( "kiritilgan a katta son");
// } else if (sonB > sonA && sonB > sonC) {
//     document.write( "kiritilgan b katta son");
// } else if (sonC > sonA && sonC > sonB) {
//     document.write( "kiritilgan c katta son");
// } else {
//     document.write("Hamma sonlar teng.");
// }



// 16



// let sonA = +prompt("a sonni kiriting:");
// let sonB = +prompt("b sonni kiriting:");
// let sonC = +prompt("c sonni kiriting:");

// if (sonA < sonB && sonA < sonC) {
//     document.write( "kiritilgan a kichik son");
// } else if (sonB < sonA && sonB < sonC) {
//     document.write( "kiritilgan b kichik son");
// } else if (sonC < sonA && sonC < sonB) {
//     document.write( "kiritilgan c kichik son");
// } else {
//     document.write("Hamma sonlar teng.");
// }




// 17




// let gens = prompt("jinsni kiriting: ")

// switch(gens){
//     case "erkak":   
//         document.write("Erkak")
//     break;
//     case "ayol":
//         document.write("Ayol")
//     break;
//     default:
//         document.write("Kunte")
// }




// 18


// let clientName = prompt("Assalamu alaykum ismingizni kiriting: ");

// let baho = prompt(clientName + " iltimos bahoingizni kiriting: 1 dan 5 gacha ")

// switch(baho){
//     case "1":
//         document.write(clientName+  " Sizning stipendiyangiz 200 ming");
//     break;
//     case "2":   
//         document.write(clientName+  " Sizning stipendiyangiz 350 ming");
//     break;
//     case "3":
//         document.write(clientName+  " Sizning stipendiyangiz 500 ming");
//     break;
//     case "4":
//         document.write(clientName+  " Sizning stipendiyangiz 650 ming");
//     break;
//     case "5":
//         document.write(clientName+  " Sizning stipendiyangiz 800 ming");
//     break;

//     default:
//         document.write(clientName+  " iltimos bahoingizni tugri kiriting: ")
// }



// 19

// let son = prompt("sonni kiriting ");
// let  juft = son % 2 === 0 ? true : false; 
// let  musbat = son > 0 ? true : false; 
 
// if (juft && musbat) {
//     console.log(son + " juft musbat");
// } else if (juft && !musbat) {
//     console.log(son + " juft manfiy");
// } else if (!juft && musbat) {
//     console.log(son + " toq musbat");
// } else {
//     console.log(son + " toq manfiy");
// }


// 20

// let clientName = prompt("Assalamu alaykum ismingizni kiriting: ");
// let age = new Date().getFullYear() - +prompt(" Tug'ilgan yilingizni kiriting: ");


// document.write (clientName + " siz "  + age, " yoshdasiz");


// 21



// let sonA = +prompt("a sonni kiriting:");
// let sonB = +prompt("b sonni kiriting:");
// let sonC = +prompt("c sonni kiriting:");    

// if (sonA <= sonB && sonB <= sonC) {
//     document.write("jumla rost"); 
// } else {
//     document.write("jumla noto'g'ri"); 
// }



// 22
 



// let sonA = +prompt("a sonni kiriting:");    
// let sonB = +prompt("b sonni kiriting:");


// if (sonA % 2 !== 0 || sonB % 2 !== 0) {
//     document.write("Ikki sondan bittasi toq son hisoblanadi");
// } 
// else {
//     document.write("Ikki sondan ham toq son mavjud emas");
// }


// 23


// let sonA = +prompt("a sonni kiriting:");    
// let sonB = +prompt("b sonni kiriting:");
// let sonC = +prompt("c sonni kiriting:");

// if ((sonA > 0 && sonB > 0 && sonC > 0)) {
//     document.write("Barcha sonlarning har bittasi musbat son");
// }
// else if ((sonA < 0 || sonB < 0 || sonC < 0)) {
//     document.write("Kiritilgan sonlardan bittasi manfiy son");
// }


// 24



// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let c = +prompt("c ni kiriting:");

// if ( a > 0 ||  b <= 0  || c <= 0 ){
//     document.write("Faqat bittasi musbat son");
// } else {
//     document.write("xato");
// }


// 25 -------------


// 26 -------------



// 27




let clientName = prompt("Assalamu alaykum ismingizni kiriting:");
let productName = prompt(clientName + " kompyuter nomini kiriting:");
switch(productName){
    case "lenovo":  
        document.write(clientName + " Lenono noutbukimiz narxi - 5.500.000 so'm");
    break;
    case "asus":
        document.write(clientName + " Asuso noutbukimiz narxi - 7.500.000 so'm");
    break;
    case "hp":
        document.write(clientName + " Hp noutbukimiz narxi - 4.500.000 so'm");
    break;
    case "dell":
        document.write(clientName + " Dello noutbukimiz narxi - 6.500.000 so'm");
    break;
    case "macbook":
        let tur = prompt(clientName + " Kompyuter turini kiriting: pro yoki air");
        switch(tur){
            case "pro":
                let modelPro = prompt(clientName + " Pro model kiriting: m/s m1 dan m3 gacha");
                switch(modelPro){
                    case "m1":
                        document.write(clientName + " Macbook M1 pro noutbukimiz narxi - 15.000.000 so'm");
                    break;
                    case "m2":
                        document.write(clientName + " Macbook M2 pro noutbukimiz narxi - 20.000.000 so'm");
                    break;
                    case "m3":
                        document.write(clientName + " Macbook M3 pro noutbukimiz narxi - 25.000.000 so'm");
                    break;
                    default:
                        document.write(clientName + " Bu model nomi topilmadi");
                }
            break;
            case "air":
                let modelAir = prompt(clientName + " Air model kiriting: m/s m1 dan m3 gacha");
                switch(modelAir){
                    case "m1":
                        document.write(clientName + " Macbook M1 air noutbukimiz narxi - 10.000.000 so'm");
                    break;
                    case "m2":
                        document.write(clientName + " Macbook M2 air noutbukimiz narxi - 15.000.000 so'm");
                    break;
                    case "m3":
                        document.write(clientName + " Macbook M3 air noutbukimiz narxi - 20.000.000 so'm");
                    break;
                    default:
                        document.write(clientName + " Bu model nomi topilmadi");
                        

                }
        }
        

    break;
    case "acer":
        document.write(clientName + " Acer noutbukimiz narxi - 5.000.000 so'm");
    break;
    case "samsung":
        document.write(clientName + " Samsung noutbukimiz narxi - 4.500.000 so'm");
    break;
    default:
        document.write(clientName + " Bu kompyuter nomi topilmadi");
}





// 28 ---------



const button = document.querySelector("button");
button.addEventListener("click", () => {
    window.location.reload();
})































