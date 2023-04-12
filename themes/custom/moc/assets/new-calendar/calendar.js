var $ = jQuery;

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = currentYear;
let selectMonth = currentMonth;
let $viewing_event_id = null;

let months = [
	'January',
	'Feburary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

let arabicMonths = [
	'يناير',
	'فبراير',
	'مارس',
	'أبريل',
	'مايو',
	'يونيو',
	'يوليو',
	'أغسطس',
	'سبتمبر',
	'أكتوبر',
	'نوفمبر',
	'ديسمبر'
];

function Events() { 
	this.events = [];
	(this.retrieveEventData = function(event_id) {
		_event = this.events.filter(function(event) {
			return event.id == Number(event_id);
		});
		return _event[0];
	}),
		//display the available event days
		(this.display = function() {
			var currentMonthEvents = this.events.filter(function(
				event
			) {
        //console.log(new Date(event.date).getFullYear());
        //console.log(new Date(event.date).getMonth());
				return (
					new Date(event.date).getFullYear() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(parseInt(currentMonth)+
										1
								) +
								'-01'
						).getFullYear() &&
					new Date(event.date).getMonth() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(
									parseInt(currentMonth) +
										1
								) +
								'-01'
						).getMonth()
				);
			});   
   
			var currentMonthEventDates = currentMonthEvents.map(
				function(event) {
					return {
						id: event.id,
						date: String(
							new Date(
								event.date
							).getDate()
						)
					};
				}
			);
    var parent=this;
			currentMonthEventDates.forEach(function(event) {
				calendar_day = document.querySelector(
					'span.calendar_day[date="' +
						event.date +
						'"]'
				);
				/*if (calendar_day.getAttribute('event-id')) {
					calendar_day.setAttribute(
						'event-id',
						calendar_day.getAttribute(
							'event-id'
						) +
							',' +
							event.id
					);
				} else {
					calendar_day.setAttribute(
						'event-id',
						event.id
					);
				}*/
				calendar_day.classList.add(
					'possible_event_day'
				);
      //////////////////////////////////////////// 
      var event_id=event.id;
        console.log(event_id);
			/*document.querySelectorAll('span.calendar_day').forEach(
				function(calendar_day) {
					calendar_day.classList.remove(
						'daywithevent'
					);
				}
			);*/
			if (event_id === null) return;
			var eventSpanDates = parent.retrieveEventData(event_id)
				.spanDates;

			eventSpanDates.forEach(function(
				event_date = String(d)
			) {
        console.log(event_date);
				if (
					(new Date(event_date).getFullYear() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(
									parseInt(currentMonth) +
										1
								)  +
								'-01'
						).getFullYear()) &&
					(new Date(event_date).getMonth() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(
									parseInt(currentMonth) +
										1
								)  +
								'-01'
						).getMonth())
				) {
					calendar_day = document.querySelector(
						'span.calendar_day[date="' +
							new Date(
								event_date
							).getDate() +
							'"]'
					);
          
          if (calendar_day.getAttribute('event-id')) {
					calendar_day.setAttribute(
						'event-id',
						calendar_day.getAttribute(
							'event-id'
						) +
							',' +
							event_id
					);
				} else {
					calendar_day.setAttribute(
						'event-id',
						event_id
					);
				}
			
 
					calendar_day.classList.add(
						'daywithevent'
					);
        // calendar_day.addClass( "daywithevent" );
				}
			});
		
        ////////////////////////////////////////////
			});
		}),
    
		//displays the selected event span days
		(this.displaySpanDates = function(event_id) {
     
			document.querySelectorAll('span.calendar_day').forEach(
				function(calendar_day) {
					calendar_day.classList.remove(
						'event_span_day'
					);
				}
			);
			if (event_id === null) return;
			var eventSpanDates = this.retrieveEventData(event_id)
				.spanDates;

			eventSpanDates.forEach(function(
				event_date = String(d)
			) {
       
				if (
					(new Date(event_date).getFullYear() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(
									parseInt(currentMonth) +
										1
								)  +
								'-01'
						).getFullYear()) &&
					(new Date(event_date).getMonth() ===
						new Date(
							currentYear +
								'-' +(((parseInt(currentMonth)+1)<10)?'0':'')+
								(
									parseInt(currentMonth) +
										1
								)  +
								'-01'
						).getMonth())
				) {
					calendar_day = document.querySelector(
						'span.calendar_day[date="' +
							new Date(
								event_date
							).getDate() +
							'"]'
					);
         
 
					calendar_day.classList.add(
						'event_span_day'
					);
				}
			});
		}),
		(this.removeDisplayedDate = function() {
			document.querySelectorAll('span.calendar_day').forEach(
				function(calendar_day) {
					calendar_day.classList.remove(
						'possible_event_day'
					);
					calendar_day.removeAttribute(
						'event-id'
					);
				}
			);
		});
}

