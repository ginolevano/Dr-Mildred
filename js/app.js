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




    //SLIDER START//
    
    
    

    // VELOCIDAD
    let run = 3000
    //DECLARO MIS FUNCTION

    let nextImg = ((e)=>{
        $('.info__imagenes').eq(currentSlide).removeClass('active')
        //DECLARO MI SLIDE .LENGTH
        currentSlide = (currentSlide + 1) % $('.info__imagenes').length;
        $('.info__imagenes').eq(currentSlide).addClass('active')
        console.log('todo bien')

    })

    setInterval(nextImg,run);
    
    $('.right').on('click',(e)=>{
        console.log('ohh rightttt')
        foto++
        if(foto === $('.slider__imgscont').length){
            foto = 0;
        }
        $('.slider__imgscont').removeClass('active')
        $('.slider__imgscont').eq(foto).addClass('active')
    })

    $('.left').on('click',(e)=>{
        if(foto === 0){
            foto = $('.slider__imgscont').length 
        }

        foto--

        $('.slider__imgscont').removeClass('active')
        $('.slider__imgscont').eq(foto).addClass('active')
    })
//SLIDER START//


    // START TABS

    $('.tabs__li').each(function (i) {
        $(this).on('click', ()=> {
            $('.tabs__infocont').removeClass('active');
            $('.tabs__li').removeClass('active');
            $('.tabs__infocont').eq(i).addClass('active');
            $('.tabs__li').eq(i).addClass('active')
        });
    });
    
    $('.tabstwo__titlecont').each(function (e){
        $(this).on('click',()=>{
            const $tabsinfo = $('.tabstwo__info').eq(e)
            const $arrow = $('.tabstwo__img').eq(e)
            if($tabsinfo.hasClass('active'),
                $arrow.hasClass('active')){
                $tabsinfo.removeClass('active'),
                
                $arrow.removeClass('active')
            }else(
                $('.tabstwo__info').removeClass('active'),
                $tabsinfo.addClass('active'),
                $('.tabstwo__img').removeClass('active'),
                $arrow.addClass('active')

            )

            console.log('estoy haciendo click a cada uno')

        })
    })
    

    // END TABS
})
