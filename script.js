
const haha = document.querySelectorAll('#container2 ul li');


for (let i = 0; i < haha.length; i++) {
    haha[i].textContent = `List Baru ${i + 1}`;

    haha[i].style.backgroundColor = "grey";                         
    
    haha[i].style.fontSize = '20px';                     
}
