// Add information to Bio ***************************************
bio.display = function() {
  // Add picture
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#image").append(formattedBiopic);

  // Add Name and Role
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#welcome").append(formattedWelcomeMessage);

  // Add contact details
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

  // add contact details to the header
  $("#topContacts").prepend(formattedMobile);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedTwitter);

  // add contact details to the footer
  $("#footerContacts").prepend(formattedMobile);
  $("#footerContacts").prepend(formattedEmail);
  $("#footerContacts").prepend(formattedLocation);
  $("#footerContacts").prepend(formattedGithub);
  $("#footerContacts").prepend(formattedTwitter);

  // Add skills list tags
  $("#skill-list").append(HTMLskillsStart);

  // and populate skills
  if(bio.skills.length > 0) {
    for(var skill=0; skill < bio.skills.length; skill++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};


// Add infomation to Work Experiance ****************************
work.display = function() {
  for(var job in work.jobs) {
    $("#workExperiance").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var employerTitleLocation = formattedEmployer + formattedTitle + formattedLocation;
    var employerDatesDescription = formattedDates + formattedDescription;
    $(".work-entry:last").append(employerTitleLocation);
    $(".work-entry:last").append(employerDatesDescription);
  }
}


// Add information to Projects **********************************
projects.display = function() {
  for(var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedTitleDates = formattedTitle + formattedDates;

    // Add title to description
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].title);
    // and the actual description
    formattedDescription = formattedDescription.replace("%data%", projects.projects[project].description);

    var formattedSource = HTMLprojectSource.replace("%data%", projects.projects[project].source);
    var formattedDemo = HTMLprojectDemo.replace("%data%", projects.projects[project].demo);
    var formattedSourceDemo = formattedSource + formattedDemo;

    // Main image
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);

    $(".project-entry:last").append(formattedImage);
    $(".project-entry:last").append(formattedTitleDates);
    $(".project-entry:last").append(formattedSourceDemo);
    $(".project-entry:last").append(formattedDescription);

    // thumbnails
    if(projects.projects[project].images.length > 0) {
      for(var image = 1; image < projects.projects[project].images.length; image++) {
        var formattedThumbnail = HTMLprojectThumbnails.replace("%data%", projects.projects[project].images[image]);
        $(".card-reveal:last").append(formattedThumbnail);
      }
    }
  }
}


// Add information to Education *********************************
education.display = function() {
  // Conventional education
  if (education.schools.length >0) {
    for(var school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);

      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

      var schoolNameDegree = formattedSchoolName + formattedSchoolDegree;

      $(".education-entry:last").append(schoolNameDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }

  // Online courses
  if (education.onlineCourses.length >0) {
    $("#education").append(HTMLonlineClasses);

    for(var course = 0; course < education.onlineCourses.length; course++) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

      var onlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

      $(".education-entry:last").append(onlineTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
    }
  }
}


// Turn on Google Map *******************************************
// $("#mapDiv").append(googleMap);


// Call all display functions in any order **********************
projects.display();
work.display();
// education.display();
bio.display();

// Log user clicks **********************************************
$(document).click(function(loc) {
  console.log(logClicks(loc.pageX, loc.pageY));
});
