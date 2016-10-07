var $;

$( document ).ready(function() {
  var pictures = [
      "https://hd.unsplash.com/photo-1422565096762-bdb997a56a84",
      "https://hd.unsplash.com/photo-1447029080250-270ded608d91",
      "https://hd.unsplash.com/photo-1461071001058-1e98ea7b00fb",
      "https://hd.unsplash.com/photo-1467993195535-d1d849e4793c"
      ];

    $('body').css('background-image', 'url("' + pictures[0] + '")');

    onWindowResize();
    
    $( window ).resize(function(){
        onWindowResize();
    });
    
    function onWindowResize(){
        var viewHeight = $( window ).height();
        $('.content').css({
            'min-height': viewHeight,
        });
    }
    
});