$events = new Events();

function showSelectableYear() {
	let selectableYears = '';
	for (
		let i = today.getFullYear() - 20;
		i <= today.getFullYear() + 20;
		i++
	) {
		selectableYears += '<li data-year="' + i + '">' + i + '</li>';
	}
	document.querySelector('.select-year').innerHTML = selectableYears;
}

function showSelectableMonth() {
	let selectableMonths = '';
	for (let i = 0; i <= 11; i++) {
		if (window.location.pathname.includes('/en/')) {
			selectableMonths +=
				'<li data-month="' +
				Number(i) +
				'">' +
				months[i] +
				'</li>';
		} else {
			selectableMonths +=
				'<li data-month="' +
				Number(i) +
				'">' +
				arabicMonths[i] +
				'</li>';
		}
	}
	document.querySelector('.select-month').innerHTML = selectableMonths;
}

function nextMonth() {
	currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previousMonth() {
	currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function jump() {
	currentYear = parseInt(selectYear);
	currentMonth = parseInt(selectMonth);
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
	$events.removeDisplayedDate();

	let firstDay = new Date(year, month).getDay();
	let daysInMonth = 32 - new Date(year, month, 32).getDate();

	let tbl = document.querySelector('.calendar__days__container');

	// clearing all previous cells
  if(tbl){
	tbl.innerHTML = '';
    
  }

	if (window.location.pathname.includes('/en/')) {
		document.querySelector('.calendar__period_month').innerHTML =
			months[month];
	} else {
    if(jQuery('.calendar__period_month').length >0){
		document.querySelector('.calendar__period_month').innerHTML =
			arabicMonths[month];
    }
	}
  if(jQuery('.calendar__period_year').length >0){
	document.querySelector('.calendar__period_year').innerHTML = year;
  }

	// creating all cells
	let date = 1;
	for (let i = 0; i < 6; i++) {
		// creates a table row
		let row = document.createElement('div');
		row.className = 'container_week_container';

		//creating individual cells, filing them up with data.
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				let cell = document.createElement('span');
				cell.className = 'has_event calendar_day calendar_day_no';
				let cellText = document.createTextNode('');
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth) {
				break;
			} else {
				let cell = document.createElement('span');
				cell.className = 'has_event calendar_day';
				cell.setAttribute('date', date);
				let cellText = document.createTextNode(date);

				if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					cell.classList.add(
						'calendar_day_today'
					);
				} // color today's date

				cell.appendChild(cellText);
				row.appendChild(cell);
				date++;
			}
		}
    if(jQuery('.calendar__days__container').length  >0){
		tbl.appendChild(row); // appending each row into calendar body.
    }
	}

	$events.display();
	$events.displaySpanDates($viewing_event_id);
}

