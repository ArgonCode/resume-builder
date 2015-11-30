var HTMLheaderName = '<h2 id="name">%data%</h2>';
var HTMLheaderRole = '<span>%data%</span><hr class="hr-header">';

var HTMLcontactGeneric = '<li><a class="fa fa-github">%contact%<span class="contact-links-text">%data%</span></li>';
var HTMLmobile = '<li><i class="fa fa-mobile fa-lg contact-icons"><span class="contact-links-text"> %data%</span></i></li>';
var HTMLemail = '<li><a href="mailto:%data%"> <i class="fa fa-envelope fa-lg contact-icons"><span class="contact-links-text"> %data%</span></i></a></li>';
var HTMLtwitter = '<li><a href="https://twitter.com/%data%"> <i class="fa fa-twitter fa-lg contact-icons"><span class="contact-links-text"> %data%</span></i></a></li>';
var HTMLlinkedin = '<li><a href="https://linkedin.com/in/%data%"> <i class="fa fa-linkedin fa-lg contact-icons"><span class="contact-links-text"> linkedin</span></i></a></li>';
var HTMLgithub = '<li><a href="https://github.com/%data%"> <i class="fa fa-github fa-lg contact-icons"><span class="contact-links-text"> %data%</span></i></a></li>';
var HTMLblog = '<li><a href="%data%"> <i class="fa fa-file-text fa-lg contact-icons"><span class="contact-links-text"> blog</span></i></a></li>';
var HTMLlocation = '<li><a href="#map-section"> <i class="fa fa-map fa-lg contact-icons"><span class="contact-links-text"> %data%</span></i></a></li>';
var HTMLbioPic = '<img class="responsive-img materialboxed" src="%data%">';

var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
var HTMLskillsStart = '<h4>Skills at a Glance:</h4><p id="skills"></p>';
var HTMLskills = '<span class="skill">%data% </span>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="row no-pad-mar"><div class="col s6 left-align"><a href="#map-section">%data%';
var HTMLworkTitle = ' - %data%</a></div>';
var HTMLworkLocation = '<div class="col s6 right-align"><p class="no-pad-mar">%data%</p></div></div>';
var HTMLworkDates = '<div class="row"><div class="col s12"><p class="no-pad-mar">%data%</p>';
var HTMLworkDescription = '<p class="no-pad-mar">%data%</p></div></div>';

var HTMLprojectStart = '<div class="card hoverable medium-width project-entry"></div>';
var HTMLprojectTitle = '<div class="card-content"><p class="card-title activator grey-text text-darken-4">%data%';
var HTMLprojectDates = '<i class="date">%data%</i><i class="material-icons right">more_vert</i></p></div>';
var HTMLprojectDescription = '<div class="card-reveal"><p class="card-title grey-text text-darken-4 no-pad-mar">%data%<i class="material-icons right">close</i></p><p>%data%</p></div>';
var HTMLprojectImage = '<div class="card-image waves-effect waves-block waves-light"><img class="activator responsive-img" src="%data%"></div>';
var HTMLprojectSource = '<div class="card-action"><a href="%data%">Source Code</a>';
var HTMLprojectDemo = '<a href="%data%">Demo</a></div>';
var HTMLprojectThumbnails = '<img class="thumbnails" src="%data%">'

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="row no-pad-mar"><div class="col s6 left-align"><a href="#">%data%';
var HTMLschoolDegree = ' - %data%</a></div>'
var HTMLschoolLocation = '<div class="col s6 right-align"><p class="no-pad-mar">%data%</p></div></div>';
var HTMLschoolDates = '<div class="row"><div class="col s12"><p class="no-pad-mar">%data%</p>';
var HTMLschoolMajor = '<p class="no-pad-mar">Major: %data%</p></div></div>';

var HTMLonlineClasses = '<h5>Online Classes:</h5>';
var HTMLonlineTitle = '<div class="row"><div class="col s12"><a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<p class="no-pad-mar">%data%</p></div></div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/* Custom Google Map. https://developers.google.com/maps/documentation/javascript/reference */
var map;

function initializeMap() {
  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];

    locations.push(bio.contacts.location);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    for (var location in setup.extraLocations) {
      locations.push(setup.extraLocations[location]);
    }

    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    for (var place in locations) {
      var request = {
        query: locations[place]
      };
      service.textSearch(request, callback);
    }
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
 map.fitBounds(mapBounds);
});