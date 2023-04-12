var $ = jQuery;

$(document).ready(function(){
  
  $(window).bind("pageshow", function() {
    // let the browser natively reset defaults
    if($('#node-career-form').length >0){
    $('#node-career-form')[0].reset();
  }
});
  
$('#node-career-form').on('copy',function(e) {
    return false;
});
  $( ".verefied-code" ).mousedown(function() {
  return false;
});
  
  $('#node-career-form').bind('cut copy paste', function (e) {
 return false;
});
  
  $("#edit-field-present-present").change(function() {
    if(this.checked) {
     $('#edit-field-to-date-0-value-date').val('');
     $('#edit-field-to-date-0-value-date').attr('disabled','disabled');
	 
    }else{
	$('#edit-field-to-date-0-value-date').removeAttr('disabled');
	}
});
  
  /////////////// Adding placeholder
  $('#edit-field-mobile-number-0-value').attr("placeholder","05xxxxxxxx");
  $('#edit-field-alternate-phone-number-0-value').attr("placeholder","05xxxxxxxx");
  $('#edit-field-home-phone-number-0-value').attr("placeholder","05xxxxxxxx");
  $('#edit-field-email-address-0-value').attr("placeholder","example@example.com");
  $('#edit-field-nationalid-0-value').attr("maxlength",10);
	
	if($('#edit-field-nationality').val()=="KSA"){
	$('#edit-field-nationalid-wrapper').addClass('show');
	$('#edit-field-nationalid-wrapper').removeClass('hide');	
	$('#edit-field-nationalid-0-value').attr('required','required');	
	
	$('#edit-field-place-of-id-issue-wrapper').addClass('show');
	$('#edit-field-place-of-id-issue-wrapper').removeClass('hide');
	$('#edit-field-place-of-id-issue').attr('required','required');	
	
	}else{
	$('#edit-field-nationalid-wrapper').addClass('hide');
	$('#edit-field-nationalid-wrapper').removeClass('show');
	$('#edit-field-nationalid-0-value').val('');	
	$('#edit-field-nationalid-0-value').removeAttr('required');

	$('#edit-field-place-of-id-issue-wrapper').addClass('hide');
	$('#edit-field-place-of-id-issue-wrapper').removeClass('show');
	$('#edit-field-place-of-id-issue').val('');
	$('#edit-field-place-of-id-issue').removeAttr('required');
	}
	
	if($('#edit-field-place-of-residence').val() =="KSA" && $('#edit-field-nationality').val()!="KSA"){
	$('#edit-field-status-of-residency-wrapper').addClass('show');
	$('#edit-field-status-of-residency-wrapper').removeClass('hide');
	$('#edit-field-status-of-residency').attr('required','required');

	$('#edit-field-residency-number-wrapper').addClass('show');
	$('#edit-field-residency-number-wrapper').removeClass('hide');
	$('#edit-field-residency-number-0-value').attr('required','required');	

	$('#edit-field-mkan-asdar-alaqamt-wrapper').addClass('show');
	$('#edit-field-mkan-asdar-alaqamt-wrapper').removeClass('hide');
	$('#edit-field-mkan-asdar-alaqamt-').attr('required','required');		
	}else{
	$('#edit-field-status-of-residency-wrapper').addClass('hide');
	$('#edit-field-status-of-residency-wrapper').removeClass('show');
	$('#edit-field-status-of-residency').val('');	
	$('#edit-field-status-of-residency').removeAttr('required');

	$('#edit-field-residency-number-wrapper').addClass('hide');
	$('#edit-field-residency-number-wrapper').removeClass('show');
	$('#edit-field-residency-number-0-value').val('');	
	$('#edit-field-residency-number-0-value').removeAttr('required');

	$('#edit-field-mkan-asdar-alaqamt-wrapper').addClass('hide');
	$('#edit-field-mkan-asdar-alaqamt-wrapper').removeClass('show');
	$('#edit-field-mkan-asdar-alaqamt-').val('');	
	$('#edit-field-mkan-asdar-alaqamt-').removeAttr('required');	
	}
	
	if($('#edit-field-experience').val()=="Yes"){
	$('#edit-field-years-of-experience-wrapper').addClass('show');
	$('#edit-field-years-of-experience-wrapper').removeClass('hide');
	$('#edit-field-years-of-experience').attr('required','required');	

	$('#edit-field-position-name-wrapper').addClass('show');
	$('#edit-field-position-name-wrapper').removeClass('hide');
	$('#edit-field-position-name-0-value').attr('required','required');	

	$('#edit-field-from-month-wrapper').addClass('show');
	$('#edit-field-from-month-wrapper').removeClass('hide');
	$('#edit-field-from-month-0-value-date').attr('required','required');	

	$('#edit-field-to-date-wrapper').addClass('show');
	$('#edit-field-to-date-wrapper').removeClass('hide');
	//$('#edit-field-to-date-0-value-date').attr('required','required');	

	$('#edit-field-company-name-wrapper').addClass('show');
	$('#edit-field-company-name-wrapper').removeClass('hide');
	$('#edit-field-company-name-0-value').attr('required','required');	

	$('#edit-field-company-field-wrapper').addClass('show');
	$('#edit-field-company-field-wrapper').removeClass('hide');
	$('#edit-field-company-field').attr('required','required');	

	$('#edit-field-experience-country-wrapper').addClass('show');
	$('#edit-field-experience-country-wrapper').removeClass('hide');
	$('#edit-field-experience-country-').attr('required','required');

	$('#edit-field-experience-city-wrapper').addClass('show');
	$('#edit-field-experience-city-wrapper').removeClass('hide');
	$('#edit-field-experience-city-0-value').attr('required','required');	

	$('#edit-field-company-field-wrapper').addClass('hide');
	$('#edit-field-company-field-wrapper').removeClass('show');
	$('#edit-field-company-field-0-value').val('');
	$('#edit-field-company-field-0-value').removeAttr('required','required');	

	$('#edit-field-position-field-wrapper').addClass('show');
	$('#edit-field-position-field-wrapper').removeClass('hide');
	$('#edit-field-position-field').attr('required','required');
    
    
  $('#edit-field-position-field-wrapper').addClass('show');
	$('#edit-field-position-field-wrapper').removeClass('hide');
	$('#edit-field-position-field').attr('required','required');	

	$('#edit-field-skills-wrapper').addClass('show');
	$('#edit-field-skills-wrapper').removeClass('hide');
    
  $('#edit-field-present-wrapper').addClass('show');
	$('#edit-field-present-wrapper').removeClass('hide');
			
		}else if($('#edit-field-experience').val()=="No"){
	$('#edit-field-years-of-experience-wrapper').addClass('hide');
	$('#edit-field-years-of-experience-wrapper').removeClass('show');
	$('#edit-field-years-of-experience').val('');
	$('#edit-field-years-of-experience').removeAttr('required');	

	$('#edit-field-position-name-wrapper').addClass('hide');
	$('#edit-field-position-name-wrapper').removeClass('show');
	$('#edit-field-position-name-0-value').val('');
	$('#edit-field-position-name-0-value').removeAttr('required');	

	$('#edit-field-from-month-wrapper').addClass('hide');
	$('#edit-field-from-month-wrapper').removeClass('show');
	$('#edit-field-from-month-0-value-date').val('');
	$('#edit-field-from-month-0-value-date').removeAttr('required');	

	$('#edit-field-to-date-wrapper').addClass('hide');
	$('#edit-field-to-date-wrapper').removeClass('show');
	$('#edit-field-to-date-0-value-date').val('');
	$('#edit-field-to-date-0-value-date').removeAttr('required');	

	$('#edit-field-company-name-wrapper').addClass('hide');
	$('#edit-field-company-name-wrapper').removeClass('show');
	$('#edit-field-company-name-0-value').val('');
	$('#edit-field-company-name-0-value').removeAttr('required');	

	$('#edit-field-company-field-wrapper').addClass('hide');
	$('#edit-field-company-field-wrapper').removeClass('show');
	$('#edit-field-company-field-0-value').val('');
	$('#edit-field-company-field-0-value').removeAttr('required');
  

	$('#edit-field-experience-country-wrapper').addClass('hide');
	$('#edit-field-experience-country-wrapper').removeClass('show');
	$('#edit-field-experience-country').val('');
	$('#edit-field-experience-country').removeAttr('required');

	$('#edit-field-experience-city-wrapper').addClass('hide');
	$('#edit-field-experience-city-wrapper').removeClass('show');
	$('#edit-field-experience-city-0-value').val('');
	$('#edit-field-experience-city-0-value').removeAttr('required');	

	$('#edit-field-interests-wrapper').addClass('show');
	$('#edit-field-interests-wrapper').removeClass('hide');
	$('#edit-field-interests').attr('required','required');	

	$('#edit-field-position-field-wrapper').addClass('show');
	$('#edit-field-position-field-wrapper').removeClass('hide');
	$('#edit-field-position-field').attr('required','required');	

	$('#edit-field-skills-wrapper').addClass('show');
	$('#edit-field-skills-wrapper').removeClass('hide');
      
  $('#edit-field-present-wrapper').addClass('hide');
	$('#edit-field-present-wrapper').removeClass('show');
			
		}else{
		$('#edit-field-years-of-experience-wrapper').addClass('hide');
	$('#edit-field-years-of-experience-wrapper').removeClass('show');
	$('#edit-field-years-of-experience').val('');
	$('#edit-field-years-of-experience').removeAttr('required');	

	$('#edit-field-position-name-wrapper').addClass('hide');
	$('#edit-field-position-name-wrapper').removeClass('show');
	$('#edit-field-position-name-0-value').val('');
	$('#edit-field-position-name-0-value').removeAttr('required');	

	$('#edit-field-from-month-wrapper').addClass('hide');
	$('#edit-field-from-month-wrapper').removeClass('show');
	$('#edit-field-from-month-0-value-date').val('');
	$('#edit-field-from-month-0-value-date').removeAttr('required');	

	$('#edit-field-to-date-wrapper').addClass('hide');
	$('#edit-field-to-date-wrapper').removeClass('show');
	$('#edit-field-to-date-0-value-date').val('');
	$('#edit-field-to-date-0-value-date').removeAttr('required');	

	$('#edit-field-company-name-wrapper').addClass('hide');
	$('#edit-field-company-name-wrapper').removeClass('show');
	$('#edit-field-company-name-0-value').val('');
	$('#edit-field-company-name-0-value').removeAttr('required');	

	$('#edit-field-company-field-wrapper').addClass('hide');
	$('#edit-field-company-field-wrapper').removeClass('show');
	$('#edit-field-company-field-0-value').val('');
	$('#edit-field-company-field-0-value').removeAttr('required');	

	$('#edit-field-experience-country-wrapper').addClass('hide');
	$('#edit-field-experience-country-wrapper').removeClass('show');
	$('#edit-field-experience-country-').val('');
	$('#edit-field-experience-country-').removeAttr('required');

	$('#edit-field-experience-city-wrapper').addClass('hide');
	$('#edit-field-experience-city-wrapper').removeClass('show');
	$('#edit-field-experience-city-0-value').val('');
	$('#edit-field-experience-city-0-value').removeAttr('required');	

	$('#edit-field-interests-wrapper').addClass('hide');
	$('#edit-field-interests-wrapper').removeClass('show');
	$('#edit-field-interests').removeAttr('required');	

	$('#edit-field-position-field-wrapper').addClass('hide');
	$('#edit-field-position-field-wrapper').removeClass('show');
	$('#edit-field-position-field').removeAttr('required');	

	$('#edit-field-skills-wrapper').addClass('hide');
	$('#edit-field-skills-wrapper').removeClass('show');
      
  $('#edit-field-present-wrapper').addClass('hide');
	$('#edit-field-present-wrapper').removeClass('show');    
			
		}
		
		
		/////////////////////////
		if($('#edit-field-mail-type').val()=="pobox"){
	$('#edit-field-mail-box-wrapper').addClass('show');
	$('#edit-field-mail-box-wrapper').removeClass('hide');
	$('#edit-field-mail-box-0-value').attr('required','required');

	$('#edit-field-address-city-wrapper').addClass('show');
	$('#edit-field-address-city-wrapper').removeClass('hide');
	$('#edit-field-address-city-0-value').attr('required','required');	

	$('#edit-field-postal-code-wrapper').addClass('show');
	$('#edit-field-postal-code-wrapper').removeClass('hide');
	$('#edit-field-postal-code-0-value').attr('required','required');

	$('#edit-field-building-number-wrapper').addClass('hide');
	$('#edit-field-building-number-wrapper').removeClass('show');
	$('#edit-field-building-number-0-value').val('');	
	$('#edit-field-building-number-0-value').removeAttr('required');

	$('#edit-field-additional-wasel-number-wrapper').addClass('hide');
	$('#edit-field-additional-wasel-number-wrapper').removeClass('show');
	$('#edit-field-additional-wasel-number-0-value').val('');	
	$('#edit-field-additional-wasel-number-0-value').removeAttr('required');	
	}else if($('#edit-field-mail-type').val()=="wasel"){
	$('#edit-field-mail-box-wrapper').addClass('hide');
	$('#edit-field-mail-box-wrapper').removeClass('show');
	$('#edit-field-mail-box-0-value').val('');
	$('#edit-field-mail-box-0-value').removeAttr('required');
	
	$('#edit-field-address-city-wrapper').addClass('show');
	$('#edit-field-address-city-wrapper').removeClass('hide');
	$('#edit-field-address-city-0-value').attr('required','required');	

	$('#edit-field-postal-code-wrapper').addClass('show');
	$('#edit-field-postal-code-wrapper').removeClass('hide');
	$('#edit-field-postal-code-0-value').attr('required','required');
	
	$('#edit-field-building-number-wrapper').addClass('show');
	$('#edit-field-building-number-wrapper').removeClass('hide');
	$('#edit-field-building-number-0-value').attr('required','required');

	$('#edit-field-additional-wasel-number-wrapper').addClass('show');
	$('#edit-field-additional-wasel-number-wrapper').removeClass('hide');
	$('#edit-field-additional-wasel-number-0-value').attr('required','required');
	
	}else{
	$('#edit-field-mail-box-wrapper').addClass('hide');
	$('#edit-field-mail-box-wrapper').removeClass('show');
	$('#edit-field-mail-box-0-value').val('');
	$('#edit-field-mail-box-0-value').removeAttr('required');
	
	$('#edit-field-address-city-wrapper').addClass('hide');
	$('#edit-field-address-city-wrapper').removeClass('show');
	$('#edit-field-address-city-0-value').val('');
	$('#edit-field-address-city-0-value').removeAttr('required');	

	$('#edit-field-postal-code-wrapper').addClass('hide');
	$('#edit-field-postal-code-wrapper').removeClass('show');
	$('#edit-field-postal-code-0-value').val('');
	$('#edit-field-postal-code-0-value').removeAttr('required');
	
	$('#edit-field-building-number-wrapper').addClass('hide');
	$('#edit-field-building-number-wrapper').removeClass('show');
	$('#edit-field-building-number-0-value').val('');
	$('#edit-field-building-number-0-value').removeAttr('required');

	$('#edit-field-additional-wasel-number-wrapper').addClass('hide');
	$('#edit-field-additional-wasel-number-wrapper').removeClass('show');
	$('#edit-field-additional-wasel-number-0-value').val('');
	$('#edit-field-additional-wasel-number-0-value').removeAttr('required');
	
	}
  
  setTimeout(function(){
  $('#edit-captcha-response--description').hide();
  $('.captcha img').css('display','block');
  $('details.captcha').css('padding-top','10px');
  $('details.captcha summary').css('display','none');
  },500);
  
	
	
if($('#user-pass').length){
	
	$('#user-pass input').removeClass('form-control');
	$('#user-pass input').addClass('form-control-login');
	
	$('#user-pass #edit-submit').removeClass('form-control-login');
	$('#user-pass #edit-submit').addClass('form-control');
	
}

if($('#user-login-form').length){
	
	$('#user-login-form input').removeClass('form-control');
	$('#user-login-form input').addClass('form-control-login');
	
	$('#user-login-form #edit-submit').removeClass('form-control-login');
	$('#user-login-form #edit-submit').addClass('form-control');	
}

$('#edit-field-nationality').change(function(){
	
	if($(this).val()=="KSA"){
	$('#edit-field-nationalid-wrapper').addClass('show');
	$('#edit-field-nationalid-wrapper').removeClass('hide');
	
	$('#edit-field-nationalid-0-value').val('');
	$('#edit-field-nationalid-0-value').attr('required','required');	
	
	$('#edit-field-place-of-id-issue-wrapper').addClass('show');
	$('#edit-field-place-of-id-issue-wrapper').removeClass('hide');
	$('#edit-field-place-of-id-issue').val('');
	$('#edit-field-place-of-id-issue').attr('required','required');	
	
	}else{
	$('#edit-field-nationalid-wrapper').addClass('hide');
	$('#edit-field-nationalid-wrapper').removeClass('show');
	$('#edit-field-nationalid-0-value').val('');	
	$('#edit-field-nationalid-0-value').removeAttr('required');

	$('#edit-field-place-of-id-issue-wrapper').addClass('hide');
	$('#edit-field-place-of-id-issue-wrapper').removeClass('show');
	$('#edit-field-place-of-id-issue').val('');
	$('#edit-field-place-of-id-issue').removeAttr('required');
	}
	
	$('#edit-field-place-of-residence').change();
});

$('#edit-field-place-of-residence').change(function(){
	
	if($(this).val() =="KSA" && $('#edit-field-nationality').val()!="KSA"){
	$('#edit-field-status-of-residency-wrapper').addClass('show');
	$('#edit-field-status-of-residency-wrapper').removeClass('hide');
	$('#edit-field-status-of-residency').val('');
	$('#edit-field-status-of-residency').attr('required','required');

	$('#edit-field-residency-number-wrapper').addClass('show');
	$('#edit-field-residency-number-wrapper').removeClass('hide');
	$('#edit-field-residency-number-0-value').val('');
	$('#edit-field-residency-number-0-value').attr('required','required');	

	$('#edit-field-mkan-asdar-alaqamt-wrapper').addClass('show');
	$('#edit-field-mkan-asdar-alaqamt-wrapper').removeClass('hide');
	$('#edit-field-mkan-asdar-alaqamt-').val('');
	$('#edit-field-mkan-asdar-alaqamt-').attr('required','required');		
	}else{
	$('#edit-field-status-of-residency-wrapper').addClass('hide');
	$('#edit-field-status-of-residency-wrapper').removeClass('show');
	$('#edit-field-status-of-residency').val('');	
	$('#edit-field-status-of-residency').removeAttr('required');

	$('#edit-field-residency-number-wrapper').addClass('hide');
	$('#edit-field-residency-number-wrapper').removeClass('show');
	$('#edit-field-residency-number-0-value').val('');	
	$('#edit-field-residency-number-0-value').removeAttr('required');

	$('#edit-field-mkan-asdar-alaqamt-wrapper').addClass('hide');
	$('#edit-field-mkan-asdar-alaqamt-wrapper').removeClass('show');
	$('#edit-field-mkan-asdar-alaqamt-').val('');	
	$('#edit-field-mkan-asdar-alaqamt-').removeAttr('required');	
	}
});


$('#edit-field-mail-type').change(function(){
	
	if($(this).val()=="pobox"){
	$('#edit-field-mail-box-wrapper').addClass('show');
	$('#edit-field-mail-box-wrapper').removeClass('hide');
	$('#edit-field-mail-box-0-value').val('');
	$('#edit-field-mail-box-0-value').attr('required','required');

	$('#edit-field-address-city-wrapper').addClass('show');
	$('#edit-field-address-city-wrapper').removeClass('hide');
	$('#edit-field-address-city-0-value').val('');
	$('#edit-field-address-city-0-value').attr('required','required');	

	$('#edit-field-postal-code-wrapper').addClass('show');
	$('#edit-field-postal-code-wrapper').removeClass('hide');
	$('#edit-field-postal-code-0-value').val('');
	$('#edit-field-postal-code-0-value').attr('required','required');

	$('#edit-field-building-number-wrapper').addClass('hide');
	$('#edit-field-building-number-wrapper').removeClass('show');
	$('#edit-field-building-number-0-value').val('');	
	$('#edit-field-building-number-0-value').removeAttr('required');

	$('#edit-field-additional-wasel-number-wrapper').addClass('hide');
	$('#edit-field-additional-wasel-number-wrapper').removeClass('show');
	$('#edit-field-additional-wasel-number-0-value').val('');	
	$('#edit-field-additional-wasel-number-0-value').removeAttr('required');	
	}else{
	$('#edit-field-mail-box-wrapper').addClass('hide');
	$('#edit-field-mail-box-wrapper').removeClass('show');
	$('#edit-field-mail-box-0-value').val('');
	$('#edit-field-mail-box-0-value').removeAttr('required');
	
	$('#edit-field-address-city-wrapper').addClass('show');
	$('#edit-field-address-city-wrapper').removeClass('hide');
	$('#edit-field-address-city-0-value').val('');
	$('#edit-field-address-city-0-value').attr('required','required');	

	$('#edit-field-postal-code-wrapper').addClass('show');
	$('#edit-field-postal-code-wrapper').removeClass('hide');
	$('#edit-field-postal-code-0-value').val('');
	$('#edit-field-postal-code-0-value').attr('required','required');
	
	$('#edit-field-building-number-wrapper').addClass('show');
	$('#edit-field-building-number-wrapper').removeClass('hide');
	$('#edit-field-building-number-0-value').val('');	
	$('#edit-field-building-number-0-value').attr('required','required');

	$('#edit-field-additional-wasel-number-wrapper').addClass('show');
	$('#edit-field-additional-wasel-number-wrapper').removeClass('hide');
	$('#edit-field-additional-wasel-number-0-value').val('');	
	$('#edit-field-additional-wasel-number-0-value').attr('required','required');
	
	}
});

	$('#edit-field-experience').change(function(){
		
		if($(this).val()=="Yes"){
	$('#edit-field-years-of-experience-wrapper').addClass('show');
	$('#edit-field-years-of-experience-wrapper').removeClass('hide');
	$('#edit-field-years-of-experience').val('');
	$('#edit-field-years-of-experience').attr('required','required');	

	$('#edit-field-position-name-wrapper').addClass('show');
	$('#edit-field-position-name-wrapper').removeClass('hide');
	$('#edit-field-position-name-0-value').val('');
	$('#edit-field-position-name-0-value').attr('required','required');	

	$('#edit-field-from-month-wrapper').addClass('show');
	$('#edit-field-from-month-wrapper').removeClass('hide');
	$('#edit-field-from-month-0-value-date').val('');
	$('#edit-field-from-month-0-value-date').attr('required','required');	

	$('#edit-field-to-date-wrapper').addClass('show');
	$('#edit-field-to-date-wrapper').removeClass('hide');
	$('#edit-field-to-date-0-value-date').val('');
	//$('#edit-field-to-date-0-value-date').attr('required','required');	

	$('#edit-field-company-name-wrapper').addClass('show');
	$('#edit-field-company-name-wrapper').removeClass('hide');
	$('#edit-field-company-name-0-value').val('');
	$('#edit-field-company-name-0-value').attr('required','required');	

	$('#edit-field-company-field-wrapper').addClass('show');
	$('#edit-field-company-field-wrapper').removeClass('hide');
	$('#edit-field-company-field-0-value').val('');
	$('#edit-field-company-field-0-value').attr('required','required');	

	$('#edit-field-experience-country-wrapper').addClass('show');
	$('#edit-field-experience-country-wrapper').removeClass('hide');
	$('#edit-field-experience-country-').val('');
	$('#edit-field-experience-country-').attr('required','required');

	$('#edit-field-experience-city-wrapper').addClass('show');
	$('#edit-field-experience-city-wrapper').removeClass('hide');
	$('#edit-field-experience-city-0-value').val('');
	$('#edit-field-experience-city-0-value').attr('required','required');	

	$('#edit-field-interests-wrapper').addClass('hide');
	$('#edit-field-interests-wrapper').removeClass('show');
	$('#edit-field-interests').val('');
	$('#edit-field-interests').removeAttr('required','required');	

	$('#edit-field-position-field-wrapper').addClass('show');
	$('#edit-field-position-field-wrapper').removeClass('hide');
	$('#edit-field-position-field').val('');
	$('#edit-field-position-field').attr('required','required');	

	$('#edit-field-skills-wrapper').addClass('show');
	$('#edit-field-skills-wrapper').removeClass('hide');
	$('#edit-field-skills-0-value').val('');
      
  $('#edit-field-present-wrapper').addClass('show');
	$('#edit-field-present-wrapper').removeClass('hide');
  $('#edit-field-present-present').prop('checked', false);
			
		}else if($(this).val()=="No"){
	$('#edit-field-years-of-experience-wrapper').addClass('hide');
	$('#edit-field-years-of-experience-wrapper').removeClass('show');
	$('#edit-field-years-of-experience').val('');
	$('#edit-field-years-of-experience').removeAttr('required');	

	$('#edit-field-position-name-wrapper').addClass('hide');
	$('#edit-field-position-name-wrapper').removeClass('show');
	$('#edit-field-position-name-0-value').val('');
	$('#edit-field-position-name-0-value').removeAttr('required');	

	$('#edit-field-from-month-wrapper').addClass('hide');
	$('#edit-field-from-month-wrapper').removeClass('show');
	$('#edit-field-from-month-0-value-date').val('');
	$('#edit-field-from-month-0-value-date').removeAttr('required');	

	$('#edit-field-to-date-wrapper').addClass('hide');
	$('#edit-field-to-date-wrapper').removeClass('show');
	$('#edit-field-to-date-0-value-date').val('');
	$('#edit-field-to-date-0-value-date').removeAttr('required');	

	$('#edit-field-company-name-wrapper').addClass('hide');
	$('#edit-field-company-name-wrapper').removeClass('show');
	$('#edit-field-company-name-0-value').val('');
	$('#edit-field-company-name-0-value').removeAttr('required');	

	$('#edit-field-company-field-wrapper').addClass('hide');
	$('#edit-field-company-field-wrapper').removeClass('show');
	$('#edit-field-company-field-0-value').val('');
	$('#edit-field-company-field-0-value').removeAttr('required');	

	$('#edit-field-experience-country-wrapper').addClass('hide');
	$('#edit-field-experience-country-wrapper').removeClass('show');
	$('#edit-field-experience-country-').val('');
	$('#edit-field-experience-country-').removeAttr('required');

	$('#edit-field-experience-city-wrapper').addClass('hide');
	$('#edit-field-experience-city-wrapper').removeClass('show');
	$('#edit-field-experience-city-0-value').val('');
	$('#edit-field-experience-city-0-value').removeAttr('required');	

	$('#edit-field-interests-wrapper').addClass('show');
	$('#edit-field-interests-wrapper').removeClass('hide');
	$('#edit-field-interests').val('');
	$('#edit-field-interests').attr('required','required');	

	$('#edit-field-position-field-wrapper').addClass('show');
	$('#edit-field-position-field-wrapper').removeClass('hide');
	$('#edit-field-position-field').val('');
	$('#edit-field-position-field').attr('required','required');	

	$('#edit-field-skills-wrapper').addClass('show');
	$('#edit-field-skills-wrapper').removeClass('hide');
	$('#edit-field-skills-0-value').val('');
      
  $('#edit-field-present-wrapper').addClass('hide');
	$('#edit-field-present-wrapper').removeClass('show');
  $('#edit-field-present-present').prop('checked', false);
			
		}
	});
  
  if($('.webform-confirmation__message .c-m-career-ch').length >0){
    $('.webform-confirmation').addClass('c-m-career');
  }

});;
//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));;
/*!
 * FullCalendar v3.10.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("moment"),require("jquery")):"function"==typeof define&&define.amd?define(["moment","jquery"],e):"object"==typeof exports?exports.FullCalendar=e(require("moment"),require("jquery")):t.FullCalendar=e(t.moment,t.jQuery)}("undefined"!=typeof self?self:this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=256)}([function(e,n){e.exports=t},,function(t,e){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};e.__extends=function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}},function(t,n){t.exports=e},function(t,e,n){function r(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function i(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function o(){ht("body").addClass("fc-not-allowed")}function s(){ht("body").removeClass("fc-not-allowed")}function a(t,e,n){var r=Math.floor(e/t.length),i=Math.floor(e-r*(t.length-1)),o=[],s=[],a=[],u=0;l(t),t.each(function(e,n){var l=e===t.length-1?i:r,d=ht(n).outerHeight(!0);d<l?(o.push(n),s.push(d),a.push(ht(n).height())):u+=d}),n&&(e-=u,r=Math.floor(e/o.length),i=Math.floor(e-r*(o.length-1))),ht(o).each(function(t,e){var n=t===o.length-1?i:r,l=s[t],u=a[t],d=n-(l-u);l<n&&ht(e).height(d)})}function l(t){t.height("")}function u(t){var e=0;return t.find("> *").each(function(t,n){var r=ht(n).outerWidth();r>e&&(e=r)}),e++,t.width(e),e}function d(t,e){var n,r=t.add(e);return r.css({position:"relative",left:-1}),n=t.outerHeight()-e.outerHeight(),r.css({position:"",left:""}),n}function c(t){var e=t.css("position"),n=t.parents().filter(function(){var t=ht(this);return/(auto|scroll)/.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&n.length?n:ht(t[0].ownerDocument||document)}function p(t,e){var n=t.offset(),r=n.left-(e?e.left:0),i=n.top-(e?e.top:0);return{left:r,right:r+t.outerWidth(),top:i,bottom:i+t.outerHeight()}}function h(t,e){var n=t.offset(),r=g(t),i=n.left+b(t,"border-left-width")+r.left-(e?e.left:0),o=n.top+b(t,"border-top-width")+r.top-(e?e.top:0);return{left:i,right:i+t[0].clientWidth,top:o,bottom:o+t[0].clientHeight}}function f(t,e){var n=t.offset(),r=n.left+b(t,"border-left-width")+b(t,"padding-left")-(e?e.left:0),i=n.top+b(t,"border-top-width")+b(t,"padding-top")-(e?e.top:0);return{left:r,right:r+t.width(),top:i,bottom:i+t.height()}}function g(t){var e,n=t[0].offsetWidth-t[0].clientWidth,r=t[0].offsetHeight-t[0].clientHeight;return n=v(n),r=v(r),e={left:0,right:0,top:0,bottom:r},y()&&"rtl"===t.css("direction")?e.left=n:e.right=n,e}function v(t){return t=Math.max(0,t),t=Math.round(t)}function y(){return null===ft&&(ft=m()),ft}function m(){var t=ht("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),e=t.children(),n=e.offset().left>t.offset().left;return t.remove(),n}function b(t,e){return parseFloat(t.css(e))||0}function w(t){return 1===t.which&&!t.ctrlKey}function D(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageX:t.pageX}function E(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageY:t.pageY}function S(t){return/^touch/.test(t.type)}function C(t){t.addClass("fc-unselectable").on("selectstart",T)}function R(t){t.removeClass("fc-unselectable").off("selectstart",T)}function T(t){t.preventDefault()}function M(t,e){var n={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function I(t,e){return{left:Math.min(Math.max(t.left,e.left),e.right),top:Math.min(Math.max(t.top,e.top),e.bottom)}}function H(t){return{left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}}function P(t,e){return{left:t.left-e.left,top:t.top-e.top}}function _(t){var e,n,r=[],i=[];for("string"==typeof t?i=t.split(/\s*,\s*/):"function"==typeof t?i=[t]:ht.isArray(t)&&(i=t),e=0;e<i.length;e++)n=i[e],"string"==typeof n?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}function x(t,e,n,r,i){var o,s;for(o=0;o<n.length;o++)if(s=O(t,e,n[o],r,i))return s;return 0}function O(t,e,n,r,i){if(n.func)return n.func(t,e);var o=t[n.field],s=e[n.field];return null==o&&r&&(o=r[n.field]),null==s&&i&&(s=i[n.field]),F(o,s)*(n.order||1)}function F(t,e){return t||e?null==e?-1:null==t?1:"string"===ht.type(t)||"string"===ht.type(e)?String(t).localeCompare(String(e)):t-e:0}function z(t,e){return pt.duration({days:t.clone().stripTime().diff(e.clone().stripTime(),"days"),ms:t.time()-e.time()})}function B(t,e){return pt.duration({days:t.clone().stripTime().diff(e.clone().stripTime(),"days")})}function A(t,e,n){return pt.duration(Math.round(t.diff(e,n,!0)),n)}function k(t,n){var r,i,o;for(r=0;r<e.unitsDesc.length&&(i=e.unitsDesc[r],!((o=V(i,t,n))>=1&&ut(o)));r++);return i}function L(t,e){var n=k(t);return"week"===n&&"object"==typeof e&&e.days&&(n="day"),n}function V(t,e,n){return null!=n?n.diff(e,t,!0):pt.isDuration(e)?e.as(t):e.end.diff(e.start,t,!0)}function G(t,e,n){var r;return U(n)?(e-t)/n:(r=n.asMonths(),Math.abs(r)>=1&&ut(r)?e.diff(t,"months",!0)/r:e.diff(t,"days",!0)/n.asDays())}function N(t,e){var n,r;return U(t)||U(e)?t/e:(n=t.asMonths(),r=e.asMonths(),Math.abs(n)>=1&&ut(n)&&Math.abs(r)>=1&&ut(r)?n/r:t.asDays()/e.asDays())}function j(t,e){var n;return U(t)?pt.duration(t*e):(n=t.asMonths(),Math.abs(n)>=1&&ut(n)?pt.duration({months:n*e}):pt.duration({days:t.asDays()*e}))}function U(t){return Boolean(t.hours()||t.minutes()||t.seconds()||t.milliseconds())}function W(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function q(t){return"string"==typeof t&&/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function Y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=window.console;if(n&&n.log)return n.log.apply(n,t)}function Z(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=window.console;return n&&n.warn?n.warn.apply(n,t):Y.apply(null,t)}function X(t,e){var n,r,i,o,s,a,l={};if(e)for(n=0;n<e.length;n++){for(r=e[n],i=[],o=t.length-1;o>=0;o--)if("object"==typeof(s=t[o][r]))i.unshift(s);else if(void 0!==s){l[r]=s;break}i.length&&(l[r]=X(i))}for(n=t.length-1;n>=0;n--){a=t[n];for(r in a)r in l||(l[r]=a[r])}return l}function Q(t,e){for(var n in t)$(t,n)&&(e[n]=t[n])}function $(t,e){return gt.call(t,e)}function K(t,e,n){if(ht.isFunction(t)&&(t=[t]),t){var r=void 0,i=void 0;for(r=0;r<t.length;r++)i=t[r].apply(e,n)||i;return i}}function J(t,e){for(var n=0,r=0;r<t.length;)e(t[r])?(t.splice(r,1),n++):r++;return n}function tt(t,e){for(var n=0,r=0;r<t.length;)t[r]===e?(t.splice(r,1),n++):r++;return n}function et(t,e){var n,r=t.length;if(null==r||r!==e.length)return!1;for(n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function nt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0;n<t.length;n++)if(void 0!==t[n])return t[n]}function rt(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function it(t){return t.replace(/&.*?;/g,"")}function ot(t){var e=[];return ht.each(t,function(t,n){null!=n&&e.push(t+":"+n)}),e.join(";")}function st(t){var e=[];return ht.each(t,function(t,n){null!=n&&e.push(t+'="'+rt(n)+'"')}),e.join(" ")}function at(t){return t.charAt(0).toUpperCase()+t.slice(1)}function lt(t,e){return t-e}function ut(t){return t%1==0}function dt(t,e){var n=t[e];return function(){return n.apply(t,arguments)}}function ct(t,e,n){void 0===n&&(n=!1);var r,i,o,s,a,l=function(){var u=+new Date-s;u<e?r=setTimeout(l,e-u):(r=null,n||(a=t.apply(o,i),o=i=null))};return function(){o=this,i=arguments,s=+new Date;var u=n&&!r;return r||(r=setTimeout(l,e)),u&&(a=t.apply(o,i),o=i=null),a}}Object.defineProperty(e,"__esModule",{value:!0});var pt=n(0),ht=n(3);e.compensateScroll=r,e.uncompensateScroll=i,e.disableCursor=o,e.enableCursor=s,e.distributeHeight=a,e.undistributeHeight=l,e.matchCellWidths=u,e.subtractInnerElHeight=d,e.getScrollParent=c,e.getOuterRect=p,e.getClientRect=h,e.getContentRect=f,e.getScrollbarWidths=g;var ft=null;e.isPrimaryMouseButton=w,e.getEvX=D,e.getEvY=E,e.getEvIsTouch=S,e.preventSelection=C,e.allowSelection=R,e.preventDefault=T,e.intersectRects=M,e.constrainPoint=I,e.getRectCenter=H,e.diffPoints=P,e.parseFieldSpecs=_,e.compareByFieldSpecs=x,e.compareByFieldSpec=O,e.flexibleCompare=F,e.dayIDs=["sun","mon","tue","wed","thu","fri","sat"],e.unitsDesc=["year","month","week","day","hour","minute","second","millisecond"],e.diffDayTime=z,e.diffDay=B,e.diffByUnit=A,e.computeGreatestUnit=k,e.computeDurationGreatestUnit=L,e.divideRangeByDuration=G,e.divideDurationByDuration=N,e.multiplyDuration=j,e.durationHasTime=U,e.isNativeDate=W,e.isTimeString=q,e.log=Y,e.warn=Z;var gt={}.hasOwnProperty;e.mergeProps=X,e.copyOwnProps=Q,e.hasOwnProp=$,e.applyAll=K,e.removeMatching=J,e.removeExact=tt,e.isArraysEqual=et,e.firstDefined=nt,e.htmlEscape=rt,e.stripHtmlEntities=it,e.cssToStr=ot,e.attrsToStr=st,e.capitaliseFirstLetter=at,e.compareNumbers=lt,e.isInt=ut,e.proxy=dt,e.debounce=ct},function(t,e,n){function r(t,e){return t.startMs-e.startMs}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(11),s=function(){function t(t,e){this.isStart=!0,this.isEnd=!0,i.isMoment(t)&&(t=t.clone().stripZone()),i.isMoment(e)&&(e=e.clone().stripZone()),t&&(this.startMs=t.valueOf()),e&&(this.endMs=e.valueOf())}return t.invertRanges=function(e,n){var i,o,s=[],a=n.startMs;for(e.sort(r),i=0;i<e.length;i++)o=e[i],o.startMs>a&&s.push(new t(a,o.startMs)),o.endMs>a&&(a=o.endMs);return a<n.endMs&&s.push(new t(a,n.endMs)),s},t.prototype.intersect=function(e){var n=this.startMs,r=this.endMs,i=null;return null!=e.startMs&&(n=null==n?e.startMs:Math.max(n,e.startMs)),null!=e.endMs&&(r=null==r?e.endMs:Math.min(r,e.endMs)),(null==n||null==r||n<r)&&(i=new t(n,r),i.isStart=this.isStart&&n===this.startMs,i.isEnd=this.isEnd&&r===this.endMs),i},t.prototype.intersectsWith=function(t){return(null==this.endMs||null==t.startMs||this.endMs>t.startMs)&&(null==this.startMs||null==t.endMs||this.startMs<t.endMs)},t.prototype.containsRange=function(t){return(null==this.startMs||null!=t.startMs&&t.startMs>=this.startMs)&&(null==this.endMs||null!=t.endMs&&t.endMs<=this.endMs)},t.prototype.containsDate=function(t){var e=t.valueOf();return(null==this.startMs||e>=this.startMs)&&(null==this.endMs||e<this.endMs)},t.prototype.constrainDate=function(t){var e=t.valueOf();return null!=this.startMs&&e<this.startMs&&(e=this.startMs),null!=this.endMs&&e>=this.endMs&&(e=this.endMs-1),e},t.prototype.equals=function(t){return this.startMs===t.startMs&&this.endMs===t.endMs},t.prototype.clone=function(){var e=new t(this.startMs,this.endMs);return e.isStart=this.isStart,e.isEnd=this.isEnd,e},t.prototype.getStart=function(){return null!=this.startMs?o.default.utc(this.startMs).stripZone():null},t.prototype.getEnd=function(){return null!=this.endMs?o.default.utc(this.endMs).stripZone():null},t.prototype.as=function(t){return i.utc(this.endMs).diff(i.utc(this.startMs),t,!0)},t}();e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(52),s=n(35),a=n(36),l=function(t){function e(n){var r=t.call(this)||this;return r.calendar=n,r.className=[],r.uid=String(e.uuid++),r}return r.__extends(e,t),e.parse=function(t,e){var n=new this(e);return!("object"!=typeof t||!n.applyProps(t))&&n},e.normalizeId=function(t){return t?String(t):null},e.prototype.fetch=function(t,e,n){},e.prototype.removeEventDefsById=function(t){},e.prototype.removeAllEventDefs=function(){},e.prototype.getPrimitive=function(t){},e.prototype.parseEventDefs=function(t){var e,n,r=[];for(e=0;e<t.length;e++)(n=this.parseEventDef(t[e]))&&r.push(n);return r},e.prototype.parseEventDef=function(t){var e=this.calendar.opt("eventDataTransform"),n=this.eventDataTransform;return e&&(t=e(t,this.calendar)),n&&(t=n(t,this.calendar)),a.default.parse(t,this)},e.prototype.applyManualStandardProps=function(t){return null!=t.id&&(this.id=e.normalizeId(t.id)),i.isArray(t.className)?this.className=t.className:"string"==typeof t.className&&(this.className=t.className.split(/\s+/)),!0},e.uuid=0,e.defineStandardProps=o.default.defineStandardProps,e.copyVerbatimStandardProps=o.default.copyVerbatimStandardProps,e}(s.default);e.default=l,o.default.mixInto(l),l.defineStandardProps({id:!1,className:!1,color:!0,backgroundColor:!0,borderColor:!0,textColor:!0,editable:!0,startEditable:!0,durationEditable:!0,rendering:!0,overlap:!0,constraint:!0,allDayDefault:!0,eventDataTransform:!0})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(15),s=0,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.listenTo=function(t,e,n){if("object"==typeof e)for(var r in e)e.hasOwnProperty(r)&&this.listenTo(t,r,e[r]);else"string"==typeof e&&t.on(e+"."+this.getListenerNamespace(),i.proxy(n,this))},e.prototype.stopListeningTo=function(t,e){t.off((e||"")+"."+this.getListenerNamespace())},e.prototype.getListenerNamespace=function(){return null==this.listenerId&&(this.listenerId=s++),"_listener"+this.listenerId},e}(o.default);e.default=a},,function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(37),o=n(53),s=n(16),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.buildInstances=function(){return[this.buildInstance()]},e.prototype.buildInstance=function(){return new o.default(this,this.dateProfile)},e.prototype.isAllDay=function(){return this.dateProfile.isAllDay()},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e.dateProfile=this.dateProfile,e},e.prototype.rezone=function(){var t=this.source.calendar,e=this.dateProfile;this.dateProfile=new s.default(t.moment(e.start),e.end?t.moment(e.end):null,t)},e.prototype.applyManualStandardProps=function(e){var n=t.prototype.applyManualStandardProps.call(this,e),r=s.default.parse(e,this.source);return!!r&&(this.dateProfile=r,null!=e.date&&(this.miscProps.date=e.date),n)},e}(i.default);e.default=a,a.defineStandardProps({start:!1,date:!1,end:!1,allDay:!1})},,function(t,e,n){function r(t,e){return c.format.call(t,e)}function i(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var r,i,d,c,p=t[0],h=1===t.length&&"string"==typeof p;return o.isMoment(p)||a.isNativeDate(p)||void 0===p?c=o.apply(null,t):(r=!1,i=!1,h?l.test(p)?(p+="-01",t=[p],r=!0,i=!0):(d=u.exec(p))&&(r=!d[5],i=!0):s.isArray(p)&&(i=!0),c=e||r?o.utc.apply(o,t):o.apply(null,t),r?(c._ambigTime=!0,c._ambigZone=!0):n&&(i?c._ambigZone=!0:h&&c.utcOffset(p))),c._fullCalendar=!0,c}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=n(3),a=n(4),l=/^\s*\d{4}-\d\d$/,u=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,d=o.fn;e.newMomentProto=d;var c=s.extend({},d);e.oldMomentProto=c;var p=o.momentProperties;p.push("_fullCalendar"),p.push("_ambigTime"),p.push("_ambigZone"),e.oldMomentFormat=r;var h=function(){return i(arguments)};e.default=h,h.utc=function(){var t=i(arguments,!0);return t.hasTime()&&t.utc(),t},h.parseZone=function(){return i(arguments,!0,!0)},d.week=d.weeks=function(t){var e=this._locale._fullCalendar_weekCalc;return null==t&&"function"==typeof e?e(this):"ISO"===e?c.isoWeek.apply(this,arguments):c.week.apply(this,arguments)},d.time=function(t){if(!this._fullCalendar)return c.time.apply(this,arguments);if(null==t)return o.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,o.isDuration(t)||o.isMoment(t)||(t=o.duration(t));var e=0;return o.isDuration(t)&&(e=24*Math.floor(t.asDays())),this.hours(e+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},d.stripTime=function(){return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},d.hasTime=function(){return!this._ambigTime},d.stripZone=function(){var t;return this._ambigZone||(t=this._ambigTime,this.utc(!0),this._ambigTime=t||!1,this._ambigZone=!0),this},d.hasZone=function(){return!this._ambigZone},d.local=function(t){return c.local.call(this,this._ambigZone||t),this._ambigTime=!1,this._ambigZone=!1,this},d.utc=function(t){return c.utc.call(this,t),this._ambigTime=!1,this._ambigZone=!1,this},d.utcOffset=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),c.utcOffset.apply(this,arguments)}},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.isAllDay=!1,this.unzonedRange=t,this.isAllDay=e}return t.prototype.toLegacy=function(t){return{start:t.msToMoment(this.unzonedRange.startMs,this.isAllDay),end:t.msToMoment(this.unzonedRange.endMs,this.isAllDay)}},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(15),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.on=function(t,e){return i(this).on(t,this._prepareIntercept(e)),this},e.prototype.one=function(t,e){return i(this).one(t,this._prepareIntercept(e)),this},e.prototype._prepareIntercept=function(t){var e=function(e,n){return t.apply(n.context||this,n.args||[])};return t.guid||(t.guid=i.guid++),e.guid=t.guid,e},e.prototype.off=function(t,e){return i(this).off(t,e),this},e.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i(this).triggerHandler(t,{args:e}),this},e.prototype.triggerWith=function(t,e,n){return i(this).triggerHandler(t,{context:e,args:n}),this},e.prototype.hasHandlers=function(t){var e=i._data(this,"events");return e&&e[t]&&e[t].length>0},e}(o.default);e.default=s},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.view=t._getView(),this.component=t}return t.prototype.opt=function(t){return this.view.opt(t)},t.prototype.end=function(){},t}();e.default=n},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.mixInto=function(t){var e=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){t.prototype[n]||(t.prototype[n]=e.prototype[n])})},t.mixOver=function(t){var e=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){t.prototype[n]=e.prototype[n]})},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=function(){function t(t,e,n){this.start=t,this.end=e||null,this.unzonedRange=this.buildUnzonedRange(n)}return t.parse=function(e,n){var r=e.start||e.date,i=e.end;if(!r)return!1;var o=n.calendar,s=o.moment(r),a=i?o.moment(i):null,l=e.allDay,u=o.opt("forceEventDuration");return!!s.isValid()&&(null==l&&null==(l=n.allDayDefault)&&(l=o.opt("allDayDefault")),!0===l?(s.stripTime(),a&&a.stripTime()):!1===l&&(s.hasTime()||s.time(0),a&&!a.hasTime()&&a.time(0)),!a||a.isValid()&&a.isAfter(s)||(a=null),!a&&u&&(a=o.getDefaultEventEnd(!s.hasTime(),s)),new t(s,a,o))},t.isStandardProp=function(t){return"start"===t||"date"===t||"end"===t||"allDay"===t},t.prototype.isAllDay=function(){return!(this.start.hasTime()||this.end&&this.end.hasTime())},t.prototype.buildUnzonedRange=function(t){var e=this.start.clone().stripZone().valueOf(),n=this.getEnd(t).stripZone().valueOf();return new r.default(e,n)},t.prototype.getEnd=function(t){return this.end?this.end.clone():t.getDefaultEventEnd(this.isAllDay(),this.start)},t}();e.default=i},function(t,e,n){function r(t,e){return!t&&!e||!(!t||!e)&&(t.component===e.component&&i(t,e)&&i(e,t))}function i(t,e){for(var n in t)if(!/^(component|left|right|top|bottom)$/.test(n)&&t[n]!==e[n])return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),s=n(4),a=n(59),l=function(t){function e(e,n){var r=t.call(this,n)||this;return r.component=e,r}return o.__extends(e,t),e.prototype.handleInteractionStart=function(e){var n,r,i,o=this.subjectEl;this.component.hitsNeeded(),this.computeScrollBounds(),e?(r={left:s.getEvX(e),top:s.getEvY(e)},i=r,o&&(n=s.getOuterRect(o),i=s.constrainPoint(i,n)),this.origHit=this.queryHit(i.left,i.top),o&&this.options.subjectCenter&&(this.origHit&&(n=s.intersectRects(this.origHit,n)||n),i=s.getRectCenter(n)),this.coordAdjust=s.diffPoints(i,r)):(this.origHit=null,this.coordAdjust=null),t.prototype.handleInteractionStart.call(this,e)},e.prototype.handleDragStart=function(e){var n;t.prototype.handleDragStart.call(this,e),(n=this.queryHit(s.getEvX(e),s.getEvY(e)))&&this.handleHitOver(n)},e.prototype.handleDrag=function(e,n,i){var o;t.prototype.handleDrag.call(this,e,n,i),o=this.queryHit(s.getEvX(i),s.getEvY(i)),r(o,this.hit)||(this.hit&&this.handleHitOut(),o&&this.handleHitOver(o))},e.prototype.handleDragEnd=function(e){this.handleHitDone(),t.prototype.handleDragEnd.call(this,e)},e.prototype.handleHitOver=function(t){var e=r(t,this.origHit);this.hit=t,this.trigger("hitOver",this.hit,e,this.origHit)},e.prototype.handleHitOut=function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},e.prototype.handleHitDone=function(){this.hit&&this.trigger("hitDone",this.hit)},e.prototype.handleInteractionEnd=function(e,n){t.prototype.handleInteractionEnd.call(this,e,n),this.origHit=null,this.hit=null,this.component.hitsNotNeeded()},e.prototype.handleScrollEnd=function(){t.prototype.handleScrollEnd.call(this),this.isDragging&&(this.component.releaseHits(),this.component.prepareHits())},e.prototype.queryHit=function(t,e){return this.coordAdjust&&(t+=this.coordAdjust.left,e+=this.coordAdjust.top),this.component.queryHit(t,e)},e}(a.default);e.default=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.version="3.10.0",e.internalApiVersion=12;var r=n(4);e.applyAll=r.applyAll,e.debounce=r.debounce,e.isInt=r.isInt,e.htmlEscape=r.htmlEscape,e.cssToStr=r.cssToStr,e.proxy=r.proxy,e.capitaliseFirstLetter=r.capitaliseFirstLetter,e.getOuterRect=r.getOuterRect,e.getClientRect=r.getClientRect,e.getContentRect=r.getContentRect,e.getScrollbarWidths=r.getScrollbarWidths,e.preventDefault=r.preventDefault,e.parseFieldSpecs=r.parseFieldSpecs,e.compareByFieldSpecs=r.compareByFieldSpecs,e.compareByFieldSpec=r.compareByFieldSpec,e.flexibleCompare=r.flexibleCompare,e.computeGreatestUnit=r.computeGreatestUnit,e.divideRangeByDuration=r.divideRangeByDuration,e.divideDurationByDuration=r.divideDurationByDuration,e.multiplyDuration=r.multiplyDuration,e.durationHasTime=r.durationHasTime,e.log=r.log,e.warn=r.warn,e.removeExact=r.removeExact,e.intersectRects=r.intersectRects,e.allowSelection=r.allowSelection,e.attrsToStr=r.attrsToStr,e.compareNumbers=r.compareNumbers,e.compensateScroll=r.compensateScroll,e.computeDurationGreatestUnit=r.computeDurationGreatestUnit,e.constrainPoint=r.constrainPoint,e.copyOwnProps=r.copyOwnProps,e.diffByUnit=r.diffByUnit,e.diffDay=r.diffDay,e.diffDayTime=r.diffDayTime,e.diffPoints=r.diffPoints,e.disableCursor=r.disableCursor,e.distributeHeight=r.distributeHeight,e.enableCursor=r.enableCursor,e.firstDefined=r.firstDefined,e.getEvIsTouch=r.getEvIsTouch,e.getEvX=r.getEvX,e.getEvY=r.getEvY,e.getRectCenter=r.getRectCenter,e.getScrollParent=r.getScrollParent,e.hasOwnProp=r.hasOwnProp,e.isArraysEqual=r.isArraysEqual,e.isNativeDate=r.isNativeDate,e.isPrimaryMouseButton=r.isPrimaryMouseButton,e.isTimeString=r.isTimeString,e.matchCellWidths=r.matchCellWidths,e.mergeProps=r.mergeProps,e.preventSelection=r.preventSelection,e.removeMatching=r.removeMatching,e.stripHtmlEntities=r.stripHtmlEntities,e.subtractInnerElHeight=r.subtractInnerElHeight,e.uncompensateScroll=r.uncompensateScroll,e.undistributeHeight=r.undistributeHeight,e.dayIDs=r.dayIDs,e.unitsDesc=r.unitsDesc;var i=n(49);e.formatDate=i.formatDate,e.formatRange=i.formatRange,e.queryMostGranularFormatUnit=i.queryMostGranularFormatUnit;var o=n(32);e.datepickerLocale=o.datepickerLocale,e.locale=o.locale,e.getMomentLocaleData=o.getMomentLocaleData,e.populateInstanceComputableOptions=o.populateInstanceComputableOptions;var s=n(19);e.eventDefsToEventInstances=s.eventDefsToEventInstances,e.eventFootprintToComponentFootprint=s.eventFootprintToComponentFootprint,e.eventInstanceToEventRange=s.eventInstanceToEventRange,e.eventInstanceToUnzonedRange=s.eventInstanceToUnzonedRange,e.eventRangeToEventFootprint=s.eventRangeToEventFootprint;var a=n(11);e.moment=a.default;var l=n(13);e.EmitterMixin=l.default;var u=n(7);e.ListenerMixin=u.default;var d=n(51);e.Model=d.default;var c=n(217);e.Constraints=c.default;var p=n(55);e.DateProfileGenerator=p.default;var h=n(5);e.UnzonedRange=h.default;var f=n(12);e.ComponentFootprint=f.default;var g=n(218);e.BusinessHourGenerator=g.default;var v=n(219);e.EventPeriod=v.default;var y=n(220);e.EventManager=y.default;var m=n(37);e.EventDef=m.default;var b=n(39);e.EventDefMutation=b.default;var w=n(36);e.EventDefParser=w.default;var D=n(53);e.EventInstance=D.default;var E=n(50);e.EventRange=E.default;var S=n(54);e.RecurringEventDef=S.default;var C=n(9);e.SingleEventDef=C.default;var R=n(40);e.EventDefDateMutation=R.default;var T=n(16);e.EventDateProfile=T.default;var M=n(38);e.EventSourceParser=M.default;var I=n(6);e.EventSource=I.default;var H=n(57);e.defineThemeSystem=H.defineThemeSystem,e.getThemeSystemClass=H.getThemeSystemClass;var P=n(20);e.EventInstanceGroup=P.default;var _=n(56);e.ArrayEventSource=_.default;var x=n(223);e.FuncEventSource=x.default;var O=n(224);e.JsonFeedEventSource=O.default;var F=n(34);e.EventFootprint=F.default;var z=n(35);e.Class=z.default;var B=n(15);e.Mixin=B.default;var A=n(58);e.CoordCache=A.default;var k=n(225);e.Iterator=k.default;var L=n(59);e.DragListener=L.default;var V=n(17);e.HitDragListener=V.default;var G=n(226);e.MouseFollower=G.default;var N=n(52);e.ParsableModelMixin=N.default;var j=n(227);e.Popover=j.default;var U=n(21);e.Promise=U.default;var W=n(228);e.TaskQueue=W.default;var q=n(229);e.RenderQueue=q.default;var Y=n(41);e.Scroller=Y.default;var Z=n(22);e.Theme=Z.default;var X=n(230);e.Component=X.default;var Q=n(231);e.DateComponent=Q.default;var $=n(42);e.InteractiveDateComponent=$.default;var K=n(232);e.Calendar=K.default;var J=n(43);e.View=J.default;var tt=n(24);e.defineView=tt.defineView,e.getViewConfig=tt.getViewConfig;var et=n(60);e.DayTableMixin=et.default;var nt=n(61);e.BusinessHourRenderer=nt.default;var rt=n(44);e.EventRenderer=rt.default;var it=n(62);e.FillRenderer=it.default;var ot=n(63);e.HelperRenderer=ot.default;var st=n(233);e.ExternalDropping=st.default;var at=n(234);e.EventResizing=at.default;var lt=n(64);e.EventPointing=lt.default;var ut=n(235);e.EventDragging=ut.default;var dt=n(236);e.DateSelecting=dt.default;var ct=n(237);e.DateClicking=ct.default;var pt=n(14);e.Interaction=pt.default;var ht=n(65);e.StandardInteractionsMixin=ht.default;var ft=n(238);e.AgendaView=ft.default;var gt=n(239);e.TimeGrid=gt.default;var vt=n(240);e.TimeGridEventRenderer=vt.default;var yt=n(242);e.TimeGridFillRenderer=yt.default;var mt=n(241);e.TimeGridHelperRenderer=mt.default;var bt=n(66);e.DayGrid=bt.default;var wt=n(243);e.DayGridEventRenderer=wt.default;var Dt=n(245);e.DayGridFillRenderer=Dt.default;var Et=n(244);e.DayGridHelperRenderer=Et.default;var St=n(67);e.BasicView=St.default;var Ct=n(68);e.BasicViewDateProfileGenerator=Ct.default;var Rt=n(246);e.MonthView=Rt.default;var Tt=n(247);e.MonthViewDateProfileGenerator=Tt.default;var Mt=n(248);e.ListView=Mt.default;var It=n(250);e.ListEventPointing=It.default;var Ht=n(249);e.ListEventRenderer=Ht.default},function(t,e,n){function r(t,e){var n,r=[];for(n=0;n<t.length;n++)r.push.apply(r,t[n].buildInstances(e));return r}function i(t){return new l.default(t.dateProfile.unzonedRange,t.def,t)}function o(t){return new u.default(new d.default(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)}function s(t){return t.dateProfile.unzonedRange}function a(t){return t.componentFootprint}Object.defineProperty(e,"__esModule",{value:!0});var l=n(50),u=n(34),d=n(12);e.eventDefsToEventInstances=r,e.eventInstanceToEventRange=i,e.eventRangeToEventFootprint=o,e.eventInstanceToUnzonedRange=s,e.eventFootprintToComponentFootprint=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n(19),o=n(50),s=function(){function t(t){this.eventInstances=t||[]}return t.prototype.getAllEventRanges=function(t){return t?this.sliceNormalRenderRanges(t):this.eventInstances.map(i.eventInstanceToEventRange)},t.prototype.sliceRenderRanges=function(t){return this.isInverse()?this.sliceInverseRenderRanges(t):this.sliceNormalRenderRanges(t)},t.prototype.sliceNormalRenderRanges=function(t){var e,n,r,i=this.eventInstances,s=[];for(e=0;e<i.length;e++)n=i[e],(r=n.dateProfile.unzonedRange.intersect(t))&&s.push(new o.default(r,n.def,n));return s},t.prototype.sliceInverseRenderRanges=function(t){var e=this.eventInstances.map(i.eventInstanceToUnzonedRange),n=this.getEventDef();return e=r.default.invertRanges(e,t),e.map(function(t){return new o.default(t,n)})},t.prototype.isInverse=function(){return this.getEventDef().hasInverseRendering()},t.prototype.getEventDef=function(){return this.explicitEventDef||this.eventInstances[0].def},t}();e.default=s},function(t,e,n){function r(t,e){t.then=function(n){return"function"==typeof n?s.resolve(n(e)):t}}function i(t){t.then=function(e,n){return"function"==typeof n&&n(),t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),s={construct:function(t){var e=o.Deferred(),n=e.promise();return"function"==typeof t&&t(function(t){e.resolve(t),r(n,t)},function(){e.reject(),i(n)}),n},resolve:function(t){var e=o.Deferred().resolve(t),n=e.promise();return r(n,t),n},reject:function(){var t=o.Deferred().reject(),e=t.promise();return i(e),e}};e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=function(){function t(t){this.optionsManager=t,this.processIconOverride()}return t.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))},t.prototype.setIconOverride=function(t){var e,n;if(r.isPlainObject(t)){e=r.extend({},this.iconClasses);for(n in t)e[n]=this.applyIconOverridePrefix(t[n]);this.iconClasses=e}else!1===t&&(this.iconClasses={})},t.prototype.applyIconOverridePrefix=function(t){var e=this.iconOverridePrefix;return e&&0!==t.indexOf(e)&&(t=e+t),t},t.prototype.getClass=function(t){return this.classes[t]||""},t.prototype.getIconClass=function(t){var e=this.iconClasses[t];return e?this.baseIconClass+" "+e:""},t.prototype.getCustomButtonIconClass=function(t){var e;return this.iconOverrideCustomButtonOption&&(e=t[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(e):""},t}();e.default=i,i.prototype.classes={},i.prototype.iconClasses={},i.prototype.baseIconClass="",i.prototype.iconOverridePrefix=""},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(18),o=n(13),s=n(7);i.touchMouseIgnoreWait=500;var a=null,l=0,u=function(){function t(){this.isTouching=!1,this.mouseIgnoreDepth=0}return t.get=function(){return a||(a=new t,a.bind()),a},t.needed=function(){t.get(),l++},t.unneeded=function(){--l||(a.unbind(),a=null)},t.prototype.bind=function(){var t=this;this.listenTo(r(document),{touchstart:this.handleTouchStart,
    touchcancel:this.handleTouchCancel,touchend:this.handleTouchEnd,mousedown:this.handleMouseDown,mousemove:this.handleMouseMove,mouseup:this.handleMouseUp,click:this.handleClick,selectstart:this.handleSelectStart,contextmenu:this.handleContextMenu}),window.addEventListener("touchmove",this.handleTouchMoveProxy=function(e){t.handleTouchMove(r.Event(e))},{passive:!1}),window.addEventListener("scroll",this.handleScrollProxy=function(e){t.handleScroll(r.Event(e))},!0)},t.prototype.unbind=function(){this.stopListeningTo(r(document)),window.removeEventListener("touchmove",this.handleTouchMoveProxy,{passive:!1}),window.removeEventListener("scroll",this.handleScrollProxy,!0)},t.prototype.handleTouchStart=function(t){this.stopTouch(t,!0),this.isTouching=!0,this.trigger("touchstart",t)},t.prototype.handleTouchMove=function(t){this.isTouching&&this.trigger("touchmove",t)},t.prototype.handleTouchCancel=function(t){this.isTouching&&(this.trigger("touchcancel",t),this.stopTouch(t))},t.prototype.handleTouchEnd=function(t){this.stopTouch(t)},t.prototype.handleMouseDown=function(t){this.shouldIgnoreMouse()||this.trigger("mousedown",t)},t.prototype.handleMouseMove=function(t){this.shouldIgnoreMouse()||this.trigger("mousemove",t)},t.prototype.handleMouseUp=function(t){this.shouldIgnoreMouse()||this.trigger("mouseup",t)},t.prototype.handleClick=function(t){this.shouldIgnoreMouse()||this.trigger("click",t)},t.prototype.handleSelectStart=function(t){this.trigger("selectstart",t)},t.prototype.handleContextMenu=function(t){this.trigger("contextmenu",t)},t.prototype.handleScroll=function(t){this.trigger("scroll",t)},t.prototype.stopTouch=function(t,e){void 0===e&&(e=!1),this.isTouching&&(this.isTouching=!1,this.trigger("touchend",t),e||this.startTouchMouseIgnore())},t.prototype.startTouchMouseIgnore=function(){var t=this,e=i.touchMouseIgnoreWait;e&&(this.mouseIgnoreDepth++,setTimeout(function(){t.mouseIgnoreDepth--},e))},t.prototype.shouldIgnoreMouse=function(){return this.isTouching||Boolean(this.mouseIgnoreDepth)},t}();e.default=u,s.default.mixInto(u),o.default.mixInto(u)},function(t,e,n){function r(t,n){e.viewHash[t]=n}function i(t){return e.viewHash[t]}Object.defineProperty(e,"__esModule",{value:!0});var o=n(18);e.viewHash={},o.views=e.viewHash,e.defineView=r,e.getViewConfig=i},,,,,,,,function(t,e,n){function r(t){a.each(f,function(e,n){null==t[e]&&(t[e]=n(t))})}function i(t,n,r){var i=e.localeOptionHash[t]||(e.localeOptionHash[t]={});i.isRTL=r.isRTL,i.weekNumberTitle=r.weekHeader,a.each(p,function(t,e){i[t]=e(r)});var o=a.datepicker;o&&(o.regional[n]=o.regional[t]=r,o.regional.en=o.regional[""],o.setDefaults(r))}function o(t,n){var r,i;r=e.localeOptionHash[t]||(e.localeOptionHash[t]={}),n&&(r=e.localeOptionHash[t]=d.mergeOptions([r,n])),i=s(t),a.each(h,function(t,e){null==r[t]&&(r[t]=e(i,r))}),d.globalDefaults.locale=t}function s(t){return l.localeData(t)||l.localeData("en")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),l=n(0),u=n(18),d=n(33),c=n(4);e.localeOptionHash={},u.locales=e.localeOptionHash;var p={buttonText:function(t){return{prev:c.stripHtmlEntities(t.prevText),next:c.stripHtmlEntities(t.nextText),today:c.stripHtmlEntities(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},h={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},mediumTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(t){return t.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}},f={smallDayDateFormat:function(t){return t.isRTL?"D dd":"dd D"},weekFormat:function(t){return t.isRTL?"w[ "+t.weekNumberTitle+"]":"["+t.weekNumberTitle+" ]w"},smallWeekFormat:function(t){return t.isRTL?"w["+t.weekNumberTitle+"]":"["+t.weekNumberTitle+"]w"}};e.populateInstanceComputableOptions=r,e.datepickerLocale=i,e.locale=o,e.getMomentLocaleData=s,o("en",d.englishDefaults)},function(t,e,n){function r(t){return i.mergeProps(t,o)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4);e.globalDefaults={titleRangeSeparator:" â€“ ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",columnHeader:!0,defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,locale:null,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},allDayText:"all-day",agendaEventMinHeight:0,theme:!1,dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3},e.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},e.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var o=["header","footer","buttonText","buttonIcons","themeButtonIcons"];e.mergeOptions=r},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.componentFootprint=t,this.eventDef=e,n&&(this.eventInstance=n)}return t.prototype.getEventLegacy=function(){return(this.eventInstance||this.eventDef).toLegacy()},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=function(){function t(){}return t.extend=function(t){var e=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(this);return i.copyOwnProps(t,e.prototype),e},t.mixin=function(t){i.copyOwnProps(t,this.prototype)},t}();e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(4),o=n(9),s=n(54);e.default={parse:function(t,e){return i.isTimeString(t.start)||r.isDuration(t.start)||i.isTimeString(t.end)||r.isDuration(t.end)?s.default.parse(t,e):o.default.parse(t,e)}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(52),o=function(){function t(t){this.source=t,this.className=[],this.miscProps={}}return t.parse=function(t,e){var n=new this(e);return!!n.applyProps(t)&&n},t.normalizeId=function(t){return String(t)},t.generateId=function(){return"_fc"+t.uuid++},t.prototype.clone=function(){var e=new this.constructor(this.source);return e.id=this.id,e.rawId=this.rawId,e.uid=this.uid,t.copyVerbatimStandardProps(this,e),e.className=this.className.slice(),e.miscProps=r.extend({},this.miscProps),e},t.prototype.hasInverseRendering=function(){return"inverse-background"===this.getRendering()},t.prototype.hasBgRendering=function(){var t=this.getRendering();return"inverse-background"===t||"background"===t},t.prototype.getRendering=function(){return null!=this.rendering?this.rendering:this.source.rendering},t.prototype.getConstraint=function(){return null!=this.constraint?this.constraint:null!=this.source.constraint?this.source.constraint:this.source.calendar.opt("eventConstraint")},t.prototype.getOverlap=function(){return null!=this.overlap?this.overlap:null!=this.source.overlap?this.source.overlap:this.source.calendar.opt("eventOverlap")},t.prototype.isStartExplicitlyEditable=function(){return null!=this.startEditable?this.startEditable:this.source.startEditable},t.prototype.isDurationExplicitlyEditable=function(){return null!=this.durationEditable?this.durationEditable:this.source.durationEditable},t.prototype.isExplicitlyEditable=function(){return null!=this.editable?this.editable:this.source.editable},t.prototype.toLegacy=function(){var e=r.extend({},this.miscProps);return e._id=this.uid,e.source=this.source,e.className=this.className.slice(),e.allDay=this.isAllDay(),null!=this.rawId&&(e.id=this.rawId),t.copyVerbatimStandardProps(this,e),e},t.prototype.applyManualStandardProps=function(e){return null!=e.id?this.id=t.normalizeId(this.rawId=e.id):this.id=t.generateId(),null!=e._id?this.uid=String(e._id):this.uid=t.generateId(),r.isArray(e.className)&&(this.className=e.className),"string"==typeof e.className&&(this.className=e.className.split(/\s+/)),!0},t.prototype.applyMiscProps=function(t){r.extend(this.miscProps,t)},t.uuid=0,t.defineStandardProps=i.default.defineStandardProps,t.copyVerbatimStandardProps=i.default.copyVerbatimStandardProps,t}();e.default=o,i.default.mixInto(o),o.defineStandardProps({_id:!1,id:!1,className:!1,source:!1,title:!0,url:!0,rendering:!0,constraint:!0,overlap:!0,editable:!0,startEditable:!0,durationEditable:!0,color:!0,backgroundColor:!0,borderColor:!0,textColor:!0})},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={sourceClasses:[],registerClass:function(t){this.sourceClasses.unshift(t)},parse:function(t,e){var n,r,i=this.sourceClasses;for(n=0;n<i.length;n++)if(r=i[n].parse(t,e))return r}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),i=n(16),o=n(37),s=n(40),a=n(9),l=function(){function t(){}return t.createFromRawProps=function(e,n,a){var l,u,d,c,p=e.def,h={},f={},g={},v={},y=null,m=null;for(l in n)i.default.isStandardProp(l)?h[l]=n[l]:p.isStandardProp(l)?f[l]=n[l]:p.miscProps[l]!==n[l]&&(g[l]=n[l]);return u=i.default.parse(h,p.source),u&&(d=s.default.createFromDiff(e.dateProfile,u,a)),f.id!==p.id&&(y=f.id),r.isArraysEqual(f.className,p.className)||(m=f.className),o.default.copyVerbatimStandardProps(f,v),c=new t,c.eventDefId=y,c.className=m,c.verbatimStandardProps=v,c.miscProps=g,d&&(c.dateMutation=d),c},t.prototype.mutateSingle=function(t){var e;return this.dateMutation&&(e=t.dateProfile,t.dateProfile=this.dateMutation.buildNewDateProfile(e,t.source.calendar)),null!=this.eventDefId&&(t.id=o.default.normalizeId(t.rawId=this.eventDefId)),this.className&&(t.className=this.className),this.verbatimStandardProps&&a.default.copyVerbatimStandardProps(this.verbatimStandardProps,t),this.miscProps&&t.applyMiscProps(this.miscProps),e?function(){t.dateProfile=e}:function(){}},t.prototype.setDateMutation=function(t){t&&!t.isEmpty()?this.dateMutation=t:this.dateMutation=null},t.prototype.isEmpty=function(){return!this.dateMutation},t}();e.default=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),i=n(16),o=function(){function t(){this.clearEnd=!1,this.forceTimed=!1,this.forceAllDay=!1}return t.createFromDiff=function(e,n,i){function o(t,e){return i?r.diffByUnit(t,e,i):n.isAllDay()?r.diffDay(t,e):r.diffDayTime(t,e)}var s,a,l,u,d=e.end&&!n.end,c=e.isAllDay()&&!n.isAllDay(),p=!e.isAllDay()&&n.isAllDay();return s=o(n.start,e.start),n.end&&(a=o(n.unzonedRange.getEnd(),e.unzonedRange.getEnd()),l=a.subtract(s)),u=new t,u.clearEnd=d,u.forceTimed=c,u.forceAllDay=p,u.setDateDelta(s),u.setEndDelta(l),u},t.prototype.buildNewDateProfile=function(t,e){var n=t.start.clone(),r=null,o=!1;return t.end&&!this.clearEnd?r=t.end.clone():this.endDelta&&!r&&(r=e.getDefaultEventEnd(t.isAllDay(),n)),this.forceTimed?(o=!0,n.hasTime()||n.time(0),r&&!r.hasTime()&&r.time(0)):this.forceAllDay&&(n.hasTime()&&n.stripTime(),r&&r.hasTime()&&r.stripTime()),this.dateDelta&&(o=!0,n.add(this.dateDelta),r&&r.add(this.dateDelta)),this.endDelta&&(o=!0,r.add(this.endDelta)),this.startDelta&&(o=!0,n.add(this.startDelta)),o&&(n=e.applyTimezone(n),r&&(r=e.applyTimezone(r))),!r&&e.opt("forceEventDuration")&&(r=e.getDefaultEventEnd(t.isAllDay(),n)),new i.default(n,r,e)},t.prototype.setDateDelta=function(t){t&&t.valueOf()?this.dateDelta=t:this.dateDelta=null},t.prototype.setStartDelta=function(t){t&&t.valueOf()?this.startDelta=t:this.startDelta=null},t.prototype.setEndDelta=function(t){t&&t.valueOf()?this.endDelta=t:this.endDelta=null},t.prototype.isEmpty=function(){return!(this.clearEnd||this.forceTimed||this.forceAllDay||this.dateDelta||this.startDelta||this.endDelta)},t}();e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(35),a=function(t){function e(e){var n=t.call(this)||this;return e=e||{},n.overflowX=e.overflowX||e.overflow||"auto",n.overflowY=e.overflowY||e.overflow||"auto",n}return r.__extends(e,t),e.prototype.render=function(){this.el=this.renderEl(),this.applyOverflow()},e.prototype.renderEl=function(){return this.scrollEl=i('<div class="fc-scroller"></div>')},e.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},e.prototype.destroy=function(){this.el.remove()},e.prototype.applyOverflow=function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},e.prototype.lockOverflow=function(t){var e=this.overflowX,n=this.overflowY;t=t||this.getScrollbarWidths(),"auto"===e&&(e=t.top||t.bottom||this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===n&&(n=t.left||t.right||this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":e,"overflow-y":n})},e.prototype.setHeight=function(t){this.scrollEl.height(t)},e.prototype.getScrollTop=function(){return this.scrollEl.scrollTop()},e.prototype.setScrollTop=function(t){this.scrollEl.scrollTop(t)},e.prototype.getClientWidth=function(){return this.scrollEl[0].clientWidth},e.prototype.getClientHeight=function(){return this.scrollEl[0].clientHeight},e.prototype.getScrollbarWidths=function(){return o.getScrollbarWidths(this.scrollEl)},e}(s.default);e.default=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(231),a=n(23),l=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.segSelector=".fc-event-container > *",r.dateSelectingClass&&(r.dateClicking=new r.dateClickingClass(r)),r.dateSelectingClass&&(r.dateSelecting=new r.dateSelectingClass(r)),r.eventPointingClass&&(r.eventPointing=new r.eventPointingClass(r)),r.eventDraggingClass&&r.eventPointing&&(r.eventDragging=new r.eventDraggingClass(r,r.eventPointing)),r.eventResizingClass&&r.eventPointing&&(r.eventResizing=new r.eventResizingClass(r,r.eventPointing)),r.externalDroppingClass&&(r.externalDropping=new r.externalDroppingClass(r)),r}return r.__extends(e,t),e.prototype.setElement=function(e){t.prototype.setElement.call(this,e),this.dateClicking&&this.dateClicking.bindToEl(e),this.dateSelecting&&this.dateSelecting.bindToEl(e),this.bindAllSegHandlersToEl(e)},e.prototype.removeElement=function(){this.endInteractions(),t.prototype.removeElement.call(this)},e.prototype.executeEventUnrender=function(){this.endInteractions(),t.prototype.executeEventUnrender.call(this)},e.prototype.bindGlobalHandlers=function(){t.prototype.bindGlobalHandlers.call(this),this.externalDropping&&this.externalDropping.bindToDocument()},e.prototype.unbindGlobalHandlers=function(){t.prototype.unbindGlobalHandlers.call(this),this.externalDropping&&this.externalDropping.unbindFromDocument()},e.prototype.bindDateHandlerToEl=function(t,e,n){var r=this;this.el.on(e,function(t){if(!i(t.target).is(r.segSelector+":not(.fc-helper),"+r.segSelector+":not(.fc-helper) *,.fc-more,a[data-goto]"))return n.call(r,t)})},e.prototype.bindAllSegHandlersToEl=function(t){[this.eventPointing,this.eventDragging,this.eventResizing].forEach(function(e){e&&e.bindToEl(t)})},e.prototype.bindSegHandlerToEl=function(t,e,n){var r=this;t.on(e,this.segSelector,function(t){var e=i(t.currentTarget);if(!e.is(".fc-helper")){var o=e.data("fc-seg");if(o&&!r.shouldIgnoreEventPointing())return n.call(r,o,t)}})},e.prototype.shouldIgnoreMouse=function(){return a.default.get().shouldIgnoreMouse()},e.prototype.shouldIgnoreTouch=function(){var t=this._getView();return t.isSelected||t.selectedEvent},e.prototype.shouldIgnoreEventPointing=function(){return this.eventDragging&&this.eventDragging.isDragging||this.eventResizing&&this.eventResizing.isResizing},e.prototype.canStartSelection=function(t,e){return o.getEvIsTouch(e)&&!this.canStartResize(t,e)&&(this.isEventDefDraggable(t.footprint.eventDef)||this.isEventDefResizable(t.footprint.eventDef))},e.prototype.canStartDrag=function(t,e){return!this.canStartResize(t,e)&&this.isEventDefDraggable(t.footprint.eventDef)},e.prototype.canStartResize=function(t,e){var n=this._getView(),r=t.footprint.eventDef;return(!o.getEvIsTouch(e)||n.isEventDefSelected(r))&&this.isEventDefResizable(r)&&i(e.target).is(".fc-resizer")},e.prototype.endInteractions=function(){[this.dateClicking,this.dateSelecting,this.eventPointing,this.eventDragging,this.eventResizing].forEach(function(t){t&&t.end()})},e.prototype.isEventDefDraggable=function(t){return this.isEventDefStartEditable(t)},e.prototype.isEventDefStartEditable=function(t){var e=t.isStartExplicitlyEditable();return null==e&&null==(e=this.opt("eventStartEditable"))&&(e=this.isEventDefGenerallyEditable(t)),e},e.prototype.isEventDefGenerallyEditable=function(t){var e=t.isExplicitlyEditable();return null==e&&(e=this.opt("editable")),e},e.prototype.isEventDefResizableFromStart=function(t){return this.opt("eventResizableFromStart")&&this.isEventDefResizable(t)},e.prototype.isEventDefResizableFromEnd=function(t){return this.isEventDefResizable(t)},e.prototype.isEventDefResizable=function(t){var e=t.isDurationExplicitlyEditable();return null==e&&null==(e=this.opt("eventDurationEditable"))&&(e=this.isEventDefGenerallyEditable(t)),e},e.prototype.diffDates=function(t,e){return this.largeUnit?o.diffByUnit(t,e,this.largeUnit):o.diffDayTime(t,e)},e.prototype.isEventInstanceGroupAllowed=function(t){var e,n=this._getView(),r=this.dateProfile,i=this.eventRangesToEventFootprints(t.getAllEventRanges());for(e=0;e<i.length;e++)if(!r.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange))return!1;return n.calendar.constraints.isEventInstanceGroupAllowed(t)},e.prototype.isExternalInstanceGroupAllowed=function(t){var e,n=this._getView(),r=this.dateProfile,i=this.eventRangesToEventFootprints(t.getAllEventRanges());for(e=0;e<i.length;e++)if(!r.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange))return!1;for(e=0;e<i.length;e++)if(!n.calendar.constraints.isSelectionFootprintAllowed(i[e].componentFootprint))return!1;return!0},e}(s.default);e.default=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(0),s=n(4),a=n(229),l=n(55),u=n(42),d=n(23),c=n(5),p=function(t){function e(e,n){var r=t.call(this,null,n.options)||this;return r.batchRenderDepth=0,r.isSelected=!1,r.calendar=e,r.viewSpec=n,r.type=n.type,r.name=r.type,r.initRenderQueue(),r.initHiddenDays(),r.dateProfileGenerator=new r.dateProfileGeneratorClass(r),r.bindBaseRenderHandlers(),r.eventOrderSpecs=s.parseFieldSpecs(r.opt("eventOrder")),r.initialize&&r.initialize(),r}return r.__extends(e,t),e.prototype._getView=function(){return this},e.prototype.opt=function(t){return this.options[t]},e.prototype.initRenderQueue=function(){this.renderQueue=new a.default({event:this.opt("eventRenderWait")}),this.renderQueue.on("start",this.onRenderQueueStart.bind(this)),this.renderQueue.on("stop",this.onRenderQueueStop.bind(this)),this.on("before:change",this.startBatchRender),this.on("change",this.stopBatchRender)},e.prototype.onRenderQueueStart=function(){this.calendar.freezeContentHeight(),this.addScroll(this.queryScroll())},e.prototype.onRenderQueueStop=function(){this.calendar.updateViewSize()&&this.popScroll(),this.calendar.thawContentHeight()},e.prototype.startBatchRender=function(){this.batchRenderDepth++||this.renderQueue.pause()},e.prototype.stopBatchRender=function(){--this.batchRenderDepth||this.renderQueue.resume()},e.prototype.requestRender=function(t,e,n){this.renderQueue.queue(t,e,n)},e.prototype.whenSizeUpdated=function(t){this.renderQueue.isRunning?this.renderQueue.one("stop",t.bind(this)):t.call(this)},e.prototype.computeTitle=function(t){var e;return e=/^(year|month)$/.test(t.currentRangeUnit)?t.currentUnzonedRange:t.activeUnzonedRange,this.formatRange({start:this.calendar.msToMoment(e.startMs,t.isRangeAllDay),end:this.calendar.msToMoment(e.endMs,t.isRangeAllDay)},t.isRangeAllDay,this.opt("titleFormat")||this.computeTitleFormat(t),this.opt("titleRangeSeparator"))},e.prototype.computeTitleFormat=function(t){var e=t.currentRangeUnit;return"year"===e?"YYYY":"month"===e?this.opt("monthYearFormat"):t.currentUnzonedRange.as("days")>1?"ll":"LL"},e.prototype.setDate=function(t){var e=this.get("dateProfile"),n=this.dateProfileGenerator.build(t,void 0,!0);e&&e.activeUnzonedRange.equals(n.activeUnzonedRange)||this.set("dateProfile",n)},e.prototype.unsetDate=function(){this.unset("dateProfile")},e.prototype.fetchInitialEvents=function(t){var e=this.calendar,n=t.isRangeAllDay&&!this.usesMinMaxTime;return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs,n),e.msToMoment(t.activeUnzonedRange.endMs,n))},e.prototype.bindEventChanges=function(){this.listenTo(this.calendar,"eventsReset",this.resetEvents)},e.prototype.unbindEventChanges=function(){this.stopListeningTo(this.calendar,"eventsReset")},e.prototype.setEvents=function(t){this.set("currentEvents",t),this.set("hasEvents",!0)},e.prototype.unsetEvents=function(){this.unset("currentEvents"),this.unset("hasEvents")},e.prototype.resetEvents=function(t){this.startBatchRender(),this.unsetEvents(),this.setEvents(t),this.stopBatchRender()},e.prototype.requestDateRender=function(t){var e=this;this.requestRender(function(){e.executeDateRender(t)},"date","init")},e.prototype.requestDateUnrender=function(){var t=this;this.requestRender(function(){t.executeDateUnrender()},"date","destroy")},e.prototype.executeDateRender=function(e){t.prototype.executeDateRender.call(this,e),this.render&&this.render(),this.trigger("datesRendered"),this.addScroll({isDateInit:!0}),this.startNowIndicator()},e.prototype.executeDateUnrender=function(){this.unselect(),this.stopNowIndicator(),this.trigger("before:datesUnrendered"),this.destroy&&this.destroy(),t.prototype.executeDateUnrender.call(this)},e.prototype.bindBaseRenderHandlers=function(){var t=this;this.on("datesRendered",function(){t.whenSizeUpdated(t.triggerViewRender)}),this.on("before:datesUnrendered",function(){t.triggerViewDestroy()})},e.prototype.triggerViewRender=function(){this.publiclyTrigger("viewRender",{context:this,args:[this,this.el]})},e.prototype.triggerViewDestroy=function(){this.publiclyTrigger("viewDestroy",{context:this,args:[this,this.el]})},e.prototype.requestEventsRender=function(t){var e=this;this.requestRender(function(){e.executeEventRender(t),e.whenSizeUpdated(e.triggerAfterEventsRendered)},"event","init")},e.prototype.requestEventsUnrender=function(){var t=this;this.requestRender(function(){t.triggerBeforeEventsDestroyed(),t.executeEventUnrender()},"event","destroy")},e.prototype.requestBusinessHoursRender=function(t){var e=this;this.requestRender(function(){e.renderBusinessHours(t)},"businessHours","init")},e.prototype.requestBusinessHoursUnrender=function(){var t=this;this.requestRender(function(){t.unrenderBusinessHours()},"businessHours","destroy")},e.prototype.bindGlobalHandlers=function(){t.prototype.bindGlobalHandlers.call(this),this.listenTo(d.default.get(),{touchstart:this.processUnselect,mousedown:this.handleDocumentMousedown})},e.prototype.unbindGlobalHandlers=function(){t.prototype.unbindGlobalHandlers.call(this),this.stopListeningTo(d.default.get())},e.prototype.startNowIndicator=function(){var t,e,n,r=this;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit())&&(e=s.proxy(this,"updateNowIndicator"),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),n=this.initialNowDate.clone().startOf(t).add(1,t).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout(function(){r.nowIndicatorTimeoutID=null,e(),n=+o.duration(1,t),n=Math.max(100,n),r.nowIndicatorIntervalID=setInterval(e,n)},n))},e.prototype.updateNowIndicator=function(){this.isDatesRendered&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},e.prototype.stopNowIndicator=function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},e.prototype.updateSize=function(e,n,r){this.setHeight?this.setHeight(e,n):t.prototype.updateSize.call(this,e,n,r),this.updateNowIndicator()},e.prototype.addScroll=function(t){var e=this.queuedScroll||(this.queuedScroll={});i.extend(e,t)},e.prototype.popScroll=function(){this.applyQueuedScroll(),this.queuedScroll=null},e.prototype.applyQueuedScroll=function(){this.queuedScroll&&this.applyScroll(this.queuedScroll)},e.prototype.queryScroll=function(){var t={};return this.isDatesRendered&&i.extend(t,this.queryDateScroll()),t},e.prototype.applyScroll=function(t){t.isDateInit&&this.isDatesRendered&&i.extend(t,this.computeInitialDateScroll()),this.isDatesRendered&&this.applyDateScroll(t)},e.prototype.computeInitialDateScroll=function(){return{}},e.prototype.queryDateScroll=function(){return{}},e.prototype.applyDateScroll=function(t){},e.prototype.reportEventDrop=function(t,e,n,r){var i=this.calendar.eventManager,s=i.mutateEventsWithId(t.def.id,e),a=e.dateMutation;a&&(t.dateProfile=a.buildNewDateProfile(t.dateProfile,this.calendar)),this.triggerEventDrop(t,a&&a.dateDelta||o.duration(),s,n,r)},e.prototype.triggerEventDrop=function(t,e,n,r,i){this.publiclyTrigger("eventDrop",{context:r[0],args:[t.toLegacy(),e,n,i,{},this]})},e.prototype.reportExternalDrop=function(t,e,n,r,i,o){e&&this.calendar.eventManager.addEventDef(t,n),this.triggerExternalDrop(t,e,r,i,o)},e.prototype.triggerExternalDrop=function(t,e,n,r,i){this.publiclyTrigger("drop",{context:n[0],args:[t.dateProfile.start.clone(),r,i,this]}),e&&this.publiclyTrigger("eventReceive",{context:this,args:[t.buildInstance().toLegacy(),this]})},e.prototype.reportEventResize=function(t,e,n,r){var i=this.calendar.eventManager,o=i.mutateEventsWithId(t.def.id,e);t.dateProfile=e.dateMutation.buildNewDateProfile(t.dateProfile,this.calendar);var s=e.dateMutation.endDelta||e.dateMutation.startDelta;this.triggerEventResize(t,s,o,n,r)},e.prototype.triggerEventResize=function(t,e,n,r,i){this.publiclyTrigger("eventResize",{context:r[0],args:[t.toLegacy(),e,n,i,{},this]})},e.prototype.select=function(t,e){this.unselect(e),this.renderSelectionFootprint(t),this.reportSelection(t,e)},e.prototype.renderSelectionFootprint=function(e){this.renderSelection?this.renderSelection(e.toLegacy(this.calendar)):t.prototype.renderSelectionFootprint.call(this,e)},e.prototype.reportSelection=function(t,e){this.isSelected=!0,this.triggerSelect(t,e)},e.prototype.triggerSelect=function(t,e){var n=this.calendar.footprintToDateProfile(t);this.publiclyTrigger("select",{context:this,args:[n.start,n.end,e,this]})},e.prototype.unselect=function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",{context:this,args:[t,this]}))},e.prototype.selectEventInstance=function(t){this.selectedEventInstance&&this.selectedEventInstance===t||(this.unselectEventInstance(),this.getEventSegs().forEach(function(e){e.footprint.eventInstance===t&&e.el&&e.el.addClass("fc-selected")}),this.selectedEventInstance=t)},e.prototype.unselectEventInstance=function(){this.selectedEventInstance&&(this.getEventSegs().forEach(function(t){t.el&&t.el.removeClass("fc-selected")}),this.selectedEventInstance=null)},e.prototype.isEventDefSelected=function(t){return this.selectedEventInstance&&this.selectedEventInstance.def.id===t.id},e.prototype.handleDocumentMousedown=function(t){s.isPrimaryMouseButton(t)&&this.processUnselect(t)},e.prototype.processUnselect=function(t){this.processRangeUnselect(t),this.processEventUnselect(t)},e.prototype.processRangeUnselect=function(t){var e;this.isSelected&&this.opt("unselectAuto")&&((e=this.opt("unselectCancel"))&&i(t.target).closest(e).length||this.unselect(t))},e.prototype.processEventUnselect=function(t){this.selectedEventInstance&&(i(t.target).closest(".fc-selected").length||this.unselectEventInstance())},e.prototype.triggerBaseRendered=function(){this.publiclyTrigger("viewRender",{context:this,args:[this,this.el]})},e.prototype.triggerBaseUnrendered=function(){this.publiclyTrigger("viewDestroy",{context:this,args:[this,this.el]})},e.prototype.triggerDayClick=function(t,e,n){var r=this.calendar.footprintToDateProfile(t);this.publiclyTrigger("dayClick",{context:e,args:[r.start,n,this]})},e.prototype.isDateInOtherMonth=function(t,e){return!1},e.prototype.getUnzonedRangeOption=function(t){var e=this.opt(t);if("function"==typeof e&&(e=e.apply(null,Array.prototype.slice.call(arguments,1))),e)return this.calendar.parseUnzonedRange(e)},e.prototype.initHiddenDays=function(){var t,e=this.opt("hiddenDays")||[],n=[],r=0;for(!1===this.opt("weekends")&&e.push(0,6),t=0;t<7;t++)(n[t]=-1!==i.inArray(t,e))||r++;if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(t){var e=t.getStart(),n=t.getEnd();return e&&(e=this.skipHiddenDays(e)),n&&(n=this.skipHiddenDays(n,-1,!0)),null===e||null===n||e<n?new c.default(e,n):null},e.prototype.isHiddenDay=function(t){return o.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},e.prototype.skipHiddenDays=function(t,e,n){void 0===e&&(e=1),void 0===n&&(n=!1);for(var r=t.clone();this.isHiddenDayHash[(r.day()+(n?e:0)+7)%7];)r.add(e,"days");return r},e}(u.default);e.default=p,p.prototype.usesMinMaxTime=!1,p.prototype.dateProfileGeneratorClass=l.default,p.watch("displayingDates",["isInDom","dateProfile"],function(t){this.requestDateRender(t.dateProfile)},function(){this.requestDateUnrender()}),p.watch("displayingBusinessHours",["displayingDates","businessHourGenerator"],function(t){this.requestBusinessHoursRender(t.businessHourGenerator)},function(){this.requestBusinessHoursUnrender()}),p.watch("initialEvents",["dateProfile"],function(t){return this.fetchInitialEvents(t.dateProfile)}),p.watch("bindingEvents",["initialEvents"],function(t){this.setEvents(t.initialEvents),this.bindEventChanges()},function(){this.unbindEventChanges(),this.unsetEvents()}),p.watch("displayingEvents",["displayingDates","hasEvents"],function(){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),p.watch("title",["dateProfile"],function(t){return this.title=this.computeTitle(t.dateProfile)}),p.watch("legacyDateProps",["dateProfile"],function(t){var e=this.calendar,n=t.dateProfile;this.start=e.msToMoment(n.activeUnzonedRange.startMs,n.isRangeAllDay),this.end=e.msToMoment(n.activeUnzonedRange.endMs,n.isRangeAllDay),this.intervalStart=e.msToMoment(n.currentUnzonedRange.startMs,n.isRangeAllDay),this.intervalEnd=e.msToMoment(n.currentUnzonedRange.endMs,n.isRangeAllDay)})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=function(){function t(t,e){this.view=t._getView(),this.component=t,this.fillRenderer=e}return t.prototype.opt=function(t){return this.view.opt(t)},t.prototype.rangeUpdated=function(){var t,e
    ;this.eventTimeFormat=this.opt("eventTimeFormat")||this.opt("timeFormat")||this.computeEventTimeFormat(),t=this.opt("displayEventTime"),null==t&&(t=this.computeDisplayEventTime()),e=this.opt("displayEventEnd"),null==e&&(e=this.computeDisplayEventEnd()),this.displayEventTime=t,this.displayEventEnd=e},t.prototype.render=function(t){var e,n,r,i=this.component._getDateProfile(),o=[],s=[];for(e in t)n=t[e],r=n.sliceRenderRanges(i.activeUnzonedRange),n.getEventDef().hasBgRendering()?o.push.apply(o,r):s.push.apply(s,r);this.renderBgRanges(o),this.renderFgRanges(s)},t.prototype.unrender=function(){this.unrenderBgRanges(),this.unrenderFgRanges()},t.prototype.renderFgRanges=function(t){var e=this.component.eventRangesToEventFootprints(t),n=this.component.eventFootprintsToSegs(e);n=this.renderFgSegEls(n),!1!==this.renderFgSegs(n)&&(this.fgSegs=n)},t.prototype.unrenderFgRanges=function(){this.unrenderFgSegs(this.fgSegs||[]),this.fgSegs=null},t.prototype.renderBgRanges=function(t){var e=this.component.eventRangesToEventFootprints(t),n=this.component.eventFootprintsToSegs(e);!1!==this.renderBgSegs(n)&&(this.bgSegs=n)},t.prototype.unrenderBgRanges=function(){this.unrenderBgSegs(),this.bgSegs=null},t.prototype.getSegs=function(){return(this.bgSegs||[]).concat(this.fgSegs||[])},t.prototype.renderFgSegs=function(t){return!1},t.prototype.unrenderFgSegs=function(t){},t.prototype.renderBgSegs=function(t){var e=this;if(!this.fillRenderer)return!1;this.fillRenderer.renderSegs("bgEvent",t,{getClasses:function(t){return e.getBgClasses(t.footprint.eventDef)},getCss:function(t){return{"background-color":e.getBgColor(t.footprint.eventDef)}},filterEl:function(t,n){return e.filterEventRenderEl(t.footprint,n)}})},t.prototype.unrenderBgSegs=function(){this.fillRenderer&&this.fillRenderer.unrender("bgEvent")},t.prototype.renderFgSegEls=function(t,e){var n=this;void 0===e&&(e=!1);var i,o=this.view.hasPublicHandlers("eventRender"),s="",a=[];if(t.length){for(i=0;i<t.length;i++)this.beforeFgSegHtml(t[i]),s+=this.fgSegHtml(t[i],e);r(s).each(function(e,i){var s=t[e],l=r(i);o&&(l=n.filterEventRenderEl(s.footprint,l)),l&&(l.data("fc-seg",s),s.el=l,a.push(s))})}return a},t.prototype.beforeFgSegHtml=function(t){},t.prototype.fgSegHtml=function(t,e){},t.prototype.getSegClasses=function(t,e,n){var r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(this.getClasses(t.footprint.eventDef));return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),this.view.isEventDefSelected(t.footprint.eventDef)&&r.push("fc-selected"),r},t.prototype.filterEventRenderEl=function(t,e){var n=t.getEventLegacy(),i=this.view.publiclyTrigger("eventRender",{context:n,args:[n,e,this.view]});return!1===i?e=null:i&&!0!==i&&(e=r(i)),e},t.prototype.getTimeText=function(t,e,n){return this._getTimeText(t.eventInstance.dateProfile.start,t.eventInstance.dateProfile.end,t.componentFootprint.isAllDay,e,n)},t.prototype._getTimeText=function(t,e,n,r,i){return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&e?this.view.formatRange({start:t,end:e},!1,r):t.format(r):""},t.prototype.computeEventTimeFormat=function(){return this.opt("smallTimeFormat")},t.prototype.computeDisplayEventTime=function(){return!0},t.prototype.computeDisplayEventEnd=function(){return!0},t.prototype.getBgClasses=function(t){var e=this.getClasses(t);return e.push("fc-bgevent"),e},t.prototype.getClasses=function(t){var e,n=this.getStylingObjs(t),r=[];for(e=0;e<n.length;e++)r.push.apply(r,n[e].eventClassName||n[e].className||[]);return r},t.prototype.getSkinCss=function(t){return{"background-color":this.getBgColor(t),"border-color":this.getBorderColor(t),color:this.getTextColor(t)}},t.prototype.getBgColor=function(t){var e,n,r=this.getStylingObjs(t);for(e=0;e<r.length&&!n;e++)n=r[e].eventBackgroundColor||r[e].eventColor||r[e].backgroundColor||r[e].color;return n||(n=this.opt("eventBackgroundColor")||this.opt("eventColor")),n},t.prototype.getBorderColor=function(t){var e,n,r=this.getStylingObjs(t);for(e=0;e<r.length&&!n;e++)n=r[e].eventBorderColor||r[e].eventColor||r[e].borderColor||r[e].color;return n||(n=this.opt("eventBorderColor")||this.opt("eventColor")),n},t.prototype.getTextColor=function(t){var e,n,r=this.getStylingObjs(t);for(e=0;e<r.length&&!n;e++)n=r[e].eventTextColor||r[e].textColor;return n||(n=this.opt("eventTextColor")),n},t.prototype.getStylingObjs=function(t){var e=this.getFallbackStylingObjs(t);return e.unshift(t),e},t.prototype.getFallbackStylingObjs=function(t){return[t.source]},t.prototype.sortEventSegs=function(t){t.sort(i.proxy(this,"compareEventSegs"))},t.prototype.compareEventSegs=function(t,e){var n=t.footprint,r=e.footprint,o=n.componentFootprint,s=r.componentFootprint,a=o.unzonedRange,l=s.unzonedRange;return a.startMs-l.startMs||l.endMs-l.startMs-(a.endMs-a.startMs)||s.isAllDay-o.isAllDay||i.compareByFieldSpecs(n.eventDef,r.eventDef,this.view.eventOrderSpecs,n.eventDef.miscProps,r.eventDef.miscProps)},t}();e.default=o},,,,,function(t,e,n){function r(t){return"en"!==t.locale()?t.clone().locale("en"):t}function i(t,e){return h(a(e).fakeFormatString,t)}function o(t,e,n,r,i){var o;return t=y.default.parseZone(t),e=y.default.parseZone(e),o=t.localeData(),n=o.longDateFormat(n)||n,s(a(n),t,e,r||" - ",i)}function s(t,e,n,r,i){var o,s,a,l=t.sameUnits,u=e.clone().stripZone(),d=n.clone().stripZone(),c=f(t.fakeFormatString,e),p=f(t.fakeFormatString,n),h="",v="",y="",m="",b="";for(o=0;o<l.length&&(!l[o]||u.isSame(d,l[o]));o++)h+=c[o];for(s=l.length-1;s>o&&(!l[s]||u.isSame(d,l[s]))&&(s-1!==o||"."!==c[s]);s--)v=c[s]+v;for(a=o;a<=s;a++)y+=c[a],m+=p[a];return(y||m)&&(b=i?m+r+y:y+r+m),g(h+b+v)}function a(t){return C[t]||(C[t]=l(t))}function l(t){var e=u(t);return{fakeFormatString:c(e),sameUnits:p(e)}}function u(t){for(var e,n=[],r=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=r.exec(t);)e[1]?n.push.apply(n,d(e[1])):e[2]?n.push({maybe:u(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push.apply(n,d(e[5]));return n}function d(t){return". "===t?["."," "]:[t]}function c(t){var e,n,r=[];for(e=0;e<t.length;e++)n=t[e],"string"==typeof n?r.push("["+n+"]"):n.token?n.token in E?r.push(b+"["+n.token+"]"):r.push(n.token):n.maybe&&r.push(w+c(n.maybe)+w);return r.join(m)}function p(t){var e,n,r,i=[];for(e=0;e<t.length;e++)n=t[e],n.token?(r=S[n.token.charAt(0)],i.push(r?r.unit:"second")):n.maybe?i.push.apply(i,p(n.maybe)):i.push(null);return i}function h(t,e){return g(f(t,e).join(""))}function f(t,e){var n,r,i=[],o=y.oldMomentFormat(e,t),s=o.split(m);for(n=0;n<s.length;n++)r=s[n],r.charAt(0)===b?i.push(E[r.substring(1)](e)):i.push(r);return i}function g(t){return t.replace(D,function(t,e){return e.match(/[1-9]/)?e:""})}function v(t){var e,n,r,i,o=u(t);for(e=0;e<o.length;e++)n=o[e],n.token&&(r=S[n.token.charAt(0)])&&(!i||r.value>i.value)&&(i=r);return i?i.unit:null}Object.defineProperty(e,"__esModule",{value:!0});var y=n(11);y.newMomentProto.format=function(){return this._fullCalendar&&arguments[0]?i(this,arguments[0]):this._ambigTime?y.oldMomentFormat(r(this),"YYYY-MM-DD"):this._ambigZone?y.oldMomentFormat(r(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?y.oldMomentFormat(r(this)):y.oldMomentProto.format.apply(this,arguments)},y.newMomentProto.toISOString=function(){return this._ambigTime?y.oldMomentFormat(r(this),"YYYY-MM-DD"):this._ambigZone?y.oldMomentFormat(r(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?y.oldMomentProto.toISOString.apply(r(this),arguments):y.oldMomentProto.toISOString.apply(this,arguments)};var m="\v",b="",w="",D=new RegExp(w+"([^"+w+"]*)"+w,"g"),E={t:function(t){return y.oldMomentFormat(t,"a").charAt(0)},T:function(t){return y.oldMomentFormat(t,"A").charAt(0)}},S={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},w:{value:3,unit:"week"},D:{value:4,unit:"day"},d:{value:4,unit:"day"}};e.formatDate=i,e.formatRange=o;var C={};e.queryMostGranularFormatUnit=v},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.unzonedRange=t,this.eventDef=e,n&&(this.eventInstance=n)}return t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(35),o=n(13),s=n(7),a=function(t){function e(){var e=t.call(this)||this;return e._watchers={},e._props={},e.applyGlobalWatchers(),e.constructed(),e}return r.__extends(e,t),e.watch=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.prototype.hasOwnProperty("_globalWatchArgs")||(this.prototype._globalWatchArgs=Object.create(this.prototype._globalWatchArgs)),this.prototype._globalWatchArgs[t]=e},e.prototype.constructed=function(){},e.prototype.applyGlobalWatchers=function(){var t,e=this._globalWatchArgs;for(t in e)this.watch.apply(this,[t].concat(e[t]))},e.prototype.has=function(t){return t in this._props},e.prototype.get=function(t){return void 0===t?this._props:this._props[t]},e.prototype.set=function(t,e){var n;"string"==typeof t?(n={},n[t]=void 0===e?null:e):n=t,this.setProps(n)},e.prototype.reset=function(t){var e,n=this._props,r={};for(e in n)r[e]=void 0;for(e in t)r[e]=t[e];this.setProps(r)},e.prototype.unset=function(t){var e,n,r={};for(e="string"==typeof t?[t]:t,n=0;n<e.length;n++)r[e[n]]=void 0;this.setProps(r)},e.prototype.setProps=function(t){var e,n,r={},i=0;for(e in t)"object"!=typeof(n=t[e])&&n===this._props[e]||(r[e]=n,i++);if(i){this.trigger("before:batchChange",r);for(e in r)n=r[e],this.trigger("before:change",e,n),this.trigger("before:change:"+e,n);for(e in r)n=r[e],void 0===n?delete this._props[e]:this._props[e]=n,this.trigger("change:"+e,n),this.trigger("change",e,n);this.trigger("batchChange",r)}},e.prototype.watch=function(t,e,n,r){var i=this;this.unwatch(t),this._watchers[t]=this._watchDeps(e,function(e){var r=n.call(i,e);r&&r.then?(i.unset(t),r.then(function(e){i.set(t,e)})):i.set(t,r)},function(e){i.unset(t),r&&r.call(i,e)})},e.prototype.unwatch=function(t){var e=this._watchers[t];e&&(delete this._watchers[t],e.teardown())},e.prototype._watchDeps=function(t,e,n){var r=this,i=0,o=t.length,s=0,a={},l=[],u=!1,d=function(t,e,r){1===++i&&s===o&&(u=!0,n(a),u=!1)},c=function(t,n,r){void 0===n?(r||void 0===a[t]||s--,delete a[t]):(r||void 0!==a[t]||s++,a[t]=n),--i||s===o&&(u||e(a))},p=function(t,e){r.on(t,e),l.push([t,e])};return t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),p("before:change:"+t,function(t){d()}),p("change:"+t,function(n){c(t,n,e)})}),t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),r.has(t)?(a[t]=r.get(t),s++):e&&s++}),s===o&&e(a),{teardown:function(){for(var t=0;t<l.length;t++)r.off(l[t][0],l[t][1]);l=null,s===o&&n()},flash:function(){s===o&&(n(),e(a))}}},e.prototype.flash=function(t){var e=this._watchers[t];e&&e.flash()},e}(i.default);e.default=a,a.prototype._globalWatchArgs={},o.default.mixInto(a),s.default.mixInto(a)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=n(15),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.defineStandardProps=function(t){var e=this.prototype;e.hasOwnProperty("standardPropMap")||(e.standardPropMap=Object.create(e.standardPropMap)),i.copyOwnProps(t,e.standardPropMap)},e.copyVerbatimStandardProps=function(t,e){var n,r=this.prototype.standardPropMap;for(n in r)null!=t[n]&&!0===r[n]&&(e[n]=t[n])},e.prototype.applyProps=function(t){var e,n=this.standardPropMap,r={},i={};for(e in t)!0===n[e]?this[e]=t[e]:!1===n[e]?r[e]=t[e]:i[e]=t[e];return this.applyMiscProps(i),this.applyManualStandardProps(r)},e.prototype.applyManualStandardProps=function(t){return!0},e.prototype.applyMiscProps=function(t){},e.prototype.isStandardProp=function(t){return t in this.standardPropMap},e}(o.default);e.default=s,s.prototype.standardPropMap={}},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.def=t,this.dateProfile=e}return t.prototype.toLegacy=function(){var t=this.dateProfile,e=this.def.toLegacy();return e.start=t.start.clone(),e.end=t.end?t.end.clone():null,e},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(0),s=n(37),a=n(53),l=n(16),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.isAllDay=function(){return!this.startTime&&!this.endTime},e.prototype.buildInstances=function(t){for(var e,n,r,i=this.source.calendar,o=t.getStart(),s=t.getEnd(),u=[];o.isBefore(s);)this.dowHash&&!this.dowHash[o.day()]||(e=i.applyTimezone(o),n=e.clone(),r=null,this.startTime?n.time(this.startTime):n.stripTime(),this.endTime&&(r=e.clone().time(this.endTime)),u.push(new a.default(this,new l.default(n,r,i)))),o.add(1,"days");return u},e.prototype.setDow=function(t){this.dowHash||(this.dowHash={});for(var e=0;e<t.length;e++)this.dowHash[t[e]]=!0},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e.startTime&&(e.startTime=o.duration(this.startTime)),e.endTime&&(e.endTime=o.duration(this.endTime)),this.dowHash&&(e.dowHash=i.extend({},this.dowHash)),e},e}(s.default);e.default=u,u.prototype.applyProps=function(t){var e=s.default.prototype.applyProps.call(this,t);return t.start&&(this.startTime=o.duration(t.start)),t.end&&(this.endTime=o.duration(t.end)),t.dow&&this.setDow(t.dow),e},u.defineStandardProps({start:!1,end:!1,dow:!1})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(4),o=n(5),s=function(){function t(t){this._view=t}return t.prototype.opt=function(t){return this._view.opt(t)},t.prototype.trimHiddenDays=function(t){return this._view.trimHiddenDays(t)},t.prototype.msToUtcMoment=function(t,e){return this._view.calendar.msToUtcMoment(t,e)},t.prototype.buildPrev=function(t){var e=t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);return this.build(e,-1)},t.prototype.buildNext=function(t){var e=t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);return this.build(e,1)},t.prototype.build=function(t,e,n){void 0===n&&(n=!1);var i,o,s,a,l,u,d=!t.hasTime(),c=null,p=null;return i=this.buildValidRange(),i=this.trimHiddenDays(i),n&&(t=this.msToUtcMoment(i.constrainDate(t),d)),o=this.buildCurrentRangeInfo(t,e),s=/^(year|month|week|day)$/.test(o.unit),a=this.buildRenderRange(this.trimHiddenDays(o.unzonedRange),o.unit,s),a=this.trimHiddenDays(a),l=a.clone(),this.opt("showNonCurrentDates")||(l=l.intersect(o.unzonedRange)),c=r.duration(this.opt("minTime")),p=r.duration(this.opt("maxTime")),l=this.adjustActiveRange(l,c,p),l=l.intersect(i),l&&(t=this.msToUtcMoment(l.constrainDate(t),d)),u=o.unzonedRange.intersectsWith(i),{validUnzonedRange:i,currentUnzonedRange:o.unzonedRange,currentRangeUnit:o.unit,isRangeAllDay:s,activeUnzonedRange:l,renderUnzonedRange:a,minTime:c,maxTime:p,isValid:u,date:t,dateIncrement:this.buildDateIncrement(o.duration)}},t.prototype.buildValidRange=function(){return this._view.getUnzonedRangeOption("validRange",this._view.calendar.getNow())||new o.default},t.prototype.buildCurrentRangeInfo=function(t,e){var n,r=this._view.viewSpec,o=null,s=null,a=null;return r.duration?(o=r.duration,s=r.durationUnit,a=this.buildRangeFromDuration(t,e,o,s)):(n=this.opt("dayCount"))?(s="day",a=this.buildRangeFromDayCount(t,e,n)):(a=this.buildCustomVisibleRange(t))?s=i.computeGreatestUnit(a.getStart(),a.getEnd()):(o=this.getFallbackDuration(),s=i.computeGreatestUnit(o),a=this.buildRangeFromDuration(t,e,o,s)),{duration:o,unit:s,unzonedRange:a}},t.prototype.getFallbackDuration=function(){return r.duration({days:1})},t.prototype.adjustActiveRange=function(t,e,n){var r=t.getStart(),i=t.getEnd();return this._view.usesMinMaxTime&&(e<0&&r.time(0).add(e),n>864e5&&i.time(n-864e5)),new o.default(r,i)},t.prototype.buildRangeFromDuration=function(t,e,n,s){function a(){d=t.clone().startOf(h),c=d.clone().add(n),p=new o.default(d,c)}var l,u,d,c,p,h=this.opt("dateAlignment");return h||(l=this.opt("dateIncrement"),l?(u=r.duration(l),h=u<n?i.computeDurationGreatestUnit(u,l):s):h=s),n.as("days")<=1&&this._view.isHiddenDay(d)&&(d=this._view.skipHiddenDays(d,e),d.startOf("day")),a(),this.trimHiddenDays(p)||(t=this._view.skipHiddenDays(t,e),a()),p},t.prototype.buildRangeFromDayCount=function(t,e,n){var r,i,s=this.opt("dateAlignment"),a=0;if(s||-1!==e){r=t.clone(),s&&r.startOf(s),r.startOf("day"),r=this._view.skipHiddenDays(r),i=r.clone();do{i.add(1,"day"),this._view.isHiddenDay(i)||a++}while(a<n)}else{i=t.clone().startOf("day").add(1,"day"),i=this._view.skipHiddenDays(i,-1,!0),r=i.clone();do{r.add(-1,"day"),this._view.isHiddenDay(r)||a++}while(a<n)}return new o.default(r,i)},t.prototype.buildCustomVisibleRange=function(t){var e=this._view.getUnzonedRangeOption("visibleRange",this._view.calendar.applyTimezone(t));return!e||null!=e.startMs&&null!=e.endMs?e:null},t.prototype.buildRenderRange=function(t,e,n){return t.clone()},t.prototype.buildDateIncrement=function(t){var e,n=this.opt("dateIncrement");return n?r.duration(n):(e=this.opt("dateAlignment"))?r.duration(1,e):t||r.duration({days:1})},t}();e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(21),a=n(6),l=n(9),u=function(t){function e(e){var n=t.call(this,e)||this;return n.eventDefs=[],n}return r.__extends(e,t),e.parse=function(t,e){var n;return i.isArray(t.events)?n=t:i.isArray(t)&&(n={events:t}),!!n&&a.default.parse.call(this,n,e)},e.prototype.setRawEventDefs=function(t){this.rawEventDefs=t,this.eventDefs=this.parseEventDefs(t)},e.prototype.fetch=function(t,e,n){var r,i=this.eventDefs;if(null!=this.currentTimezone&&this.currentTimezone!==n)for(r=0;r<i.length;r++)i[r]instanceof l.default&&i[r].rezone();return this.currentTimezone=n,s.default.resolve(i)},e.prototype.addEventDef=function(t){this.eventDefs.push(t)},e.prototype.removeEventDefsById=function(t){return o.removeMatching(this.eventDefs,function(e){return e.id===t})},e.prototype.removeAllEventDefs=function(){this.eventDefs=[]},e.prototype.getPrimitive=function(){return this.rawEventDefs},e.prototype.applyManualStandardProps=function(e){var n=t.prototype.applyManualStandardProps.call(this,e);return this.setRawEventDefs(e.events),n},e}(a.default);e.default=u,u.defineStandardProps({events:!1})},function(t,e,n){function r(t,e){a[t]=e}function i(t){return t?!0===t?s.default:a[t]:o.default}Object.defineProperty(e,"__esModule",{value:!0});var o=n(221),s=n(222),a={};e.defineThemeSystem=r,e.getThemeSystemClass=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=function(){function t(t){this.isHorizontal=!1,this.isVertical=!1,this.els=r(t.els),this.isHorizontal=t.isHorizontal,this.isVertical=t.isVertical,this.forcedOffsetParentEl=t.offsetParent?r(t.offsetParent):null}return t.prototype.build=function(){var t=this.forcedOffsetParentEl;!t&&this.els.length>0&&(t=this.els.eq(0).offsetParent()),this.origin=t?t.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},t.prototype.clear=function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},t.prototype.ensureBuilt=function(){this.origin||this.build()},t.prototype.buildElHorizontals=function(){var t=[],e=[];this.els.each(function(n,i){var o=r(i),s=o.offset().left,a=o.outerWidth();t.push(s),e.push(s+a)}),this.lefts=t,this.rights=e},t.prototype.buildElVerticals=function(){var t=[],e=[];this.els.each(function(n,i){var o=r(i),s=o.offset().top,a=o.outerHeight();t.push(s),e.push(s+a)}),this.tops=t,this.bottoms=e},t.prototype.getHorizontalIndex=function(t){this.ensureBuilt();var e,n=this.lefts,r=this.rights,i=n.length;for(e=0;e<i;e++)if(t>=n[e]&&t<r[e])return e},t.prototype.getVerticalIndex=function(t){this.ensureBuilt();var e,n=this.tops,r=this.bottoms,i=n.length;for(e=0;e<i;e++)if(t>=n[e]&&t<r[e])return e},t.prototype.getLeftOffset=function(t){return this.ensureBuilt(),this.lefts[t]},t.prototype.getLeftPosition=function(t){return this.ensureBuilt(),this.lefts[t]-this.origin.left},t.prototype.getRightOffset=function(t){return this.ensureBuilt(),this.rights[t]},t.prototype.getRightPosition=function(t){return this.ensureBuilt(),this.rights[t]-this.origin.left},t.prototype.getWidth=function(t){return this.ensureBuilt(),this.rights[t]-this.lefts[t]},t.prototype.getTopOffset=function(t){return this.ensureBuilt(),this.tops[t]},t.prototype.getTopPosition=function(t){return this.ensureBuilt(),this.tops[t]-this.origin.top},t.prototype.getBottomOffset=function(t){return this.ensureBuilt(),this.bottoms[t]},t.prototype.getBottomPosition=function(t){return this.ensureBuilt(),this.bottoms[t]-this.origin.top},t.prototype.getHeight=function(t){return this.ensureBuilt(),this.bottoms[t]-this.tops[t]},t.prototype.queryBoundingRect=function(){var t;return this.els.length>0&&(t=i.getScrollParent(this.els.eq(0)),!t.is(document)&&!t.is("html,body"))?i.getClientRect(t):null},t.prototype.isPointInBounds=function(t,e){return this.isLeftInBounds(t)&&this.isTopInBounds(e)},t.prototype.isLeftInBounds=function(t){return!this.boundingRect||t>=this.boundingRect.left&&t<this.boundingRect.right},t.prototype.isTopInBounds=function(t){return!this.boundingRect||t>=this.boundingRect.top&&t<this.boundingRect.bottom},t}();e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=n(7),s=n(23),a=function(){function t(t){this.isInteracting=!1,this.isDistanceSurpassed=!1,this.isDelayEnded=!1,this.isDragging=!1,this.isTouch=!1,this.isGeneric=!1,this.shouldCancelTouchScroll=!0,this.scrollAlwaysKills=!1,this.isAutoScroll=!1,this.scrollSensitivity=30,this.scrollSpeed=200,this.scrollIntervalMs=50,this.options=t||{}}return t.prototype.startInteraction=function(t,e){if(void 0===e&&(e={}),"mousedown"===t.type){if(s.default.get().shouldIgnoreMouse())return;if(!i.isPrimaryMouseButton(t))return;t.preventDefault()}this.isInteracting||(this.delay=i.firstDefined(e.delay,this.options.delay,0),this.minDistance=i.firstDefined(e.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,i.preventSelection(r("body")),this.isInteracting=!0,this.isTouch=i.getEvIsTouch(t),this.isGeneric="dragstart"===t.type,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=i.getEvX(t),this.originY=i.getEvY(t),this.scrollEl=i.getScrollParent(r(t.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(t),this.startDelay(t),this.minDistance||this.handleDistanceSurpassed(t))},t.prototype.handleInteractionStart=function(t){this.trigger("interactionStart",t)},t.prototype.endInteraction=function(t,e){this.isInteracting&&(this.endDrag(t),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(t,e),i.allowSelection(r("body")))},t.prototype.handleInteractionEnd=function(t,e){this.trigger("interactionEnd",t,e||!1)},t.prototype.bindHandlers=function(){var t=s.default.get();this.isGeneric?this.listenTo(r(document),{drag:this.handleMove,dragstop:this.endInteraction}):this.isTouch?this.listenTo(t,{touchmove:this.handleTouchMove,touchend:this.endInteraction,scroll:this.handleTouchScroll}):this.listenTo(t,{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(t,{selectstart:i.preventDefault,contextmenu:i.preventDefault})},t.prototype.unbindHandlers=function(){this.stopListeningTo(s.default.get()),this.stopListeningTo(r(document))},t.prototype.startDrag=function(t,e){this.startInteraction(t,e),this.isDragging||(this.isDragging=!0,this.handleDragStart(t))},t.prototype.handleDragStart=function(t){this.trigger("dragStart",t)},t.prototype.handleMove=function(t){var e=i.getEvX(t)-this.originX,n=i.getEvY(t)-this.originY,r=this.minDistance;this.isDistanceSurpassed||e*e+n*n>=r*r&&this.handleDistanceSurpassed(t),this.isDragging&&this.handleDrag(e,n,t)},t.prototype.handleDrag=function(t,e,n){this.trigger("drag",t,e,n),this.updateAutoScroll(n)},t.prototype.endDrag=function(t){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(t))},t.prototype.handleDragEnd=function(t){this.trigger("dragEnd",t)},t.prototype.startDelay=function(t){var e=this;this.delay?this.delayTimeoutId=setTimeout(function(){e.handleDelayEnd(t)},this.delay):this.handleDelayEnd(t)},t.prototype.handleDelayEnd=function(t){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(t)},t.prototype.handleDistanceSurpassed=function(t){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(t)},t.prototype.handleTouchMove=function(t){this.isDragging&&this.shouldCancelTouchScroll&&t.preventDefault(),this.handleMove(t)},t.prototype.handleMouseMove=function(t){this.handleMove(t)},t.prototype.handleTouchScroll=function(t){this.isDragging&&!this.scrollAlwaysKills||this.endInteraction(t,!0)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.options[t]&&this.options[t].apply(this,e),this["_"+t]&&this["_"+t].apply(this,e)},t.prototype.initAutoScroll=function(){var t=this.scrollEl;this.isAutoScroll=this.options.scroll&&t&&!t.is(window)&&!t.is(document),this.isAutoScroll&&this.listenTo(t,"scroll",i.debounce(this.handleDebouncedScroll,100))},t.prototype.destroyAutoScroll=function(){this.endAutoScroll(),this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},t.prototype.computeScrollBounds=function(){this.isAutoScroll&&(this.scrollBounds=i.getOuterRect(this.scrollEl))},t.prototype.updateAutoScroll=function(t){var e,n,r,o,s=this.scrollSensitivity,a=this.scrollBounds,l=0,u=0;a&&(e=(s-(i.getEvY(t)-a.top))/s,n=(s-(a.bottom-i.getEvY(t)))/s,r=(s-(i.getEvX(t)-a.left))/s,o=(s-(a.right-i.getEvX(t)))/s,e>=0&&e<=1?l=e*this.scrollSpeed*-1:n>=0&&n<=1&&(l=n*this.scrollSpeed),r>=0&&r<=1?u=r*this.scrollSpeed*-1:o>=0&&o<=1&&(u=o*this.scrollSpeed)),this.setScrollVel(l,u)},t.prototype.setScrollVel=function(t,e){this.scrollTopVel=t,this.scrollLeftVel=e,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(i.proxy(this,"scrollIntervalFunc"),this.scrollIntervalMs))},t.prototype.constrainScrollVel=function(){var t=this.scrollEl;this.scrollTopVel<0?t.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?t.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},t.prototype.scrollIntervalFunc=function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},t.prototype.endAutoScroll=function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},t.prototype.handleDebouncedScroll=function(){this.scrollIntervalId||this.handleScrollEnd()},t.prototype.handleScrollEnd=function(){},t}();e.default=a,o.default.mixInto(a)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=n(15),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.updateDayTable=function(){for(var t,e,n,r=this,i=r.view,o=i.calendar,s=o.msToUtcMoment(r.dateProfile.renderUnzonedRange.startMs,!0),a=o.msToUtcMoment(r.dateProfile.renderUnzonedRange.endMs,!0),l=-1,u=[],d=[];s.isBefore(a);)i.isHiddenDay(s)?u.push(l+.5):(l++,u.push(l),d.push(s.clone())),s.add(1,"days");if(this.breakOnWeeks){for(e=d[0].day(),t=1;t<d.length&&d[t].day()!==e;t++);n=Math.ceil(d.length/t)}else n=1,t=d.length;this.dayDates=d,this.dayIndices=u,this.daysPerRow=t,this.rowCnt=n,this.updateDayTableCols()},e.prototype.updateDayTableCols=function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.opt("columnHeaderFormat")||this.opt("columnFormat")||this.computeColHeadFormat()},e.prototype.computeColCnt=function(){return this.daysPerRow},e.prototype.getCellDate=function(t,e){return this.dayDates[this.getCellDayIndex(t,e)].clone()},e.prototype.getCellRange=function(t,e){var n=this.getCellDate(t,e);return{start:n,end:n.clone().add(1,"days")}},e.prototype.getCellDayIndex=function(t,e){return t*this.daysPerRow+this.getColDayIndex(e)},e.prototype.getColDayIndex=function(t){return this.isRTL?this.colCnt-1-t:t},e.prototype.getDateDayIndex=function(t){var e=this.dayIndices,n=t.diff(this.dayDates[0],"days");return n<0?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},e.prototype.computeColHeadFormat=function(){return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.opt("dayOfMonthFormat"):"dddd"},e.prototype.sliceRangeByRow=function(t){var e,n,r,i,o,s=this.daysPerRow,a=this.view.computeDayRange(t),l=this.getDateDayIndex(a.start),u=this.getDateDayIndex(a.end.clone().subtract(1,"days")),d=[];for(e=0;e<this.rowCnt;e++)n=e*s,r=n+s-1,i=Math.max(l,n),o=Math.min(u,r),i=Math.ceil(i),o=Math.floor(o),i<=o&&d.push({row:e,firstRowDayIndex:i-n,lastRowDayIndex:o-n,isStart:i===l,isEnd:o===u});return d},e.prototype.sliceRangeByDay=function(t){var e,n,r,i,o,s,a=this.daysPerRow,l=this.view.computeDayRange(t),u=this.getDateDayIndex(l.start),d=this.getDateDayIndex(l.end.clone().subtract(1,"days")),c=[];for(e=0;e<this.rowCnt;e++)for(n=e*a,r=n+a-1,i=n;i<=r;i++)o=Math.max(u,i),s=Math.min(d,i),o=Math.ceil(o),s=Math.floor(s),o<=s&&c.push({row:e,firstRowDayIndex:o-n,lastRowDayIndex:s-n,isStart:o===u,isEnd:s===d});return c},e.prototype.renderHeadHtml=function(){var t=this.view.calendar.theme;return'<div class="fc-row '+t.getClass("headerRow")+'"><table class="'+t.getClass("tableGrid")+'"><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},e.prototype.renderHeadIntroHtml=function(){return this.renderIntroHtml()},e.prototype.renderHeadTrHtml=function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},e.prototype.renderHeadDateCellsHtml=function(){var t,e,n=[];for(t=0;t<this.colCnt;t++)e=this.getCellDate(0,t),n.push(this.renderHeadDateCellHtml(e));return n.join("")},e.prototype.renderHeadDateCellHtml=function(t,e,n){var r,o=this,s=o.view,a=o.dateProfile.activeUnzonedRange.containsDate(t),l=["fc-day-header",s.calendar.theme.getClass("widgetHeader")];return r="function"==typeof o.opt("columnHeaderHtml")?o.opt("columnHeaderHtml")(t):"function"==typeof o.opt("columnHeaderText")?i.htmlEscape(o.opt("columnHeaderText")(t)):i.htmlEscape(t.format(o.colHeadFormat)),1===o.rowCnt?l=l.concat(o.getDayClasses(t,!0)):l.push("fc-"+i.dayIDs[t.day()]),'<th class="'+l.join(" ")+'"'+(1===(a&&o.rowCnt)?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e>1?' colspan="'+e+'"':"")+(n?" "+n:"")+">"+(a?s.buildGotoAnchorHtml({date:t,forceOff:o.rowCnt>1||1===o.colCnt},r):r)+"</th>"},e.prototype.renderBgTrHtml=function(t){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(t))+this.renderBgCellsHtml(t)+(this.isRTL?this.renderBgIntroHtml(t):"")+"</tr>"},e.prototype.renderBgIntroHtml=function(t){return this.renderIntroHtml()},e.prototype.renderBgCellsHtml=function(t){var e,n,r=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),r.push(this.renderBgCellHtml(n));return r.join("")},e.prototype.renderBgCellHtml=function(t,e){var n=this,r=n.view,i=n.dateProfile.activeUnzonedRange.containsDate(t),o=n.getDayClasses(t);return o.unshift("fc-day",r.calendar.theme.getClass("widgetContent")),'<td class="'+o.join(" ")+'"'+(i?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e?" "+e:"")+"></td>"},e.prototype.renderIntroHtml=function(){},e.prototype.bookendCells=function(t){var e=this.renderIntroHtml();e&&(this.isRTL?t.append(e):t.prepend(e))},e}(o.default);e.default=s},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.component=t,this.fillRenderer=e}
    return t.prototype.render=function(t){var e=this.component,n=e._getDateProfile().activeUnzonedRange,r=t.buildEventInstanceGroup(e.hasAllDayBusinessHours,n),i=r?e.eventRangesToEventFootprints(r.sliceRenderRanges(n)):[];this.renderEventFootprints(i)},t.prototype.renderEventFootprints=function(t){var e=this.component.eventFootprintsToSegs(t);this.renderSegs(e),this.segs=e},t.prototype.renderSegs=function(t){this.fillRenderer&&this.fillRenderer.renderSegs("businessHours",t,{getClasses:function(t){return["fc-nonbusiness","fc-bgevent"]}})},t.prototype.unrender=function(){this.fillRenderer&&this.fillRenderer.unrender("businessHours"),this.segs=null},t.prototype.getSegs=function(){return this.segs||[]},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=function(){function t(t){this.fillSegTag="div",this.component=t,this.elsByFill={}}return t.prototype.renderFootprint=function(t,e,n){this.renderSegs(t,this.component.componentFootprintToSegs(e),n)},t.prototype.renderSegs=function(t,e,n){var r;return e=this.buildSegEls(t,e,n),r=this.attachSegEls(t,e),r&&this.reportEls(t,r),e},t.prototype.unrender=function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},t.prototype.buildSegEls=function(t,e,n){var i,o=this,s="",a=[];if(e.length){for(i=0;i<e.length;i++)s+=this.buildSegHtml(t,e[i],n);r(s).each(function(t,i){var s=e[t],l=r(i);n.filterEl&&(l=n.filterEl(s,l)),l&&(l=r(l),l.is(o.fillSegTag)&&(s.el=l,a.push(s)))})}return a},t.prototype.buildSegHtml=function(t,e,n){var r=n.getClasses?n.getClasses(e):[],o=i.cssToStr(n.getCss?n.getCss(e):{});return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(o?' style="'+o+'"':"")+" />"},t.prototype.attachSegEls=function(t,e){},t.prototype.reportEls=function(t,e){this.elsByFill[t]?this.elsByFill[t]=this.elsByFill[t].add(e):this.elsByFill[t]=r(e)},t}();e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),i=n(34),o=n(6),s=function(){function t(t,e){this.view=t._getView(),this.component=t,this.eventRenderer=e}return t.prototype.renderComponentFootprint=function(t){this.renderEventFootprints([this.fabricateEventFootprint(t)])},t.prototype.renderEventDraggingFootprints=function(t,e,n){this.renderEventFootprints(t,e,"fc-dragging",n?null:this.view.opt("dragOpacity"))},t.prototype.renderEventResizingFootprints=function(t,e,n){this.renderEventFootprints(t,e,"fc-resizing")},t.prototype.renderEventFootprints=function(t,e,n,r){var i,o=this.component.eventFootprintsToSegs(t),s="fc-helper "+(n||"");for(o=this.eventRenderer.renderFgSegEls(o),i=0;i<o.length;i++)o[i].el.addClass(s);if(null!=r)for(i=0;i<o.length;i++)o[i].el.css("opacity",r);this.helperEls=this.renderSegs(o,e)},t.prototype.renderSegs=function(t,e){},t.prototype.unrender=function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},t.prototype.fabricateEventFootprint=function(t){var e,n=this.view.calendar,s=n.footprintToDateProfile(t),a=new r.default(new o.default(n));return a.dateProfile=s,e=a.buildInstance(),new i.default(t,a,e)},t}();e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(23),o=n(14),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.bindToEl=function(t){var e=this.component;e.bindSegHandlerToEl(t,"click",this.handleClick.bind(this)),e.bindSegHandlerToEl(t,"mouseenter",this.handleMouseover.bind(this)),e.bindSegHandlerToEl(t,"mouseleave",this.handleMouseout.bind(this))},e.prototype.handleClick=function(t,e){!1===this.component.publiclyTrigger("eventClick",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,this.view]})&&e.preventDefault()},e.prototype.handleMouseover=function(t,e){i.default.get().shouldIgnoreMouse()||this.mousedOverSeg||(this.mousedOverSeg=t,this.view.isEventDefResizable(t.footprint.eventDef)&&t.el.addClass("fc-allow-mouse-resize"),this.component.publiclyTrigger("eventMouseover",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,this.view]}))},e.prototype.handleMouseout=function(t,e){this.mousedOverSeg&&(this.mousedOverSeg=null,this.view.isEventDefResizable(t.footprint.eventDef)&&t.el.removeClass("fc-allow-mouse-resize"),this.component.publiclyTrigger("eventMouseout",{context:t.el[0],args:[t.footprint.getEventLegacy(),e||{},this.view]}))},e.prototype.end=function(){this.mousedOverSeg&&this.handleMouseout(this.mousedOverSeg)},e}(o.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(15),o=n(237),s=n(236),a=n(64),l=n(235),u=n(234),d=n(233),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(i.default);e.default=c,c.prototype.dateClickingClass=o.default,c.prototype.dateSelectingClass=s.default,c.prototype.eventPointingClass=a.default,c.prototype.eventDraggingClass=l.default,c.prototype.eventResizingClass=u.default,c.prototype.externalDroppingClass=d.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(58),a=n(227),l=n(5),u=n(12),d=n(34),c=n(61),p=n(65),h=n(42),f=n(60),g=n(243),v=n(244),y=n(245),m=function(t){function e(e){var n=t.call(this,e)||this;return n.cellWeekNumbersVisible=!1,n.bottomCoordPadding=0,n.isRigid=!1,n.hasAllDayBusinessHours=!0,n}return r.__extends(e,t),e.prototype.componentFootprintToSegs=function(t){var e,n,r=this.sliceRangeByRow(t.unzonedRange);for(e=0;e<r.length;e++)n=r[e],this.isRTL?(n.leftCol=this.daysPerRow-1-n.lastRowDayIndex,n.rightCol=this.daysPerRow-1-n.firstRowDayIndex):(n.leftCol=n.firstRowDayIndex,n.rightCol=n.lastRowDayIndex);return r},e.prototype.renderDates=function(t){this.dateProfile=t,this.updateDayTable(),this.renderGrid()},e.prototype.unrenderDates=function(){this.removeSegPopover()},e.prototype.renderGrid=function(){var t,e,n=this.view,r=this.rowCnt,i=this.colCnt,o="";for(this.headContainerEl&&this.headContainerEl.html(this.renderHeadHtml()),t=0;t<r;t++)o+=this.renderDayRowHtml(t,this.isRigid);for(this.el.html(o),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day, .fc-disabled-day"),this.rowCoordCache=new s.default({els:this.rowEls,isVertical:!0}),this.colCoordCache=new s.default({els:this.cellEls.slice(0,this.colCnt),isHorizontal:!0}),t=0;t<r;t++)for(e=0;e<i;e++)this.publiclyTrigger("dayRender",{context:n,args:[this.getCellDate(t,e),this.getCellEl(t,e),n]})},e.prototype.renderDayRowHtml=function(t,e){var n=this.view.calendar.theme,r=["fc-row","fc-week",n.getClass("dayRow")];return e&&r.push("fc-rigid"),'<div class="'+r.join(" ")+'"><div class="fc-bg"><table class="'+n.getClass("tableGrid")+'">'+this.renderBgTrHtml(t)+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(t)+"</thead>":"")+"</table></div></div>"},e.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.cellWeekNumbersVisible},e.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},e.prototype.renderNumberTrHtml=function(t){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(t))+this.renderNumberCellsHtml(t)+(this.isRTL?this.renderNumberIntroHtml(t):"")+"</tr>"},e.prototype.renderNumberIntroHtml=function(t){return this.renderIntroHtml()},e.prototype.renderNumberCellsHtml=function(t){var e,n,r=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),r.push(this.renderNumberCellHtml(n));return r.join("")},e.prototype.renderNumberCellHtml=function(t){var e,n,r=this.view,i="",o=this.dateProfile.activeUnzonedRange.containsDate(t),s=this.getIsDayNumbersVisible()&&o;return s||this.cellWeekNumbersVisible?(e=this.getDayClasses(t),e.unshift("fc-day-top"),this.cellWeekNumbersVisible&&(n="ISO"===t._locale._fullCalendar_weekCalc?1:t._locale.firstDayOfWeek()),i+='<td class="'+e.join(" ")+'"'+(o?' data-date="'+t.format()+'"':"")+">",this.cellWeekNumbersVisible&&t.day()===n&&(i+=r.buildGotoAnchorHtml({date:t,type:"week"},{class:"fc-week-number"},t.format("w"))),s&&(i+=r.buildGotoAnchorHtml(t,{class:"fc-day-number"},t.format("D"))),i+="</td>"):"<td/>"},e.prototype.prepareHits=function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},e.prototype.releaseHits=function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},e.prototype.queryHit=function(t,e){if(this.colCoordCache.isLeftInBounds(t)&&this.rowCoordCache.isTopInBounds(e)){var n=this.colCoordCache.getHorizontalIndex(t),r=this.rowCoordCache.getVerticalIndex(e);if(null!=r&&null!=n)return this.getCellHit(r,n)}},e.prototype.getHitFootprint=function(t){var e=this.getCellRange(t.row,t.col);return new u.default(new l.default(e.start,e.end),!0)},e.prototype.getHitEl=function(t){return this.getCellEl(t.row,t.col)},e.prototype.getCellHit=function(t,e){return{row:t,col:e,component:this,left:this.colCoordCache.getLeftOffset(e),right:this.colCoordCache.getRightOffset(e),top:this.rowCoordCache.getTopOffset(t),bottom:this.rowCoordCache.getBottomOffset(t)}},e.prototype.getCellEl=function(t,e){return this.cellEls.eq(t*this.colCnt+e)},e.prototype.executeEventUnrender=function(){this.removeSegPopover(),t.prototype.executeEventUnrender.call(this)},e.prototype.getOwnEventSegs=function(){return t.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs||[])},e.prototype.renderDrag=function(t,e,n){var r;for(r=0;r<t.length;r++)this.renderHighlight(t[r].componentFootprint);if(t.length&&e&&e.component!==this)return this.helperRenderer.renderEventDraggingFootprints(t,e,n),!0},e.prototype.unrenderDrag=function(){this.unrenderHighlight(),this.helperRenderer.unrender()},e.prototype.renderEventResize=function(t,e,n){var r;for(r=0;r<t.length;r++)this.renderHighlight(t[r].componentFootprint);this.helperRenderer.renderEventResizingFootprints(t,e,n)},e.prototype.unrenderEventResize=function(){this.unrenderHighlight(),this.helperRenderer.unrender()},e.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},e.prototype.limitRows=function(t){var e,n,r=this.eventRenderer.rowStructs||[];for(e=0;e<r.length;e++)this.unlimitRow(e),!1!==(n=!!t&&("number"==typeof t?t:this.computeRowLevelLimit(e)))&&this.limitRow(e,n)},e.prototype.computeRowLevelLimit=function(t){function e(t,e){o=Math.max(o,i(e).outerHeight())}var n,r,o,s=this.rowEls.eq(t),a=s.height(),l=this.eventRenderer.rowStructs[t].tbodyEl.children();for(n=0;n<l.length;n++)if(r=l.eq(n).removeClass("fc-limited"),o=0,r.find("> td > :first-child").each(e),r.position().top+o>a)return n;return!1},e.prototype.limitRow=function(t,e){var n,r,o,s,a,l,u,d,c,p,h,f,g,v,y,m=this,b=this.eventRenderer.rowStructs[t],w=[],D=0,E=function(n){for(;D<n;)l=m.getCellSegs(t,D,e),l.length&&(c=r[e-1][D],y=m.renderMoreLink(t,D,l),v=i("<div/>").append(y),c.append(v),w.push(v[0])),D++};if(e&&e<b.segLevels.length){for(n=b.segLevels[e-1],r=b.cellMatrix,o=b.tbodyEl.children().slice(e).addClass("fc-limited").get(),s=0;s<n.length;s++){for(a=n[s],E(a.leftCol),d=[],u=0;D<=a.rightCol;)l=this.getCellSegs(t,D,e),d.push(l),u+=l.length,D++;if(u){for(c=r[e-1][a.leftCol],p=c.attr("rowspan")||1,h=[],f=0;f<d.length;f++)g=i('<td class="fc-more-cell"/>').attr("rowspan",p),l=d[f],y=this.renderMoreLink(t,a.leftCol+f,[a].concat(l)),v=i("<div/>").append(y),g.append(v),h.push(g[0]),w.push(g[0]);c.addClass("fc-limited").after(i(h)),o.push(c[0])}}E(this.colCnt),b.moreEls=i(w),b.limitedEls=i(o)}},e.prototype.unlimitRow=function(t){var e=this.eventRenderer.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},e.prototype.renderMoreLink=function(t,e,n){var r=this,o=this.view;return i('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click",function(s){var a=r.opt("eventLimitClick"),l=r.getCellDate(t,e),u=i(s.currentTarget),d=r.getCellEl(t,e),c=r.getCellSegs(t,e),p=r.resliceDaySegs(c,l),h=r.resliceDaySegs(n,l);"function"==typeof a&&(a=r.publiclyTrigger("eventLimitClick",{context:o,args:[{date:l.clone(),dayEl:d,moreEl:u,segs:p,hiddenSegs:h},s,o]})),"popover"===a?r.showSegPopover(t,e,u,p):"string"==typeof a&&o.calendar.zoomTo(l,a)})},e.prototype.showSegPopover=function(t,e,n,r){var i,o,s=this,l=this.view,u=n.parent();i=1===this.rowCnt?l.el:this.rowEls.eq(t),o={className:"fc-more-popover "+l.calendar.theme.getClass("popover"),content:this.renderSegPopoverContent(t,e,r),parentEl:l.el,top:i.offset().top,autoHide:!0,viewportConstrain:this.opt("popoverViewportConstrain"),hide:function(){s.popoverSegs&&s.triggerBeforeEventSegsDestroyed(s.popoverSegs),s.segPopover.removeElement(),s.segPopover=null,s.popoverSegs=null}},this.isRTL?o.right=u.offset().left+u.outerWidth()+1:o.left=u.offset().left-1,this.segPopover=new a.default(o),this.segPopover.show(),this.bindAllSegHandlersToEl(this.segPopover.el),this.triggerAfterEventSegsRendered(r)},e.prototype.renderSegPopoverContent=function(t,e,n){var r,s=this.view,a=s.calendar.theme,l=this.getCellDate(t,e).format(this.opt("dayPopoverFormat")),u=i('<div class="fc-header '+a.getClass("popoverHeader")+'"><span class="fc-close '+a.getIconClass("close")+'"></span><span class="fc-title">'+o.htmlEscape(l)+'</span><div class="fc-clear"/></div><div class="fc-body '+a.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>'),d=u.find(".fc-event-container");for(n=this.eventRenderer.renderFgSegEls(n,!0),this.popoverSegs=n,r=0;r<n.length;r++)this.hitsNeeded(),n[r].hit=this.getCellHit(t,e),this.hitsNotNeeded(),d.append(n[r].el);return u},e.prototype.resliceDaySegs=function(t,e){var n,r,o,s=e.clone(),a=s.clone().add(1,"days"),c=new l.default(s,a),p=[];for(n=0;n<t.length;n++)r=t[n],(o=r.footprint.componentFootprint.unzonedRange.intersect(c))&&p.push(i.extend({},r,{footprint:new d.default(new u.default(o,r.footprint.componentFootprint.isAllDay),r.footprint.eventDef,r.footprint.eventInstance),isStart:r.isStart&&o.isStart,isEnd:r.isEnd&&o.isEnd}));return this.eventRenderer.sortEventSegs(p),p},e.prototype.getMoreLinkText=function(t){var e=this.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},e.prototype.getCellSegs=function(t,e,n){for(var r,i=this.eventRenderer.rowStructs[t].segMatrix,o=n||0,s=[];o<i.length;)r=i[o][e],r&&s.push(r),o++;return s},e}(h.default);e.default=m,m.prototype.eventRendererClass=g.default,m.prototype.businessHourRendererClass=c.default,m.prototype.helperRendererClass=v.default,m.prototype.fillRendererClass=y.default,p.default.mixInto(m),f.default.mixInto(m)},function(t,e,n){function r(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colWeekNumbersVisible=!1,e}return i.__extends(e,t),e.prototype.renderHeadIntroHtml=function(){var t=this.view;return this.colWeekNumbersVisible?'<th class="fc-week-number '+t.calendar.theme.getClass("widgetHeader")+'" '+t.weekNumberStyleAttr()+"><span>"+s.htmlEscape(this.opt("weekNumberTitle"))+"</span></th>":""},e.prototype.renderNumberIntroHtml=function(t){var e=this.view,n=this.getCellDate(t,0);return this.colWeekNumbersVisible?'<td class="fc-week-number" '+e.weekNumberStyleAttr()+">"+e.buildGotoAnchorHtml({date:n,type:"week",forceOff:1===this.colCnt},n.format("w"))+"</td>":""},e.prototype.renderBgIntroHtml=function(){var t=this.view;return this.colWeekNumbersVisible?'<td class="fc-week-number '+t.calendar.theme.getClass("widgetContent")+'" '+t.weekNumberStyleAttr()+"></td>":""},e.prototype.renderIntroHtml=function(){var t=this.view;return this.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+"></td>":""},e.prototype.getIsNumbersVisible=function(){return d.default.prototype.getIsNumbersVisible.apply(this,arguments)||this.colWeekNumbersVisible},e}(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(3),s=n(4),a=n(41),l=n(43),u=n(68),d=n(66),c=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.dayGrid=r.instantiateDayGrid(),r.dayGrid.isRigid=r.hasRigidRows(),r.opt("weekNumbers")&&(r.opt("weekNumbersWithinDays")?(r.dayGrid.cellWeekNumbersVisible=!0,r.dayGrid.colWeekNumbersVisible=!1):(r.dayGrid.cellWeekNumbersVisible=!1,r.dayGrid.colWeekNumbersVisible=!0)),r.addChild(r.dayGrid),r.scroller=new a.default({overflowX:"hidden",overflowY:"auto"}),r}return i.__extends(e,t),e.prototype.instantiateDayGrid=function(){return new(r(this.dayGridClass))(this)},e.prototype.executeDateRender=function(e){this.dayGrid.breakOnWeeks=/year|month|week/.test(e.currentRangeUnit),t.prototype.executeDateRender.call(this,e)},e.prototype.renderSkeleton=function(){var t,e;this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.scroller.render(),t=this.scroller.el.addClass("fc-day-grid-container"),e=o('<div class="fc-day-grid" />').appendTo(t),this.el.find(".fc-body > tr > td").append(t),this.dayGrid.headContainerEl=this.el.find(".fc-head-container"),this.dayGrid.setElement(e)},e.prototype.unrenderSkeleton=function(){this.dayGrid.removeElement(),this.scroller.destroy()},e.prototype.renderSkeletonHtml=function(){var t=this.calendar.theme;return'<table class="'+t.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'"></td></tr></tbody></table>'},e.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},e.prototype.hasRigidRows=function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},e.prototype.updateSize=function(e,n,r){var i,o,a=this.opt("eventLimit"),l=this.dayGrid.headContainerEl.find(".fc-row");if(!this.dayGrid.rowEls)return void(n||(i=this.computeScrollerHeight(e),this.scroller.setHeight(i)));t.prototype.updateSize.call(this,e,n,r),this.dayGrid.colWeekNumbersVisible&&(this.weekNumberWidth=s.matchCellWidths(this.el.find(".fc-week-number"))),this.scroller.clear(),s.uncompensateScroll(l),this.dayGrid.removeSegPopover(),a&&"number"==typeof a&&this.dayGrid.limitRows(a),i=this.computeScrollerHeight(e),this.setGridHeight(i,n),a&&"number"!=typeof a&&this.dayGrid.limitRows(a),n||(this.scroller.setHeight(i),o=this.scroller.getScrollbarWidths(),(o.left||o.right)&&(s.compensateScroll(l,o),i=this.computeScrollerHeight(e),this.scroller.setHeight(i)),this.scroller.lockOverflow(o))},e.prototype.computeScrollerHeight=function(t){return t-s.subtractInnerElHeight(this.el,this.scroller.el)},e.prototype.setGridHeight=function(t,e){e?s.undistributeHeight(this.dayGrid.rowEls):s.distributeHeight(this.dayGrid.rowEls,t,!0)},e.prototype.computeInitialDateScroll=function(){return{top:0}},e.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},e.prototype.applyDateScroll=function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},e}(l.default);e.default=c,c.prototype.dateProfileGeneratorClass=u.default,c.prototype.dayGridClass=d.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(5),o=n(55),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.buildRenderRange=function(e,n,r){var o=t.prototype.buildRenderRange.call(this,e,n,r),s=this.msToUtcMoment(o.startMs,r),a=this.msToUtcMoment(o.endMs,r);return/^(year|month)$/.test(n)&&(s.startOf("week"),a.weekday()&&a.add(1,"week").startOf("week")),new i.default(s,a)},e}(o.default);e.default=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){function r(t,e,n){var r;for(r=0;r<t.length;r++)if(!e(t[r].eventInstance.toLegacy(),n?n.toLegacy():null))return!1;return!0}function i(t,e){var n,r,i,o,s=e.toLegacy();for(n=0;n<t.length;n++){if(r=t[n].eventInstance,i=r.def,!1===(o=i.getOverlap()))return!1;if("function"==typeof o&&!o(r.toLegacy(),s))return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),s=n(12),a=n(36),l=n(6),u=n(19),d=function(){function t(t,e){this.eventManager=t,this._calendar=e}return t.prototype.opt=function(t){return this._calendar.opt(t)},t.prototype.isEventInstanceGroupAllowed=function(t){var e,n=t.getEventDef(),r=this.eventRangesToEventFootprints(t.getAllEventRanges()),i=this.getPeerEventInstances(n),o=i.map(u.eventInstanceToEventRange),s=this.eventRangesToEventFootprints(o),a=n.getConstraint(),l=n.getOverlap(),d=this.opt("eventAllow");for(e=0;e<r.length;e++)if(!this.isFootprintAllowed(r[e].componentFootprint,s,a,l,r[e].eventInstance))return!1;if(d)for(e=0;e<r.length;e++)if(!1===d(r[e].componentFootprint.toLegacy(this._calendar),r[e].getEventLegacy()))return!1;return!0},t.prototype.getPeerEventInstances=function(t){return this.eventManager.getEventInstancesWithoutId(t.id)},t.prototype.isSelectionFootprintAllowed=function(t){var e,n=this.eventManager.getEventInstances(),r=n.map(u.eventInstanceToEventRange),i=this.eventRangesToEventFootprints(r);return!!this.isFootprintAllowed(t,i,this.opt("selectConstraint"),this.opt("selectOverlap"))&&(!(e=this.opt("selectAllow"))||!1!==e(t.toLegacy(this._calendar)))},t.prototype.isFootprintAllowed=function(t,e,n,o,s){var a,l;if(null!=n&&(a=this.constraintValToFootprints(n,t.isAllDay),!this.isFootprintWithinConstraints(t,a)))return!1;if(l=this.collectOverlapEventFootprints(e,t),!1===o){if(l.length)return!1}else if("function"==typeof o&&!r(l,o,s))return!1;return!(s&&!i(l,s))},t.prototype.isFootprintWithinConstraints=function(t,e){var n;for(n=0;n<e.length;n++)if(this.footprintContainsFootprint(e[n],t))return!0;return!1},t.prototype.constraintValToFootprints=function(t,e){var n;return"businessHours"===t?this.buildCurrentBusinessFootprints(e):"object"==typeof t?(n=this.parseEventDefToInstances(t),n?this.eventInstancesToFootprints(n):this.parseFootprints(t)):null!=t?(n=this.eventManager.getEventInstancesWithId(t),this.eventInstancesToFootprints(n)):void 0},t.prototype.buildCurrentBusinessFootprints=function(t){var e=this._calendar.view,n=e.get("businessHourGenerator"),r=e.dateProfile.activeUnzonedRange,i=n.buildEventInstanceGroup(t,r);return i?this.eventInstancesToFootprints(i.eventInstances):[]},t.prototype.eventInstancesToFootprints=function(t){var e=t.map(u.eventInstanceToEventRange);return this.eventRangesToEventFootprints(e).map(u.eventFootprintToComponentFootprint)},t.prototype.collectOverlapEventFootprints=function(t,e){var n,r=[];for(n=0;n<t.length;n++)this.footprintsIntersect(e,t[n].componentFootprint)&&r.push(t[n]);return r},t.prototype.parseEventDefToInstances=function(t){var e=this.eventManager,n=a.default.parse(t,new l.default(this._calendar));return!!n&&n.buildInstances(e.currentPeriod.unzonedRange)},t.prototype.eventRangesToEventFootprints=function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventRangeToEventFootprints(t[e]));return n},t.prototype.eventRangeToEventFootprints=function(t){return[u.eventRangeToEventFootprint(t)]},t.prototype.parseFootprints=function(t){var e,n;return t.start&&(e=this._calendar.moment(t.start),e.isValid()||(e=null)),t.end&&(n=this._calendar.moment(t.end),n.isValid()||(n=null)),[new s.default(new o.default(e,n),e&&!e.hasTime()||n&&!n.hasTime())]},t.prototype.footprintContainsFootprint=function(t,e){return t.unzonedRange.containsRange(e.unzonedRange)},t.prototype.footprintsIntersect=function(t,e){return t.unzonedRange.intersectsWith(e.unzonedRange)},t}();e.default=d},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(19),o=n(20),s=n(54),a=n(6),l={start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"},u=function(){function t(t,e){this.rawComplexDef=t,this.calendar=e}return t.prototype.buildEventInstanceGroup=function(t,e){var n,r=this.buildEventDefs(t);if(r.length)return n=new o.default(i.eventDefsToEventInstances(r,e)),n.explicitEventDef=r[0],n},t.prototype.buildEventDefs=function(t){var e,n=this.rawComplexDef,i=[],o=!1,s=[];for(!0===n?i=[{}]:r.isPlainObject(n)?i=[n]:r.isArray(n)&&(i=n,o=!0),e=0;e<i.length;e++)o&&!i[e].dow||s.push(this.buildEventDef(t,i[e]));return s},t.prototype.buildEventDef=function(t,e){var n=r.extend({},l,e);return t&&(n.start=null,n.end=null),s.default.parse(n,new a.default(this.calendar))},t}();e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=n(21),s=n(13),a=n(5),l=n(20),u=function(){function t(t,e,n){this.pendingCnt=0,this.freezeDepth=0,this.stuntedReleaseCnt=0,this.releaseCnt=0,this.start=t,this.end=e,this.timezone=n,this.unzonedRange=new a.default(t.clone().stripZone(),e.clone().stripZone()),this.requestsByUid={},this.eventDefsByUid={},this.eventDefsById={},this.eventInstanceGroupsById={}}return t.prototype.isWithinRange=function(t,e){return!t.isBefore(this.start)&&!e.isAfter(this.end)},t.prototype.requestSources=function(t){this.freeze();for(var e=0;e<t.length;e++)this.requestSource(t[e]);this.thaw()},t.prototype.requestSource=function(t){var e=this,n={source:t,status:"pending",eventDefs:null};this.requestsByUid[t.uid]=n,this.pendingCnt+=1,t.fetch(this.start,this.end,this.timezone).then(function(t){"cancelled"!==n.status&&(n.status="completed",n.eventDefs=t,e.addEventDefs(t),e.pendingCnt--,e.tryRelease())},function(){"cancelled"!==n.status&&(n.status="failed",e.pendingCnt--,e.tryRelease())})},t.prototype.purgeSource=function(t){var e=this.requestsByUid[t.uid];e&&(delete this.requestsByUid[t.uid],"pending"===e.status?(e.status="cancelled",this.pendingCnt--,this.tryRelease()):"completed"===e.status&&e.eventDefs.forEach(this.removeEventDef.bind(this)))},t.prototype.purgeAllSources=function(){var t,e,n=this.requestsByUid,r=0;for(t in n)e=n[t],"pending"===e.status?e.status="cancelled":"completed"===e.status&&r++;this.requestsByUid={},this.pendingCnt=0,r&&this.removeAllEventDefs()},t.prototype.getEventDefByUid=function(t){return this.eventDefsByUid[t]},t.prototype.getEventDefsById=function(t){var e=this.eventDefsById[t];return e?e.slice():[]},t.prototype.addEventDefs=function(t){for(var e=0;e<t.length;e++)this.addEventDef(t[e])},t.prototype.addEventDef=function(t){var e,n=this.eventDefsById,r=t.id,i=n[r]||(n[r]=[]),o=t.buildInstances(this.unzonedRange);for(i.push(t),this.eventDefsByUid[t.uid]=t,e=0;e<o.length;e++)this.addEventInstance(o[e],r)},t.prototype.removeEventDefsById=function(t){var e=this;this.getEventDefsById(t).forEach(function(t){e.removeEventDef(t)})},t.prototype.removeAllEventDefs=function(){var t=r.isEmptyObject(this.eventDefsByUid);this.eventDefsByUid={},this.eventDefsById={},this.eventInstanceGroupsById={},t||this.tryRelease()},t.prototype.removeEventDef=function(t){var e=this.eventDefsById,n=e[t.id];delete this.eventDefsByUid[t.uid],n&&(i.removeExact(n,t),n.length||delete e[t.id],this.removeEventInstancesForDef(t))},t.prototype.getEventInstances=function(){var t,e=this.eventInstanceGroupsById,n=[];for(t in e)n.push.apply(n,e[t].eventInstances);return n},t.prototype.getEventInstancesWithId=function(t){var e=this.eventInstanceGroupsById[t];return e?e.eventInstances.slice():[]},t.prototype.getEventInstancesWithoutId=function(t){var e,n=this.eventInstanceGroupsById,r=[];for(e in n)e!==t&&r.push.apply(r,n[e].eventInstances);return r},t.prototype.addEventInstance=function(t,e){var n=this.eventInstanceGroupsById;(n[e]||(n[e]=new l.default)).eventInstances.push(t),this.tryRelease()},t.prototype.removeEventInstancesForDef=function(t){var e,n=this.eventInstanceGroupsById,r=n[t.id];r&&(e=i.removeMatching(r.eventInstances,function(e){return e.def===t}),r.eventInstances.length||delete n[t.id],e&&this.tryRelease())},t.prototype.tryRelease=function(){this.pendingCnt||(this.freezeDepth?this.stuntedReleaseCnt++:this.release())},t.prototype.release=function(){this.releaseCnt++,this.trigger("release",this.eventInstanceGroupsById)},t.prototype.whenReleased=function(){var t=this;return this.releaseCnt?o.default.resolve(this.eventInstanceGroupsById):o.default.construct(function(e){t.one("release",e)})},t.prototype.freeze=function(){this.freezeDepth++||(this.stuntedReleaseCnt=0)},t.prototype.thaw=function(){--this.freezeDepth||!this.stuntedReleaseCnt||this.pendingCnt||this.release()},t}();e.default=u,s.default.mixInto(u)},function(t,e,n){function r(t,e){return t.getPrimitive()===e.getPrimitive()}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n(4),s=n(219),a=n(56),l=n(6),u=n(38),d=n(9),c=n(20),p=n(13),h=n(7),f=function(){function t(t){this.calendar=t,this.stickySource=new a.default(t),this.otherSources=[]}return t.prototype.requestEvents=function(t,e,n,r){return!r&&this.currentPeriod&&this.currentPeriod.isWithinRange(t,e)&&n===this.currentPeriod.timezone||this.setPeriod(new s.default(t,e,n)),this.currentPeriod.whenReleased()},t.prototype.addSource=function(t){this.otherSources.push(t),this.currentPeriod&&this.currentPeriod.requestSource(t)},t.prototype.removeSource=function(t){o.removeExact(this.otherSources,t),this.currentPeriod&&this.currentPeriod.purgeSource(t)},t.prototype.removeAllSources=function(){this.otherSources=[],this.currentPeriod&&this.currentPeriod.purgeAllSources()},t.prototype.refetchSource=function(t){var e=this.currentPeriod;e&&(e.freeze(),e.purgeSource(t),e.requestSource(t),e.thaw())},t.prototype.refetchAllSources=function(){var t=this.currentPeriod;t&&(t.freeze(),t.purgeAllSources(),t.requestSources(this.getSources()),t.thaw())},t.prototype.getSources=function(){return[this.stickySource].concat(this.otherSources)},t.prototype.multiQuerySources=function(t){t?i.isArray(t)||(t=[t]):t=[];var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.querySources(t[e]));return n},t.prototype.querySources=function(t){var e,n,o=this.otherSources;for(e=0;e<o.length;e++)if((n=o[e])===t)return[n];return(n=this.getSourceById(l.default.normalizeId(t)))?[n]:(t=u.default.parse(t,this.calendar),t?i.grep(o,function(e){return r(t,e)}):void 0)},t.prototype.getSourceById=function(t){return i.grep(this.otherSources,function(e){return e.id&&e.id===t})[0]},t.prototype.setPeriod=function(t){this.currentPeriod&&(this.unbindPeriod(this.currentPeriod),this.currentPeriod=null),this.currentPeriod=t,this.bindPeriod(t),t.requestSources(this.getSources())},t.prototype.bindPeriod=function(t){this.listenTo(t,"release",function(t){this.trigger("release",t)})},t.prototype.unbindPeriod=function(t){this.stopListeningTo(t)},t.prototype.getEventDefByUid=function(t){if(this.currentPeriod)return this.currentPeriod.getEventDefByUid(t)},t.prototype.addEventDef=function(t,e){e&&this.stickySource.addEventDef(t),this.currentPeriod&&this.currentPeriod.addEventDef(t)},t.prototype.removeEventDefsById=function(t){this.getSources().forEach(function(e){e.removeEventDefsById(t)}),this.currentPeriod&&this.currentPeriod.removeEventDefsById(t)},t.prototype.removeAllEventDefs=function(){this.getSources().forEach(function(t){t.removeAllEventDefs()}),this.currentPeriod&&this.currentPeriod.removeAllEventDefs()},t.prototype.mutateEventsWithId=function(t,e){var n,r=this.currentPeriod,i=[];return r?(r.freeze(),n=r.getEventDefsById(t),n.forEach(function(t){r.removeEventDef(t),i.push(e.mutateSingle(t)),r.addEventDef(t)}),r.thaw(),function(){r.freeze();for(var t=0;t<n.length;t++)r.removeEventDef(n[t]),i[t](),r.addEventDef(n[t]);r.thaw()}):function(){}},t.prototype.buildMutatedEventInstanceGroup=function(t,e){var n,r,i=this.getEventDefsById(t),o=[];for(n=0;n<i.length;n++)(r=i[n].clone())instanceof d.default&&(e.mutateSingle(r),o.push.apply(o,r.buildInstances()));return new c.default(o)},t.prototype.freeze=function(){this.currentPeriod&&this.currentPeriod.freeze()},t.prototype.thaw=function(){this.currentPeriod&&this.currentPeriod.thaw()},t.prototype.getEventDefsById=function(t){return this.currentPeriod.getEventDefsById(t)},t.prototype.getEventInstances=function(){return this.currentPeriod.getEventInstances()},t.prototype.getEventInstancesWithId=function(t){return this.currentPeriod.getEventInstancesWithId(t)},t.prototype.getEventInstancesWithoutId=function(t){return this.currentPeriod.getEventInstancesWithoutId(t)},t
    }();e.default=f,p.default.mixInto(f),h.default.mixInto(f)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(22),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(i.default);e.default=o,o.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button",cornerLeft:"fc-corner-left",cornerRight:"fc-corner-right",stateDefault:"fc-state-default",stateActive:"fc-state-active",stateDisabled:"fc-state-disabled",stateHover:"fc-state-hover",stateDown:"fc-state-down",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},o.prototype.baseIconClass="fc-icon",o.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-left-single-arrow",next:"fc-icon-right-single-arrow",prevYear:"fc-icon-left-double-arrow",nextYear:"fc-icon-right-double-arrow"},o.prototype.iconOverrideOption="buttonIcons",o.prototype.iconOverrideCustomButtonOption="icon",o.prototype.iconOverridePrefix="fc-icon-"},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(22),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(i.default);e.default=o,o.prototype.classes={widget:"ui-widget",widgetHeader:"ui-widget-header",widgetContent:"ui-widget-content",buttonGroup:"fc-button-group",button:"ui-button",cornerLeft:"ui-corner-left",cornerRight:"ui-corner-right",stateDefault:"ui-state-default",stateActive:"ui-state-active",stateDisabled:"ui-state-disabled",stateHover:"ui-state-hover",stateDown:"ui-state-down",today:"ui-state-highlight",popoverHeader:"ui-widget-header",popoverContent:"ui-widget-content",headerRow:"ui-widget-header",dayRow:"ui-widget-content",listView:"ui-widget-content"},o.prototype.baseIconClass="ui-icon",o.prototype.iconClasses={close:"ui-icon-closethick",prev:"ui-icon-circle-triangle-w",next:"ui-icon-circle-triangle-e",prevYear:"ui-icon-seek-prev",nextYear:"ui-icon-seek-next"},o.prototype.iconOverrideOption="themeButtonIcons",o.prototype.iconOverrideCustomButtonOption="themeIcon",o.prototype.iconOverridePrefix="ui-icon-"},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(21),s=n(6),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.parse=function(t,e){var n;return i.isFunction(t.events)?n=t:i.isFunction(t)&&(n={events:t}),!!n&&s.default.parse.call(this,n,e)},e.prototype.fetch=function(t,e,n){var r=this;return this.calendar.pushLoading(),o.default.construct(function(i){r.func.call(r.calendar,t.clone(),e.clone(),n,function(t){r.calendar.popLoading(),i(r.parseEventDefs(t))})})},e.prototype.getPrimitive=function(){return this.func},e.prototype.applyManualStandardProps=function(e){var n=t.prototype.applyManualStandardProps.call(this,e);return this.func=e.events,n},e}(s.default);e.default=a,a.defineStandardProps({events:!1})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(21),a=n(6),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.parse=function(t,e){var n;return"string"==typeof t.url?n=t:"string"==typeof t&&(n={url:t}),!!n&&a.default.parse.call(this,n,e)},e.prototype.fetch=function(t,n,r){var a=this,l=this.ajaxSettings,u=l.success,d=l.error,c=this.buildRequestParams(t,n,r);return this.calendar.pushLoading(),s.default.construct(function(t,n){i.ajax(i.extend({},e.AJAX_DEFAULTS,l,{url:a.url,data:c,success:function(e,r,s){var l;a.calendar.popLoading(),e?(l=o.applyAll(u,a,[e,r,s]),i.isArray(l)&&(e=l),t(a.parseEventDefs(e))):n()},error:function(t,e,r){a.calendar.popLoading(),o.applyAll(d,a,[t,e,r]),n()}}))})},e.prototype.buildRequestParams=function(t,e,n){var r,o,s,a,l=this.calendar,u=this.ajaxSettings,d={};return r=this.startParam,null==r&&(r=l.opt("startParam")),o=this.endParam,null==o&&(o=l.opt("endParam")),s=this.timezoneParam,null==s&&(s=l.opt("timezoneParam")),a=i.isFunction(u.data)?u.data():u.data||{},i.extend(d,a),d[r]=t.format(),d[o]=e.format(),n&&"local"!==n&&(d[s]=n),d},e.prototype.getPrimitive=function(){return this.url},e.prototype.applyMiscProps=function(t){this.ajaxSettings=t},e.AJAX_DEFAULTS={dataType:"json",cache:!1},e}(a.default);e.default=l,l.defineStandardProps({url:!0,startParam:!0,endParam:!0,timezoneParam:!0})},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.items=t||[]}return t.prototype.proxyCall=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=[];return this.items.forEach(function(n){r.push(n[t].apply(n,e))}),r},t}();e.default=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=n(7),s=function(){function t(t,e){this.isFollowing=!1,this.isHidden=!1,this.isAnimating=!1,this.options=e=e||{},this.sourceEl=t,this.parentEl=e.parentEl?r(e.parentEl):t.parent()}return t.prototype.start=function(t){this.isFollowing||(this.isFollowing=!0,this.y0=i.getEvY(t),this.x0=i.getEvX(t),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),i.getEvIsTouch(t)?this.listenTo(r(document),"touchmove",this.handleMove):this.listenTo(r(document),"mousemove",this.handleMove))},t.prototype.stop=function(t,e){var n=this,i=this.options.revertDuration,o=function(){n.isAnimating=!1,n.removeElement(),n.top0=n.left0=null,e&&e()};this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,this.stopListeningTo(r(document)),t&&i&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:i,complete:o})):o())},t.prototype.getEl=function(){var t=this.el;return t||(t=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}),t.addClass("fc-unselectable"),t.appendTo(this.parentEl)),t},t.prototype.removeElement=function(){this.el&&(this.el.remove(),this.el=null)},t.prototype.updatePosition=function(){var t,e;this.getEl(),null==this.top0&&(t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},t.prototype.handleMove=function(t){this.topDelta=i.getEvY(t)-this.y0,this.leftDelta=i.getEvX(t)-this.x0,this.isHidden||this.updatePosition()},t.prototype.hide=function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},t.prototype.show=function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())},t}();e.default=s,o.default.mixInto(s)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=n(7),s=function(){function t(t){this.isHidden=!0,this.margin=10,this.options=t||{}}return t.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},t.prototype.hide=function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},t.prototype.render=function(){var t=this,e=this.options;this.el=r('<div class="fc-popover"/>').addClass(e.className||"").css({top:0,left:0}).append(e.content).appendTo(e.parentEl),this.el.on("click",".fc-close",function(){t.hide()}),e.autoHide&&this.listenTo(r(document),"mousedown",this.documentMousedown)},t.prototype.documentMousedown=function(t){this.el&&!r(t.target).closest(this.el).length&&this.hide()},t.prototype.removeElement=function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo(r(document),"mousedown")},t.prototype.position=function(){var t,e,n,o,s,a=this.options,l=this.el.offsetParent().offset(),u=this.el.outerWidth(),d=this.el.outerHeight(),c=r(window),p=i.getScrollParent(this.el);o=a.top||0,s=void 0!==a.left?a.left:void 0!==a.right?a.right-u:0,p.is(window)||p.is(document)?(p=c,t=0,e=0):(n=p.offset(),t=n.top,e=n.left),t+=c.scrollTop(),e+=c.scrollLeft(),!1!==a.viewportConstrain&&(o=Math.min(o,t+p.outerHeight()-d-this.margin),o=Math.max(o,t+this.margin),s=Math.min(s,e+p.outerWidth()-u-this.margin),s=Math.max(s,e+this.margin)),this.el.css({top:o-l.top,left:s-l.left})},t.prototype.trigger=function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))},t}();e.default=s,o.default.mixInto(s)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(13),i=function(){function t(){this.q=[],this.isPaused=!1,this.isRunning=!1}return t.prototype.queue=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.q.push.apply(this.q,t),this.tryStart()},t.prototype.pause=function(){this.isPaused=!0},t.prototype.resume=function(){this.isPaused=!1,this.tryStart()},t.prototype.getIsIdle=function(){return!this.isRunning&&!this.isPaused},t.prototype.tryStart=function(){!this.isRunning&&this.canRunNext()&&(this.isRunning=!0,this.trigger("start"),this.runRemaining())},t.prototype.canRunNext=function(){return!this.isPaused&&this.q.length},t.prototype.runRemaining=function(){var t,e,n=this;do{if(t=this.q.shift(),(e=this.runTask(t))&&e.then)return void e.then(function(){n.canRunNext()&&n.runRemaining()})}while(this.canRunNext());this.trigger("stop"),this.isRunning=!1,this.tryStart()},t.prototype.runTask=function(t){return t()},t}();e.default=i,r.default.mixInto(i)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(228),o=function(t){function e(e){var n=t.call(this)||this;return n.waitsByNamespace=e||{},n}return r.__extends(e,t),e.prototype.queue=function(t,e,n){var r,i={func:t,namespace:e,type:n};e&&(r=this.waitsByNamespace[e]),this.waitNamespace&&(e===this.waitNamespace&&null!=r?this.delayWait(r):(this.clearWait(),this.tryStart())),this.compoundTask(i)&&(this.waitNamespace||null==r?this.tryStart():this.startWait(e,r))},e.prototype.startWait=function(t,e){this.waitNamespace=t,this.spawnWait(e)},e.prototype.delayWait=function(t){clearTimeout(this.waitId),this.spawnWait(t)},e.prototype.spawnWait=function(t){var e=this;this.waitId=setTimeout(function(){e.waitNamespace=null,e.tryStart()},t)},e.prototype.clearWait=function(){this.waitNamespace&&(clearTimeout(this.waitId),this.waitId=null,this.waitNamespace=null)},e.prototype.canRunNext=function(){if(!t.prototype.canRunNext.call(this))return!1;if(this.waitNamespace){for(var e=this.q,n=0;n<e.length;n++)if(e[n].namespace!==this.waitNamespace)return!0;return!1}return!0},e.prototype.runTask=function(t){t.func()},e.prototype.compoundTask=function(t){var e,n,r=this.q,i=!0;if(t.namespace&&"destroy"===t.type)for(e=r.length-1;e>=0;e--)if(n=r[e],n.namespace===t.namespace)switch(n.type){case"init":i=!1;case"add":case"remove":r.splice(e,1)}return i&&r.push(t),i},e}(i.default);e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(51),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.setElement=function(t){this.el=t,this.bindGlobalHandlers(),this.renderSkeleton(),this.set("isInDom",!0)},e.prototype.removeElement=function(){this.unset("isInDom"),this.unrenderSkeleton(),this.unbindGlobalHandlers(),this.el.remove()},e.prototype.bindGlobalHandlers=function(){},e.prototype.unbindGlobalHandlers=function(){},e.prototype.renderSkeleton=function(){},e.prototype.unrenderSkeleton=function(){},e}(i.default);e.default=o},function(t,e,n){function r(t){var e,n,r,i=[];for(e in t)for(n=t[e].eventInstances,r=0;r<n.length;r++)i.push(n[r].toLegacy());return i}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(3),s=n(0),a=n(4),l=n(11),u=n(49),d=n(230),c=n(19),p=function(t){function e(n,r){var i=t.call(this)||this;return i.isRTL=!1,i.hitsNeededDepth=0,i.hasAllDayBusinessHours=!1,i.isDatesRendered=!1,n&&(i.view=n),r&&(i.options=r),i.uid=String(e.guid++),i.childrenByUid={},i.nextDayThreshold=s.duration(i.opt("nextDayThreshold")),i.isRTL=i.opt("isRTL"),i.fillRendererClass&&(i.fillRenderer=new i.fillRendererClass(i)),i.eventRendererClass&&(i.eventRenderer=new i.eventRendererClass(i,i.fillRenderer)),i.helperRendererClass&&i.eventRenderer&&(i.helperRenderer=new i.helperRendererClass(i,i.eventRenderer)),i.businessHourRendererClass&&i.fillRenderer&&(i.businessHourRenderer=new i.businessHourRendererClass(i,i.fillRenderer)),i}return i.__extends(e,t),e.prototype.addChild=function(t){return!this.childrenByUid[t.uid]&&(this.childrenByUid[t.uid]=t,!0)},e.prototype.removeChild=function(t){return!!this.childrenByUid[t.uid]&&(delete this.childrenByUid[t.uid],!0)},e.prototype.updateSize=function(t,e,n){this.callChildren("updateSize",arguments)},e.prototype.opt=function(t){return this._getView().opt(t)},e.prototype.publiclyTrigger=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this._getCalendar();return n.publiclyTrigger.apply(n,t)},e.prototype.hasPublicHandlers=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this._getCalendar();return n.hasPublicHandlers.apply(n,t)},e.prototype.executeDateRender=function(t){this.dateProfile=t,this.renderDates(t),this.isDatesRendered=!0,this.callChildren("executeDateRender",arguments)},e.prototype.executeDateUnrender=function(){this.callChildren("executeDateUnrender",arguments),this.dateProfile=null,this.unrenderDates(),this.isDatesRendered=!1},e.prototype.renderDates=function(t){},e.prototype.unrenderDates=function(){},e.prototype.getNowIndicatorUnit=function(){},e.prototype.renderNowIndicator=function(t){this.callChildren("renderNowIndicator",arguments)},e.prototype.unrenderNowIndicator=function(){this.callChildren("unrenderNowIndicator",arguments)},e.prototype.renderBusinessHours=function(t){this.businessHourRenderer&&this.businessHourRenderer.render(t),this.callChildren("renderBusinessHours",arguments)},e.prototype.unrenderBusinessHours=function(){this.callChildren("unrenderBusinessHours",arguments),this.businessHourRenderer&&this.businessHourRenderer.unrender()},e.prototype.executeEventRender=function(t){this.eventRenderer?(this.eventRenderer.rangeUpdated(),this.eventRenderer.render(t)):this.renderEvents&&this.renderEvents(r(t)),this.callChildren("executeEventRender",arguments)},e.prototype.executeEventUnrender=function(){this.callChildren("executeEventUnrender",arguments),this.eventRenderer?this.eventRenderer.unrender():this.destroyEvents&&this.destroyEvents()},e.prototype.getBusinessHourSegs=function(){var t=this.getOwnBusinessHourSegs();return this.iterChildren(function(e){t.push.apply(t,e.getBusinessHourSegs())}),t},e.prototype.getOwnBusinessHourSegs=function(){return this.businessHourRenderer?this.businessHourRenderer.getSegs():[]},e.prototype.getEventSegs=function(){var t=this.getOwnEventSegs();return this.iterChildren(function(e){t.push.apply(t,e.getEventSegs())}),t},e.prototype.getOwnEventSegs=function(){return this.eventRenderer?this.eventRenderer.getSegs():[]},e.prototype.triggerAfterEventsRendered=function(){this.triggerAfterEventSegsRendered(this.getEventSegs()),this.publiclyTrigger("eventAfterAllRender",{context:this,args:[this]})},e.prototype.triggerAfterEventSegsRendered=function(t){var e=this;this.hasPublicHandlers("eventAfterRender")&&t.forEach(function(t){var n;t.el&&(n=t.footprint.getEventLegacy(),e.publiclyTrigger("eventAfterRender",{context:n,args:[n,t.el,e]}))})},e.prototype.triggerBeforeEventsDestroyed=function(){this.triggerBeforeEventSegsDestroyed(this.getEventSegs())},e.prototype.triggerBeforeEventSegsDestroyed=function(t){var e=this;this.hasPublicHandlers("eventDestroy")&&t.forEach(function(t){var n;t.el&&(n=t.footprint.getEventLegacy(),e.publiclyTrigger("eventDestroy",{context:n,args:[n,t.el,e]}))})},e.prototype.showEventsWithId=function(t){this.getEventSegs().forEach(function(e){e.footprint.eventDef.id===t&&e.el&&e.el.css("visibility","")}),this.callChildren("showEventsWithId",arguments)},e.prototype.hideEventsWithId=function(t){this.getEventSegs().forEach(function(e){e.footprint.eventDef.id===t&&e.el&&e.el.css("visibility","hidden")}),this.callChildren("hideEventsWithId",arguments)},e.prototype.renderDrag=function(t,e,n){var r=!1;return this.iterChildren(function(i){i.renderDrag(t,e,n)&&(r=!0)}),r},e.prototype.unrenderDrag=function(){this.callChildren("unrenderDrag",arguments)},e.prototype.renderEventResize=function(t,e,n){this.callChildren("renderEventResize",arguments)},e.prototype.unrenderEventResize=function(){this.callChildren("unrenderEventResize",arguments)},e.prototype.renderSelectionFootprint=function(t){this.renderHighlight(t),this.callChildren("renderSelectionFootprint",arguments)},e.prototype.unrenderSelection=function(){this.unrenderHighlight(),this.callChildren("unrenderSelection",arguments)},e.prototype.renderHighlight=function(t){this.fillRenderer&&this.fillRenderer.renderFootprint("highlight",t,{getClasses:function(){return["fc-highlight"]}}),this.callChildren("renderHighlight",arguments)},e.prototype.unrenderHighlight=function(){this.fillRenderer&&this.fillRenderer.unrender("highlight"),this.callChildren("unrenderHighlight",arguments)},e.prototype.hitsNeeded=function(){this.hitsNeededDepth++||this.prepareHits(),this.callChildren("hitsNeeded",arguments)},e.prototype.hitsNotNeeded=function(){this.hitsNeededDepth&&!--this.hitsNeededDepth&&this.releaseHits(),this.callChildren("hitsNotNeeded",arguments)},e.prototype.prepareHits=function(){},e.prototype.releaseHits=function(){},e.prototype.queryHit=function(t,e){var n,r,i=this.childrenByUid;for(n in i)if(r=i[n].queryHit(t,e))break;return r},e.prototype.getSafeHitFootprint=function(t){var e=this.getHitFootprint(t);return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange)?e:null},e.prototype.getHitFootprint=function(t){},e.prototype.getHitEl=function(t){},e.prototype.eventRangesToEventFootprints=function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventRangeToEventFootprints(t[e]));return n},e.prototype.eventRangeToEventFootprints=function(t){return[c.eventRangeToEventFootprint(t)]},e.prototype.eventFootprintsToSegs=function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventFootprintToSegs(t[e]));return n},e.prototype.eventFootprintToSegs=function(t){var e,n,r,i=t.componentFootprint.unzonedRange;for(e=this.componentFootprintToSegs(t.componentFootprint),n=0;n<e.length;n++)r=e[n],i.isStart||(r.isStart=!1),i.isEnd||(r.isEnd=!1),r.footprint=t;return e},e.prototype.componentFootprintToSegs=function(t){return[]},e.prototype.callChildren=function(t,e){this.iterChildren(function(n){n[t].apply(n,e)})},e.prototype.iterChildren=function(t){var e,n=this.childrenByUid;for(e in n)t(n[e])},e.prototype._getCalendar=function(){var t=this;return t.calendar||t.view.calendar},e.prototype._getView=function(){return this.view},e.prototype._getDateProfile=function(){return this._getView().get("dateProfile")},e.prototype.buildGotoAnchorHtml=function(t,e,n){var r,i,s,u;return o.isPlainObject(t)?(r=t.date,i=t.type,s=t.forceOff):r=t,r=l.default(r),u={date:r.format("YYYY-MM-DD"),type:i||"day"},"string"==typeof e&&(n=e,e=null),e=e?" "+a.attrsToStr(e):"",n=n||"",!s&&this.opt("navLinks")?"<a"+e+' data-goto="'+a.htmlEscape(JSON.stringify(u))+'">'+n+"</a>":"<span"+e+">"+n+"</span>"},e.prototype.getAllDayHtml=function(){return this.opt("allDayHtml")||a.htmlEscape(this.opt("allDayText"))},e.prototype.getDayClasses=function(t,e){var n,r=this._getView(),i=[];return this.dateProfile.activeUnzonedRange.containsDate(t)?(i.push("fc-"+a.dayIDs[t.day()]),r.isDateInOtherMonth(t,this.dateProfile)&&i.push("fc-other-month"),n=r.calendar.getNow(),t.isSame(n,"day")?(i.push("fc-today"),!0!==e&&i.push(r.calendar.theme.getClass("today"))):t<n?i.push("fc-past"):i.push("fc-future")):i.push("fc-disabled-day"),i},e.prototype.formatRange=function(t,e,n,r){var i=t.end;return e&&(i=i.clone().subtract(1)),u.formatRange(t.start,i,n,r,this.isRTL)},e.prototype.currentRangeAs=function(t){return this._getDateProfile().currentUnzonedRange.as(t)},e.prototype.computeDayRange=function(t){var e=this._getCalendar(),n=e.msToUtcMoment(t.startMs,!0),r=e.msToUtcMoment(t.endMs),i=+r.time(),o=r.clone().stripTime();return i&&i>=this.nextDayThreshold&&o.add(1,"days"),o<=n&&(o=n.clone().add(1,"days")),{start:n,end:o}},e.prototype.isMultiDayRange=function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1},e.guid=0,e}(d.default);e.default=p},function(t,e,n){function r(t,e){return null==e?t:i.isFunction(e)?t.filter(e):(e+="",t.filter(function(t){return t.id==e||t._id===e}))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n(0),s=n(4),a=n(33),l=n(225),u=n(23),d=n(13),c=n(7),p=n(257),h=n(258),f=n(259),g=n(217),v=n(32),y=n(11),m=n(5),b=n(12),w=n(16),D=n(220),E=n(218),S=n(38),C=n(36),R=n(9),T=n(39),M=n(6),I=n(57),H=function(){function t(t,e){this.loadingLevel=0,this.ignoreUpdateViewSize=0,this.freezeContentHeightDepth=0,u.default.needed(),this.el=t,this.viewsByType={},this.optionsManager=new h.default(this,e),this.viewSpecManager=new f.default(this.optionsManager,this),this.initMomentInternals(),this.initCurrentDate(),this.initEventManager(),this.constraints=new g.default(this.eventManager,this),this.constructed()}return t.prototype.constructed=function(){},t.prototype.getView=function(){return this.view},t.prototype.publiclyTrigger=function(t,e){var n,r,o=this.opt(t);if(i.isPlainObject(e)?(n=e.context,r=e.args):i.isArray(e)&&(r=e),null==n&&(n=this.el[0]),r||(r=[]),this.triggerWith(t,n,r),o)return o.apply(n,r)},t.prototype.hasPublicHandlers=function(t){return this.hasHandlers(t)||this.opt(t)},t.prototype.option=function(t,e){var n;if("string"==typeof t){if(void 0===e)return this.optionsManager.get(t);n={},n[t]=e,this.optionsManager.add(n)}else"object"==typeof t&&this.optionsManager.add(t)},t.prototype.opt=function(t){return this.optionsManager.get(t)},t.prototype.instantiateView=function(t){var e=this.viewSpecManager.getViewSpec(t);if(!e)throw new Error('View type "'+t+'" is not valid');return new e.class(this,e)},t.prototype.isValidViewType=function(t){return Boolean(this.viewSpecManager.getViewSpec(t))},t.prototype.changeView=function(t,e){e&&(e.start&&e.end?this.optionsManager.recordOverrides({visibleRange:e}):this.currentDate=this.moment(e).stripZone()),this.renderView(t)},t.prototype.zoomTo=function(t,e){var n;e=e||"day",n=this.viewSpecManager.getViewSpec(e)||this.viewSpecManager.getUnitViewSpec(e),this.currentDate=t.clone(),this.renderView(n?n.type:null)},t.prototype.initCurrentDate=function(){var t=this.opt("defaultDate");this.currentDate=null!=t?this.moment(t).stripZone():this.getNow()},t.prototype.prev=function(){var t=this.view,e=t.dateProfileGenerator.buildPrev(t.get("dateProfile"));e.isValid&&(this.currentDate=e.date,this.renderView())},t.prototype.next=function(){var t=this.view,e=t.dateProfileGenerator.buildNext(t.get("dateProfile"));e.isValid&&(this.currentDate=e.date,this.renderView())},t.prototype.prevYear=function(){this.currentDate.add(-1,"years"),this.renderView()},t.prototype.nextYear=function(){this.currentDate.add(1,"years"),this.renderView()},t.prototype.today=function(){this.currentDate=this.getNow(),this.renderView()},t.prototype.gotoDate=function(t){this.currentDate=this.moment(t).stripZone(),this.renderView()},t.prototype.incrementDate=function(t){this.currentDate.add(o.duration(t)),this.renderView()},t.prototype.getDate=function(){return this.applyTimezone(this.currentDate)},t.prototype.pushLoading=function(){this.loadingLevel++||this.publiclyTrigger("loading",[!0,this.view])},t.prototype.popLoading=function(){--this.loadingLevel||this.publiclyTrigger("loading",[!1,this.view])},t.prototype.render=function(){this.contentEl?this.elementVisible()&&(this.calcSize(),this.updateViewSize()):this.initialRender()},t.prototype.initialRender=function(){var t=this,e=this.el;e.addClass("fc"),e.on("click.fc","a[data-goto]",function(e){var n=i(e.currentTarget),r=n.data("goto"),o=t.moment(r.date),a=r.type,l=t.view.opt("navLink"+s.capitaliseFirstLetter(a)+"Click");"function"==typeof l?l(o,e):("string"==typeof l&&(a=l),t.zoomTo(o,a))}),this.optionsManager.watch("settingTheme",["?theme","?themeSystem"],function(n){var r=I.getThemeSystemClass(n.themeSystem||n.theme),i=new r(t.optionsManager),o=i.getClass("widget");t.theme=i,o&&e.addClass(o)},function(){var n=t.theme.getClass("widget");t.theme=null,n&&e.removeClass(n)}),this.optionsManager.watch("settingBusinessHourGenerator",["?businessHours"],function(e){t.businessHourGenerator=new E.default(e.businessHours,t),t.view&&t.view.set("businessHourGenerator",t.businessHourGenerator)},function(){t.businessHourGenerator=null}),this.optionsManager.watch("applyingDirClasses",["?isRTL","?locale"],function(t){e.toggleClass("fc-ltr",!t.isRTL),e.toggleClass("fc-rtl",t.isRTL)}),this.contentEl=i("<div class='fc-view-container'/>").prependTo(e),this.initToolbars(),this.renderHeader(),this.renderFooter(),this.renderView(this.opt("defaultView")),this.opt("handleWindowResize")&&i(window).resize(this.windowResizeProxy=s.debounce(this.windowResize.bind(this),this.opt("windowResizeDelay")))},t.prototype.destroy=function(){this.view&&this.clearView(),this.toolbarsManager.proxyCall("removeElement"),this.contentEl.remove(),this.el.removeClass("fc fc-ltr fc-rtl"),this.optionsManager.unwatch("settingTheme"),this.optionsManager.unwatch("settingBusinessHourGenerator"),this.el.off(".fc"),this.windowResizeProxy&&(i(window).unbind("resize",this.windowResizeProxy),this.windowResizeProxy=null),u.default.unneeded()},t.prototype.elementVisible=function(){return this.el.is(":visible")},t.prototype.bindViewHandlers=function(t){var e=this;t.watch("titleForCalendar",["title"],function(n){t===e.view&&e.setToolbarsTitle(n.title)}),t.watch("dateProfileForCalendar",["dateProfile"],function(n){t===e.view&&(e.currentDate=n.dateProfile.date,e.updateToolbarButtons(n.dateProfile))})},t.prototype.unbindViewHandlers=function(t){t.unwatch("titleForCalendar"),t.unwatch("dateProfileForCalendar")},t.prototype.renderView=function(t){var e,n=this.view;this.freezeContentHeight(),n&&t&&n.type!==t&&this.clearView(),!this.view&&t&&(e=this.view=this.viewsByType[t]||(this.viewsByType[t]=this.instantiateView(t)),this.bindViewHandlers(e),e.startBatchRender(),e.setElement(i("<div class='fc-view fc-"+t+"-view' />").appendTo(this.contentEl)),this.toolbarsManager.proxyCall("activateButton",t)),this.view&&(this.view.get("businessHourGenerator")!==this.businessHourGenerator&&this.view.set("businessHourGenerator",this.businessHourGenerator),this.view.setDate(this.currentDate),e&&e.stopBatchRender()),this.thawContentHeight()},t.prototype.clearView=function(){var t=this.view;this.toolbarsManager.proxyCall("deactivateButton",t.type),this.unbindViewHandlers(t),t.removeElement(),t.unsetDate(),this.view=null},t.prototype.reinitView=function(){var t=this.view,e=t.queryScroll();this.freezeContentHeight(),this.clearView(),this.calcSize(),this.renderView(t.type),this.view.applyScroll(e),this.thawContentHeight()},t.prototype.getSuggestedViewHeight=function(){return null==this.suggestedViewHeight&&this.calcSize(),this.suggestedViewHeight},t.prototype.isHeightAuto=function(){return"auto"===this.opt("contentHeight")||"auto"===this.opt("height")},t.prototype.updateViewSize=function(t){void 0===t&&(t=!1);var e,n=this.view;if(!this.ignoreUpdateViewSize&&n)return t&&(this.calcSize(),e=n.queryScroll()),this.ignoreUpdateViewSize++,n.updateSize(this.getSuggestedViewHeight(),this.isHeightAuto(),t),this.ignoreUpdateViewSize--,t&&n.applyScroll(e),!0},t.prototype.calcSize=function(){this.elementVisible()&&this._calcSize()},t.prototype._calcSize=function(){var t=this.opt("contentHeight"),e=this.opt("height");this.suggestedViewHeight="number"==typeof t?t:"function"==typeof t?t():"number"==typeof e?e-this.queryToolbarsHeight():"function"==typeof e?e()-this.queryToolbarsHeight():"parent"===e?this.el.parent().height()-this.queryToolbarsHeight():Math.round(this.contentEl.width()/Math.max(this.opt("aspectRatio"),.5))},t.prototype.windowResize=function(t){t.target===window&&this.view&&this.view.isDatesRendered&&this.updateViewSize(!0)&&this.publiclyTrigger("windowResize",[this.view])},t.prototype.freezeContentHeight=function(){this.freezeContentHeightDepth++||this.forceFreezeContentHeight()},t.prototype.forceFreezeContentHeight=function(){this.contentEl.css({width:"100%",height:this.contentEl.height(),overflow:"hidden"})},t.prototype.thawContentHeight=function(){this.freezeContentHeightDepth--,this.contentEl.css({width:"",height:"",overflow:""}),this.freezeContentHeightDepth&&this.forceFreezeContentHeight()},t.prototype.initToolbars=function(){this.header=new p.default(this,this.computeHeaderOptions()),this.footer=new p.default(this,this.computeFooterOptions()),this.toolbarsManager=new l.default([this.header,this.footer])},t.prototype.computeHeaderOptions=function(){return{extraClasses:"fc-header-toolbar",layout:this.opt("header")}},t.prototype.computeFooterOptions=function(){return{extraClasses:"fc-footer-toolbar",layout:this.opt("footer")}},t.prototype.renderHeader=function(){var t=this.header;t.setToolbarOptions(this.computeHeaderOptions()),t.render(),t.el&&this.el.prepend(t.el)},t.prototype.renderFooter=function(){var t=this.footer;t.setToolbarOptions(this.computeFooterOptions()),t.render(),t.el&&this.el.append(t.el)},t.prototype.setToolbarsTitle=function(t){this.toolbarsManager.proxyCall("updateTitle",t)},t.prototype.updateToolbarButtons=function(t){var e=this.getNow(),n=this.view,r=n.dateProfileGenerator.build(e),i=n.dateProfileGenerator.buildPrev(n.get("dateProfile")),o=n.dateProfileGenerator.buildNext(n.get("dateProfile"));this.toolbarsManager.proxyCall(r.isValid&&!t.currentUnzonedRange.containsDate(e)?"enableButton":"disableButton","today"),this.toolbarsManager.proxyCall(i.isValid?"enableButton":"disableButton","prev"),this.toolbarsManager.proxyCall(o.isValid?"enableButton":"disableButton","next")},t.prototype.queryToolbarsHeight=function(){return this.toolbarsManager.items.reduce(function(t,e){return t+(e.el?e.el.outerHeight(!0):0)},0)},t.prototype.select=function(t,e){this.view.select(this.buildSelectFootprint.apply(this,arguments))},t.prototype.unselect=function(){this.view&&this.view.unselect()},t.prototype.buildSelectFootprint=function(t,e){var n,r=this.moment(t).stripZone();return n=e?this.moment(e).stripZone():r.hasTime()?r.clone().add(this.defaultTimedEventDuration):r.clone().add(this.defaultAllDayEventDuration),new b.default(new m.default(r,n),!r.hasTime())},t.prototype.initMomentInternals=function(){var t=this;this.defaultAllDayEventDuration=o.duration(this.opt("defaultAllDayEventDuration")),this.defaultTimedEventDuration=o.duration(this.opt("defaultTimedEventDuration")),this.optionsManager.watch("buildingMomentLocale",["?locale","?monthNames","?monthNamesShort","?dayNames","?dayNamesShort","?firstDay","?weekNumberCalculation"],function(e){var n,r=e.weekNumberCalculation,i=e.firstDay;"iso"===r&&(r="ISO");var o=Object.create(v.getMomentLocaleData(e.locale));e.monthNames&&(o._months=e.monthNames),e.monthNamesShort&&(o._monthsShort=e.monthNamesShort),e.dayNames&&(o._weekdays=e.dayNames),e.dayNamesShort&&(o._weekdaysShort=e.dayNamesShort),null==i&&"ISO"===r&&(i=1),null!=i&&(n=Object.create(o._week),n.dow=i,o._week=n),"ISO"!==r&&"local"!==r&&"function"!=typeof r||(o._fullCalendar_weekCalc=r),t.localeData=o,t.currentDate&&t.localizeMoment(t.currentDate)})},t.prototype.moment=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n;return"local"===this.opt("timezone")?(n=y.default.apply(null,t),n.hasTime()&&n.local()):n="UTC"===this.opt("timezone")?y.default.utc.apply(null,t):y.default.parseZone.apply(null,t),this.localizeMoment(n),n},t.prototype.msToMoment=function(t,e){var n=y.default.utc(t);return e?n.stripTime():n=this.applyTimezone(n),this.localizeMoment(n),n},
    t.prototype.msToUtcMoment=function(t,e){var n=y.default.utc(t);return e&&n.stripTime(),this.localizeMoment(n),n},t.prototype.localizeMoment=function(t){t._locale=this.localeData},t.prototype.getIsAmbigTimezone=function(){return"local"!==this.opt("timezone")&&"UTC"!==this.opt("timezone")},t.prototype.applyTimezone=function(t){if(!t.hasTime())return t.clone();var e,n=this.moment(t.toArray()),r=t.time().asMilliseconds()-n.time().asMilliseconds();return r&&(e=n.clone().add(r),t.time().asMilliseconds()-e.time().asMilliseconds()==0&&(n=e)),n},t.prototype.footprintToDateProfile=function(t,e){void 0===e&&(e=!1);var n,r=y.default.utc(t.unzonedRange.startMs);return e||(n=y.default.utc(t.unzonedRange.endMs)),t.isAllDay?(r.stripTime(),n&&n.stripTime()):(r=this.applyTimezone(r),n&&(n=this.applyTimezone(n))),this.localizeMoment(r),n&&this.localizeMoment(n),new w.default(r,n,this)},t.prototype.getNow=function(){var t=this.opt("now");return"function"==typeof t&&(t=t()),this.moment(t).stripZone()},t.prototype.humanizeDuration=function(t){return t.locale(this.opt("locale")).humanize()},t.prototype.parseUnzonedRange=function(t){var e=null,n=null;return t.start&&(e=this.moment(t.start).stripZone()),t.end&&(n=this.moment(t.end).stripZone()),e||n?e&&n&&n.isBefore(e)?null:new m.default(e,n):null},t.prototype.initEventManager=function(){var t=this,e=new D.default(this),n=this.opt("eventSources")||[],r=this.opt("events");this.eventManager=e,r&&n.unshift(r),e.on("release",function(e){t.trigger("eventsReset",e)}),e.freeze(),n.forEach(function(n){var r=S.default.parse(n,t);r&&e.addSource(r)}),e.thaw()},t.prototype.requestEvents=function(t,e){return this.eventManager.requestEvents(t,e,this.opt("timezone"),!this.opt("lazyFetching"))},t.prototype.getEventEnd=function(t){return t.end?t.end.clone():this.getDefaultEventEnd(t.allDay,t.start)},t.prototype.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(this.defaultAllDayEventDuration):n.add(this.defaultTimedEventDuration),this.getIsAmbigTimezone()&&n.stripZone(),n},t.prototype.rerenderEvents=function(){this.view.flash("displayingEvents")},t.prototype.refetchEvents=function(){this.eventManager.refetchAllSources()},t.prototype.renderEvents=function(t,e){this.eventManager.freeze();for(var n=0;n<t.length;n++)this.renderEvent(t[n],e);this.eventManager.thaw()},t.prototype.renderEvent=function(t,e){void 0===e&&(e=!1);var n=this.eventManager,r=C.default.parse(t,t.source||n.stickySource);r&&n.addEventDef(r,e)},t.prototype.removeEvents=function(t){var e,n,i=this.eventManager,o=[],s={};if(null==t)i.removeAllEventDefs();else{for(i.getEventInstances().forEach(function(t){o.push(t.toLegacy())}),o=r(o,t),n=0;n<o.length;n++)e=this.eventManager.getEventDefByUid(o[n]._id),s[e.id]=!0;i.freeze();for(n in s)i.removeEventDefsById(n);i.thaw()}},t.prototype.clientEvents=function(t){var e=[];return this.eventManager.getEventInstances().forEach(function(t){e.push(t.toLegacy())}),r(e,t)},t.prototype.updateEvents=function(t){this.eventManager.freeze();for(var e=0;e<t.length;e++)this.updateEvent(t[e]);this.eventManager.thaw()},t.prototype.updateEvent=function(t){var e,n,r=this.eventManager.getEventDefByUid(t._id);r instanceof R.default&&(e=r.buildInstance(),n=T.default.createFromRawProps(e,t,null),this.eventManager.mutateEventsWithId(r.id,n))},t.prototype.getEventSources=function(){return this.eventManager.otherSources.slice()},t.prototype.getEventSourceById=function(t){return this.eventManager.getSourceById(M.default.normalizeId(t))},t.prototype.addEventSource=function(t){var e=S.default.parse(t,this);e&&this.eventManager.addSource(e)},t.prototype.removeEventSources=function(t){var e,n,r=this.eventManager;if(null==t)this.eventManager.removeAllSources();else{for(e=r.multiQuerySources(t),r.freeze(),n=0;n<e.length;n++)r.removeSource(e[n]);r.thaw()}},t.prototype.removeEventSource=function(t){var e,n=this.eventManager,r=n.querySources(t);for(n.freeze(),e=0;e<r.length;e++)n.removeSource(r[e]);n.thaw()},t.prototype.refetchEventSources=function(t){var e,n=this.eventManager,r=n.multiQuerySources(t);for(n.freeze(),e=0;e<r.length;e++)n.refetchSource(r[e]);n.thaw()},t.defaults=a.globalDefaults,t.englishDefaults=a.englishDefaults,t.rtlDefaults=a.rtlDefaults,t}();e.default=H,d.default.mixInto(H),c.default.mixInto(H)},function(t,e,n){function r(t){var e,n,r,i,l=a.dataAttrPrefix;return l&&(l+="-"),e=t.data(l+"event")||null,e&&(e="object"==typeof e?o.extend({},e):{},n=e.start,null==n&&(n=e.time),r=e.duration,i=e.stick,delete e.start,delete e.time,delete e.duration,delete e.stick),null==n&&(n=t.data(l+"start")),null==n&&(n=t.data(l+"time")),null==r&&(r=t.data(l+"duration")),null==i&&(i=t.data(l+"stick")),n=null!=n?s.duration(n):null,r=null!=r?s.duration(r):null,i=Boolean(i),{eventProps:e,startTime:n,duration:r,stick:i}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(3),s=n(0),a=n(18),l=n(4),u=n(11),d=n(7),c=n(17),p=n(9),h=n(20),f=n(6),g=n(14),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isDragging=!1,e}return i.__extends(e,t),e.prototype.end=function(){this.dragListener&&this.dragListener.endInteraction()},e.prototype.bindToDocument=function(){this.listenTo(o(document),{dragstart:this.handleDragStart,sortstart:this.handleDragStart})},e.prototype.unbindFromDocument=function(){this.stopListeningTo(o(document))},e.prototype.handleDragStart=function(t,e){var n,r;this.opt("droppable")&&(n=o((e?e.item:null)||t.target),r=this.opt("dropAccept"),(o.isFunction(r)?r.call(n[0],n):n.is(r))&&(this.isDragging||this.listenToExternalDrag(n,t,e)))},e.prototype.listenToExternalDrag=function(t,e,n){var i,o=this,s=this.component,a=this.view,u=r(t);(this.dragListener=new c.default(s,{interactionStart:function(){o.isDragging=!0},hitOver:function(t){var e,n=!0,r=t.component.getSafeHitFootprint(t);r?(i=o.computeExternalDrop(r,u),i?(e=new h.default(i.buildInstances()),n=u.eventProps?s.isEventInstanceGroupAllowed(e):s.isExternalInstanceGroupAllowed(e)):n=!1):n=!1,n||(i=null,l.disableCursor()),i&&s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.dateProfile.renderUnzonedRange,a.calendar)))},hitOut:function(){i=null},hitDone:function(){l.enableCursor(),s.unrenderDrag()},interactionEnd:function(e){i&&a.reportExternalDrop(i,Boolean(u.eventProps),Boolean(u.stick),t,e,n),o.isDragging=!1,o.dragListener=null}})).startDrag(e)},e.prototype.computeExternalDrop=function(t,e){var n,r=this.view.calendar,i=u.default.utc(t.unzonedRange.startMs).stripZone();return t.isAllDay&&(e.startTime?i.time(e.startTime):i.stripTime()),e.duration&&(n=i.clone().add(e.duration)),i=r.applyTimezone(i),n&&(n=r.applyTimezone(n)),p.default.parse(o.extend({},e.eventProps,{start:i,end:n}),new f.default(r))},e}(g.default);e.default=v,d.default.mixInto(v),a.dataAttrPrefix=""},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(39),a=n(40),l=n(17),u=n(14),d=function(t){function e(e,n){var r=t.call(this,e)||this;return r.isResizing=!1,r.eventPointing=n,r}return r.__extends(e,t),e.prototype.end=function(){this.dragListener&&this.dragListener.endInteraction()},e.prototype.bindToEl=function(t){var e=this.component;e.bindSegHandlerToEl(t,"mousedown",this.handleMouseDown.bind(this)),e.bindSegHandlerToEl(t,"touchstart",this.handleTouchStart.bind(this))},e.prototype.handleMouseDown=function(t,e){this.component.canStartResize(t,e)&&this.buildDragListener(t,i(e.target).is(".fc-start-resizer")).startInteraction(e,{distance:5})},e.prototype.handleTouchStart=function(t,e){this.component.canStartResize(t,e)&&this.buildDragListener(t,i(e.target).is(".fc-start-resizer")).startInteraction(e)},e.prototype.buildDragListener=function(t,e){var n,r,i=this,s=this.component,a=this.view,u=a.calendar,d=u.eventManager,c=t.el,p=t.footprint.eventDef,h=t.footprint.eventInstance;return this.dragListener=new l.default(s,{scroll:this.opt("dragScroll"),subjectEl:c,interactionStart:function(){n=!1},dragStart:function(e){n=!0,i.eventPointing.handleMouseout(t,e),i.segResizeStart(t,e)},hitOver:function(n,l,c){var h,f=!0,g=s.getSafeHitFootprint(c),v=s.getSafeHitFootprint(n);g&&v?(r=e?i.computeEventStartResizeMutation(g,v,t.footprint):i.computeEventEndResizeMutation(g,v,t.footprint),r?(h=d.buildMutatedEventInstanceGroup(p.id,r),f=s.isEventInstanceGroupAllowed(h)):f=!1):f=!1,f?r.isEmpty()&&(r=null):(r=null,o.disableCursor()),r&&(a.hideEventsWithId(t.footprint.eventDef.id),a.renderEventResize(s.eventRangesToEventFootprints(h.sliceRenderRanges(s.dateProfile.renderUnzonedRange,u)),t))},hitOut:function(){r=null},hitDone:function(){a.unrenderEventResize(t),a.showEventsWithId(t.footprint.eventDef.id),o.enableCursor()},interactionEnd:function(e){n&&i.segResizeStop(t,e),r&&a.reportEventResize(h,r,c,e),i.dragListener=null}})},e.prototype.segResizeStart=function(t,e){this.isResizing=!0,this.component.publiclyTrigger("eventResizeStart",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},e.prototype.segResizeStop=function(t,e){this.isResizing=!1,this.component.publiclyTrigger("eventResizeStop",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},e.prototype.computeEventStartResizeMutation=function(t,e,n){var r,i,o=n.componentFootprint.unzonedRange,l=this.component.diffDates(e.unzonedRange.getStart(),t.unzonedRange.getStart());return o.getStart().add(l)<o.getEnd()&&(r=new a.default,r.setStartDelta(l),i=new s.default,i.setDateMutation(r),i)},e.prototype.computeEventEndResizeMutation=function(t,e,n){var r,i,o=n.componentFootprint.unzonedRange,l=this.component.diffDates(e.unzonedRange.getEnd(),t.unzonedRange.getEnd());return o.getEnd().add(l)>o.getStart()&&(r=new a.default,r.setEndDelta(l),i=new s.default,i.setDateMutation(r),i)},e}(u.default);e.default=d},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=n(39),s=n(40),a=n(59),l=n(17),u=n(226),d=n(14),c=function(t){function e(e,n){var r=t.call(this,e)||this;return r.isDragging=!1,r.eventPointing=n,r}return r.__extends(e,t),e.prototype.end=function(){this.dragListener&&this.dragListener.endInteraction()},e.prototype.getSelectionDelay=function(){var t=this.opt("eventLongPressDelay");return null==t&&(t=this.opt("longPressDelay")),t},e.prototype.bindToEl=function(t){var e=this.component;e.bindSegHandlerToEl(t,"mousedown",this.handleMousedown.bind(this)),e.bindSegHandlerToEl(t,"touchstart",this.handleTouchStart.bind(this))},e.prototype.handleMousedown=function(t,e){!this.component.shouldIgnoreMouse()&&this.component.canStartDrag(t,e)&&this.buildDragListener(t).startInteraction(e,{distance:5})},e.prototype.handleTouchStart=function(t,e){var n=this.component,r={delay:this.view.isEventDefSelected(t.footprint.eventDef)?0:this.getSelectionDelay()};n.canStartDrag(t,e)?this.buildDragListener(t).startInteraction(e,r):n.canStartSelection(t,e)&&this.buildSelectListener(t).startInteraction(e,r)},e.prototype.buildSelectListener=function(t){var e=this,n=this.view,r=t.footprint.eventDef,i=t.footprint.eventInstance;if(this.dragListener)return this.dragListener;var o=this.dragListener=new a.default({dragStart:function(t){o.isTouch&&!n.isEventDefSelected(r)&&i&&n.selectEventInstance(i)},interactionEnd:function(t){e.dragListener=null}});return o},e.prototype.buildDragListener=function(t){var e,n,r,o=this,s=this.component,a=this.view,d=a.calendar,c=d.eventManager,p=t.el,h=t.footprint.eventDef,f=t.footprint.eventInstance;if(this.dragListener)return this.dragListener;var g=this.dragListener=new l.default(a,{scroll:this.opt("dragScroll"),subjectEl:p,subjectCenter:!0,interactionStart:function(r){t.component=s,e=!1,n=new u.default(t.el,{additionalClass:"fc-dragging",parentEl:a.el,opacity:g.isTouch?null:o.opt("dragOpacity"),revertDuration:o.opt("dragRevertDuration"),zIndex:2}),n.hide(),n.start(r)},dragStart:function(n){g.isTouch&&!a.isEventDefSelected(h)&&f&&a.selectEventInstance(f),e=!0,o.eventPointing.handleMouseout(t,n),o.segDragStart(t,n),a.hideEventsWithId(t.footprint.eventDef.id)},hitOver:function(e,l,u){var p,f,v,y=!0;t.hit&&(u=t.hit),p=u.component.getSafeHitFootprint(u),f=e.component.getSafeHitFootprint(e),p&&f?(r=o.computeEventDropMutation(p,f,h),r?(v=c.buildMutatedEventInstanceGroup(h.id,r),y=s.isEventInstanceGroupAllowed(v)):y=!1):y=!1,y||(r=null,i.disableCursor()),r&&a.renderDrag(s.eventRangesToEventFootprints(v.sliceRenderRanges(s.dateProfile.renderUnzonedRange,d)),t,g.isTouch)?n.hide():n.show(),l&&(r=null)},hitOut:function(){a.unrenderDrag(t),n.show(),r=null},hitDone:function(){i.enableCursor()},interactionEnd:function(i){delete t.component,n.stop(!r,function(){e&&(a.unrenderDrag(t),o.segDragStop(t,i)),a.showEventsWithId(t.footprint.eventDef.id),r&&a.reportEventDrop(f,r,p,i)}),o.dragListener=null}});return g},e.prototype.segDragStart=function(t,e){this.isDragging=!0,this.component.publiclyTrigger("eventDragStart",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},e.prototype.segDragStop=function(t,e){this.isDragging=!1,this.component.publiclyTrigger("eventDragStop",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},e.prototype.computeEventDropMutation=function(t,e,n){var r=new o.default;return r.setDateMutation(this.computeEventDateMutation(t,e)),r},e.prototype.computeEventDateMutation=function(t,e){var n,r,i=t.unzonedRange.getStart(),o=e.unzonedRange.getStart(),a=!1,l=!1,u=!1;return t.isAllDay!==e.isAllDay&&(a=!0,e.isAllDay?(u=!0,i.stripTime()):l=!0),n=this.component.diffDates(o,i),r=new s.default,r.clearEnd=a,r.forceTimed=l,r.forceAllDay=u,r.setDateDelta(n),r},e}(d.default);e.default=c},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=n(17),s=n(12),a=n(5),l=n(14),u=function(t){function e(e){var n=t.call(this,e)||this;return n.dragListener=n.buildDragListener(),n}return r.__extends(e,t),e.prototype.end=function(){this.dragListener.endInteraction()},e.prototype.getDelay=function(){var t=this.opt("selectLongPressDelay");return null==t&&(t=this.opt("longPressDelay")),t},e.prototype.bindToEl=function(t){var e=this,n=this.component,r=this.dragListener;n.bindDateHandlerToEl(t,"mousedown",function(t){e.opt("selectable")&&!n.shouldIgnoreMouse()&&r.startInteraction(t,{distance:e.opt("selectMinDistance")})}),n.bindDateHandlerToEl(t,"touchstart",function(t){e.opt("selectable")&&!n.shouldIgnoreTouch()&&r.startInteraction(t,{delay:e.getDelay()})}),i.preventSelection(t)},e.prototype.buildDragListener=function(){var t,e=this,n=this.component;return new o.default(n,{scroll:this.opt("dragScroll"),interactionStart:function(){t=null},dragStart:function(t){e.view.unselect(t)},hitOver:function(r,o,s){var a,l;s&&(a=n.getSafeHitFootprint(s),l=n.getSafeHitFootprint(r),t=a&&l?e.computeSelection(a,l):null,t?n.renderSelectionFootprint(t):!1===t&&i.disableCursor())},hitOut:function(){t=null,n.unrenderSelection()},hitDone:function(){i.enableCursor()},interactionEnd:function(n,r){!r&&t&&e.view.reportSelection(t,n)}})},e.prototype.computeSelection=function(t,e){var n=this.computeSelectionFootprint(t,e);return!(n&&!this.isSelectionFootprintAllowed(n))&&n},e.prototype.computeSelectionFootprint=function(t,e){var n=[t.unzonedRange.startMs,t.unzonedRange.endMs,e.unzonedRange.startMs,e.unzonedRange.endMs];return n.sort(i.compareNumbers),new s.default(new a.default(n[0],n[3]),t.isAllDay)},e.prototype.isSelectionFootprintAllowed=function(t){return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange)&&this.view.calendar.constraints.isSelectionFootprintAllowed(t)},e}(l.default);e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(17),o=n(14),s=function(t){function e(e){var n=t.call(this,e)||this;return n.dragListener=n.buildDragListener(),n}return r.__extends(e,t),e.prototype.end=function(){this.dragListener.endInteraction()},e.prototype.bindToEl=function(t){var e=this.component,n=this.dragListener;e.bindDateHandlerToEl(t,"mousedown",function(t){e.shouldIgnoreMouse()||n.startInteraction(t)}),e.bindDateHandlerToEl(t,"touchstart",function(t){e.shouldIgnoreTouch()||n.startInteraction(t)})},e.prototype.buildDragListener=function(){var t,e=this,n=this.component,r=new i.default(n,{scroll:this.opt("dragScroll"),interactionStart:function(){t=r.origHit},hitOver:function(e,n,r){n||(t=null)},hitOut:function(){t=null},interactionEnd:function(r,i){var o;!i&&t&&(o=n.getSafeHitFootprint(t))&&e.view.triggerDayClick(o,n.getHitEl(t),r)}});return r.shouldCancelTouchScroll=!1,r.scrollAlwaysKills=!0,r},e}(o.default);e.default=s},function(t,e,n){function r(t){var e,n=[],r=[];for(e=0;e<t.length;e++)t[e].componentFootprint.isAllDay?n.push(t[e]):r.push(t[e]);return{allDay:n,timed:r}}Object.defineProperty(e,"__esModule",{value:!0});var i,o,s=n(2),a=n(0),l=n(3),u=n(4),d=n(41),c=n(43),p=n(239),h=n(66),f=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.usesMinMaxTime=!0,r.timeGrid=r.instantiateTimeGrid(),r.addChild(r.timeGrid),r.opt("allDaySlot")&&(r.dayGrid=r.instantiateDayGrid(),r.addChild(r.dayGrid)),r.scroller=new d.default({overflowX:"hidden",overflowY:"auto"}),r}return s.__extends(e,t),e.prototype.instantiateTimeGrid=function(){var t=new this.timeGridClass(this);return u.copyOwnProps(i,t),t},e.prototype.instantiateDayGrid=function(){var t=new this.dayGridClass(this);return u.copyOwnProps(o,t),t},e.prototype.renderSkeleton=function(){var t,e;this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.scroller.render(),t=this.scroller.el.addClass("fc-time-grid-container"),e=l('<div class="fc-time-grid" />').appendTo(t),this.el.find(".fc-body > tr > td").append(t),this.timeGrid.headContainerEl=this.el.find(".fc-head-container"),this.timeGrid.setElement(e),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight())},e.prototype.unrenderSkeleton=function(){this.timeGrid.removeElement(),this.dayGrid&&this.dayGrid.removeElement(),this.scroller.destroy()},e.prototype.renderSkeletonHtml=function(){var t=this.calendar.theme;return'<table class="'+t.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+t.getClass("widgetHeader")+'"/>':"")+"</td></tr></tbody></table>"},e.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},e.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},e.prototype.updateSize=function(e,n,r){var i,o,s;if(t.prototype.updateSize.call(this,e,n,r),this.axisWidth=u.matchCellWidths(this.el.find(".fc-axis")),!this.timeGrid.colEls)return void(n||(o=this.computeScrollerHeight(e),this.scroller.setHeight(o)));var a=this.el.find(".fc-row:not(.fc-scroller *)");this.timeGrid.bottomRuleEl.hide(),this.scroller.clear(),u.uncompensateScroll(a),this.dayGrid&&(this.dayGrid.removeSegPopover(),i=this.opt("eventLimit"),i&&"number"!=typeof i&&(i=5),i&&this.dayGrid.limitRows(i)),n||(o=this.computeScrollerHeight(e),this.scroller.setHeight(o),s=this.scroller.getScrollbarWidths(),(s.left||s.right)&&(u.compensateScroll(a,s),o=this.computeScrollerHeight(e),this.scroller.setHeight(o)),this.scroller.lockOverflow(s),this.timeGrid.getTotalSlatHeight()<o&&this.timeGrid.bottomRuleEl.show())},e.prototype.computeScrollerHeight=function(t){return t-u.subtractInnerElHeight(this.el,this.scroller.el)},e.prototype.computeInitialDateScroll=function(){var t=a.duration(this.opt("scrollTime")),e=this.timeGrid.computeTimeTop(t);return e=Math.ceil(e),e&&e++,{top:e}},e.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},e.prototype.applyDateScroll=function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},e.prototype.getHitFootprint=function(t){return t.component.getHitFootprint(t)},e.prototype.getHitEl=function(t){return t.component.getHitEl(t)},e.prototype.executeEventRender=function(t){var e,n,r={},i={};for(e in t)n=t[e],n.getEventDef().isAllDay()?r[e]=n:i[e]=n;this.timeGrid.executeEventRender(i),this.dayGrid&&this.dayGrid.executeEventRender(r)},e.prototype.renderDrag=function(t,e,n){var i=r(t),o=!1;return o=this.timeGrid.renderDrag(i.timed,e,n),this.dayGrid&&(o=this.dayGrid.renderDrag(i.allDay,e,n)||o),o},e.prototype.renderEventResize=function(t,e,n){var i=r(t);this.timeGrid.renderEventResize(i.timed,e,n),this.dayGrid&&this.dayGrid.renderEventResize(i.allDay,e,n)},e.prototype.renderSelectionFootprint=function(t){t.isAllDay?this.dayGrid&&this.dayGrid.renderSelectionFootprint(t):this.timeGrid.renderSelectionFootprint(t)},e}(c.default);e.default=f,f.prototype.timeGridClass=p.default,f.prototype.dayGridClass=h.default,i={renderHeadIntroHtml:function(){var t,e=this.view,n=e.calendar,r=n.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs,!0);return this.opt("weekNumbers")?(t=r.format(this.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+n.theme.getClass("widgetHeader")+'" '+e.axisStyleAttr()+">"+e.buildGotoAnchorHtml({date:r,type:"week",forceOff:this.colCnt>1},u.htmlEscape(t))+"</th>"):'<th class="fc-axis '+n.theme.getClass("widgetHeader")+'" '+e.axisStyleAttr()+"></th>"},renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.calendar.theme.getClass("widgetContent")+'" '+t.axisStyleAttr()+"></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},o={renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.calendar.theme.getClass("widgetContent")+'" '+t.axisStyleAttr()+"><span>"+t.getAllDayHtml()+"</span></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(0),s=n(4),a=n(42),l=n(61),u=n(65),d=n(60),c=n(58),p=n(5),h=n(12),f=n(240),g=n(241),v=n(242),y=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],m=function(t){function e(e){var n=t.call(this,e)||this;return n.processOptions(),n}return r.__extends(e,t),e.prototype.componentFootprintToSegs=function(t){var e,n=this.sliceRangeByTimes(t.unzonedRange);for(e=0;e<n.length;e++)this.isRTL?n[e].col=this.daysPerRow-1-n[e].dayIndex:n[e].col=n[e].dayIndex;return n},e.prototype.sliceRangeByTimes=function(t){var e,n,r=[];for(n=0;n<this.daysPerRow;n++)(e=t.intersect(this.dayRanges[n]))&&r.push({startMs:e.startMs,endMs:e.endMs,isStart:e.isStart,isEnd:e.isEnd,dayIndex:n});return r},e.prototype.processOptions=function(){var t,e=this.opt("slotDuration"),n=this.opt("snapDuration");e=o.duration(e),n=n?o.duration(n):e,this.slotDuration=e,this.snapDuration=n,this.snapsPerSlot=e/n,t=this.opt("slotLabelFormat"),i.isArray(t)&&(t=t[t.length-1]),this.labelFormat=t||this.opt("smallTimeFormat"),t=this.opt("slotLabelInterval"),this.labelInterval=t?o.duration(t):this.computeLabelInterval(e)},e.prototype.computeLabelInterval=function(t){var e,n,r;for(e=y.length-1;e>=0;e--)if(n=o.duration(y[e]),r=s.divideDurationByDuration(n,t),s.isInt(r)&&r>1)return n;return o.duration(t)},e.prototype.renderDates=function(t){this.dateProfile=t,this.updateDayTable(),this.renderSlats(),this.renderColumns()},e.prototype.unrenderDates=function(){this.unrenderColumns()},e.prototype.renderSkeleton=function(){var t=this.view.calendar.theme;this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+t.getClass("widgetHeader")+'" style="display:none" />'),this.bottomRuleEl=this.el.find("hr")},e.prototype.renderSlats=function(){var t=this.view.calendar.theme;this.slatContainerEl=this.el.find("> .fc-slats").html('<table class="'+t.getClass("tableGrid")+'">'+this.renderSlatRowHtml()+"</table>"),this.slatEls=this.slatContainerEl.find("tr"),this.slatCoordCache=new c.default({els:this.slatEls,isVertical:!0})},e.prototype.renderSlatRowHtml=function(){for(var t,e,n,r=this.view,i=r.calendar,a=i.theme,l=this.isRTL,u=this.dateProfile,d="",c=o.duration(+u.minTime),p=o.duration(0);c<u.maxTime;)t=i.msToUtcMoment(u.renderUnzonedRange.startMs).time(c),e=s.isInt(s.divideDurationByDuration(p,this.labelInterval)),n='<td class="fc-axis fc-time '+a.getClass("widgetContent")+'" '+r.axisStyleAttr()+">"+(e?"<span>"+s.htmlEscape(t.format(this.labelFormat))+"</span>":"")+"</td>",d+='<tr data-time="'+t.format("HH:mm:ss")+'"'+(e?"":' class="fc-minor"')+">"+(l?"":n)+'<td class="'+a.getClass("widgetContent")+'"/>'+(l?n:"")+"</tr>",c.add(this.slotDuration),p.add(this.slotDuration);return d},e.prototype.renderColumns=function(){var t=this.dateProfile,e=this.view.calendar.theme;this.dayRanges=this.dayDates.map(function(e){return new p.default(e.clone().add(t.minTime),e.clone().add(t.maxTime))}),this.headContainerEl&&this.headContainerEl.html(this.renderHeadHtml()),this.el.find("> .fc-bg").html('<table class="'+e.getClass("tableGrid")+'">'+this.renderBgTrHtml(0)+"</table>"),this.colEls=this.el.find(".fc-day, .fc-disabled-day"),this.colCoordCache=new c.default({els:this.colEls,isHorizontal:!0}),this.renderContentSkeleton()},e.prototype.unrenderColumns=function(){this.unrenderContentSkeleton()},e.prototype.renderContentSkeleton=function(){var t,e,n="";for(t=0;t<this.colCnt;t++)n+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';e=this.contentSkeletonEl=i('<div class="fc-content-skeleton"><table><tr>'+n+"</tr></table></div>"),this.colContainerEls=e.find(".fc-content-col"),this.helperContainerEls=e.find(".fc-helper-container"),this.fgContainerEls=e.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=e.find(".fc-bgevent-container"),this.highlightContainerEls=e.find(".fc-highlight-container"),this.businessContainerEls=e.find(".fc-business-container"),this.bookendCells(e.find("tr")),this.el.append(e)},e.prototype.unrenderContentSkeleton=function(){this.contentSkeletonEl&&(this.contentSkeletonEl.remove(),this.contentSkeletonEl=null,this.colContainerEls=null,this.helperContainerEls=null,this.fgContainerEls=null,this.bgContainerEls=null,this.highlightContainerEls=null,this.businessContainerEls=null)},e.prototype.groupSegsByCol=function(t){var e,n=[];for(e=0;e<this.colCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].col].push(t[e]);return n},e.prototype.attachSegsByCol=function(t,e){var n,r,i;for(n=0;n<this.colCnt;n++)for(r=t[n],i=0;i<r.length;i++)e.eq(n).append(r[i].el)},e.prototype.getNowIndicatorUnit=function(){return"minute"},e.prototype.renderNowIndicator=function(t){if(this.colContainerEls){var e,n=this.componentFootprintToSegs(new h.default(new p.default(t,t.valueOf()+1),!1)),r=this.computeDateTop(t,t),o=[];for(e=0;e<n.length;e++)o.push(i('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",r).appendTo(this.colContainerEls.eq(n[e].col))[0]);n.length>0&&o.push(i('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",r).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=i(o)}},e.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},e.prototype.updateSize=function(e,n,r){t.prototype.updateSize.call(this,e,n,r),this.slatCoordCache.build(),r&&this.updateSegVerticals([].concat(this.eventRenderer.getSegs(),this.businessSegs||[]))},e.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.outerHeight()},e.prototype.computeDateTop=function(t,e){return this.computeTimeTop(o.duration(t-e.clone().stripTime()))},e.prototype.computeTimeTop=function(t){var e,n,r=this.slatEls.length,i=this.dateProfile,o=(t-i.minTime)/this.slotDuration;return o=Math.max(0,o),o=Math.min(r,o),e=Math.floor(o),e=Math.min(e,r-1),n=o-e,this.slatCoordCache.getTopPosition(e)+this.slatCoordCache.getHeight(e)*n},e.prototype.updateSegVerticals=function(t){this.computeSegVerticals(t),this.assignSegVerticals(t)},e.prototype.computeSegVerticals=function(t){var e,n,r,i=this.opt("agendaEventMinHeight");for(e=0;e<t.length;e++)n=t[e],r=this.dayDates[n.dayIndex],n.top=this.computeDateTop(n.startMs,r),n.bottom=Math.max(n.top+i,this.computeDateTop(n.endMs,r))},e.prototype.assignSegVerticals=function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateSegVerticalCss(n))},e.prototype.generateSegVerticalCss=function(t){return{top:t.top,bottom:-t.bottom}},e.prototype.prepareHits=function(){this.colCoordCache.build(),this.slatCoordCache.build()},e.prototype.releaseHits=function(){this.colCoordCache.clear()},e.prototype.queryHit=function(t,e){var n=this.snapsPerSlot,r=this.colCoordCache,i=this.slatCoordCache;if(r.isLeftInBounds(t)&&i.isTopInBounds(e)){var o=r.getHorizontalIndex(t),s=i.getVerticalIndex(e);if(null!=o&&null!=s){var a=i.getTopOffset(s),l=i.getHeight(s),u=(e-a)/l,d=Math.floor(u*n),c=s*n+d,p=a+d/n*l,h=a+(d+1)/n*l;return{col:o,snap:c,component:this,left:r.getLeftOffset(o),right:r.getRightOffset(o),top:p,bottom:h}}}},e.prototype.getHitFootprint=function(t){var e,n=this.getCellDate(0,t.col),r=this.computeSnapTime(t.snap);return n.time(r),e=n.clone().add(this.snapDuration),new h.default(new p.default(n,e),!1)},e.prototype.computeSnapTime=function(t){return o.duration(this.dateProfile.minTime+this.snapDuration*t)},e.prototype.getHitEl=function(t){return this.colEls.eq(t.col)},e.prototype.renderDrag=function(t,e,n){var r;if(e){if(t.length)return this.helperRenderer.renderEventDraggingFootprints(t,e,n),!0}else for(r=0;r<t.length;r++)this.renderHighlight(t[r].componentFootprint)},e.prototype.unrenderDrag=function(){this.unrenderHighlight(),this.helperRenderer.unrender()},e.prototype.renderEventResize=function(t,e,n){this.helperRenderer.renderEventResizingFootprints(t,e,n)},e.prototype.unrenderEventResize=function(){this.helperRenderer.unrender()},e.prototype.renderSelectionFootprint=function(t){this.opt("selectHelper")?this.helperRenderer.renderComponentFootprint(t):this.renderHighlight(t)},e.prototype.unrenderSelection=function(){this.helperRenderer.unrender(),this.unrenderHighlight()},e}(a.default);e.default=m,m.prototype.eventRendererClass=f.default,m.prototype.businessHourRendererClass=l.default,m.prototype.helperRendererClass=g.default,m.prototype.fillRendererClass=v.default,u.default.mixInto(m),d.default.mixInto(m)},function(t,e,n){function r(t){var e,n,r,i=[];for(e=0;e<t.length;e++){for(n=t[e],r=0;r<i.length&&s(n,i[r]).length;r++);n.level=r,(i[r]||(i[r]=[])).push(n)}return i}function i(t){var e,n,r,i,o;for(e=0;e<t.length;e++)for(n=t[e],r=0;r<n.length;r++)for(i=n[r],i.forwardSegs=[],o=e+1;o<t.length;o++)s(i,t[o],i.forwardSegs)}function o(t){var e,n,r=t.forwardSegs,i=0;if(void 0===t.forwardPressure){for(e=0;e<r.length;e++)n=r[e],o(n),i=Math.max(i,1+n.forwardPressure);t.forwardPressure=i}}function s(t,e,n){void 0===n&&(n=[]);for(var r=0;r<e.length;r++)a(t,e[r])&&n.push(e[r]);return n}function a(t,e){return t.bottom>e.top&&t.top<e.bottom}Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),u=n(4),d=n(44),c=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.timeGrid=e,r}return l.__extends(e,t),e.prototype.renderFgSegs=function(t){this.renderFgSegsIntoContainers(t,this.timeGrid.fgContainerEls)},e.prototype.renderFgSegsIntoContainers=function(t,e){var n,r;for(n=this.timeGrid.groupSegsByCol(t),r=0;r<this.timeGrid.colCnt;r++)this.updateFgSegCoords(n[r]);this.timeGrid.attachSegsByCol(n,e)},e.prototype.unrenderFgSegs=function(){this.fgSegs&&this.fgSegs.forEach(function(t){t.el.remove()})},e.prototype.computeEventTimeFormat=function(){return this.opt("noMeridiemTimeFormat")},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.fgSegHtml=function(t,e){
    var n,r,i,o=this.view,s=o.calendar,a=t.footprint.componentFootprint,l=a.isAllDay,d=t.footprint.eventDef,c=o.isEventDefDraggable(d),p=!e&&t.isStart&&o.isEventDefResizableFromStart(d),h=!e&&t.isEnd&&o.isEventDefResizableFromEnd(d),f=this.getSegClasses(t,c,p||h),g=u.cssToStr(this.getSkinCss(d));if(f.unshift("fc-time-grid-event","fc-v-event"),o.isMultiDayRange(a.unzonedRange)){if(t.isStart||t.isEnd){var v=s.msToMoment(t.startMs),y=s.msToMoment(t.endMs);n=this._getTimeText(v,y,l),r=this._getTimeText(v,y,l,"LT"),i=this._getTimeText(v,y,l,null,!1)}}else n=this.getTimeText(t.footprint),r=this.getTimeText(t.footprint,"LT"),i=this.getTimeText(t.footprint,null,!1);return'<a class="'+f.join(" ")+'"'+(d.url?' href="'+u.htmlEscape(d.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+u.htmlEscape(i)+'" data-full="'+u.htmlEscape(r)+'"><span>'+u.htmlEscape(n)+"</span></div>":"")+(d.title?'<div class="fc-title">'+u.htmlEscape(d.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(h?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},e.prototype.updateFgSegCoords=function(t){this.timeGrid.computeSegVerticals(t),this.computeFgSegHorizontals(t),this.timeGrid.assignSegVerticals(t),this.assignFgSegHorizontals(t)},e.prototype.computeFgSegHorizontals=function(t){var e,n,s;if(this.sortEventSegs(t),e=r(t),i(e),n=e[0]){for(s=0;s<n.length;s++)o(n[s]);for(s=0;s<n.length;s++)this.computeFgSegForwardBack(n[s],0,0)}},e.prototype.computeFgSegForwardBack=function(t,e,n){var r,i=t.forwardSegs;if(void 0===t.forwardCoord)for(i.length?(this.sortForwardSegs(i),this.computeFgSegForwardBack(i[0],e+1,n),t.forwardCoord=i[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),r=0;r<i.length;r++)this.computeFgSegForwardBack(i[r],0,t.forwardCoord)},e.prototype.sortForwardSegs=function(t){t.sort(u.proxy(this,"compareForwardSegs"))},e.prototype.compareForwardSegs=function(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||this.compareEventSegs(t,e)},e.prototype.assignFgSegHorizontals=function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateFgSegHorizontalCss(n)),n.footprint.eventDef.title&&n.bottom-n.top<30&&n.el.addClass("fc-short")},e.prototype.generateFgSegHorizontalCss=function(t){var e,n,r=this.opt("slotEventOverlap"),i=t.backwardCoord,o=t.forwardCoord,s=this.timeGrid.generateSegVerticalCss(t),a=this.timeGrid.isRTL;return r&&(o=Math.min(1,i+2*(o-i))),a?(e=1-o,n=i):(e=i,n=1-o),s.zIndex=t.level+1,s.left=100*e+"%",s.right=100*n+"%",r&&t.forwardPressure&&(s[a?"marginLeft":"marginRight"]=20),s},e}(d.default);e.default=c},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(63),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.renderSegs=function(t,e){var n,r,o,s=[];for(this.eventRenderer.renderFgSegsIntoContainers(t,this.component.helperContainerEls),n=0;n<t.length;n++)r=t[n],e&&e.col===r.col&&(o=e.el,r.el.css({left:o.css("left"),right:o.css("right"),"margin-left":o.css("margin-left"),"margin-right":o.css("margin-right")})),s.push(r.el[0]);return i(s)},e}(o.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(62),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.attachSegEls=function(t,e){var n,r=this.component;return"bgEvent"===t?n=r.bgContainerEls:"businessHours"===t?n=r.businessContainerEls:"highlight"===t&&(n=r.highlightContainerEls),r.updateSegVerticals(e),r.attachSegsByCol(r.groupSegsByCol(e),n),e.map(function(t){return t.el[0]})},e}(i.default);e.default=o},function(t,e,n){function r(t,e){var n,r;for(n=0;n<e.length;n++)if(r=e[n],r.leftCol<=t.rightCol&&r.rightCol>=t.leftCol)return!0;return!1}function i(t,e){return t.leftCol-e.leftCol}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),s=n(3),a=n(4),l=n(44),u=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.dayGrid=e,r}return o.__extends(e,t),e.prototype.renderBgRanges=function(e){e=s.grep(e,function(t){return t.eventDef.isAllDay()}),t.prototype.renderBgRanges.call(this,e)},e.prototype.renderFgSegs=function(t){var e=this.rowStructs=this.renderSegRows(t);this.dayGrid.rowEls.each(function(t,n){s(n).find(".fc-content-skeleton > table").append(e[t].tbodyEl)})},e.prototype.unrenderFgSegs=function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},e.prototype.renderSegRows=function(t){var e,n,r=[];for(e=this.groupSegRows(t),n=0;n<e.length;n++)r.push(this.renderSegRow(n,e[n]));return r},e.prototype.renderSegRow=function(t,e){function n(t){for(;o<t;)d=(y[r-1]||[])[o],d?d.attr("rowspan",parseInt(d.attr("rowspan")||1,10)+1):(d=s("<td/>"),a.append(d)),v[r][o]=d,y[r][o]=d,o++}var r,i,o,a,l,u,d,c=this.dayGrid.colCnt,p=this.buildSegLevels(e),h=Math.max(1,p.length),f=s("<tbody/>"),g=[],v=[],y=[];for(r=0;r<h;r++){if(i=p[r],o=0,a=s("<tr/>"),g.push([]),v.push([]),y.push([]),i)for(l=0;l<i.length;l++){for(u=i[l],n(u.leftCol),d=s('<td class="fc-event-container"/>').append(u.el),u.leftCol!==u.rightCol?d.attr("colspan",u.rightCol-u.leftCol+1):y[r][o]=d;o<=u.rightCol;)v[r][o]=d,g[r][o]=u,o++;a.append(d)}n(c),this.dayGrid.bookendCells(a),f.append(a)}return{row:t,tbodyEl:f,cellMatrix:v,segMatrix:g,segLevels:p,segs:e}},e.prototype.buildSegLevels=function(t){var e,n,o,s=[];for(this.sortEventSegs(t),e=0;e<t.length;e++){for(n=t[e],o=0;o<s.length&&r(n,s[o]);o++);n.level=o,(s[o]||(s[o]=[])).push(n)}for(o=0;o<s.length;o++)s[o].sort(i);return s},e.prototype.groupSegRows=function(t){var e,n=[];for(e=0;e<this.dayGrid.rowCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].row].push(t[e]);return n},e.prototype.computeEventTimeFormat=function(){return this.opt("extraSmallTimeFormat")},e.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},e.prototype.fgSegHtml=function(t,e){var n,r,i=this.view,o=t.footprint.eventDef,s=t.footprint.componentFootprint.isAllDay,l=i.isEventDefDraggable(o),u=!e&&s&&t.isStart&&i.isEventDefResizableFromStart(o),d=!e&&s&&t.isEnd&&i.isEventDefResizableFromEnd(o),c=this.getSegClasses(t,l,u||d),p=a.cssToStr(this.getSkinCss(o)),h="";return c.unshift("fc-day-grid-event","fc-h-event"),t.isStart&&(n=this.getTimeText(t.footprint))&&(h='<span class="fc-time">'+a.htmlEscape(n)+"</span>"),r='<span class="fc-title">'+(a.htmlEscape(o.title||"")||"&nbsp;")+"</span>",'<a class="'+c.join(" ")+'"'+(o.url?' href="'+a.htmlEscape(o.url)+'"':"")+(p?' style="'+p+'"':"")+'><div class="fc-content">'+(this.dayGrid.isRTL?r+" "+h:h+" "+r)+"</div>"+(u?'<div class="fc-resizer fc-start-resizer" />':"")+(d?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},e}(l.default);e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(63),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.renderSegs=function(t,e){var n,r=[];return n=this.eventRenderer.renderSegRows(t),this.component.rowEls.each(function(t,o){var s,a,l=i(o),u=i('<div class="fc-helper-skeleton"><table/></div>');e&&e.row===t?a=e.el.position().top:(s=l.find(".fc-content-skeleton tbody"),s.length||(s=l.find(".fc-content-skeleton table")),a=s.position().top),u.css("top",a).find("table").append(n[t].tbodyEl),l.append(u),r.push(u[0])}),i(r)},e}(o.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(62),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fillSegTag="td",e}return r.__extends(e,t),e.prototype.attachSegEls=function(t,e){var n,r,i,o=[];for(n=0;n<e.length;n++)r=e[n],i=this.renderFillRow(t,r),this.component.rowEls.eq(r.row).append(i),o.push(i[0]);return o},e.prototype.renderFillRow=function(t,e){var n,r,o,s=this.component.colCnt,a=e.leftCol,l=e.rightCol+1;return n="businessHours"===t?"bgevent":t.toLowerCase(),r=i('<div class="fc-'+n+'-skeleton"><table><tr/></table></div>'),o=r.find("tr"),a>0&&o.append(new Array(a+1).join("<td/>")),o.append(e.el.attr("colspan",l-a)),l<s&&o.append(new Array(s-l+1).join("<td/>")),this.component.bookendCells(o),r},e}(o.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(0),o=n(4),s=n(67),a=n(247),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.setGridHeight=function(t,e){e&&(t*=this.dayGrid.rowCnt/6),o.distributeHeight(this.dayGrid.rowEls,t,!e)},e.prototype.isDateInOtherMonth=function(t,e){return t.month()!==i.utc(e.currentUnzonedRange.startMs).month()},e}(s.default);e.default=l,l.prototype.dateProfileGeneratorClass=a.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(68),o=n(5),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.buildRenderRange=function(e,n,r){var i,s=t.prototype.buildRenderRange.call(this,e,n,r),a=this.msToUtcMoment(s.startMs,r),l=this.msToUtcMoment(s.endMs,r);return this.opt("fixedWeekCount")&&(i=Math.ceil(l.diff(a,"weeks",!0)),l.add(6-i,"weeks")),new o.default(a,l)},e}(i.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(5),a=n(43),l=n(41),u=n(249),d=n(250),c=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.segSelector=".fc-list-item",r.scroller=new l.default({overflowX:"hidden",overflowY:"auto"}),r}return r.__extends(e,t),e.prototype.renderSkeleton=function(){this.el.addClass("fc-list-view "+this.calendar.theme.getClass("listView")),this.scroller.render(),this.scroller.el.appendTo(this.el),this.contentEl=this.scroller.scrollEl},e.prototype.unrenderSkeleton=function(){this.scroller.destroy()},e.prototype.updateSize=function(e,n,r){t.prototype.updateSize.call(this,e,n,r),this.scroller.clear(),n||this.scroller.setHeight(this.computeScrollerHeight(e))},e.prototype.computeScrollerHeight=function(t){return t-o.subtractInnerElHeight(this.el,this.scroller.el)},e.prototype.renderDates=function(t){for(var e=this.calendar,n=e.msToUtcMoment(t.renderUnzonedRange.startMs,!0),r=e.msToUtcMoment(t.renderUnzonedRange.endMs,!0),i=[],o=[];n<r;)i.push(n.clone()),o.push(new s.default(n,n.clone().add(1,"day"))),n.add(1,"day");this.dayDates=i,this.dayRanges=o},e.prototype.componentFootprintToSegs=function(t){var e,n,r,i=this.dayRanges,o=[];for(e=0;e<i.length;e++)if((n=t.unzonedRange.intersect(i[e]))&&(r={startMs:n.startMs,endMs:n.endMs,isStart:n.isStart,isEnd:n.isEnd,dayIndex:e},o.push(r),!r.isEnd&&!t.isAllDay&&e+1<i.length&&t.unzonedRange.endMs<i[e+1].startMs+this.nextDayThreshold)){r.endMs=t.unzonedRange.endMs,r.isEnd=!0;break}return o},e.prototype.renderEmptyMessage=function(){this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+o.htmlEscape(this.opt("noEventsMessage"))+"</div></div></div>")},e.prototype.renderSegList=function(t){var e,n,r,o=this.groupSegsByDay(t),s=i('<table class="fc-list-table '+this.calendar.theme.getClass("tableList")+'"><tbody/></table>'),a=s.find("tbody");for(e=0;e<o.length;e++)if(n=o[e])for(a.append(this.dayHeaderHtml(this.dayDates[e])),this.eventRenderer.sortEventSegs(n),r=0;r<n.length;r++)a.append(n[r].el);this.contentEl.empty().append(s)},e.prototype.groupSegsByDay=function(t){var e,n,r=[];for(e=0;e<t.length;e++)n=t[e],(r[n.dayIndex]||(r[n.dayIndex]=[])).push(n);return r},e.prototype.dayHeaderHtml=function(t){var e=this.opt("listDayFormat"),n=this.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+t.format("YYYY-MM-DD")+'"><td class="'+(this.calendar.theme.getClass("tableListHeading")||this.calendar.theme.getClass("widgetHeader"))+'" colspan="3">'+(e?this.buildGotoAnchorHtml(t,{class:"fc-list-heading-main"},o.htmlEscape(t.format(e))):"")+(n?this.buildGotoAnchorHtml(t,{class:"fc-list-heading-alt"},o.htmlEscape(t.format(n))):"")+"</td></tr>"},e}(a.default);e.default=c,c.prototype.eventRendererClass=u.default,c.prototype.eventPointingClass=d.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(4),o=n(44),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.renderFgSegs=function(t){t.length?this.component.renderSegList(t):this.component.renderEmptyMessage()},e.prototype.fgSegHtml=function(t){var e,n=this.view,r=n.calendar,o=r.theme,s=t.footprint,a=s.eventDef,l=s.componentFootprint,u=a.url,d=["fc-list-item"].concat(this.getClasses(a)),c=this.getBgColor(a);return e=l.isAllDay?n.getAllDayHtml():n.isMultiDayRange(l.unzonedRange)?t.isStart||t.isEnd?i.htmlEscape(this._getTimeText(r.msToMoment(t.startMs),r.msToMoment(t.endMs),l.isAllDay)):n.getAllDayHtml():i.htmlEscape(this.getTimeText(s)),u&&d.push("fc-has-url"),'<tr class="'+d.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+o.getClass("widgetContent")+'">'+(e||"")+"</td>":"")+'<td class="fc-list-item-marker '+o.getClass("widgetContent")+'"><span class="fc-event-dot"'+(c?' style="background-color:'+c+'"':"")+'></span></td><td class="fc-list-item-title '+o.getClass("widgetContent")+'"><a'+(u?' href="'+i.htmlEscape(u)+'"':"")+">"+i.htmlEscape(a.title||"")+"</a></td></tr>"},e.prototype.computeEventTimeFormat=function(){return this.opt("mediumTimeFormat")},e}(o.default);e.default=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(64),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.handleClick=function(e,n){var r;t.prototype.handleClick.call(this,e,n),i(n.target).closest("a[href]").length||(r=e.footprint.eventDef.url)&&!n.isDefaultPrevented()&&(window.location.href=r)},e}(o.default);e.default=s},,,,,,function(t,e,n){var r=n(3),i=n(18),o=n(4),s=n(232);n(11),n(49),n(260),n(261),n(264),n(265),n(266),n(267),r.fullCalendar=i,r.fn.fullCalendar=function(t){var e=Array.prototype.slice.call(arguments,1),n=this;return this.each(function(i,a){var l,u=r(a),d=u.data("fullCalendar");"string"==typeof t?"getCalendar"===t?i||(n=d):"destroy"===t?d&&(d.destroy(),u.removeData("fullCalendar")):d?r.isFunction(d[t])?(l=d[t].apply(d,e),i||(n=l),"destroy"===t&&u.removeData("fullCalendar")):o.warn("'"+t+"' is an unknown FullCalendar method."):o.warn("Attempting to call a FullCalendar method on an element with no calendar."):d||(d=new s.default(u,t),u.data("fullCalendar",d),d.render())}),n},t.exports=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(4),o=function(){function t(t,e){this.el=null,this.viewsWithButtons=[],this.calendar=t,this.toolbarOptions=e}return t.prototype.setToolbarOptions=function(t){this.toolbarOptions=t},t.prototype.render=function(){var t=this.toolbarOptions.layout,e=this.el;t?(e?e.empty():e=this.el=r("<div class='fc-toolbar "+this.toolbarOptions.extraClasses+"'/>"),e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')):this.removeElement()},t.prototype.removeElement=function(){this.el&&(this.el.remove(),this.el=null)},t.prototype.renderSection=function(t){var e=this,n=this.calendar,o=n.theme,s=n.optionsManager,a=n.viewSpecManager,l=r('<div class="fc-'+t+'"/>'),u=this.toolbarOptions.layout[t],d=s.get("customButtons")||{},c=s.overrides.buttonText||{},p=s.get("buttonText")||{};return u&&r.each(u.split(" "),function(t,s){var u,h=r(),f=!0;r.each(s.split(","),function(t,s){var l,u,g,v,y,m,b,w,D;"title"===s?(h=h.add(r("<h2>&nbsp;</h2>")),f=!1):((l=d[s])?(g=function(t){l.click&&l.click.call(w[0],t)},(v=o.getCustomButtonIconClass(l))||(v=o.getIconClass(s))||(y=l.text)):(u=a.getViewSpec(s))?(e.viewsWithButtons.push(s),g=function(){n.changeView(s)},(y=u.buttonTextOverride)||(v=o.getIconClass(s))||(y=u.buttonTextDefault)):n[s]&&(g=function(){n[s]()},(y=c[s])||(v=o.getIconClass(s))||(y=p[s])),g&&(b=["fc-"+s+"-button",o.getClass("button"),o.getClass("stateDefault")],y?(m=i.htmlEscape(y),D=""):v&&(m="<span class='"+v+"'></span>",D=' aria-label="'+s+'"'),w=r('<button type="button" class="'+b.join(" ")+'"'+D+">"+m+"</button>").click(function(t){w.hasClass(o.getClass("stateDisabled"))||(g(t),(w.hasClass(o.getClass("stateActive"))||w.hasClass(o.getClass("stateDisabled")))&&w.removeClass(o.getClass("stateHover")))}).mousedown(function(){w.not("."+o.getClass("stateActive")).not("."+o.getClass("stateDisabled")).addClass(o.getClass("stateDown"))}).mouseup(function(){w.removeClass(o.getClass("stateDown"))}).hover(function(){w.not("."+o.getClass("stateActive")).not("."+o.getClass("stateDisabled")).addClass(o.getClass("stateHover"))},function(){w.removeClass(o.getClass("stateHover")).removeClass(o.getClass("stateDown"))}),h=h.add(w)))}),f&&h.first().addClass(o.getClass("cornerLeft")).end().last().addClass(o.getClass("cornerRight")).end(),h.length>1?(u=r("<div/>"),f&&u.addClass(o.getClass("buttonGroup")),u.append(h),l.append(u)):l.append(h)}),l},t.prototype.updateTitle=function(t){this.el&&this.el.find("h2").text(t)},t.prototype.activateButton=function(t){this.el&&this.el.find(".fc-"+t+"-button").addClass(this.calendar.theme.getClass("stateActive"))},t.prototype.deactivateButton=function(t){this.el&&this.el.find(".fc-"+t+"-button").removeClass(this.calendar.theme.getClass("stateActive"))},t.prototype.disableButton=function(t){this.el&&this.el.find(".fc-"+t+"-button").prop("disabled",!0).addClass(this.calendar.theme.getClass("stateDisabled"))},t.prototype.enableButton=function(t){this.el&&this.el.find(".fc-"+t+"-button").prop("disabled",!1).removeClass(this.calendar.theme.getClass("stateDisabled"))},t.prototype.getViewsWithButtons=function(){return this.viewsWithButtons},t}();e.default=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(4),s=n(33),a=n(32),l=n(51),u=function(t){function e(e,n){var r=t.call(this)||this;return r._calendar=e,r.overrides=i.extend({},n),r.dynamicOverrides={},r.compute(),r}return r.__extends(e,t),e.prototype.add=function(t){var e,n=0;this.recordOverrides(t);for(e in t)n++;if(1===n){if("height"===e||"contentHeight"===e||"aspectRatio"===e)return void this._calendar.updateViewSize(!0);if("defaultDate"===e)return;if("businessHours"===e)return;if(/^(event|select)(Overlap|Constraint|Allow)$/.test(e))return;if("timezone"===e)return void this._calendar.view.flash("initialEvents")}this._calendar.renderHeader(),this._calendar.renderFooter(),this._calendar.viewsByType={},this._calendar.reinitView()},e.prototype.compute=function(){var t,e,n,r,i;t=o.firstDefined(this.dynamicOverrides.locale,this.overrides.locale),e=a.localeOptionHash[t],e||(t=s.globalDefaults.locale,e=a.localeOptionHash[t]||{}),n=o.firstDefined(this.dynamicOverrides.isRTL,this.overrides.isRTL,e.isRTL,s.globalDefaults.isRTL),r=n?s.rtlDefaults:{},this.dirDefaults=r,this.localeDefaults=e,i=s.mergeOptions([s.globalDefaults,r,e,this.overrides,this.dynamicOverrides]),a.populateInstanceComputableOptions(i),this.reset(i)},e.prototype.recordOverrides=function(t){var e;for(e in t)this.dynamicOverrides[e]=t[e];this._calendar.viewSpecManager.clearCache(),this.compute()},e}(l.default);e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(3),o=n(24),s=n(4),a=n(33),l=n(32),u=function(){function t(t,e){this.optionsManager=t,this._calendar=e,this.clearCache()}return t.prototype.clearCache=function(){this.viewSpecCache={}},t.prototype.getViewSpec=function(t){var e=this.viewSpecCache;return e[t]||(e[t]=this.buildViewSpec(t))},t.prototype.getUnitViewSpec=function(t){var e,n,r;if(-1!==i.inArray(t,s.unitsDesc))for(e=this._calendar.header.getViewsWithButtons(),i.each(o.viewHash,function(t){e.push(t)}),n=0;n<e.length;n++)if((r=this.getViewSpec(e[n]))&&r.singleUnit===t)return r},t.prototype.buildViewSpec=function(t){for(var e,n,i,l,u,d=this.optionsManager.overrides.views||{},c=[],p=[],h=[],f=t;f;)e=o.viewHash[f],n=d[f],f=null,"function"==typeof e&&(e={class:e}),e&&(c.unshift(e),p.unshift(e.defaults||{}),i=i||e.duration,f=f||e.type),n&&(h.unshift(n),i=i||n.duration,f=f||n.type);return e=s.mergeProps(c),e.type=t,!!e.class&&(i=i||this.optionsManager.dynamicOverrides.duration||this.optionsManager.overrides.duration,i&&(l=r.duration(i),l.valueOf()&&(u=s.computeDurationGreatestUnit(l,i),e.duration=l,e.durationUnit=u,1===l.as(u)&&(e.singleUnit=u,h.unshift(d[u]||{})))),e.defaults=a.mergeOptions(p),e.overrides=a.mergeOptions(h),this.buildViewSpecOptions(e),this.buildViewSpecButtonText(e,t),e)},t.prototype.buildViewSpecOptions=function(t){var e=this.optionsManager;t.options=a.mergeOptions([a.globalDefaults,t.defaults,e.dirDefaults,e.localeDefaults,e.overrides,t.overrides,e.dynamicOverrides]),l.populateInstanceComputableOptions(t.options)},t.prototype.buildViewSpecButtonText=function(t,e){function n(n){var r=n.buttonText||{};return r[e]||(t.buttonTextKey?r[t.buttonTextKey]:null)||(t.singleUnit?r[t.singleUnit]:null)}var r=this.optionsManager;t.buttonTextOverride=n(r.dynamicOverrides)||n(r.overrides)||t.overrides.buttonText,t.buttonTextDefault=n(r.localeDefaults)||n(r.dirDefaults)||t.defaults.buttonText||n(a.globalDefaults)||(t.duration?this._calendar.humanizeDuration(t.duration):null)||e},t}();e.default=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(38),i=n(56),o=n(223),s=n(224);r.default.registerClass(i.default),r.default.registerClass(o.default),r.default.registerClass(s.default)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(57),i=n(221),o=n(222),s=n(262),a=n(263);r.defineThemeSystem("standard",i.default),r.defineThemeSystem("jquery-ui",o.default),r.defineThemeSystem("bootstrap3",s.default),r.defineThemeSystem("bootstrap4",a.default)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(22),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(i.default);e.default=o,o.prototype.classes={widget:"fc-bootstrap3",tableGrid:"table-bordered",tableList:"table",tableListHeading:"active",buttonGroup:"btn-group",button:"btn btn-default",stateActive:"active",stateDisabled:"disabled",today:"alert alert-info",popover:"panel panel-default",popoverHeader:"panel-heading",popoverContent:"panel-body",headerRow:"panel-default",dayRow:"panel-default",listView:"panel panel-default"},o.prototype.baseIconClass="glyphicon",o.prototype.iconClasses={close:"glyphicon-remove",prev:"glyphicon-chevron-left",next:"glyphicon-chevron-right",prevYear:"glyphicon-backward",nextYear:"glyphicon-forward"},o.prototype.iconOverrideOption="bootstrapGlyphicons",o.prototype.iconOverrideCustomButtonOption="bootstrapGlyphicon",o.prototype.iconOverridePrefix="glyphicon-"},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(22),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(i.default);e.default=o,o.prototype.classes={widget:"fc-bootstrap4",tableGrid:"table-bordered",tableList:"table",tableListHeading:"table-active",buttonGroup:"btn-group",button:"btn btn-primary",stateActive:"active",stateDisabled:"disabled",today:"alert alert-info",popover:"card card-primary",popoverHeader:"card-header",popoverContent:"card-body",headerRow:"table-bordered",dayRow:"table-bordered",listView:"card card-primary"},o.prototype.baseIconClass="fa",o.prototype.iconClasses={close:"fa-times",prev:"fa-chevron-left",next:"fa-chevron-right",prevYear:"fa-angle-double-left",nextYear:"fa-angle-double-right"},o.prototype.iconOverrideOption="bootstrapFontAwesome",o.prototype.iconOverrideCustomButtonOption="bootstrapFontAwesome",o.prototype.iconOverridePrefix="fa-"},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),i=n(67),o=n(246);r.defineView("basic",{class:i.default}),r.defineView("basicDay",{type:"basic",duration:{days:1}}),r.defineView("basicWeek",{type:"basic",duration:{weeks:1}}),r.defineView("month",{class:o.default,duration:{months:1},defaults:{fixedWeekCount:!0}})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),i=n(238);r.defineView("agenda",{class:i.default,defaults:{allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0}}),r.defineView("agendaDay",{type:"agenda",duration:{days:1}}),r.defineView("agendaWeek",{type:"agenda",duration:{weeks:1}})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),i=n(248);r.defineView("list",{class:i.default,buttonTextKey:"list",defaults:{buttonText:"list",listDayFormat:"LL",noEventsMessage:"No events to display"}}),r.defineView("listDay",{type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}}),r.defineView("listWeek",{type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",listDayAltFormat:"LL"}}),r.defineView("listMonth",{type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}}),r.defineView("listYear",{type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}})},function(t,e){Object.defineProperty(e,"__esModule",{value:!0})}])});;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.HijrahDate=e()}(this,function(){"use strict";function t(t){return parseInt(t,10)}function e(t){return"string"==typeof t}function r(t){return"number"==typeof t}function n(t){return"[object Date]"===Object.prototype.toString.call(t)}function a(t){return"function"==typeof t}function o(t,e,r){return t.concat(h.call(e,r))}function i(t,e,r){var n,o;if(t)if(a(t))for(n in t)"prototype"!==n&&"length"!==n&&"name"!==n&&t.hasOwnProperty(n)&&e.call(r,t[n],n,t);else if(l(t)||isArrayLike(t)){var u="object"!=typeof t;for(n=0,o=t.length;n<o;n++)(u||n in t)&&e.call(r,t[n],n,t)}else if(t.forEach&&t.forEach!==i)t.forEach(e,r,t);else if(isBlankObject(t))for(n in t)e.call(r,t[n],n,t);else if("function"==typeof t.hasOwnProperty)for(n in t)t.hasOwnProperty(n)&&e.call(r,t[n],n,t);else for(n in t)hasOwnProperty.call(t,n)&&e.call(r,t[n],n,t);return t}function u(e,r){var n=t(e/r);return(e^r)<0&&n*r!=e&&n--,n}function s(t,e){return t-u(t,e)*e}function f(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a];if(o<e)r=a+1;else{if(!(o>e))return a;n=a-1}}return-(r+1)}var h=[].slice,c=([].splice,[].push,Object.getPrototypeOf,function(t){return e(t)?t.toUpperCase():t}),l=Array.isArray,g=function(){var t={};return{register:function(e,r){t[e]=r},getLocale:function(e){return t[e]}}}();!function(){var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"},e={DATETIME_FORMATS:{AMPMS:["ص","م"],DAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],ERANAMES:["هجري"],ERAS:["هـ"],FIRSTDAYOFWEEK:5,MONTH:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"],SHORTDAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],SHORTMONTH:["محرم","صفر","ربيع 1","ربيع 2","جمادى 1","جمادى 2","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"],STANDALONEMONTH:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"],WEEKENDRANGE:[4,5],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"dd‏/MM‏/y h:mm:ss a",mediumDate:"dd‏/MM‏/y",mediumTime:"h:mm:ss a",short:"d‏/M‏/y h:mm a",shortDate:"d‏/M‏/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"£",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ar",localeID:"ar",pluralCat:function(e,r){return 0==e?t.ZERO:1==e?t.ONE:2==e?t.TWO:e%100>=3&&e%100<=10?t.FEW:e%100>=11&&e%100<=99?t.MANY:t.OTHER}};g.register("ar",e)}(),function(){function t(t){t+="";var e=t.indexOf(".");return e==-1?0:t.length-e-1}function e(e,r){var n=r;void 0===n&&(n=Math.min(t(e),3));var a=Math.pow(10,n),o=(e*a|0)%a;return{v:n,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"},n={DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Anno Hegirae"],ERAS:["AH"],FIRSTDAYOFWEEK:6,MONTH:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Muh","Saf","Rab I","Rab II","Jum I","Jum II","Raj","Sha","Ram","Shaw","Dhuʻl-Q","Dhuʻl-H"],STANDALONEMONTH:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en",localeID:"en",pluralCat:function(t,n){var a=0|t,o=e(t,n);return 1==a&&0==o.v?r.ONE:r.OTHER}};g.register("en",n)}();var y=function(){function n(t,e){t=t.replace(O,"");var r=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(r)?e:r}function a(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function u(t,e,r){r=r?-1:1;var o=t.getTimezoneOffset(),i=n(e,o);return a(t,r*(i-o))}function s(t,e,r,n){var a="";for((t<0||n&&t<=0)&&(n?t=-t+1:(t=-t,a="-")),t=""+t;t.length<e;)t=E+t;return r&&(t=t.substr(t.length-e)),a+t}function f(t,e,r,n,a){return r=r||0,function(o){var i=o["get"+t]();return(r>0||i>-r)&&(i+=r),0===i&&r===-12&&(i=12),s(i,e,n,a)}}function h(t,e,r){return function(n,a){var o=n["get"+t](),i=(r?"STANDALONE":"")+(e?"SHORT":""),u=c(i+t);return a[u][o]}}function l(t,e,r){var n=-1*r,a=n>=0?"+":"";return a+=s(Math[n>0?"floor":"ceil"](n/60),2)+s(Math.abs(n%60),2)}function y(e){return function(r){var n=t((r.getDayOfYear()-1)/7)+1;return s(n,e)}}function p(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function m(t,e){return e.ERAS[0]}function d(t,e){return e.ERANAMES[0]}function D(a){function s(e){var r;if(r=e.match(f)){var n=new M(new Date(0)),a=0,o=0,i=r[8]?n.setUTCFullYear:n.setFullYear,u=r[8]?n.setUTCHours:n.setHours;r[9]&&(a=t(r[9]+r[10]),o=t(r[9]+r[11])),i.call(n,t(r[1]),t(r[2])-1,t(r[3]));var s=t(r[4]||0)-a,h=t(r[5]||0)-o,c=t(r[6]||0),l=Math.round(1e3*parseFloat("0."+(r[7]||0)));return u.call(n,s,h,c,l),n}return e}var f=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(f,h,c){var l,g,y="",p=[];if(h=h||"mediumDate",h=a.DATETIME_FORMATS[h]||h,e(f)&&(f=_.test(f)?t(f):s(f)),r(f)&&(f=new M(f)),!M.isHijrahDate(f)||!isFinite(f.getTime()))return f;for(;h;)g=S.exec(h),g?(p=o(p,g,1),h=p.pop()):(p.push(h),h=null);var m=f.toGregorian(),d=m.getTimezoneOffset();return c&&(d=n(c,d),m=u(m,c,!0),f=new M(m)),i(p,function(t){l=v[t],y+=l?l(f,a.DATETIME_FORMATS,d):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),y}}var E="0",O=/:/g,v={yyyy:f("FullYear",4,0,!1,!0),yy:f("FullYear",2,0,!0,!0),y:f("FullYear",1,0,!1,!0),MMMM:h("Month"),MMM:h("Month",!0),MM:f("Month",2,1),M:f("Month",1,1),LLLL:h("Month",!1,!0),dd:f("Date",2),d:f("Date",1),HH:f("Hours",2),H:f("Hours",1),hh:f("Hours",2,-12),h:f("Hours",1,-12),mm:f("Minutes",2),m:f("Minutes",1),ss:f("Seconds",2),s:f("Seconds",1),sss:f("Milliseconds",3),EEEE:h("Day"),EEE:h("Day",!0),a:p,Z:l,ww:y(2),w:y(1),G:m,GG:m,GGG:m,GGGG:d},S=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,_=/^\-?\d+$/;return{formatter:function(t){return D(g.getLocale(t))}}}(),M=function(){function e(t,r,a,o,i,u,s){this._year=Number.NaN,this._monthOfYear=Number.NaN,this._dayOfMonth=Number.NaN;var f,h,c,l;if(0===arguments.length){l=new Date;var g=X(yt(l));f=g[0],h=g[1],c=g[2]}else if(1===arguments.length)if(e.isHijrahDate(arguments[0])){var y=arguments[0];l=y.toGregorian(),f=y._year,h=y._monthOfYear,c=y._dayOfMonth}else{l=n(arguments[0])?arguments[0]:new Date(arguments[0]);var g=X(yt(l));f=g[0],h=g[1],c=g[2]}else{l=Mt(q(t,r+1,a||1)),l.setHours(o||0,i||0,u||0,s||0);var g=X(yt(l));f=g[0],h=g[1],c=g[2]}this._year=f,this._monthOfYear=h,this._dayOfMonth=c,this._gregorianDate=l}function a(t,e){t._year=e._year,t._monthOfYear=e._monthOfYear,t._dayOfMonth=e._dayOfMonth,t._gregorianDate.setFullYear(e._gregorianDate.getFullYear(),e._gregorianDate.getMonth(),e._gregorianDate.getDate())}function o(r){var n=X(t(r));return new e(n[0],n[1]-1,n[2])}function i(t,e,r){return q(t,e+1,r),!0}function h(t){return"[object Object]"===Object.prototype.toString.call(t)&&t instanceof e}function c(){return this._gregorianDate.getTime()}function l(t,e,n){var o=r(e)?e+1:this._monthOfYear,i=n||this._dayOfMonth,u=B(t,o,i);a(this,u)}function g(){return this._year}function M(t,e,r){return this.setFullYear(t,e,r)}function p(){return this.getFullYear()}function m(t,e){var r=B(this.getFullYear(),t+1,e||this._dayOfMonth);a(this,r)}function d(){return this._monthOfYear-1}function D(t){if(t!==this.getDate())return 0===t?this.minusDays(this.getDate()):t<0?this.minusDays(this.getDate()+Math.abs(t)):this.plusDays(t-this.getMonthLength())}function E(){return this._dayOfMonth}function O(t,r,n,o){var i=this._gregorianDate.setHours(t,r,n,o),u=new e(i);return a(this,u),i}function v(){return this._gregorianDate.getHours()}function S(t,e,r,n){return this._gregorianDate.setUTCHours(t,e,r,n)}function _(){return this._gregorianDate.getUTCHours()}function T(t,e,r){return this._gregorianDate.setMinutes(t,e,r)}function A(){return this._gregorianDate.getMinutes()}function H(t,e){return this._gregorianDate.setSeconds(t,e)}function R(){return this._gregorianDate.getSeconds()}function Y(){return this._gregorianDate.getMilliseconds()}function N(){return et(this._year,this._monthOfYear)}function w(){return rt(this._year)}function F(){return q(this._year,this._monthOfYear,this._dayOfMonth)}function I(){return tt(this._year,this._monthOfYear)+this._dayOfMonth}function b(){return t((this.getDayOfYear()-1)/7)+1}function j(){return this._gregorianDate.getDay()}function P(){return this._gregorianDate.getTimezoneOffset()}function L(){var e=this._year,r=ut(t(e));if(r<0||r>Dt)throw"Hijrah date out of range";var n=rt(t(e));return n>354}function G(t){if(0==t)return this;var e=this._year+t,r=B(e,this._monthOfYear,this._dayOfMonth);return a(this,r),this}function C(e){if(0===e)return this;var r=12*this._year+(this._monthOfYear-1),n=r+e,o=Q(u(n,12)),i=t(s(n,12)+1),f=B(o,i,this._dayOfMonth);return a(this,f),this}function U(t){return this.plusDays(7*t)}function W(t){var e=o(this.toEpochDay()+t);return a(this,e),this}function z(t){return this.plusYears(-t)}function x(t){return this.plusMonths(-t)}function J(t){return this.plusWeeks(-t)}function Z(t){return this.plusDays(-t)}function k(){return this._gregorianDate}function K(t,e){return 0===arguments.length?y.formatter("en")(this):1===arguments.length?y.formatter("en")(this,t):y.formatter(e)(this,t)}function $(){return isNaN(this.getTime())?"Invalid Hijrah Date":this.format("medium")}function B(t,r,n){var a=et(t,r);return n>a&&(n=a),new e(t,r-1,n)}function Q(e){if(e<nt()||e>at())throw"Invalid Hijrah year: "+e;return t(e)}function V(t){if(t<1||t>12)throw"Invalid Hijrah month: "+t}function X(t){if(t<dt||t>=Dt)throw"Hijrah date out of range";var e=ot(t),r=it(e),n=st(e),a=ft(e),o=t-a,i=new Array(3);return i[0]=r,i[1]=n+1,i[2]=o+1,i}function q(t,e,r){V(e);var n=ut(t)+(e-1);if(n<0||n>=mt.length)throw"Invalid Hijrah date, year: "+t+", month: "+e;if(r<1||r>et(t,e))throw"Invalid Hijrah day of month: "+r;return ft(n)+(r-1)}function tt(t,e){return ht(t,e-1)}function et(t,e){var r=ut(t)+(e-1);if(r<0||r>=mt.length)throw"Invalid Hijrah date, year: "+t+", month: "+e;return ct(r)}function rt(t){return ht(t,12)}function nt(){return it(0)}function at(){return it(mt.length-1)-1}function ot(t){var e=f(mt,t);return e<0&&(e=-e-2),e}function it(e){return t((e+Et)/12)}function ut(t){return 12*t-Et}function st(t){return(t+Et)%12}function ft(t){return mt[t]}function ht(t,e){var r=ut(t);return ft(r+e)-ft(r)}function ct(t){return mt[t+1]-mt[t]}function lt(t,e,r,n){var a=12*(r-e+1)+1,o=0,i=new Array(a);Ot=Number.MIN_VALUE,vt=Number.MAX_VALUE;for(var u=e;u<=r;u++)for(var s=n[u],f=0;f<12;f++){var h=s[f];if(i[o++]=t,h<29||h>32)throw"Invalid month length in year: "+e;t+=h,Ot=Math.min(Ot,h),vt=Math.max(vt,h)}if(i[o++]=t,o!=i.length)throw"Did not fill epochMonths exactly: ndx = "+o+" should be "+i.length;return i}function gt(t){return 0==(3&t)&&(t%100!=0||t%400==0)}function yt(e){var r=e.getFullYear(),n=e.getMonth()+1,a=0;return a+=365*r,r>=0?a+=t((r+3)/4)-t((r+99)/100)+t((r+399)/400):a-=t(r/-4-r/-100+r/-400),a+=t((367*n-362)/12),a+=e.getDate()-1,n>2&&(a--,0==gt(e.getFullYear())&&a--),a-At}function Mt(e){var r=e+At;r-=60;var n=0;if(r<0){var a=t((r+1)/Tt-1);n=400*a,r+=-a*Tt}var o=t((400*r+591)/Tt),i=r-(365*o+t(o/4)-t(o/100)+t(o/400));i<0&&(o--,i=r-t(365*o+o/4-o/100+o/400)),o+=n;var u=t(i),s=t((5*u+2)/153),f=(s+2)%12+1,h=u-t((306*s+5)/10)+1;return o+=t(s/10),new Date(o,f-1,h)}function pt(){var t=[];t[1300]=[30,29,30,29,30,29,30,29,30,29,30,29],t[1301]=[30,30,29,30,29,30,29,30,29,30,29,29],t[1302]=[30,30,30,29,30,30,29,29,30,29,29,30],t[1303]=[29,30,30,29,30,30,29,30,29,30,29,29],t[1304]=[29,30,30,29,30,30,30,29,30,29,30,29],t[1305]=[29,29,30,30,29,30,30,29,30,30,29,29],t[1306]=[30,29,30,29,30,29,30,29,30,30,29,30],t[1307]=[29,30,29,30,29,30,29,30,29,30,29,30],t[1308]=[29,30,30,29,30,29,30,29,30,29,29,30],t[1309]=[29,30,30,30,30,29,29,30,29,29,30,29],t[1310]=[30,29,30,30,30,29,30,29,30,29,29,30],t[1311]=[29,30,29,30,30,30,29,30,29,30,29,29],t[1312]=[30,29,30,29,30,30,29,30,30,29,30,29],t[1313]=[29,30,29,30,29,30,29,30,30,30,29,29],t[1314]=[30,30,29,30,29,29,30,29,30,30,29,30],t[1315]=[29,30,30,29,30,29,29,30,29,30,29,30],t[1316]=[29,30,30,30,29,30,29,29,30,29,30,29],t[1317]=[30,29,30,30,29,30,29,30,29,30,29,29],t[1318]=[30,29,30,30,29,30,30,29,30,29,30,29],t[1319]=[29,30,29,30,30,29,30,29,30,30,29,30],t[1320]=[29,30,29,29,30,29,30,29,30,30,30,29],t[1321]=[30,29,30,29,29,30,29,29,30,30,30,30],t[1322]=[29,30,29,30,29,29,29,30,29,30,30,30],t[1323]=[29,30,30,29,30,29,29,29,30,29,30,30],t[1324]=[29,30,30,29,30,29,30,29,29,30,29,30],t[1325]=[30,29,30,29,30,30,29,30,29,30,29,30],t[1326]=[29,29,30,29,30,30,29,30,29,30,30,29],t[1327]=[30,29,29,30,29,30,29,30,30,29,30,30],t[1328]=[29,30,29,29,30,29,29,30,30,30,29,30],t[1329]=[30,29,30,29,29,30,29,29,30,30,29,30],t[1330]=[30,30,29,30,29,29,30,29,29,30,30,29],t[1331]=[30,30,29,30,30,29,29,30,29,30,29,30],t[1332]=[29,30,29,30,30,29,30,29,30,30,29,29],t[1333]=[30,29,29,30,30,29,30,30,29,30,30,29],t[1334]=[29,29,30,29,30,29,30,30,30,29,30,29],t[1335]=[30,29,30,29,29,30,29,30,30,29,30,30],t[1336]=[29,30,29,30,29,29,30,29,30,29,30,30],t[1337]=[30,29,30,29,30,29,29,30,29,30,29,30],t[1338]=[29,30,30,29,30,30,29,29,30,29,30,29],t[1339]=[30,29,30,29,30,30,30,29,30,29,29,30],t[1340]=[29,29,30,29,30,30,30,30,29,30,29,29],t[1341]=[30,29,29,30,29,30,30,30,29,30,30,29],t[1342]=[29,29,30,29,30,29,30,30,29,30,30,29],t[1343]=[30,29,29,30,29,30,29,30,29,30,30,29],t[1344]=[30,29,30,29,30,30,29,29,30,29,30,29],t[1345]=[30,29,30,30,30,29,30,29,29,30,29,29],t[1346]=[30,29,30,30,30,30,29,30,29,29,30,29],t[1347]=[29,30,29,30,30,30,29,30,30,29,29,30],t[1348]=[29,29,30,29,30,30,29,30,30,30,29,29],t[1349]=[30,29,29,30,29,30,30,29,30,30,29,30],t[1350]=[29,30,29,30,29,30,29,29,30,30,29,30],t[1351]=[30,29,30,29,30,29,30,29,29,30,29,30],t[1352]=[30,29,30,30,29,30,29,30,29,29,30,29],t[1353]=[30,29,30,30,30,29,30,29,29,30,29,30],t[1354]=[29,30,29,30,30,29,30,30,29,30,29,29],t[1355]=[30,29,29,30,30,29,30,30,29,30,30,29],t[1356]=[29,30,29,30,29,30,29,30,29,30,30,30],t[1357]=[29,29,30,29,30,29,29,30,29,30,30,30],t[1358]=[29,30,29,30,29,30,29,29,30,29,30,30],t[1359]=[29,30,30,29,30,29,30,29,29,29,30,30],t[1360]=[29,30,30,30,29,30,29,30,29,29,30,29],t[1361]=[30,29,30,30,29,30,30,29,29,30,29,30],t[1362]=[29,30,29,30,29,30,30,29,30,29,30,29],t[1363]=[30,29,30,29,30,29,30,29,30,29,30,30],t[1364]=[29,30,29,30,29,29,30,29,30,29,30,30],t[1365]=[30,30,29,29,30,29,29,30,29,30,29,30],t[1366]=[30,30,29,30,29,30,29,29,30,29,30,29],t[1367]=[30,30,29,30,30,29,30,29,29,30,29,30],t[1368]=[29,30,29,30,30,30,29,29,30,29,30,29],t[1369]=[30,29,30,29,30,30,29,30,29,30,30,29],t[1370]=[30,29,29,30,29,30,29,30,29,30,30,30],t[1371]=[29,30,29,29,30,29,30,29,30,29,30,30],t[1372]=[30,29,29,30,29,30,29,29,30,29,30,30],t[1373]=[30,29,30,29,30,29,30,29,29,30,29,30],t[1374]=[30,29,30,30,29,30,29,30,29,29,30,29],t[1375]=[30,29,30,30,29,30,30,29,30,29,30,29],t[1376]=[29,30,29,30,29,30,30,30,29,30,29,30],t[1377]=[29,29,30,29,29,30,30,30,29,30,30,29],t[1378]=[30,29,29,29,30,29,30,30,29,30,30,30],t[1379]=[29,30,29,29,29,30,29,30,30,29,30,30],t[1380]=[29,30,29,30,29,30,29,30,29,30,29,30],t[1381]=[29,30,29,30,30,29,30,29,30,29,29,30],t[1382]=[29,30,29,30,30,29,30,30,29,30,29,29],t[1383]=[30,29,29,30,30,30,29,30,30,29,30,29],t[1384]=[29,30,29,29,30,30,29,30,30,30,29,30],t[1385]=[29,29,30,29,29,30,30,29,30,30,30,29],t[1386]=[30,29,29,30,29,29,30,30,29,30,30,29],t[1387]=[30,29,30,29,30,29,30,29,30,29,30,29],t[1388]=[30,30,29,30,29,30,29,30,29,30,29,29],t[1389]=[30,30,29,30,30,29,30,30,29,29,30,29],t[1390]=[29,30,29,30,30,30,29,30,29,30,29,30],t[1391]=[29,29,30,29,30,30,29,30,30,29,30,29],t[1392]=[30,29,29,30,29,30,29,30,30,29,30,30],t[1393]=[29,30,29,29,30,29,30,29,30,29,30,30],t[1394]=[30,29,30,29,29,30,29,30,29,30,29,30],t[1395]=[30,29,30,30,29,30,29,29,30,29,29,30],t[1396]=[30,29,30,30,29,30,30,29,29,30,29,29],t[1397]=[30,29,30,30,29,30,30,30,29,29,29,30],t[1398]=[29,30,29,30,30,29,30,30,29,30,29,29],t[1399]=[30,29,30,29,30,29,30,30,29,30,29,30],t[1400]=[30,29,30,29,29,30,29,30,29,30,29,30],t[1401]=[30,30,29,30,29,29,30,29,29,30,29,30],t[1402]=[30,30,30,29,30,29,29,30,29,29,30,29],t[1403]=[30,30,30,29,30,30,29,29,30,29,29,30],t[1404]=[29,30,30,29,30,30,29,30,29,30,29,29],t[1405]=[30,29,30,29,30,30,30,29,30,29,29,30],t[1406]=[30,29,29,30,29,30,30,29,30,29,30,30],t[1407]=[29,30,29,29,30,29,30,29,30,29,30,30],t[1408]=[30,29,30,29,30,29,29,30,29,29,30,30],t[1409]=[30,30,29,30,29,30,29,29,30,29,29,30],t[1410]=[30,30,29,30,30,29,30,29,29,30,29,29],t[1411]=[30,30,29,30,30,29,30,30,29,29,30,29],t[1412]=[30,29,30,29,30,29,30,30,30,29,29,30],t[1413]=[29,30,29,29,30,29,30,30,30,29,30,29],t[1414]=[30,29,30,29,29,30,29,30,30,29,30,30],t[1415]=[29,30,29,30,29,29,30,29,30,29,30,30],t[1416]=[30,29,30,29,30,29,29,30,29,30,29,30],t[1417]=[30,29,30,30,29,29,30,29,30,29,30,29],t[1418]=[30,29,30,30,29,30,29,30,29,30,29,30],t[1419]=[29,30,29,30,29,30,29,30,30,30,29,29],t[1420]=[29,30,29,29,30,29,30,30,30,30,29,30],t[1421]=[29,29,30,29,29,29,30,30,30,30,29,30],t[1422]=[30,29,29,30,29,29,29,30,30,30,29,30],t[1423]=[30,29,30,29,30,29,29,30,29,30,29,30],t[1424]=[30,29,30,30,29,30,29,29,30,29,30,29],t[1425]=[30,29,30,30,29,30,29,30,30,29,30,29],t[1426]=[29,30,29,30,29,30,30,29,30,30,29,30],t[1427]=[29,29,30,29,30,29,30,30,29,30,30,29],t[1428]=[30,29,29,30,29,29,30,30,30,29,30,30],t[1429]=[29,30,29,29,30,29,29,30,30,29,30,30],t[1430]=[29,30,30,29,29,30,29,30,29,30,29,30],t[1431]=[29,30,30,29,30,29,30,29,30,29,29,30],t[1432]=[29,30,30,30,29,30,29,30,29,30,29,29],t[1433]=[30,29,30,30,29,30,30,29,30,29,30,29],t[1434]=[29,30,29,30,29,30,30,29,30,30,29,29],t[1435]=[30,29,30,29,30,29,30,29,30,30,29,30],t[1436]=[29,30,29,30,29,30,29,30,29,30,29,30],t[1437]=[30,29,30,30,29,29,30,29,30,29,29,30],t[1438]=[30,29,30,30,30,29,29,30,29,29,30,29],t[1439]=[30,29,30,30,30,29,30,29,30,29,29,30],t[1440]=[29,30,29,30,30,30,29,30,29,30,29,29],t[1441]=[30,29,30,29,30,30,29,30,30,29,30,29],t[1442]=[29,30,29,30,29,30,29,30,30,29,30,29],t[1443]=[30,29,30,29,30,29,30,29,30,29,30,30],t[1444]=[29,30,29,30,30,29,29,30,29,30,29,30],t[1445]=[29,30,30,30,29,30,29,29,30,29,29,30],t[1446]=[29,30,30,30,29,30,30,29,29,30,29,29],t[1447]=[30,29,30,30,30,29,30,29,30,29,30,29],t[1448]=[29,30,29,30,30,29,30,30,29,30,29,30],t[1449]=[29,29,30,29,30,29,30,30,29,30,30,29],t[1450]=[30,29,30,29,29,30,29,30,29,30,30,29],t[1451]=[30,30,30,29,29,30,29,29,30,30,29,30],t[1452]=[30,29,30,30,29,29,30,29,29,30,29,30],t[1453]=[30,29,30,30,29,30,29,30,29,29,30,29],t[1454]=[30,29,30,30,29,30,30,29,30,29,30,29],t[1455]=[29,30,29,30,30,29,30,29,30,30,29,30],t[1456]=[29,29,30,29,30,29,30,29,30,30,30,29],t[1457]=[30,29,29,30,29,29,30,29,30,30,30,30],t[1458]=[29,30,29,29,30,29,29,30,29,30,30,30],t[1459]=[29,30,30,29,29,30,29,29,30,29,30,30],t[1460]=[29,30,30,29,30,29,30,29,29,30,29,30],t[1461]=[29,30,30,29,30,29,30,29,30,30,29,29],t[1462]=[30,29,30,29,30,30,29,30,29,30,30,29],t[1463]=[29,30,29,30,29,30,29,30,30,30,29,30],t[1464]=[29,30,29,29,30,29,29,30,30,30,29,30],t[1465]=[30,29,30,29,29,30,29,29,30,30,29,30],t[1466]=[30,30,29,30,29,29,29,30,29,30,30,29],t[1467]=[30,30,29,30,30,29,29,30,29,30,29,30],t[1468]=[29,30,29,30,30,29,30,29,30,29,30,29],t[1469]=[29,30,29,30,30,29,30,30,29,30,29,30],t[1470]=[29,29,30,29,30,30,29,30,30,29,30,29],t[1471]=[30,29,29,30,29,30,29,30,30,29,30,30],t[1472]=[29,30,29,29,30,29,30,29,30,30,29,30],t[1473]=[29,30,29,30,30,29,29,30,29,30,29,30],t[1474]=[29,30,30,29,30,30,29,29,30,29,30,29],t[1475]=[29,30,30,29,30,30,30,29,29,30,29,29],t[1476]=[30,29,30,29,30,30,30,29,30,29,30,29],t[1477]=[29,30,29,29,30,30,30,30,29,30,29,30],t[1478]=[29,29,30,29,30,29,30,30,29,30,30,29],t[1479]=[30,29,29,30,29,30,29,30,29,30,30,29],t[1480]=[30,29,30,29,30,29,30,29,30,29,30,29],t[1481]=[30,29,30,30,29,30,29,30,29,30,29,29],t[1482]=[30,29,30,30,30,30,29,30,29,29,30,29],t[1483]=[29,30,29,30,30,30,29,30,30,29,29,30],t[1484]=[29,29,30,29,30,30,30,29,30,29,30,29],t[1485]=[30,29,29,30,29,30,30,29,30,30,29,30],t[1486]=[29,30,29,29,30,29,30,29,30,30,29,30],t[1487]=[30,29,30,29,30,29,29,30,29,30,29,30],t[1488]=[30,29,30,30,29,30,29,29,30,29,30,29],t[1489]=[30,29,30,30,30,29,30,29,29,30,29,30],t[1490]=[29,30,29,30,30,29,30,30,29,29,30,29],t[1491]=[30,29,29,30,30,29,30,30,29,30,29,30],t[1492]=[29,30,29,29,30,30,29,30,29,30,30,29],t[1493]=[30,29,30,29,30,29,29,30,29,30,30,30],t[1494]=[29,30,29,30,29,30,29,29,29,30,30,30],t[1495]=[29,30,30,29,30,29,29,30,29,29,30,30],t[1496]=[29,30,30,30,29,30,29,29,30,29,29,30],t[1497]=[30,29,30,30,29,30,29,30,29,30,29,30],t[1498]=[29,30,29,30,29,30,30,29,30,29,30,29],t[1499]=[30,29,30,29,29,30,30,29,30,29,30,30];t[1500]=[29,30,29,30,29,29,30,29,30,29,30,30];t[1501]=[30,29,30,29,30,29,29,29,30,29,30,30],t[1502]=[30,30,29,30,29,30,29,29,29,30,30,29],t[1503]=[30,30,29,30,30,29,30,29,29,29,30,30],t[1504]=[29,30,29,30,30,30,29,29,30,29,30,29],t[1505]=[30,29,30,29,30,30,29,30,29,30,30,29],t[1506]=[29,30,29,29,30,30,29,30,30,29,30,30],t[1507]=[29,29,30,29,29,30,30,29,30,29,30,30],t[1508]=[30,29,29,30,29,30,29,29,30,29,30,30],t[1509]=[30,29,30,29,30,29,30,29,29,30,29,30],t[1510]=[30,29,30,30,29,30,29,30,29,29,30,29],t[1511]=[30,29,30,30,29,30,30,29,30,29,29,30],t[1512]=[29,30,29,30,29,30,30,30,29,30,29,30],t[1513]=[29,29,29,30,29,30,30,30,29,30,30,29],t[1514]=[30,29,29,29,30,29,30,30,29,30,30,30],t[1515]=[29,29,30,29,29,30,29,30,30,29,30,30],t[1516]=[29,30,29,30,29,29,30,29,30,29,30,30],t[1517]=[29,30,29,30,29,30,30,29,29,30,29,30],t[1518]=[29,30,29,30,30,29,30,30,29,30,29,29],t[1519]=[30,29,29,30,30,30,29,30,30,29,30,29],t[1520]=[29,30,29,29,30,30,30,29,30,30,29,30],t[1521]=[29,29,29,30,29,30,30,29,30,30,29,30],t[1522]=[30,29,29,29,30,29,30,30,29,30,30,29],t[1523]=[30,29,30,29,30,29,30,29,29,30,30,29],t[1524]=[30,30,29,30,29,30,29,30,29,29,30,29],t[1525]=[30,30,29,30,30,29,30,29,30,29,29,30],t[1526]=[29,30,29,30,30,30,29,30,29,30,29,29],t[1527]=[30,29,30,29,30,30,29,30,30,29,30,29],t[1528]=[30,29,29,30,29,30,29,30,30,29,30,30],t[1529]=[29,30,29,29,30,29,30,29,30,29,30,30],t[1530]=[29,30,30,29,29,30,29,30,29,29,30,30],t[1531]=[29,30,30,30,29,29,30,29,30,29,29,30],t[1532]=[29,30,30,30,29,30,30,29,29,29,30,29],t[1533]=[30,29,30,30,30,29,30,29,30,29,29,30],t[1534]=[29,30,29,30,30,29,30,30,29,29,30,29],t[1535]=[30,29,30,29,30,29,30,30,29,30,29,30],t[1536]=[29,30,29,30,29,30,29,30,29,30,29,30],t[1537]=[30,29,30,30,29,29,30,29,29,30,29,30],t[1538]=[30,30,29,30,30,29,29,30,29,29,30,29],t[1539]=[30,30,30,29,30,30,29,29,30,29,29,30],t[1540]=[29,30,30,29,30,30,29,30,29,29,30,29],t[1541]=[30,29,30,29,30,30,30,29,30,29,29,30],t[1542]=[29,30,29,30,29,30,30,29,30,29,30,30],t[1543]=[29,30,29,29,30,29,30,29,30,29,30,30],t[1544]=[30,29,30,29,29,30,29,30,29,30,29,30],t[1545]=[30,30,29,30,29,29,30,29,30,29,29,30],t[1546]=[30,30,29,30,29,30,29,30,29,30,29,29],t[1547]=[30,30,29,30,30,29,30,29,30,29,30,29],t[1548]=[30,29,29,30,30,29,30,30,29,30,29,30],t[1549]=[29,30,29,29,30,29,30,30,30,29,30,29],t[1550]=[30,29,30,29,29,29,30,30,30,29,30,30],t[1551]=[29,30,29,29,30,29,29,30,30,29,30,30],t[1552]=[30,29,30,29,29,30,29,29,30,30,29,30],t[1553]=[30,29,30,29,30,29,30,29,30,29,30,29],t[1554]=[30,29,30,29,30,30,29,30,29,30,29,30],t[1555]=[29,29,30,29,30,30,29,30,30,29,30,29],t[1556]=[30,29,29,30,29,30,29,30,30,30,29,30],t[1557]=[29,30,29,29,29,30,29,30,30,30,30,29],t[1558]=[30,29,30,29,29,29,30,29,30,30,30,29],t[1559]=[30,30,29,29,30,29,29,30,30,29,30,29],t[1560]=[30,30,29,30,29,30,29,30,29,30,29,30],t[1561]=[29,30,30,29,30,29,30,30,29,29,30,29],t[1562]=[29,30,30,29,30,29,30,30,30,29,29,30],t[1563]=[29,30,29,29,30,29,30,30,30,29,30,29],t[1564]=[30,29,30,29,29,30,29,30,30,30,29,30],t[1565]=[29,30,29,30,29,29,30,29,30,30,29,30],t[1566]=[30,29,30,29,30,29,29,30,29,30,29,30],t[1567]=[30,29,30,30,29,30,29,30,29,29,30,29],t[1568]=[30,29,30,30,30,29,30,29,30,29,29,29],t[1569]=[30,29,30,30,30,29,30,30,29,30,29,29],t[1570]=[29,30,29,30,30,29,30,30,30,29,29,30],t[1571]=[29,29,30,29,30,30,29,30,30,29,30,29],t[1572]=[30,29,29,30,29,30,29,30,30,29,30,29],t[1573]=[30,29,30,30,29,30,29,29,30,29,30,29],t[1574]=[30,30,29,30,30,29,30,29,29,30,29,29],t[1575]=[30,30,30,29,30,30,29,30,29,29,29,30],t[1576]=[29,30,30,29,30,30,30,29,30,29,29,29],t[1577]=[30,29,30,30,29,30,30,29,30,29,30,29],t[1578]=[29,30,29,30,29,30,30,29,30,30,29,30],t[1579]=[29,30,29,30,29,29,30,30,29,30,29,30],t[1580]=[29,30,30,29,30,29,29,30,29,30,29,30],t[1581]=[30,30,29,30,29,30,29,29,30,29,30,29],t[1582]=[30,30,29,30,30,29,30,29,30,29,29,29],t[1583]=[30,30,29,30,30,30,29,30,29,30,29,29],t[1584]=[29,30,30,29,30,30,29,30,30,29,30,29],t[1585]=[29,30,29,30,29,30,29,30,30,29,30,30],t[1586]=[29,29,30,29,30,29,29,30,30,30,29,30],t[1587]=[29,30,30,29,29,29,30,29,30,29,30,30],t[1588]=[30,29,30,30,29,29,29,30,29,30,29,30],t[1589]=[30,29,30,30,29,30,29,29,30,29,30,29],t[1590]=[30,29,30,30,30,29,29,30,29,30,29,30],t[1591]=[29,30,29,30,30,29,30,29,30,29,30,29],t[1592]=[30,29,30,29,30,29,30,29,30,30,30,29],t[1593]=[30,29,29,30,29,29,30,29,30,30,30,29],t[1594]=[30,30,29,29,30,29,29,29,30,30,30,30],t[1595]=[29,30,29,30,29,29,30,29,29,30,30,30],t[1596]=[29,30,30,29,30,29,29,30,29,30,29,30],t[1597]=[29,30,30,29,30,29,30,29,30,29,30,29],t[1598]=[30,29,30,29,30,30,29,30,29,30,30,29],t[1599]=[29,30,29,30,29,30,29,30,30,30,29,30],t[1600]=[29,29,30,29,30,29,29,30,30,30,29,30];var e=1300,r=1600,n=yt(new Date(1882,10,12));Et=12*e,dt=n,mt=lt(dt,e,r,t),Dt=mt[mt.length-1],St=0,_t=0;for(var a=e;a<r;a++){var o=rt(a);St=Math.min(St,o),_t=Math.max(_t,o)}}e.isValid=i,e.isHijrahDate=h,e.prototype.getTime=c,e.prototype.setFullYear=l,e.prototype.getFullYear=g,e.prototype.setMonth=m,e.prototype.getMonth=d,e.prototype.setDate=D,e.prototype.getDate=E,e.prototype.setHours=O,e.prototype.getHours=v,e.prototype.setMinutes=T,e.prototype.getMinutes=A,e.prototype.setSeconds=H,e.prototype.getSeconds=R,e.prototype.getMilliseconds=Y,e.prototype.getDayOfYear=I,e.prototype.getWeekOfYear=b,e.prototype.getDay=j,e.prototype.getTimezoneOffset=P,e.prototype.getMonthLength=N,e.prototype.getYearLength=w,e.prototype.isLeapYear=L,e.prototype.toEpochDay=F,e.prototype.setUTCFullYear=M,e.prototype.getUTCFullYear=p,e.prototype.setUTCHours=S,e.prototype.getUTCHours=_,e.prototype.plusYears=G,e.prototype.plusMonths=C,e.prototype.plusWeeks=U,e.prototype.plusDays=W,e.prototype.minusYears=z,e.prototype.minusMonths=x,e.prototype.minusWeeks=J,e.prototype.minusDays=Z,e.prototype.toGregorian=k,e.prototype.toString=$,e.prototype.format=K;var mt,dt,Dt,Et,Ot,vt,St,_t,Tt=146097,At=5*Tt-10957;return pt(),e}();return M});

;
function GregorianToHijrahDate( gregorian_date_string ) {

    if ( typeof gregorian_date_string != 'string' ) {
        return false;
    }

    let gregorian_date_object = new Date(gregorian_date_string);
    let hijrah_date_object = new HijrahDate(gregorian_date_object);
    let hijrah_date_string = hijrah_date_object._year + '-' + hijrah_date_object._monthOfYear + '-' + hijrah_date_object._dayOfMonth;
    return hijrah_date_string;
}

function HijrahToGregorianDate( hijrah_date_string ) {
    
    if ( typeof hijrah_date_string != 'string' ) {
        return false;
    }

    let hijrah_date_string_object = hijrah_date_string.split('-');
    let hijrah_date_string_year = Number(hijrah_date_string_object[0]);
    let hijrah_date_string_month = Number(hijrah_date_string_object[1]); 
    let hijrah_date_string_day = Number(hijrah_date_string_object[2]);

    let gregorian_date_object = new HijrahDate(hijrah_date_string_year, hijrah_date_string_month, hijrah_date_string_day).toGregorian();
    let gregorian_date_string = gregorian_date_object.getFullYear() + '-' + gregorian_date_object.getMonth() + '-' + gregorian_date_object.getDate();
    return gregorian_date_string;
}

function convertDateToStandard(date,date_format,delimeter) {

    date_object = date.split(delimeter);
    format_checker = date_format.split(delimeter);
    _DD_ = format_checker.indexOf('DD');
    _MM_ = format_checker.indexOf('MM');
    _YYYY_ = format_checker.indexOf('YYYY');
    standard_delimeter = '-';
    _dd_ = ( date_object[_DD_].length < 2 ) ? '0'+date_object[_DD_] : date_object[_DD_];
    _mm_ = ( date_object[_MM_].length < 2 ) ? '0'+date_object[_MM_] : date_object[_MM_];
    _yyyy_ = date_object[_YYYY_];
    return _yyyy_+standard_delimeter+_mm_+standard_delimeter+_dd_;
    
};
jQuery(function() {

    let Gregorian_Events = [];
    let Hijrah_Events = [];
    let json_events = [];
    let todays_date = new Date();
    let todaya_date_hijrah_object = new HijrahDate(todays_date);
    let todays_date_in_hijrah = convertDateToStandard(GregorianToHijrahDate(todays_date.getFullYear() + '-' + (todays_date.getMonth() + 1) + '-' + todays_date.getDate()), 'YYYY-MM-DD', '-');
    var bas_url = document.location.origin;
    let returned_events = {};
    let url;

    function loadEventsFromAPI() { 
        if(window.location.pathname.includes("/en/")){
            url = bas_url + '/en'
        }else{
            url = bas_url + '/ar'
        }
        jQuery.ajax({
            url: url + '/event',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                json_events = response;
                returned_events.events = [
                    //             {
                    //                 'title' : 'Event 1',
                    //                 'location' : 'Dubai',
                    //                 'start' : '08-03-2019' // DD-MM-YYYY
                    //             },
                    //             {
                    //                 'title' : 'Event 2',
                    //                 'location' : 'London',
                    //                 'start' : '01-03-2019' // DD-MM-YYYY
                    //             }
                ];
                for (let i = 0; i < json_events.length; i++) {
                    var html = json_events[i].title;
                    var div = document.createElement("div");
                    div.innerHTML = html;
                    let title = div.innerText;
                    html = json_events[i].field_exhibition_start_date;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let start = div.innerText;
                    start = start.substring(8, 10) + "-" + start.substring(5, 7) + "-" + start.substring(0,4);
                    html = json_events[i].field_exhibition_end_date;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let end = div.innerText;
                    end = end.substring(8, 10) + "-" + end.substring(5, 7) + "-" + end.substring(0,4);
                    //html = json_events[i].field_design;
                    html = json_events[i].field_event_type;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    //let design = div.innerText;
                    let type = div.innerText;
                    html = json_events[i].field_event_description;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let description = div.innerText;
                    html = json_events[i].field_exhibition_gallery;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let photo = div.innerText;  
                    html = json_events[i].field_pop_up_logo;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let logo = div.innerText; 
                    html = json_events[i].field_inregistration_link;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let link = div.innerText; 
                    html = json_events[i].field_calendar_download;
                    div = document.createElement("div");
                    div.innerHTML = html;
                    let button = div.innerText;
//                   color to calaender
                  let eventColor = "#e1efed";
                  if (type == 'مناسبة عالمية'){
                    eventColor =  "#fac39b"
                  }else if (type == 'مناسبة ثقافية'){
                    eventColor = "#86bbb4"
                  }else if (type == 'اعياد'){
                    eventColor = "yellow"
                  }
                  
                  
                    returned_events.events.push({
                        "nid": json_events[i].nid,
                        "title": title,
                        "start": start,
                        "end": end,
                        //"design": design,
                        "type": type,
                        "description": description,
                        "photo": photo,
                        "logo" : logo,
                        "link" : link,
                        "button" : button,
                        //"color": design == "1" ? "#fac39b" : "#86bbb4"
                        "color": eventColor
                    })
                }
                console.log(returned_events.events);
            },
            error: function() {
                alert("Error Occured");
            }
        })



    }


    loadEventsFromAPI();

    let check_if_events_are_loaded = setInterval(() => {

        if (typeof returned_events['events'] !== 'undefined') {
            clearInterval(check_if_events_are_loaded);

            for (i = 0; i < returned_events['events'].length; i++) {
                event = { ...returned_events['events'][i]
                }
                event['start'] = convertDateToStandard(returned_events['events'][i]['start'], 'DD-MM-YYYY', '-');

                if (typeof returned_events['events'][i]['end'] !== 'undefined') {
                    event['end'] = convertDateToStandard(returned_events['events'][i]['end'], 'DD-MM-YYYY', '-');
                }
                Gregorian_Events.push(event);
            }

            for (i = 0; i < returned_events['events'].length; i++) {
                event = { ...returned_events['events'][i]
                }
                event['start'] = GregorianToHijrahDate(convertDateToStandard(returned_events['events'][i]['start'], 'DD-MM-YYYY', '-'))

                if (typeof returned_events['events'][i]['end'] !== 'undefined') {
                    event['end'] = GregorianToHijrahDate(convertDateToStandard(returned_events['events'][i]['end'], 'DD-MM-YYYY', '-'));
                }
                Hijrah_Events.push(event);
            }

            addEventsToCalendar();
        }

    }, 1000);

    jQuery('#calendar').fullCalendar({
        customButtons: {
            show_gregorian: {
                text: 'Gregorian',
                click: function() {
                    jQuery('#calendar-2, #date-picker-hijrah').css('display', 'none');
                    jQuery('#calendar, #date-picker-gregorian').css('display', 'block');
                }
            },
            show_hijrah: {
                text: 'Hijrah',
                click: function() {
                    jQuery('#calendar-2, #date-picker-hijrah').css('display', 'block');
                    jQuery('#calendar, #date-picker-gregorian').css('display', 'none');
                }
            }
        },

        header: {
            left: 'prev,next today ',
            center: 'title',
            right: 'show_gregorian show_hijrah'
        },

        eventClick: function(event, element) {
            //this function fires when an event is clicked on the calender
            //console.log("HERE");
//           console.log(event["design"]);
          //if (event['design'] == '1' ) {
            if (event['type'] == 'مناسبة عالمية' ) {
            jQuery('#calendarModal').modal('show');
            document.getElementById("modalEventTitle").innerHTML = event['title'];
            document.getElementById("modalEventDescription").innerHTML = event['description'];
            document.getElementById("modalEventImage").setAttribute("src",event['logo']);
            document.getElementById("AddToCalendarContainer").appendChild = event(['button']);

          } else if (event['type'] == 'مناسبة ثقافية' ) {
            //alert("Title:" + event['title'] + "Description:" + event['description'] + "Photo:" + event['photo']);
          // window.location.replace(url + /node/ + event['nid']);
             window.location.href= url + /node/ + event['nid'];
          }
          else if(event['type'] == 'اعياد' ){
            eventColor = "yellow"
          }
        },

        dayClick: function(date, jsEvent, view, resourceObj) {
            //when a date column is clicked
        },

        eventSources: []
    })

    jQuery('#calendar-2').fullCalendar({
        customButtons: {
            show_gregorian: {
                text: 'Gregorian',
                click: function(e) {
                    jQuery('#calendar-2, #date-picker-hijrah').css('display', 'none');
                    jQuery('#calendar, #date-picker-gregorian').css('display', 'block');
                }
            },
            show_hijrah: {
                text: 'Hijrah',
                click: function(e) {
                    jQuery('#calendar-2, #date-picker-hijrah').css('display', 'block');
                    jQuery('#calendar, #date-picker-gregorian').css('display', 'none');
                }
            }
        },

        header: {
            left: 'prev,next today ',
            center: 'title',
            right: 'show_gregorian show_hijrah'
        },

        defaultDate: todays_date_in_hijrah,

        monthNames: ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'aban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"],
        monthNamesShort: [],
        dayNames: ["Yawm ath-Thulāthā’", "Yawm al-Arba‘ā’", "Yawm al-Khamīs", "Yawm al-Jum‘ah", "Yawm as-Sabt", "Yawm al-Aḥad", "Yawm al-Ithnayn"],
        dayNamesShort: ['Th', 'Ar', 'Kh', 'Ju', 'Sa', 'Ah', 'It'],

        eventClick: function(event, element) {
            //this function fires when an event is clicked on the calender
          
        },

        eventSources: []
    })

    jQuery('#calendar-2').css('display', 'none');
  

    function addEventsToCalendar() {
        jQuery('#calendar').fullCalendar('addEventSource', {
            events: [...Gregorian_Events],
//             color: 'blue',
            textColor: 'red'
        });
        jQuery('#calendar-2').fullCalendar('addEventSource', {
            events: [...Hijrah_Events],
//             color: 'rgb(40, 44, 52)',
            textColor: 'red'
        });
        jQuery('#calendar-2 td[data-date="' + todays_date_in_hijrah + '"]').css('background', '#fcf8e3');
    }

    jQuery('#calendar-2 .fc-today-button').on('click', function(e) {
        e.preventDefault();
        jQuery('#calendar-2').fullCalendar('gotoDate', todays_date_in_hijrah);
        jQuery('#calendar-2 td[data-date="' + todays_date_in_hijrah + '"]').css('background', '#fcf8e3');
    })

    jQuery('#calendar-2 .fc-prev-button').on('click', function(e) {
        jQuery('#calendar-2 td[data-date="' + todays_date_in_hijrah + '"]').css('background', '#fcf8e3');
    })

    jQuery('#calendar-2 .fc-next-button').on('click', function(e) {
        jQuery('#calendar-2 td[data-date="' + todays_date_in_hijrah + '"]').css('background', '#fcf8e3');
    })

    function generateGregorianPickerYear() {
        const start_year_gregorian = jQuery('#date-picker-year-gregorian').attr('start-year');
        let options_gregorian = '';
        for (i = Number(start_year_gregorian); i < Number(start_year_gregorian) + 10; i++) {
            options_gregorian += '<option name="' + i + '"> ' + i + ' </option>';
        }

        jQuery('#date-picker-year-gregorian').html(options_gregorian);
        jQuery('#date-picker-year-gregorian').val(todays_date.getFullYear());
        month_now = (String(todays_date.getMonth() + 1).length < 2) ? '0' + (todays_date.getMonth() + 1) : (todays_date.getMonth() + 1);
        jQuery('#date-picker-month-gregorian').val(month_now);

        const start_year_hijrah =jQuery('#date-picker-year-hijrah').attr('start-year');
        let options_hijrah = '';
        for (i = Number(start_year_hijrah); i < Number(start_year_hijrah) + 10; i++) {
            options_hijrah += '<option name="' + i + '"> ' + i + ' </option>';
        }

        jQuery('#date-picker-year-hijrah').html(options_hijrah);
        jQuery('#date-picker-year-hijrah').val(todaya_date_hijrah_object._year);

        month_now_hijrah = (String(todaya_date_hijrah_object._monthOfYear).length < 2) ? '0' + (todaya_date_hijrah_object._monthOfYear) : (todaya_date_hijrah_object._monthOfYear);
        jQuery('#date-picker-month-hijrah').val((month_now_hijrah));
    }


    function listenToDatePicker() {
        jQuery('#date-picker-year-gregorian').on('change', function(e) {
            jQuery('#calendar').fullCalendar('gotoDate', String(e.target.value) + '-' + jQuery('#date-picker-month-gregorian').val() + '-01');
        })

        jQuery('#date-picker-month-gregorian').on('change', function(e) {
            jQuery('#calendar').fullCalendar('gotoDate', jQuery('#date-picker-year-gregorian').val() + '-' + String(e.target.value) + '-01');
        })


        jQuery('#date-picker-year-hijrah').on('change', function(e) {
            jQuery('#calendar-2').fullCalendar('gotoDate', String(e.target.value) + '-' + String(jQuery('#date-picker-month-hijrah').val()) + '-01');
        })

       jQuery('#date-picker-month-hijrah').on('change', function(e) {
            jQuery('#calendar-2').fullCalendar('gotoDate', String(jQuery('#date-picker-year-hijrah').val()) + '-' + String(e.target.value) + '-01');
        })
    }

    generateGregorianPickerYear();
    listenToDatePicker();

});

jQuery('.section-home h5').html('<img class="mt-5 d-none" style="max-width:200px;width:50%" src="https://www.moc.gov.sa/sites/default/files/2023-02/poetry-nobg.png"');
jQuery('.main-home .slogon-logo').hide();

jQuery('.display-title span:lang(ar)').html('عام القهوة السعودية');
jQuery('.main-home .slogon-logo:lang(ar)').after('<a class="btn btn-lg" target="_blank" style=" min-width: auto; font-size: small; background: #ff9619; color: transparent !important; padding: 10px 30px; min-height: auto; border-radius: 2px; box-shadow: 0 10px 19px -12px #ffc076; width:119rem !important; height:100vh !important; transform: translate(350px, 100px) !important;" href="https://engage.moc.gov.sa/year-of-arabic-poetry">انقر هنا</a>');

jQuery('.display-title span:lang(en)').html('Year of Saudi Coffee');
jQuery('.main-home .slogon-logo:lang(en)').after('<a class="btn btn-lg" target="_blank" style=" min-width: auto; font-size: small; background: #ff9619; color: transparent !important; padding: 10px 30px; min-height: auto; border-radius: 2px; box-shadow: 0 10px 19px -12px #ffc076; width:119rem !important; height:100vh !important transform: translate (-350px, 100px) !important" href="https://engage.moc.gov.sa/year-of-arabic-poetry">visit the website</a>');
jQuery('.slick-slider').hide();


;
if (window.location.pathname.includes("/ar/")) {    
  
jQuery(".regular2").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      arrows: false,
      rtl: true,
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
  
} else {
  
jQuery(".regular2").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      arrows: false,
      rtl: false,
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
  
};
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});;
        
        if (window.location.pathname.includes("/ar/")) {
          // init Isotope
          var $grid = jQuery('.grid').isotope({
              //rtl
              isOriginLeft: false
                  // options
          });
       } else {
          // init Isotope
          var $grid = jQuery('.grid').isotope({
              //rtl
              isOriginLeft: true
                  // options
          });         
       }
        // filter items on button click
        jQuery('.filter-button-group').on('click', 'button', function() {
            var filterValue = jQuery(this).attr('data-filter');
              jQuery('.filter-button-group button').removeClass('active');
               jQuery(this).addClass('active');
    
            $grid.isotope({
                filter: filterValue
            });
        });;
/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset : 0
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
//             if(ndx < 0 || ndx > lastIndex) return;

            var targetTop = 0;
            if (ndx == 1) {
              targetTop = $('[data-scroll-index=' + ndx + ']').offset().top - 100 + settings.topOffset + 1;
            } else {

              targetTop = $('[data-scroll-index=' + ndx + ']').offset().top - 100 + settings.topOffset + 1;
            }

            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function (e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
            $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function (e) {
            var key = e.which;
            if(key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if(key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[data-scroll-nav]').removeClass(settings.activeClass);
            $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

           
            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top - 200 + settings.topOffset &&
                winTop < $(div).offset().top - 200 + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll',watchActive).on('scroll');

        $(window).on('keydown', keyNavigation);

        $('body').on('click','[data-scroll-nav], [data-scroll-goto]', function(e){
            e.preventDefault();
            doScroll(e);
        });

    };
}(jQuery));
;
