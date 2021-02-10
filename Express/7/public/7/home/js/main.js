$(document).ready(function () {
  $.ajax({
    type: "post",
    url: "/home",
    success: function (response) {
      // ! Create & show Post
      function CreateShow() {
        function CreatePost() {
          let main = $("<div></div>").addClass(
            "mt-3 col-12 col-md-6 col-lg-4 items"
          );
          let card = $("<div></div>").addClass("card");
          let img = $('<img class="card-img-top">').attr("src", "");
          let cardbody = $("<div></div>").addClass("card-body");
          let cardtitle = $("<h5></h5>").addClass("card-title");
          let cardtext = $("<p></p>").addClass("card-text");
          let span = $("<span></span>");
          let button = $("<button></button>").addClass("P btn btn-primary");
          let link = $("<a></a>").addClass("link");
          button.attr("data-toggle", "modal");
          button.attr("data-target", "#myModal");
          button.text("more info");

          cardtext.append(span);
          main.append(card);
          card.append(img);
          card.append(cardbody);
          cardbody.append(cardtitle);
          cardbody.append(cardtext);
          link.append(button);
          cardbody.append(link);
          $("#post").append(main);
        }

        //! Show Post
        for (let i = 0; i < response.length; i++) {
          CreatePost();
          $(".card-img-top")[i].src = "./carInfo/"+response[i].img;
          $(".card-title")[i].innerHTML += `<span>${response[i].title}</span>`;
          $(".card-text span")[i].innerHTML = response[i].description;
          $(".link")[i].href = response[i].link;
        }
      }

      CreateShow();
    },
  });
});
