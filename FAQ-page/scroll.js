

console.log("connected")

    var sidebar = $('#sidebar');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
  
  
    $(window).scroll(function () {
      var y = $(window).scrollTop();
      console.log(y)
      console.log(sidebar.offset().top)
     if (y < 269) {
        sidebar.removeClass('fixed');
      }
     
     else if (y >= sidebar.offset().top) {
        sidebar.addClass('fixed');
      }
    });
