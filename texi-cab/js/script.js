			
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
function initialize12() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var thisCity = new google.maps.LatLng(44.983334,-93.26667);
  var myOptions = {
  zoom:10,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  center: thisCity
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  var control = document.getElementById("traffic-wpr");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(control);
	// end traffic layers  
	// auto complete start
	var caddr = (document.getElementById("caddr"));
	jQuery( document ).ready(function($) {
	if ($('#HourlyBtn').is('.active')){
	var cdest = (document.getElementById("caddr"));
	}else{
	var cdest = (document.getElementById("cdest"));
	}
		});
  //var autocomplete = new google.maps.places.Autocomplete(input);
  var cad1 = new google.maps.places.Autocomplete(caddr);
  var cad2 = new google.maps.places.Autocomplete(cdest);
  //autocomplete.bindTo('bounds', map);
  cad1.bindTo('bounds', map);
  cad2.bindTo('bounds', map);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
  map: map
  });
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
   infowindow.close();
   marker.setVisible(false);
   input.className = '';
   var place = autocomplete.getPlace();
   if (!place.geometry) {
      // Inform the user that the place was not found and return.
     input.className = 'notfound';
      return;
    }
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
    } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);  // Why 17? Because it looks good.
    }

   marker.setIcon(/** @type {google.maps.Icon} */({
   url: place.icon,
   size: new google.maps.Size(71, 71),
   origin: new google.maps.Point(0, 0),
   anchor: new google.maps.Point(17, 34),
   scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
   marker.setVisible(true);
    var address = '';
    if (place.address_components) {
     address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });
   //Sets a listener on a radio button to change the filter type on Places
  //Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    google.maps.event.addDomListener(radioButton, 'click', function() {
    autocomplete.setTypes(types);
    });

  }
  setupClickListener('changetype-all', []);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);
