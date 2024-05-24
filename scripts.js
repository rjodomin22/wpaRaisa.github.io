$(document).ready(function () {
  $(".gallery ul li a").click(function (event) {
    event.preventDefault();
    var itemID = $(this).attr("href");

    // Cerrar cualquier item abierto
    $(".port").removeClass("item_open");
    $(".gallery ul").removeClass("item_open");

    // Abrir el item clicado
    $(itemID).addClass("item_open");
    $(".gallery ul").addClass("item_open");

    // Desplazarse al inicio de la página
    $("html, body").animate(
      {
        scrollTop: parseInt($("#top").offset().top),
      },
      400
    );
  });

  $(".close").click(function (event) {
    event.preventDefault();
    $(".port").removeClass("item_open");
    $(".gallery ul").removeClass("item_open");
  });
});
