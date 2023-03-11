'use stric'

console.log('hola soy jQuery eheh')
let foto   = 0;
let img    = $('.slider__img');
let speed  = 5000
let currentSlide = 0;



$(document).ready(()=>{
    $('.menumovil__box').on('click',()=>{

        $('.menumovil__lines').toggleClass('active')
        console.log('todo bien')
        
        $('.menumobile').toggleClass('active')
        $('.menumobile__li').toggleClass('active')
        $('.menumobile__rrssli').toggleClass('active')
    })

    let nextSlide = ((e)=>{

        img.eq(currentSlide).removeClass("active");
       // Move to the next slide
        currentSlide = (currentSlide + 1) % img.length;

        img.eq(currentSlide).addClass("active");
    })
        // Call the nextSlide function every "delay" milliseconds

    setInterval(nextSlide, speed);

    $('.slider__right').on('click',(e)=>{
        
        foto++
        if( foto === img.length){ 
            foto = 0;
        }
        img.removeClass('active');
        img.eq(foto).addClass('active')
        console.log('clickk')

    })
    $('.slider__left').on('click',(e)=>{
        
        
        if( foto === 0){ 
            foto = img.length;
        }
        foto--
        img.removeClass('active');
        img.eq(foto).addClass('active')
        console.log('clickk')

    })


    // START TABS

    $('.tabs__li').each(function (i) {
        $(this).on('click', ()=> {
            $('.tabs__infocont').removeClass('active');
            $('.tabs__infocont').eq(i).addClass('active');
        });
    });

    // END TABS
})
