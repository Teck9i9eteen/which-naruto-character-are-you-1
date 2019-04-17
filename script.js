$(".Naruto").hide();
$(".Sasuke").hide();
$(".Kakashi").hide();
$(".Boruto").hide();
$(".Uzimaki").hide();
$(".Uchiha").hide();
$(".Hatake").hide();
$(".Namikaze").hide();

$("button").click(function() {
    var TV = $(".TV").val();
    var Character = $(".Character").val();
    console.log(TV, Character);
    
    if (TV > 3 && Character === "Naruto") {
        $(".Naruto").fadeIn();
    } else if (TV < 3 && Character === "Naruto") {
        $(".Sasuke").fadeIn();
    } else if (TV > 3 && Character === "Boruto") {
        $(".Kakashi").fadeIn();
    } else if (TV < 3 && Character === "Boruto") {
        $(".Boruto").fadeIn();
    } else {
        alert("You typed something that was not valid. Please try again");
    }
});