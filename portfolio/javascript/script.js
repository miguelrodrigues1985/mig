function pessoal() {
    var x = document.getElementById('sobre');
    var y = document.getElementById('intro');
    var z =document.getElementById('toptags');
    var w =document.getElementById('expe');
 

        y.style.display='none'
        x.style.display = 'block';
        z.style.display='none';
        w.style.display='none';
        
}
function expe(){
    var x = document.getElementById('sobre');
    var y = document.getElementById('intro');
    var z =document.getElementById('toptags');
    var w =document.getElementById('expe');
    var slidebox=document.getElementById('slideshowcontainer');
  


        y.style.display='none'
        w.style.display = "inline-block";
        z.style.display='none';
        x.style.display='none';
        v.style.display="none";

        clearTimeout(tId);
        slidebox.style.display='none';  
    }

var slideIndex = 0;

showSlides();


function showSlides() {
    
var i;
var slides = document.getElementsByClassName("mySlides");
var slidebox=document.getElementById('slideshowcontainer');



slidebox.style.display='block';
for (i = 1; i < slides.length; i++) {
slides[i].style.display = 'none';
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = 'block';
tId=setTimeout(showSlides,4000);
}


