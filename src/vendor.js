import $ from 'jquery';
import * as select2 from 'select2';
import slick from 'slick-carousel';
import bootstrap from 'bootstrap';

import 'select2/dist/css/select2.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


$(document).ready(function(){
        /***** Select2 ****/
    $('.select-city').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        // dropdownAutoWidth: true
    });

        /***** Slider ****/
    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        swipe: true,
        appendArrows: ".slick-slider__arrows",
        prevArrow:'<div class="slider-arrow arrow-prev"><svg id="arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '\t\t\t<g id="circle-btn">\n' +
            '\t\t\t\t<path class="circle-gray" d="M1,24a23,23 0 1,0 46,0a23,23 0 1,0 -46,0" stroke="#C6C6C6" fill=\'none\'/>\n' +
            '\t\t\t\t<path class="circle-oran" d="M1,24a23,23 0 1,0 46,0a23,23 0 1,0 -46,0" fill=\'none\'/>\n' +
            '\t\t\t</g>\n' +
            '\t\t\t<path class="arrow-in" d="M13.2929 23.2929C12.9024 23.6834 12.9024 24.3166 13.2929 24.7071L19.6569 31.0711C20.0474 31.4616 \t20.6805 31.4616 21.0711 31.0711C21.4616 30.6805 21.4616 30.0474 21.0711 29.6569L15.4142 24L21.0711 18.3431C21.4616 17.9526 \t21.4616 17.3195 21.0711 16.9289C20.6805 16.5384 20.0474 16.5384 19.6569 16.9289L13.2929 23.2929ZM34 23L14 23V25L34 25V23Z" />\n' +
            '\t\t</svg></div>',
        nextArrow:'<div class="slider-arrow arrow-next"><svg id="arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '\t\t\t<g id="circle-btn">\n' +
            '\t\t\t\t<path class="circle-gray" d="M1,24a23,23 0 1,0 46,0a23,23 0 1,0 -46,0" stroke="#C6C6C6" fill=\'none\'/>\n' +
            '\t\t\t\t<path class="circle-oran" d="M1,24a23,23 0 1,0 46,0a23,23 0 1,0 -46,0" fill=\'none\'/>\n' +
            '\t\t\t</g>\n' +
            '\t\t\t<path class="arrow-in" d="M13.2929 23.2929C12.9024 23.6834 12.9024 24.3166 13.2929 24.7071L19.6569 31.0711C20.0474 31.4616 \t20.6805 31.4616 21.0711 31.0711C21.4616 30.6805 21.4616 30.0474 21.0711 29.6569L15.4142 24L21.0711 18.3431C21.4616 17.9526 \t21.4616 17.3195 21.0711 16.9289C20.6805 16.5384 20.0474 16.5384 19.6569 16.9289L13.2929 23.2929ZM34 23L14 23V25L34 25V23Z" />\n' +
            '\t\t</svg></div>'
    })
});