$(document).ready(function() {
	function toggleSelectYearUI() {
		$('ul.select-year,.overlay-control-click').toggleClass(
			'open-select'
		);
	}

	function toggleSelectMonthUI() {
		$('ul.select-month,.overlay-control-click').toggleClass(
			'open-select'
		);
	}

	$('.calendar__period_year').on('click', function() {
		toggleSelectYearUI();
	});

	$('.calendar__period_month').on('click', function() {
		toggleSelectMonthUI();
	});

	$('.overlay-control-click').on('click', function() {
		$(
			'ul.select-month,ul.select-year,.overlay-control-click'
		).removeClass('open-select');
	});

	$('ul.select-year li').on('click', function() {
		selectYear = $(this).attr('data-year');
		jump();
		toggleSelectYearUI();
	});

	$('ul.select-month li').on('click', function() {
		selectMonth = $(this).attr('data-month');
		jump();
		toggleSelectMonthUI();
	});

	$(document).on(
		'click',
		'span.calendar_day.daywithevent',
		function() {
			$('li.event').each(function() {
				$(this).removeClass('viewing_event');
			});
			document.querySelectorAll('span.calendar_day').forEach(
				function(calendar_day) {
					calendar_day.classList.remove(
						'event_span_day'
					);
				}
			);
			$viewing_event_id = null;
			var day_events = [];
			$(this)
				.attr('event-id')
				.split(',')
				.forEach(function(event_id) {
					day_events.push(
						$events.retrieveEventData(
							event_id
						)
					);
				});
			day_events_html = '';
			day_events.forEach(function(event) {
				
         // if (window.location.pathname.includes('/ar/')) {
            if (event.type == 'الأيام الثقافية') {
					  day_events_html += 
              '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' +
						    event.name + '</a> </p> <div id="collapse' + event.id + '" class="collapse" data-parent="#accordion"><div><p class="event_summary">' +
						    event.description.substring(0,100) + ' <div class="cal-img"><img style="width: 100%;margin: 12px auto;background: white;border: 1px solid rgba(0,0,0,0.01);" src="' +
						    event.imageSrc + '"/></div><a href="/ar/node/' + event.id + '" target="_blank" class="btn btn-outline-white read-more">اقرأ المزيد</a>' + '</p></div></div></li>';
          } else if(event.type == 'Cultural Days') {
					  day_events_html +=
						  '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' +
						  event.name + '</a> </p> <div id="collapse' + event.id + '" class="collapse" data-parent="#accordion"><div><p class="event_summary">' +
						  event.description.substring(0,100) + ' <div class="cal-img"><img style="width: 100%;margin: 20px auto;background: white;border: 1px solid rgba(0,0,0,0.01);" src="' +
						  event.imageSrc + '"/><a href="/en/node/' + event.id + '" target="_blank" class="btn btn-outline-white read-more">Read more </a>' + '</p></div></div></li>';            
          } else if (event.type == 'الأيام الثقافية العالمية') {
            day_events_html +=
              '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' + event.name +
              '</a> </p> <div id="collapse' + event.id + '" class="collapse" data-parent="#accordion"><div><p class="event_summary">' + 
              event.description.substring(0,100) + ' <img style="width: 100%;margin: 20px auto;background: white;border: 1px solid rgba(0,0,0,0.01);" src="' +
              event.imageSrc + '"/></p></div></div></li>';
          } else if (event.type == 'International Cultural Days') {
            day_events_html +=
              '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' + event.name +
              '</a> </p> <div id="collapse' + event.id + '" class="collapse" data-parent="#accordion"><div><p class="event_summary">' +
              event.description.substring(0,100) + ' <img style="width: 100%;margin: 20px auto;background: white;border: 1px solid rgba(0,0,0,0.01);" src="' +
              event.imageSrc + '"/></p></div></div></li>';            
				} else if (event.type == 'الأيام المميزة') {
            day_events_html += 
              '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' + event.name +
						  '</a> </p></li>';
           } else if (event.type == 'Special Days') {
             day_events_html +=
						  '<li class="event" event-id="' + event.id + '"><p class="event_name"> <a data-toggle="collapse" href="#collapse' + event.id + '">' + event.name +
						  '</a> </p></li>';
        }
			});
			$('ul.events_brief').html(day_events_html);

			if (window.location.pathname.includes('/en/')) {
				$('#events-on-date').html(
					'On this day:');
			} else {
				$('#events-on-date').html(
					'في هذا اليوم: ');
			}

			$('div.left-app-container').css('margin-top', '80px');
			$('.app-container').addClass('active-events');
			$('li.event,#events-on-date').css('display', 'block');
			removeEventDescription();
		}
	);

	$(document).on('click', 'li.event', function() {
		$('li.event').each(function() {
			$(this).removeClass('viewing_event');
		});
		if ($(this).attr('viewing-event') == 'true') {
			document.querySelectorAll('span.calendar_day').forEach(
				function(calendar_day) {
					calendar_day.classList.remove(
						'event_span_day'
					);
					
				}
			);
			$(this).removeClass('viewing_event');
			$(this).removeAttr('viewing-event');
			$viewing_event_id = null;
			removeEventDescription();
		} else {
			$(this).addClass('viewing_event');
			$(this).attr('viewing-event', 'true');
			$viewing_event_id = $(this).attr('event-id');
			$events.displaySpanDates($viewing_event_id);
			showEventDescription($viewing_event_id);
		}
	});

	function showEventDescription(event_id) {
        return false;
		var event = $events.retrieveEventData(event_id);

		if (event.type == 'الفعاليات الثقافية') {
			if (window.location.pathname.includes('/en/')) {
				$('.left-event-description p').html(
					event.description.substring(0, 100) +
						' ... <a href="/en/node/' +
						event.id +
						'" target="_blank" class="btn btn-outline-white read-more">Read More</a>'
				);
				$('.left-event-description span').html(
					event.name +
						' <br/>' +
						'Event date: ' +
						event.date +
						' - ' +
						event.todate
				);
			} else {
				$('.left-event-description p').html(
					event.description.substring(0, 100) +
						' ... <a href="/ar/node/' +
						event.id +
						'" target="_blank" class="btn btn-outline-white read-more">اقرأ المزيد</a>'
				);
				$('.left-event-description span').html(
					event.name +
						' <br/>' +
						'تاريخ الفعالية: ' +
						event.date +
						' - ' +
						event.todate
				);
			}
		} else if (event.type == 'الأيام الثقافية العالمية') {
			if (window.location.pathname.includes('/en/')) {
				$('.left-event-description p').html(
					event.description.substring(0, 100)
				);
				$('.left-event-description span').html(
					event.name
				);
			} else {
				$('.left-event-description p').html(
					event.description.substring(0, 100)
				);
				$('.left-event-description span').html(
					event.name
				);
			}
		} else {
			if (window.location.pathname.includes('/en/')) {
				$('.left-event-description span').html(
					event.name
				);
			} else {
				$('.left-event-description span').html(
					event.name
				);
			}
		}

		$('.right-event-description img').attr('src', event.imageSrc);
		$('.event-description').fadeIn('slow', function() {
			$('.event-description').addClass('flex');
		});
	}

	function removeEventDescription() {
		$('.event-description').fadeOut('slow', function() {
			$('.event-description').removeClass('flex');
		});
	}
});

