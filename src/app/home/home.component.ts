import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  title = 'gym';

  @ViewChild('.popup-gallery') gallery: ElementRef;
  @ViewChild('.popup-vimeo') popupVideo: ElementRef;

  ngAfterViewInit(): void {
    
    if(this.gallery){
      $(this.gallery.nativeElement).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
      });
    }
    if(this.popupVideo){
      $(this.popupVideo.nativeElement).magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });
    }


    $('.nav-toggle').on('click', function(){
      if($('.menu').hasClass('menu-active')){
        $('.menu').removeClass('menu-active');
        $('.nav-toggle').removeClass('nav-active');
        $('.menu').slideUp();
      }else{
        $('.menu').addClass('menu-active');
        $('.nav-toggle').addClass('nav-active');
        $('.menu').slideDown();
      }
      
      
    });



    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
      $(".topbar").addClass("sticky-scroll");
      } else {
      $(".topbar").removeClass("sticky-scroll");
      }
      
      if (scroll >= 1000) {
      $(".topbar2").addClass("sticky");
      $(".topbar2").addClass("sticky-scroll");
      } else {
      $(".topbar2").removeClass("sticky");
      $(".topbar2").removeClass("sticky-scroll");
      }
      
      if (scroll >= 450) {
      $(".topbar3").addClass("sticky");
      $(".topbar3").addClass("sticky-scroll");
      } else {
      $(".topbar3").removeClass("sticky");
      $(".topbar3").removeClass("sticky-scroll");
      }
  
  
      
      
    });


    // $('.testimonial-slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,	  
    //   dots: false,
    //   arrows: false,
    //   focusOnSelect: false,
    //   autoplay: true,
    //   autoplaySpeed: 2000
    // });

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  // Button Effect
	
	var ink, d, x, y;
	$(".btn-effect-1").on('click' , function(e){
		if($(this).find(".ink").length === 0){
			$(this).prepend("<span class='ink'></span>");
		}
			 
		ink = $(this).find(".ink");
		ink.removeClass("animate");
		 
		if(!ink.height() && !ink.width()){
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({height: d, width: d});
		}
		 
		x = e.pageX - $(this).offset().left - ink.width()/2;
		y = e.pageY - $(this).offset().top - ink.height()/2;
		 
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});
	

  /// Animate list of treatments
  $(".ser-evnt").on("mouseenter", function () {
    $(this).addClass("animate__animated animate__pulse");
  });

  $(".ser-evnt").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
    $(this).removeClass("animate__animated animate__pulse");
  });

  }

}
