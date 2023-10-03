
sk = document.getElementById('skill');
ex = document.getElementById('ex');
edu = document.getElementById('edu');

sk.addEventListener('click', () => {

    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";

})


ex.addEventListener('click', () => {
    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
})

edu.addEventListener('click', () => {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
})

btn.addEventListener('click', function () {
    fetch('https://abbhinendra.github.io/resume/resume.html').then(res => res.blob()).then(file => {
        let tem = URL.createObjectURL(file);
        let a = document.createElement('a');
        a.href = tem;
        a.download = "resume.html";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(tem);

    });

})

let bars = document.querySelector('.bars');
let ul1 = document.querySelector('ul');

bars.addEventListener('click', function () {
    ul1.classList.toggle('add');
    let ham = bars.firstElementChild;
    if (ul1.classList.contains('add')) {
        ham.classList.replace('fa-bars', 'fa-xmark');
    }
    else {
        ham.classList.replace('fa-xmark', 'fa-bars');
    }
})
facebook = document.getElementById('fa-facebook');
facebook.addEventListener('click', () => {
    window.location = "https://www.instagram.com/abhinendrathakur1/";
});

git.addEventListener('click', function () {
    window.location = "https://github.com/Abbhinendra/";
})
insta.addEventListener('click', function () {
    window.location = "https://www.instagram.com/abhinendrathakur1/";
})

done.addEventListener('click', function () {
    window.location = "https://www.instagram.com/abhinendrathakur1/";
})



let speech = new SpeechSynthesisUtterance();
document.querySelector('#aboutSpeak').addEventListener('click', () => {
    speech.text = "I am extremly proficient in Front-End Development And also Backend-Development  Using HTML5, Cascade Style Sheets(CSS3), Bootstrap, Advance JavaScript, Jquery, PHP,Sql. I have good Knowledge as Well as in designing using Adobe Photoshop";
    window.speechSynthesis.speak(speech);
});

let more = document.getElementById('more');
more.addEventListener('click', function () {
    $('#Modal').modal('toggle')
})
let pass = document.getElementById('pass');
//p=pass.value;
let submit = document.getElementById('submit');
let error = document.querySelector('.error');


let password="abhi420421";

submit.addEventListener('click',function(){
    if(password==pass.value){
        error.innerHTML="";
        $('#modalOpen').modal('toggle')
    }
    else{
        error.innerHTML="Sorry your Password is invailid.";
    }
})


const contactAdd=document.getElementById('contactAdd');
let body=document.getElementById('body');

function get(){
    if(localStorage.getItem('itemJson')==null){
        let arr=[];
        cols=document.getElementById('cols').value;
        inputs=document.getElementById('inputs').value;
         email=document.getElementById('email').value;
        arr.push([inputs,email,cols]);
        localStorage.setItem('itemJson',JSON.stringify(arr));

    }
    else{
        let strArr=localStorage.getItem('itemJson');
        arr=JSON.parse(strArr);
        cols=document.getElementById('cols').value;
        inputs=document.getElementById('inputs').value;
         email=document.getElementById('email').value;
        arr.push([inputs,email,cols]);
        localStorage.setItem('itemJson',JSON.stringify(arr));
    }
    update();
}
update();

function update(){
    if(localStorage.getItem('itemJson')==null){
        let arr=[];
       
        localStorage.setItem('itemJson',JSON.stringify(arr));

    }
    else{
        let strArr=localStorage.getItem('itemJson');
        arr=JSON.parse(strArr);

    }
let str="";
arr.forEach((element,index)=>{
str+=`<tr>
<th scope="row">${index+1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td>
<td>${element[2]}</td>
</tr>`;
});
body.innerHTML=str;
}

contactAdd.addEventListener('click',(e)=>{
    e.preventDefault();
     get();
success.innerHTML="Your message has been sent successfully.";

setTimeout(() => {
    success.innerHTML="";
}, 6000);

});
update();

contactAdd.addEventListener('click',function(){
document.getElementById('inputs').value="";
document.getElementById('email').value="";
document.getElementById('cols').value="";
})