function Calendar() {
	if (window.location.pathname.includes('/en/')) {
		(this.initiate = function(element_selector) {
			element_selector.prepend(`
            <div class="app-container">
            <div class="">
                <div class="left-app-container">
                        <div class="calendar__container">
                                <div class="calendar__navigation-period">
                                    <button class="calendar__navigation_left" onclick="previousMonth()">
                                        <i class="fa fa-chevron-up"></i>
                                    </button>
                                    <div class="calendar__period">
                                        <p class="calendar__period_month"></p>
                                        <p class="calendar__period_year"></p>
                                        <ul class="select-year">
                                        </ul>
                                        <ul class="select-month">
                                            <li>January</li>
                                            <li>Feburary</li>
                                        </ul>
                                    </div>
                                    <button class="calendar__navigation_right" onclick="nextMonth()">
                                        <i class="fa fa-chevron-up"></i>
                                    </button>
                                </div>
                                <div class="overlay-control-click"></div>
                                <div class="container_week_container" style="margin-top:20px;">
                                    <span class="calendar_day_heading">SUN</span>
                                    <span class="calendar_day_heading">MON</span>
                                    <span class="calendar_day_heading">TUE</span>
                                    <span class="calendar_day_heading">WED</span>
                                    <span class="calendar_day_heading">THU</span>
                                    <span class="calendar_day_heading">FRI</span>
                                    <span class="calendar_day_heading">SAT</span>
                                </div>
                                <div class="calendar__days__container">
                                </div>
                            </div>
                </div>
                <div class="right-app-container">
                    <h2 id="events-on-date"></h2>
                    <ul class="events_brief" id="accordion">
                        <li class="event_ask_select">
                            <p>Select an event date</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="clear: both"></div>
            <div class="event-description no-b">
                <div class="left-event-description">
                    <span></span>
                    <p></p>
                </div>
                <div class="right-event-description">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        `);
			showCalendar(currentMonth, currentYear);
			showSelectableYear();
			showSelectableMonth();
			var checkTodaysEvent = setInterval(function() {
				if (
					$(
						'span.calendar_day.calendar_day_today.possible_event_day'
					)
				) {
					$(
						'span.calendar_day.calendar_day_today.possible_event_day'
					).trigger('click');
					clearInterval(checkTodaysEvent);
				}
			}, 100);
		}),
			(this.setEvents = function(events) {
				$events.events = events;
			});
	} else {
		(this.initiate = function(element_selector) {
			element_selector.prepend(`
            <div class="app-container">
            <div class="">
                <div class="left-app-container">
                        <div class="calendar__container">
                                <div class="calendar__navigation-period">
                                    <button class="calendar__navigation_left" onclick="previousMonth()">
                                        <i class="fa fa-chevron-up"></i>
                                    </button>
                                    <div class="calendar__period">
                                        <p class="calendar__period_month"></p>
                                        <p class="calendar__period_year"></p>
                                        <ul class="select-year">
                                        </ul>
                                        <ul class="select-month">
                                            <li>January</li>
                                            <li>Feburary</li>
                                        </ul>
                                    </div>
                                    <button class="calendar__navigation_right" onclick="nextMonth()">
                                        <i class="fa fa-chevron-up"></i>
                                    </button>
                                </div>
                                <div class="overlay-control-click"></div>
                                <div class="container_week_container" style="margin-top:20px;">
                                    <span class="calendar_day_heading">الأحد</span>
                                    <span class="calendar_day_heading">الأثنين</span>
                                    <span class="calendar_day_heading">الثلاثاء</span>
                                    <span class="calendar_day_heading">الأربعاء</span>
                                    <span class="calendar_day_heading">الخميس</span>
                                    <span class="calendar_day_heading">الجمعة</span>
                                    <span class="calendar_day_heading">السبت</span>
                                </div>
                                <div class="calendar__days__container">
                                </div>
                            </div>
                </div>
                <div class="right-app-container">
                    <h2 id="events-on-date"></h2>
                    <ul class="events_brief" id="accordion">
                        <li class="event_ask_select">
                            <p>أختر يوم الفعالية</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="clear: both"></div>
            <div class="event-description no-b">
                <div class="left-event-description">
                    <span></span>
                    <p></p>
                </div>
                <div class="right-event-description">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        `);
			showCalendar(currentMonth, currentYear);
			showSelectableYear();
			showSelectableMonth();
			var checkTodaysEvent = setInterval(function() {
				if (
					$(
						'span.calendar_day.calendar_day_today.possible_event_day'
					)
				) {
					$(
						'span.calendar_day.calendar_day_today.possible_event_day'
					).trigger('click');
					clearInterval(checkTodaysEvent);
				}
			}, 100);
		}),
			(this.setEvents = function(events) {
				$events.events = events;
				console.log(events);
			});
	}
}







var day_events_empty_html ='<li class="event_ask_select"><p> لا يوجد فعاليات في  هذا التاريخ </p></li>';

if (window.location.pathname.includes('/en/')) {
   day_events_empty_html ='<li class="event_ask_select"><p> No events on selected  date </p></li>';
}

		
jQuery( document ).on( 'click' , ' .calendar_day' , function() {
  if ( !$(this).hasClass('possible_event_day') && !$(this).hasClass('event_span_day') ) 
  { 
    
    	if (window.location.pathname.includes('/en/')) {
				$('#events-on-date').html(
					'On this day: ');
			} else {
				$('#events-on-date').html(
					'في هذا اليوم: ');
			}
    
    
    $('ul.events_brief').html(day_events_empty_html);
  
  }
} );





		
