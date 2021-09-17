'use strict';
$(function () {
  $('.slider').slick({
    speed: 700,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    responsive: [{
      breakpoint: 882,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true
      }
    }]
  });
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.949224,
      lng: -74.242961
    },
    zoom: 13,
    styles: [{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
          "weight": "2.00"
        }]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#9c9c9c"
        }]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#7b7b7b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#c8d7d4"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#070707"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ffffff"
        }]
      }
    ]
  });


  const marker = new google.maps.Marker({
    position: {
      lat: 40.949224,
      lng: -74.242961
    },
    map: map,
    icon: '../images/contact/marker.svg'
  });
}

window.addEventListener('DOMContentLoaded', () => {

  const modalTrigger = document.querySelectorAll('.blog__item-comments');
  const modal = document.querySelector('.blog__modal');
  const pagBtn = document.querySelectorAll('.pagination__btn');
  const burgerBtn = document.querySelector('.header__burger');
  const socialBtn = document.querySelector('.header__top-social-adaptive');
  const headerMenu = document.querySelector('.header__menu');
  const socialMenu = document.querySelector('.header__top-social');


  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }
  

    modalTrigger.forEach(item => {
    item.addEventListener('click', openModal);
  });
  
  
  
  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }


  try {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  } catch (e) {
    console.log(e);
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });


  burgerBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu--active');
    headerMenu.animate([
      // keyframes
      {
        transform: 'translateY(-50px)',
        opacity: '0'
      },
      {
        transform: 'translateY(0)',
        opacity: '1'
      },
    ], {
      // timing options
      duration: 500
    });
  });


  socialBtn.addEventListener('click', () => {
    socialMenu.classList.toggle('header__top-social--active');
    socialMenu.animate([
      // keyframes
      {
        transform: 'translateY(-50px)',
        opacity: '0'
      },
      {
        transform: 'translateY(0)',
        opacity: '1'
      },
    ], {
      // timing options
      duration: 500
    });
  });


});