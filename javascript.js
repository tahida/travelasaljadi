// gunakan jquery untuk memudahkan penulisan javascript untuk di tampilkan ke index html, code.jquery.com , pilih jquery yang akan di gunakan minifile juga bisa lalu copy dan paste ke index html 

// membuat fungsi javascript untuk membuat tampilan responsive

// responsive tampilan menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function() {
    // membuat pengecekkan lebar layarnya di ukuran kecil
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

// cek lebar tampilan di ukuran maximize
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989) {
        menu.css("display","block");
    } else {
        menu.css("display","none");
    }
    klikMenu();
});

// efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});




