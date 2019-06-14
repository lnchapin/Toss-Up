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
      if (RecipeData[0].recipes.length == 0) {
        $("h3").text("We couldn't find any recipes with those parameters, please try again")
        $(".one, .two, .three").hide()
      } else {
        $(".one, .two, .three").show()
        var cardNum = [".one", ".two", ".three"]
        var recipeNum = [0, 1, 2]
        for (var i = 0; i < cardNum.length; i++) {
          $(`${cardNum[i]} .card-title`).text(RecipeData[0].recipes[recipeNum[i]].title)
          $(`${cardNum[i]} .card-link`).attr("href", RecipeData[0].recipes[recipeNum[i]].source_url)
          $(`${cardNum[i]} img`).attr({"src": RecipeData[0].recipes[recipeNum[i]].image_url, "alt":`${RecipeData[0].recipes[recipeNum[i]].title}`})
          $(`${cardNum[i]} p`).text("This recipe is published by " + RecipeData[0].recipes[recipeNum[i]].publisher + " and has a " + Math.floor(RecipeData[0].recipes[recipeNum[i]].social_rank) + "% positive rating")
        }
        $("h3").text("Your Recipe Options");
        $(".cards").css("display", "grid");
      }
    });

  });
})
