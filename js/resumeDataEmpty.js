// Page setup
var setup = {
  "title": "", // default: Resume
  "extraLocations": [] // extra locations for the map
}


// Personal information
var bio = {
    "name": "",
    "role": "",
    "contacts": {
        "mobile": "",
        "twitter": "", // just the handle
        "github": "", // just the handle
        "location": "",
        "linkedin": "", // the handle after /in/
        "email": "",
        "blog": "" // full blog link
    },
    "biopic": "", // full local location or link
    "welcomeMessage": "",
    "skills": [] // in order listed
};

var education = {
  "schools": [
    {
      "name": "",
      "location": "",
      "degree": "",
      "major": "",
      "dates": "",
      "url": ""
    },
    // add or remove additional schools objects if needed
    {
      "name": "",
      "location": "",
      "degree": "",
      "major": "",
      "dates": "",
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "", // name of the course
      "school": "", // who issued certificate or
      "dates": "",
      "url": "" // link to school or certificate
    },
    // add or remove additional courses objects if needed
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    },
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "", // Employer's name
      "title": "", // job title
      "dates": "", // duration worked
      "description": "",
      "location": "",
      "url": "" // if no link is given, it will point to map
    },
    // add or remove additional jobs objects if needed
    {
      "employer": "",
      "title": "",
      "dates": "",
      "description": "",
      "location": "",
      "url": ""
    {
      "employer": "",
      "title": "",
      "dates": "",
      "description": "",
      "location": "",
      "url": ""
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "", // project name
      "dates": "", // empty string when no dates or format adding space in front of it " 2000-2010" !!!!!! It is appended after project title
      "description": "",
      "images": [], // the first image is the main image, MUST HAVE ONE!
      // other images are added to card info. If there is only one additional photo and not much text, changing thumbnail class might make it look better
      "source": "", //link to source code
      "demo": "" // link to demo
    },
    // add or remove additional projects objects if needed
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": [],
      "source": "",
      "demo": ""
    },
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": [],
      "source": "",
      "demo": ""
    }
  ]
};
