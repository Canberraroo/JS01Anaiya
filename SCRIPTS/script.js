/* $("#hide").click(function(){
  $("p").hide(hide);
})

$("#show").click(function(){
  $("p").show(show);
})

$("button").click(function(){
  $("p").hide(1000);
}

$("button").click(function(){
  $("p").show(1000);
}
*/
// first thing you need to do is make two functions. the format is function functionName(){code}. One should be called Hide, one shoud be called Show.
// After
function hide() {
  $("img").hide();
}

function show() {
  $("img").show();
}

$("#hide").click( () => {
     hide()
});

$("#show").click( () => {
     show()
});
