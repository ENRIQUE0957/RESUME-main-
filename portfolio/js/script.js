//*for the sticky navigation for the main-nav*//\
$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction) {

        if (direction === "down") {
        
        $('nav').addClass('sticky');
        
        } else {
        
        $('nav').removeClass('sticky');}   
        
        }, {
        
            offset: '60px'
        
        });
    //*scroll on buttons*//
    $('.js--scroll-to-projects').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-projects').offset().top},100);
    })
   //* scroll to start of page*/
    $('.js--scroll-to-skills').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},100);
    })
    
    
    //*Animations on projects*///
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
       
    },{
        offset:'50%'
    });

    
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
       
    },{
        offset:'50%'
    })
        

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn')
       
    },{
        offset:'50%'
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__fadeIn')
       
    },{
        offset:'50%'
    })
        
        
})
$('.js--section-features').waypoint(function(direction) {

    if (direction === "down") {
    
    $('nav').addClass('sticky');
    
    } else {
    
    $('nav').removeClass('sticky');}   
    
    }, {
    
        offset: '60px'
    
    });
//*scroll on buttons*//*
$(".js-scroll-to-projects").click(function(){
    $('html,body').animate({scrollTop:$('.js--section-projects').offset().top},1000)
})

    
   