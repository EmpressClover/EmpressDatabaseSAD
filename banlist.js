



function takescreenshot() {
        
    html2canvas(document.querySelector("#root")).then(canvas => {
        window.open().    document.body.appendChild(canvas);
    });
    
    }

    $(".caption-style-1").on('click', 'li', function(){
        $(".caption-style-2").append($(this).append());
      });


      $(".caption-style-2").on('click', 'li', function(){
        $(".caption-style-1").append($(this).append());
      });



  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


$(".root2").css('borderColor', get_random_color());


$(document).ready(function() {

    var description = [
        "render4.webp",
        "render.webp",
        "render6.webp",
        "render8.webp"
    ];
  
    var size = description.length
    $('.item img').each(function() {
      var x = Math.floor(size * Math.random())
      if ($(this).hasClass("render")) {
        $(this).attr("src", description[x]);
      }


    });

  
  });


  $(document).ready(function() {

    var description = [
        "render3.webp",
        "render2.webp",
        "render5.webp",
        "render7.webp"
    ];
  
    var size = description.length
    $('.item img').each(function() {
      var x = Math.floor(size * Math.random())
      if ($(this).hasClass("render2")) {
        $(this).attr("src", description[x]);
      }


    });

  
  });



  function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("load.js");


$("#fileInput").val('');