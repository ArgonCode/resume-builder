// Add information to Bio ***************************************
bio.display = function() {
  // Add Name and Role
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // Add contact details
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

  // add to the header
  $("#topContacts").prepend(formattedMobile);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedTwitter);

  // add to the footer
  $("#footerContacts").prepend(formattedMobile);
  $("#footerContacts").prepend(formattedEmail);
  $("#footerContacts").prepend(formattedLocation);
  $("#footerContacts").prepend(formattedGithub);
  $("#footerContacts").prepend(formattedTwitter);

  // Add picture and welcome message
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").append(formattedBiopic);
  $("#header").append(formattedWelcomeMessage);

  // Add skills list tags
  $("#header").append(HTMLskillsStart);

  // and populate skills
  if(bio.skills.length > 0) {
    for(var skill=0; skill < bio.skills.length; skill++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").prepend(formattedSkill);
    }
  }
};


// Add infomation to Work Experiance ****************************
work.display = function() {
  for(var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var employerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(employerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}


// Add information to Projects **********************************
projects.display = function() {
  for(var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
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
$("#mapDiv").append(googleMap);


// Call all display functions in any order **********************
projects.display();
work.display();
education.display();
bio.display();

// Log user clicks **********************************************
$(document).click(function(loc) {
  console.log(logClicks(loc.pageX, loc.pageY));
});
