var RecipeData = [];

$(document).ready(function() {
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');

  $('form').on('submit', function(info) {
    info.preventDefault();
    var value = $('#textarea1').val();
    console.log(value);
    var address = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=d1120e6ff58f11b4e44f10a447fdfdc7&q=";
    var newAddress = address.concat(value);

    $.get(newAddress).then(function(data) {
      RecipeData.splice(0, 1, JSON.parse(data));
      console.log("-------")
      console.log("data pushed to RecipeData")
      console.log(RecipeData)

      $(".one .card-title").text(RecipeData[0].recipes[0].title)
      $(".one .card-link").attr("href", RecipeData[0].recipes[0].source_url)
      $(".one img").attr("src", RecipeData[0].recipes[0].image_url)
      $(".one p").text("This " + RecipeData[0].recipes[0].title + " recipe is published by " + RecipeData[0].recipes[0].publisher + " and has a " + RecipeData[0].recipes[0].social_rank + "% positive rating")
      $(".two .card-title").text(RecipeData[0].recipes[1].title)
      $(".two .card-link").attr("href", RecipeData[0].recipes[1].source_url)
      $(".two img").attr("src", RecipeData[0].recipes[1].image_url)
      $(".two p").text("This " + RecipeData[0].recipes[1].title + " recipe is published by " + RecipeData[0].recipes[1].publisher + " and has a " + RecipeData[0].recipes[1].social_rank + "% positive rating")
      $(".three .card-title").text(RecipeData[0].recipes[2].title)
      $(".three .card-link").attr("href", RecipeData[0].recipes[2].source_url)
      $(".three img").attr("src", RecipeData[0].recipes[2].image_url)
      $(".three p").text("This " + RecipeData[0].recipes[2].title + " recipe is published by " + RecipeData[0].recipes[2].publisher + " and has a " + RecipeData[0].recipes[2].social_rank + "% positive rating")
      $(".cards").css("display", "grid");});

  });
})
