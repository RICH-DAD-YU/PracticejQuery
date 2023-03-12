$(function () {
  $("#printBtn").on("click", function () {
    console.log("click!!");

    $.getJSON("./data/content.json", function (data) {
      var elements = [];

      $.each(data, function (i, item) {
        var itemHTML =
          "<div>" + "<h3>" + item.term + "</h3>" + "<h2>" + item.part + "</h2>" + "</div>";

        console.log(itemHTML);

        elements.push($(itemHTML).get(0));
      });
      $("#content").html(elements);
    });
  });
});
