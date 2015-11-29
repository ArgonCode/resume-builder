// Page setup
setup.display = function() {
  if(setup.title.length > 0) {
    var pageTitle = setup.title;
    $(document).ready(function () {
      document.title = pageTitle;
    });
  }
};

setup.display();


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
  // Two places: email-display, and mailto:
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  formattedTwitter = formattedTwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  formattedGithub = formattedGithub.replace("%data%", bio.contacts.github);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  formattedEmail = formattedEmail.replace("%data%", bio.contacts.email);

  // one place
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

  // add contact details to the header
  $("#contacts-top").prepend(formattedMobile);
  $("#contacts-top").prepend(formattedEmail);
  $("#contacts-top").prepend(formattedLocation);
  $("#contacts-top").prepend(formattedBlog);
  $("#contacts-top").prepend(formattedGithub);
  $("#contacts-top").prepend(formattedTwitter);

  // add contact details to the footer
  $("#contacts-footer").prepend(formattedMobile);
  $("#contacts-footer").prepend(formattedEmail);
  $("#contacts-footer").prepend(formattedLocation);
  $("#contacts-footer").prepend(formattedBlog);
  $("#contacts-footer").prepend(formattedGithub);
  $("#contacts-footer").prepend(formattedTwitter);

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
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

      // join sections
      var formattedSchoolNameDegreeLocation = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation;
      var formattedDateMajor = formattedSchoolDates + formattedSchoolMajor;

      $(".education-entry:last").append(formattedSchoolNameDegreeLocation);
      $(".education-entry:last").append(formattedDateMajor);
    }
  }

  // Online courses
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);

    for(var course = 0; course < education.onlineCourses.length; course++) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

      var onlineOnlineCourse = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates;

      $(".education-entry:last").append(onlineOnlineCourse);
    }
  }
}


// Turn on Google Map *******************************************
$("#add-map").append(googleMap);


// Call all display functions in any order **********************
projects.display();
work.display();
education.display();
bio.display();


// Log user clicks **********************************************
$(document).click(function(loc) {
  console.log(logClicks(loc.pageX, loc.pageY));
});
