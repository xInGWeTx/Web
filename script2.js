let mainbut = document.querySelector('#nav_but');
let dropdown = document.querySelector('#nav_drop');
let navitems=document.querySelectorAll('.nav_link');

mainbut.addEventListener('click',function(e){
	
    
    dropdown.classList.toggle('active')
    mainbut.classList.toggle('active')
})
navitems.forEach(function(link){
    link.addEventListener('click',function(){
    dropdown.classList.remove('active')
    mainbut.classList.remove('active')
})
})

let all= document.querySelector('#all_img')
let web= document.querySelector('#web_des')
let des= document.querySelector('#ui_des')
let moc= document.querySelector('#mocup')
let allworks= document.querySelectorAll('.works_card')
all.addEventListener('click',function(){
    allworks.forEach(function(card){
        card.style.display="block";
    })
})
web.addEventListener('click',function(){
    allworks.forEach(function(card){
        if(
            card.classList.contains('webdis')){
                card.style.display="block";
            }
        else{
            card.style.display="none";
        }
    })
})

des.addEventListener('click',function(){
    allworks.forEach(function(card){
        if(
            card.classList.contains('desig')){
                card.style.display="block";
            }
        else{
            card.style.display="none";
        }
    })
})
moc.addEventListener('click',function(){
    allworks.forEach(function(card){
        if(
            card.classList.contains('mocups_div')){
                card.style.display="block";
            }
        else{
            card.style.display="none";
        }
    })
})