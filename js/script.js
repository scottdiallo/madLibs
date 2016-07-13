$(function () {
    //console.log("hello world!");

    $(".tableContent").hide();
    $(".gameForm").hide();

    $(".gender").on('click', function () {
        $(".tableContent").show();
        $(".gameForm").show();
        //any gender chosen hide gender box and display gif image appropriate to gender selection
    });

    $('.submit').on('click', function () {
        //alert('hello world!');
    })



});
