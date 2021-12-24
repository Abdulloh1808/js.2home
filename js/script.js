var yosh = +prompt('Yoshingizni kiriting: ')
if (yosh <= 18) {
    alert('Yoshsiz. Oqishingiz kerak.'+ '  Yoshingiz '+yosh+ ' da')
} else if (yosh >= 18 && yosh <= 50) {
    alert('Ishlashingiz kerak.'+ '  Yoshingiz '+yosh+ ' da')
} else if (yosh >= 50 && yosh <= 59){
    alert('Yaqinda pensiyaga chiqasiz.'+ '  Yoshingiz '+yosh +' da')
}else if (yosh >=59 && yosh <= 150){
    alert("Pensionerga o'xshysiz, hali tirik bo'lsangiz :) . "+ '  Yoshingiz '+yosh+ ' da')
}else alert("nimadir noto'g'ri ketib qoldi");

var n1 = +prompt('birinchi sonni kiriting:')
var n2 = +prompt('ikkinchi sonni kiriting:')
var n3 = +prompt('uchinchi sonni kiriting:')
if (n1 > n2 && n1 < n3 || n1 > n3 && n1 < n2 && !isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
    alert("O'rta qiymat: " + n1)
} else if (n2 > n1 && n2 < n3 || n2 > n3 && n2 < n1 && !isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
    alert("O'rta qiymat: " + n2);
} else if (n3 > n1 && n3 < n2 || n3 > n2 && n3 < n1 && !isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
    alert("O'rta qiymat: " + n3);
}
else {
    if (isNaN(n1) && !isNaN(n2) &&!isNaN(n3)) {
        alert('Birinchisi son emas');
    } else if (isNaN(n2) && !isNaN(n1) &&!isNaN(n3)) {
        alert('Ikkinchisi son emas');
    } else if (isNaN(n3) && !isNaN(n2) &&!isNaN(n1)) {
        alert('Uchinchisi son emas');
    }else if (isNaN(n1)&& isNaN(n2)){
        alert('Birinchi va ikkinchilar son emas')
    }else if(isNaN(n2)&& isNaN(n3)){
        alert('Ikkinchi va uchinchilar son emas')
    }else if (isNaN(n1)&& isNaN(n3)){
        alert('Birinchi va uchinchilar son emas')
    }

}













// if(isNaN(n1)) {
//         alert('Birinchi va ikkinchilar son emas');
//     }
//     else if (isNaN(n2) && isNaN(n3)) {
//         alert('Ikkinchi va uchinchilar son emas');
//     }
//     else if (isNaN(n1) && isNaN(n3)) {
//         alert('Birinchi va uchinchilar son emas');
//     }
