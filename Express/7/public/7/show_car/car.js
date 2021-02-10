$(document).ready(function () {
  $.ajax({
    type: "post",
    url: $(location).attr("href").substr(21),
    success: function (response) {
      function CreatePost() {
        $("title").text(response.title)
        $("img").attr("src",response.img);
        $("h1").text(response.title);
        $("p").text(response.description);
      }
      CreatePost();
    },
  });
});
