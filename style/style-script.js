function doneLoadingStyle(){    
    setParallaxBG();
    setTimeout(dispel_loading,3500);
    
    $(window).resize(function(){
        setParallaxBG();
        var wW = $(window).width();
        console.log(wW);
    });
    $(window).scroll(function(){
        setParallaxBG();
    });
    
}

function dispel_loading(){
    var loading_screen = $("#greeting");
    loading_screen.css("position","absolute");
    loading_screen.animate(
        {"top":"-100vh"},1000,function(){
            revealSection("about-me");
        }
    );
    $("#navbar").css("display", "block");
}

function dispel_loading(){
    var loading_screen = $("#greeting");
    loading_screen.css("position","absolute");
    loading_screen.animate(
        {"top":"-100vh"},250,function(){
            revealSection("about-me");
        }
    );
    
    $("#navbar").css("display", "block");
}

function revealSection(section_id){
    var section = $("#"+section_id);
    section.css("display","block");
    section.css("position","relative");
    section.css({"opacity":0, "top":-20});
    section.animate({"opacity":1, "top":0},350, function(){});
}

function setParallaxBG(){
    var pBG = $("#background-parallax");
    
    var docH = $(document).height();
    var bgH = 1.2*docH;
    
    var windowH = $(window).height();
    var scrollRate = $(window).scrollTop() / ( docH - windowH );
    var bgPos = scrollRate * ( bgH - windowH ) * -1;
    
    pBG.css({
        "height": bgH,
        "top": bgPos
    });
    
    /*var docHeight = $(document.height);
    var currentScroll = $(window).scrollTop();
    var lostScroll = $(window).height();
    var percentageScroll = currentScroll /(docHeight-lostScroll);
    
    var pBGHeight = 1.5 * docHeight;
    var pBGOffset = -1 * percentageScroll * (docheight-lostScroll);
    console.log(pBGHeight, pBGOffset, "ahoy");*/
    //pBG.css( "height", pBGHeight );
    //pBG.css("top", pBGOffset);
}