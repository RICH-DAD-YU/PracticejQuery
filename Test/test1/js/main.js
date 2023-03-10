$(function(){
    $('#showBtn').on('click', function(){
        $("#text").show();
        console.log("show!!!");
    })
    $('#hideBtn').on('click', function(){
        $('#text').hide();
        console.log("hide!!!");
    })
})