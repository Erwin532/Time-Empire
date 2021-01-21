
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>


    AOS.init();



var myImage = document.getElementById("img");

var imageArray = ["/TimeEmpire/index/img/0.png", "/TimeEmpire/index/img/1.png",
"/TimeEmpire/index/img/2.png", "/TimeEmpire/index/img/3.png","/TimeEmpire/index/img/4.png","/TimeEmpire/index/img/5.png","/TimeEmpire/index/img/6.png",]

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,500);



<script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>

    $(document).ready(function() {

        $('.chatBox').each(function(index,$){

        })


  $('.rightTower').on('mouseenter',function() {
    $('.chatBox').css('opacity', '1');
  });

  $('.rightTower').on('mouseleave',function() {
    $('.chatBox').removeAttr('style');
  });
});
