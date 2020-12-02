
    
  
    $( document ).ready(function() {
    //     if ($(window).width() <= 768){	
    //         $('.footer-links-wrapper').addClass("someClass");
    //     }else{
    //         $('.footer-links-wrapper').removeClass("someClass");
    //     }
    //     $(window).on('resize', function(event){
    //         if ($(window).width() <= 768){	
    //             $('.footer-links-wrapper').addClass("someClass");
    //         }else{
    //             $('.footer-links-wrapper').removeClass("someClass");
    //             $('.footer-links-wrapper ul').show();
    //         }
    //         $(document).on("click", ".someClass h3", function(){
    //             $(this).next('ul').slideToggle();
    //             $(this).toggleClass("expanded");
    //         });
    // $('.search-link').click(function(event){
    //     event.preventDefault();
    //     $(".navbar-collapse.collapse").removeClass("show");
    //     $(".searchbox").slideToggle();
    // });
    //     });
  
        $(".footer-links-wrapper h3").click(function(){
            $(this).next("ul").toggleClass("active").slideToggle();
       
        });  
    
// let el=$("#list1");
// $("#shop").click(function(){
// el.toggle();

// });
// let service=$("#list2");
// $("#service").click(function(){
//     service.toggle()} );
//     let account=$("#list3");
//     $("#account").click(function(){
//         account.toggle()} );
//         let store=$("#list4");
//     $("#store").click(function(){
//         store.toggle()} );
//         let bussines=$("#list5");
//         $("#bussines").click(function(){
//             bussines.toggle()} );
//             let educa=$("#list6");
//         $("#education").click(function(){
//             educa.toggle()} );
//             let health=$("#list7");
//             $("#health").click(function(){
//                 health.toggle()} );
//                 let gov=$("#list8");
//             $("#government").click(function(){
//                 gov.toggle()} )
//                 let valu=$("#list9");
//                 $("#value").click(function(){
//                     valu.toggle()} )
//                     let about=$("#list10");
//                     $("#about").click(function(){
//                         about.toggle()} )
    }) 
      ;
        

