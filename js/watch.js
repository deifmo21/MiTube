$(document).ready(function(){
    $("#myBtn").on("click",function(){
        read();
    });
    $(".replay").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read(){
    var dots =document.getElementById("dots");
    var moreText =document.getElementById("more");
    var btnText =document.getElementById("myBtn");

    if (dots.style.display==="none") {
        dots.style.display="inline";
        moreText.style.display="none";
        btnText.innerHTML="see more"
    }else{
        dots.style.display="none";
        moreText.style.display="inline";
        btnText.innerHTML="See less"
    }

}