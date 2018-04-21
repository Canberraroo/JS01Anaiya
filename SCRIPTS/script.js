

// first thing you need to do is make two functions. the format is function functionName(){code}. One should be called Hide, one shoud be called Show.
// After
function hide() {
  $("img").hide();
}

function show() {
  $("img").show();
}

/*$("#hide").click( () => {
     hide();
});

$("#show").click( () => {
     show()
});
*/


$("button").click( () => {

   let name = $("#input1").val();
   $("p").append(`${name} puked `);



});

$("button").click( () => {

   let name = $("#input2").val();
   $("p").append(`${name}  `);


});

$("button").click( () => {

   let name = $("#input3").val();
   $("p").append(`${name} because `);



});

$("button").click( () => {

   let name = $("#input4").val();
   $("p").append(`${name}  `);


});

$("button").click( () => {

   let name = $("#input5").val();
   $("p").append(`${name} onto `);



});

$("button").click( () => {

   let name = $("#input1").val();
   $("p").append(`${name}  `);



});