// auto complete end

}
google.maps.event.addDomListener(window, "load", initialize12);
jQuery( document ).ready(function($) {
    $("#OneWayBtn").click(function(){
	$("#OneWayBtn").addClass("active");
	$("#HourlyBtn").removeClass("active");
	$("#RoundTripBtn").removeClass("active");
	$("#area_hours").addClass("hideit");
	$("#area_drop_address").removeClass("hideit");
	$("#area_datetime_round").addClass("hideit");
	$("#routeHours").val('');
	document.getElementById("ust_trip_type").value = 'OneWay';
	});
    $("#HourlyBtn").click(function(){
	$("#OneWayBtn").removeClass("active");
	$("#HourlyBtn").addClass("active");
	$("#RoundTripBtn").removeClass("active");
	$("#area_hours").removeClass("hideit");
	$("#area_drop_address").addClass("hideit");
	$("#area_datetime_round").addClass("hideit");
	document.getElementById("ust_trip_type").value = 'Hourly';
	});
    $("#RoundTripBtn").click(function(){
	$("#OneWayBtn").removeClass("active");
	$("#HourlyBtn").removeClass("active");
	$("#RoundTripBtn").addClass("active");
	$("#area_hours").removeClass("hideit");
	$("#area_datetime_round").removeClass("hideit");
	$("#area_hours").addClass("hideit");
	$("#area_drop_address").removeClass("hideit");
	document.getElementById("ust_trip_type").value = 'RoundTrip';
		});

});
function calc_distance() {
var end = document.getElementById("cdest").value;	
var start = document.getElementById("caddr").value;
	if (document.getElementById("ust_trip_type").value=="Hourly"){
	var end = start;
	}
	if (document.getElementById("ust_trip_type").value=="OneWay"){
			if(document.getElementById("caddr").value ==''){
			jQuery("#caddr").addClass("highlight");
			jQuery("#with-errors").html("<b>Error!</b> field is empty");
			return false;

			}else{

			jQuery("#caddr").removeClass("highlight");
			jQuery("#with-errors").remove();
			}
			if(document.getElementById("cdest").value ==''){
			jQuery("#cdest").addClass("highlight");
			jQuery("#with-errors").html("<b>Error!</b> field is empty");
			return false;
			}else{
				jQuery("#cdest").removeClass("highlight");
				jQuery("#with-errors").remove();
				}
			if(document.getElementById("dateTimePickUp").value ==''){
			jQuery("#dateTimePickUp").addClass("highlight");
			jQuery("#with-errors1").html("<b>Error!</b> field is empty");
			return false;
			}else{
				jQuery("#dateTimePickUp").removeClass("highlight");
				jQuery("#with-errors1").remove();
				}
	}
	if (document.getElementById("ust_trip_type").value=="Hourly"){
			if(document.getElementById("caddr").value ==''){
			jQuery("#caddr").addClass("highlight");
			jQuery("#with-errors").html("<b>Error!</b> field is empty");
				return false;
			}else{
				jQuery("#caddr").removeClass("highlight");
				jQuery("#with-errors").remove();
				}
			if(document.getElementById("routeHours").value ==''){
			jQuery("#routeHours").addClass("highlight");
			jQuery("#with-errors2").html("<b>Error!</b> field is empty");
			return false;

			}else{
				jQuery("#routeHours").removeClass("highlight");
				jQuery("#with-errors2").remove();

				}
			if(document.getElementById("dateTimePickUp").value ==''){
			jQuery("#dateTimePickUp").addClass("highlight");
			jQuery("#with-errors1").html("<b>Error!</b> field is empty");
			return false;
			}else{
				jQuery("#dateTimePickUp").removeClass("highlight");
				jQuery("#with-errors1").remove();
				}

	}

	if (document.getElementById("ust_trip_type").value=="RoundTrip"){
			if(document.getElementById("caddr").value ==''){
			jQuery("#caddr").addClass("highlight");
			jQuery("#with-errors").html("<b>Error!</b> field is empty");
		return false;
			}else{
				jQuery("#caddr").removeClass("highlight");
				jQuery("#with-errors").remove();
				}
			if(document.getElementById("dateTimePickUp_h").value ==''){
			jQuery("#dateTimePickUp_h").addClass("highlight");
			jQuery("#with-errors").html("<b>Error!</b> field is empty");
			return false;
			}else{
				jQuery("#dateTimePickUp_h").removeClass("highlight");
				jQuery("#with-errors").remove();
				}
			if(document.getElementById("dateTimePickUp").value ==''){
			jQuery("#dateTimePickUp").addClass("highlight");
			jQuery("#with-errors1").html("<b>Error!</b> field is empty");
			return false;
			}else{
				jQuery("#dateTimePickUp").removeClass("highlight");
				jQuery("#with-errors1").remove();

				}
	}

var passenger = document.getElementById("ust_passenger").value;
var passenger_bag = document.getElementById("ust_passenger_bag").value;
var picker_date = document.getElementById("dateTimePickUp").value;
var picker_time_hours = document.getElementById("ust_picker_time_hours").value;
var picker_time_minutes = document.getElementById("ust_picker_time_minutes").value;
var hourly_routeHours = document.getElementById("routeHours").value;
var round_trip_date = document.getElementById("dateTimePickUp_h").value;
var round_trip_hour = document.getElementById("ust_picker_time_rond").value;
var round_trip_min = document.getElementById("ust_picker_min_rond").value;
var directionsService = new google.maps.DirectionsService();
var request = {
  origin      : start, // a city, full address, landmark etc
  destination : end,
  travelMode  : google.maps.DirectionsTravelMode.DRIVING
};
directionsService.route(request, function(response, status) {
  if ( status == google.maps.DirectionsStatus.OK ) {
	var distanceInMetres = response.routes[0].legs[0].distance.value;
		var distanceInMiles = distanceInMetres / 1609;
	var distanceInMiles_round = distanceInMiles.toFixed(1);
	//alert(distanceInMiles_round);
	document.getElementById("ust_B_pickup_address").value = start;
	document.getElementById("ust_B_dropoff_address").value = end;
	document.getElementById("ust_B_passenger").value = passenger;
	document.getElementById("ust_B_passenger_bag").value = passenger_bag;
	document.getElementById("ust_distanceInMiles_round").value = distanceInMiles_round;
	document.getElementById("ust_hourly_routeHours").value = hourly_routeHours;
	document.getElementById("ust_B_picker_date").value = picker_date;
    document.getElementById("ust_B_picker_time_hours").value = picker_time_hours;
	document.getElementById("ust_B_picker_time_minutes").value = picker_time_minutes;
	document.getElementById("ust_B_picker_round_date").value = round_trip_date;
	document.getElementById("ust_B_picker_round_time_hours").value = round_trip_hour;
    document.getElementById("ust_B_picker_round_time_minutes").value = round_trip_min;
	document.getElementById("ust_taxi_booker_form").submit();
  }
  else {
    // oops, theres no route between these two locations
   // every time this happens, a kitten dies
   // so please, ensure your address is formatted properly
  }
});
}
$.noConflict();
jQuery(document).ready(function ($) {
   $( "#dateTimePickUp" ).datepicker({  minDate: '0'});
	$( "#dateTimePickUp_h" ).datepicker({  minDate: '0'});
});