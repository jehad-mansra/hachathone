Date.prototype.addDays = function (days) {
	let date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

function getDates(startDate, stopDate) {
	let dateArray = new Array();
	let currentDate = new Date(startDate);
	while (currentDate <= new Date(stopDate)) {
		let __date = new Date(currentDate);
		let __year = __date.getFullYear();
		let __month =
			__date.getMonth() + 1 > 9 ?
			__date.getMonth() + 1 :
			'0' + (__date.getMonth() + 1);
		let __day =
			__date.getDate() > 9 ?
			__date.getDate() :
			'0' + __date.getDate();
		dateArray.push(__year + '-' + __month + '-' + __day);
		currentDate = currentDate.addDays(1);
	}
	return dateArray;
}

function convertDateToStandard(date, date_format, delimeter) {
	date_object = date.split(delimeter);
	format_checker = date_format.split(delimeter);
	_DD_ = format_checker.indexOf('DD');
	_MM_ = format_checker.indexOf('MM');
	_YYYY_ = format_checker.indexOf('YYYY');
	standard_delimeter = '-';
	_dd_ =
		date_object[_DD_].length < 2 ?
		'0' + date_object[_DD_] :
		date_object[_DD_];
	_mm_ =
		date_object[_MM_].length < 2 ?
		'0' + date_object[_MM_] :
		date_object[_MM_];
	_yyyy_ = date_object[_YYYY_];
	return _yyyy_ + standard_delimeter + _mm_ + standard_delimeter + _dd_;
}

function retrieveFromApi(xmlString) {
	var wrapper = document.createElement('div');
	wrapper.innerHTML = xmlString;
	if (wrapper.childNodes.length < 1) {
		return '';
	}
	if (typeof wrapper.firstChild.innerHTML !== 'undefined') {
		return wrapper.firstChild.innerHTML;
	} else {
		return '';
	}
}

let returned_events_unmodified = {};
let urlt;
let bas_url = document.location.origin;
let returned_events;

//loads event from the API
function loadEventsFromAPI() {
	if (window.location.pathname.includes('/en/')) {
		urlt = bas_url + '/en';
	} else {
		urlt = bas_url + '/ar';
	}
	jQuery.ajax({
		url: urlt + '/event',
		method: 'GET',
		dataType: 'json',
		success: function (response) {
			json_events = response;
			for (let i = 0; i < json_events.length; i++) {
				if (
					typeof returned_events_unmodified.events ==
					'undefined'
				) {
					returned_events_unmodified[
						'events'
					] = [];
				}
				returned_events_unmodified.events.push({
					nid: json_events[i].nid,
					title: retrieveFromApi(
						json_events[i].title
					),
					// start: retrieveFromApi(
					// 	json_events[i]
					// 	.field_exhibition_start_date
					// ), 
					start: retrieveFromApi(
						json_events[i]
						.field_date_range.split(' - ')[0]
					),
					// end: retrieveFromApi(
					// 	json_events[i]
					// 	.field_exhibition_end_date
					// ),
					end: retrieveFromApi(
            ((typeof(json_events[i]
						.field_date_range.split(' - ')[1]) != "undefined" && json_events[i]
						.field_date_range.split(' - ')[1] !== null)?json_events[i]
						.field_date_range.split(' - ')[1]:json_events[i]
						.field_date_range.split(' - ')[0])
						
					),
					description: retrieveFromApi(
						json_events[i]
						.field_summery_description
					),
					photo: json_events[i]
						.field_event_main_image,
					link: retrieveFromApi(
						json_events[i]
						.field_inregistration_link
					),
					eventtype: json_events[i].field_event_type
				});
			}
		},
		error: function () {
			alert('Error Occured');
		}
	});
}

loadEventsFromAPI();
let $calendar = new Calendar();

//ensures the events are loaded before initializing the calender
let check_if_events_are_loaded = setInterval(() => {
	if (typeof returned_events_unmodified['events'] !== 'undefined') {
		clearInterval(check_if_events_are_loaded);
		returned_events = returned_events_unmodified.events.map(
			event => {
				if (event.end.length < 1) {
					return {
						id: event.nid,
						name: event.title,
						type: event.eventtype,
						date: event.start,
						todate: event.end,
						spanDates: [
							String(
								convertDateToStandard(
									event.start,
									'YYYY-MM-DD',
									'-'
								)
							)
						],
						description: event.description,
						summary: event.description
							.length > 150 ?
							event.description.substring(
								0,
								150
							) + '...' :
							event.description,
						imageSrc: event.photo,
						link: event.link
					};
				}
				return {
					id: event.nid,
					name: event.title,
					type: event.eventtype,
					date: event.start,
					todate: event.end,
					spanDates: getDates(
						convertDateToStandard(
							event.start,
							'YYYY-MM-DD',
							'-'
						),
						convertDateToStandard(
							event.end,
							'YYYY-MM-DD',
							'-'
						)
					),
					description: event.description,
					summary: event.description.length > 150 ?
						event.description.substring(
							0,
							150
						) + '...' :
						event.description,
					imageSrc: event.photo,
					link: event.link
				};
			}
		);
		console.log('the returned',returned_events);
		$calendar.setEvents(returned_events);
		$calendar.initiate(jQuery('#idcal'));
	}
}, 200);
;
jQuery(".regular").slick({
      rtl: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      slidesToShow: 5,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      customPaging: function(slider, i) {
        return '<div class="pager__item" > </div>';
      },
      useTransform: true,
      cssEase: "ease-in-out"
    });
    
    
    jQuery('.cal-slider').slick({
     rtl: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      customPaging: function(slider, i) {
        return '<div class="pager__item" > </div>';
      },
      useTransform: true,
      cssEase: "ease-in-out"
  });
  
     jQuery('.upcoming-events-slider').slick({
     rtl: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      customPaging: function(slider, i) {
        return '<div class="pager__item" > </div>';
      },
      useTransform: true,
      cssEase: "ease-in-out"
  });
  
   jQuery('.past-events-slider').slick({
     rtl: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      customPaging: function(slider, i) {
        return '<div class="pager__item" > </div>';
      },
      useTransform: true,
      cssEase: "ease-in-out"
  });
   
  
  



AOS.init();






 jQuery( document ).ready(function() {
  
  
  jQuery.scrollIt();
    

  
//     $(window).scroll(function() {
//     var top_of_element = $("#tab1").offset().top;
//     var bottom_of_element = $("#tab1").offset().top + $("#tab1").outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//     var top_of_screen = $(window).scrollTop();

//     if ((top_of_element > top_of_screen) || (bottom_of_element < bottom_of_screen)){
//        $("#sidenav").removeClass('active-viewport');
//     } else {
//           $("#sidenav").addClass('active-viewport');
//     }
// });
  
});




  
;
var $ = jQuery;

$(document).ready(function(){
            $('#mediacenter-en').lightGallery({
              selector: '.item',
               thumbnail:true
});
            
    
                  $('#event-mediacenter').lightGallery({
              selector: '.item',
               thumbnail:true
});
   
       
       
        });
    

 
      
// Multimedia Functions

    var perPage = 9;
    var options = {
      valueNames: ['tag'],
      page: perPage,
      pagination: [{
        name: "pagination-layout",
        paginationClass: "pagination-layout",
        innerWindow: 1,
        left: 5,
        right: 1
      }]
    };

    //var userList = new List('multimedia-ar', options);

    $(".all").click(function(event) {
      event.preventDefault();
      userList.search();
      $(".all").addClass("active");
      $(".videos1").removeClass("active");
      $(".photos1").removeClass("active");
      $(".infographics1").removeClass("active");
    });

    $(".videos1").click(function(event) {
      event.preventDefault();
      userList.search("فيديو");
      $(".videos1").addClass("active");
      $(".all").removeClass("active");
      $(".photos1").removeClass("active");
      $(".infographics1").removeClass("active");
    });

    $(".photos1").click(function(event) {
      event.preventDefault();
      userList.search("صورة");
      $(".photos1").addClass("active");
      $(".all").removeClass("active");
      $(".videos1").removeClass("active");
      $(".infographics1").removeClass("active");
    });

    $(".infographics1").click(function(event) {
      event.preventDefault();
      userList.search("انفوجرافيك");
      $(".infographics1").addClass("active");
      $(".all").removeClass("active");
      $(".photos1").removeClass("active");
      $(".videos1").removeClass("active");
    });

    // PAGINATION PAGER CONTROLS
    userList.on("updated", function(list) {
      var isFirst = list.i == 1;
      var isLast = list.i > list.matchingItems.length - list.page;

      // make the Prev and Nex buttons disabled on first and last pages accordingly
      $(".pagination-prev.disabled, .pagination-next.disabled").removeClass(
        "disabled"
      );
      if (isFirst) {
        $(".pagination-prev").addClass("disabled");
      }
      if (isLast) {
        $(".pagination-next").addClass("disabled");
      }

      // hide pagination if there one or less pages to show
      if (list.matchingItems.length <= perPage) {
        $(".pagination").hide();
      } else {
        $(".pagination").show();
      }
    });

    // hide pagination if there one or less pages to show
    if (userList.matchingItems.length <= perPage) {
      $(".pagination").hide();
    } else {
      $(".pagination").show();
    }

    $(".pagination-next").click(function(event) {
      event.preventDefault();
      $(".pagination-layout .active")
        .next()
        .trigger("click");
    });
    $(".pagination-prev").click(function(event) {
      event.preventDefault();
      $(".pagination-layout .active")
        .prev()
        .trigger("click");
    });

    $(document).ready(function() {
      $('#multimedia-ar').lightGallery({
        selector: '.item',
        thumbnail: true
      });

    });
 


   ;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("moment"),require("fullcalendar")):"function"==typeof define&&define.amd?define(["moment","fullcalendar"],t):"object"==typeof exports?t(require("moment"),require("fullcalendar")):t(e.moment,e.FullCalendar)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=85)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},85:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),r(86);var n=r(1);n.datepickerLocale("ar","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},86:function(e,t,r){!function(e,t){t(r(0))}(0,function(e){var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},r={"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},o={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(e){return function(t,r,a,d){var u=n(t),i=o[e][n(t)];return 2===u&&(i=i[r?0:1]),i.replace(/%d/i,t)}},d=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar",{months:d,monthsShort:d,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,r){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function(e){return e.replace(/[1234567890]/g,function(e){return r[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})})}})});;
 jQuery(document).ready(function() {
      jQuery('#date-picker-month-gregorian').select2({
        dir: "rtl"
      });
      jQuery('#date-picker-year-gregorian').select2({
        dir: "rtl"
      });
    });
		
		;
