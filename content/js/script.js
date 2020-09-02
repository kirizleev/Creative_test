let burgerButton = document.getElementById('menu__burger');
let mainMenu = document.getElementById('main__menu');

burgerButton.onclick = () => {
    if (mainMenu.style.display != "block") {
        mainMenu.style.display = "block";
    }
    else mainMenu.style.display = "none";
}

// Задание 2 

let m1 = [1, 2, 3, 4, 5];
console.log(m1);


let shiftM = function () {
    let elem = m1.pop();
    m1.unshift(elem);
}

let countShift = function (n) {
    for (i = 0; i < n; i++) {
        shiftM();
    }
}

countShift(3);
console.log("Сдвиг элементов массива - " + m1);

// Задание 3

let line1 = 'aababba';
let line2 = 'abbabcd';

const finder = (string1, string2) => {
    arr = [];
    string1.split("").reduce((last,item)=>{
      if (string2.indexOf(`${last}${item}`) !== -1) {
          arr.push(`${last}${item}`);
          return `${last}${item}`;
      }
      else return item;
    }, '');
    return arr.sort((a, b)=>b.length-a.length)[0]
}

console.log( line1, line2);
console.log("Самая длинная общая последовательность - " + finder(line1, line2));


// Задание 4

const domElements = [
    document.getElementById('header__logo'),
    document.getElementById('header__info'),
    document.getElementById('main__article'),
]

const checkList = [
    document.getElementById('checkbox_logo'),
    document.getElementById('checkbox_header__info'),
    document.getElementById('checkbox_main__article'),
]

const [logo, headerInfo, mainArticle] = domElements;
const [switchLogo, switchHeaderInfo, switchMainArticle] = checkList;

let switchAll = document.getElementById('checkbox_show-all');

let hideEl = (chk, el) => { chk.checked ? el.style.visibility = "visible" : el.style.visibility = "hidden"; }

let hideAll = () => {
    if (switchAll.checked) {
        checkList.forEach(element => element.checked = true);
        domElements.forEach(element => element.style.visibility = "visible");
    } else {
        checkList.forEach(element => element.checked = false);
        domElements.forEach(element => element.style.visibility = "hidden");
    }
}