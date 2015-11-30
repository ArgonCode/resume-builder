// Page setup
var setup = {
  "title": "Resume",
  "extraLocations": ["Vancouver, BC", "Mexico City, Mexico", "London, UK", "Stockholm, Sweden"]
};


// Personal information
var bio = {
    "name": "Sylwia Bialczak",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "twitter": "argoncode",
        "github": "argoncode",
        "location": "Beaverton, OR",
        "linkedin": "sylwiambialczak",
        "email": "argoncode18@gmail.com",
        "blog": "http://www.blog.argoncode.com"
    },
    "biopic": "images/sylwia.jpeg",
    "welcomeMessage": "Sed ut perspiciatis unde omnis iste natus error sitarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "skills": ["one", "two", "three", "HTML", "CSS", "SCSS", "JavaScript", "Python", "Ruby"]
};

var education = {
  "schools": [
    {
      "name": "School Name",
      "location": "Portland, OR",
      "degree": "BS",
      "major": "Chemistry",
      "dates": "2003-2006",
      "url": "http://www.example.com"
    },
    {
      "name": "School Name",
      "location": "Portland, OR",
      "degree": "BS",
      "major": "Environmental Protection",
      "dates": "2000-2003",
      "url": "http://www.example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Title One",
      "school": "School 1",
      "dates": "2020-2021",
      "url": "http://www.example.com"
    },
    {
      "title": "Title Three",
      "school": "School 3",
      "dates": "2020-2021",
      "url": "http://www.example.com"
    },
    {
      "title": "Title Four",
      "school": "School 4",
      "dates": "Dates 2020-2021",
      "url": "http://www.example.com"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Employer",
      "title": "Title",
      "dates": "2000-2010",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh ligula, interdum vel sem vitae, pellentesque tristique erat. Curabitur vel ipsum sodales, maximus erat id, mattis mauris. Aliquam eget odio ullamcorper, luctus erat ut, consectetur augue. Aenean ut massa at augue sagittis pharetra in quis orci. Vestibulum consequat et leo eu pulvinar.",
      "location": "Turku, Finland",
      "url": "http://www.example.com"
    },
    {
      "employer": "Great Work",
      "title": "Job title",
      "dates": "2000-2010",
      "description": "Justo dolor, sagittis nec mauris quis, rutrum tempus sapien. Fusce lacinia mollis ex nec euismod. Cras tristique, tellus quis pretium vestibulum, metus metus dictum tortor, efficitur ornare eros sem vel tellus. Maecenas velit enim, aliquet nec dapibus semper, auctor non est. Donec congue sodales tellus, ut interdum nunc vestibulum viverra. Vestibulum mattis nulla in ligula pulvinar, eu tristique turpis aliquet. Vivamus sagittis turpis purus, rhoncus maximus nibh porttitor id.",
      "location": "Poznan, Poland",
      "url": "http://www.example.com"
    },
    {
      "employer": "Employer Name",
      "title": "Title Job",
      "dates": "2000-2010",
      "description": "Lorem Maecenas velit enim, aliquet nec dapibus semper, auctor non est. Donec congue sodales tellus, ut interdum nunc vestibulum viverra. Vestibulum mattis nulla in ligula pulvinar, eu tristique turpis aliquet. Vivamus sagittis turpis purus, rhoncus maximus nibh porttitor id.",
      "location": "Portland, OR",
      "url": "http://www.example.com"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "ResumeBuilder.js",
      "description": '<p>Built with:</p><ul><li>HTML</li><li>CSS / SCSS</li><li>Materialize Framework</li><li>JavaScript</li><li>jQuery</li></ul><p>Features:</p><ul><li>It populates data from a <a href="https://github.com/ArgonCode/resume-builder/blob/master/js/resumeDataEmpty.js">JSON file</a>.</li><li>Color scheme can be changed by editing <a href="https://github.com/ArgonCode/resume-builder/blob/master/scss/partials/_variables.scss">color variables</a>.</li><li>Work, Projects, Education, and Map sections can be easily swapped inside <a href="https://github.com/ArgonCode/resume-builder/blob/master/index.html">index.html</a>, if different order is preffered.</li><li>Each resume section can be turned on/off independently:</li></ul>',
      "images": ["images/resume-builder.png", "images/resume-builder-thumb-1.png", "images/resume-builder-thumb-2.png"],
      "source": "https://github.com/ArgonCode/resume-builder",
      "demo": "http://www.static.argoncode.com/resume-builder/materialize/"
    },
    {
      "title": "Some project",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh ligula, interdum vel sem vitae, pellentesque tristique erat. Curabitur vel ipsum sodales, maximus erat id, mattis mauris. Aliquam eget odio ullamcorper, luctus erat ut, consectetur augue. Aenean ut massa at augue sagittis pharetra in quis orci. Vestibulum consequat et leo eu pulvinar. Donec odio massa, ultrices vitae iaculis in, porttitor nec odio. Donec justo dolor, sagittis nec mauris quis, rutrum tempus sapien. Fusce lacinia mollis ex nec euismod. Cras tristique, tellus quis pretium vestibulum, metus metus dictum tortor, efficitur ornare eros sem vel tellus. Maecenas velit enim, aliquet nec dapibus semper, auctor non est. Donec congue sodales tellus, ut interdum nunc vestibulum viverra. Vestibulum mattis nulla in ligula pulvinar, eu tristique turpis aliquet. Vivamus sagittis turpis purus, rhoncus maximus nibh porttitor id.",
      "images": ["images/fake-project2.jpg", "images/fake-project2-1.jpg"],
      "source": "http://www.example.com",
      "demo": "http://www.example.com"
    },
    {
      "title": "Project Three",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh ligula, interdum vel sem vitae, pellentesque tristique erat. Curabitur vel ipsum sodales, maximus erat id, mattis mauris. Aliquam eget odio ullamcorper, luctus erat ut, consectetur augue. Aenean ut massa at augue sagittis pharetra in quis orci. Vestibulum consequat et leo eu pulvinar. Donec odio massa, ultrices vitae iaculis in, porttitor nec odio. Donec justo dolor, sagittis nec mauris quis, rutrum tempus sapien. Fusce lacinia mollis ex nec euismod. Cras tristique, tellus quis pretium vestibulum, metus metus dictum tortor, efficitur ornare eros sem vel tellus. Maecenas velit enim, aliquet nec dapibus semper, auctor non est. Donec congue sodales tellus, ut interdum nunc vestibulum viverra. Vestibulum mattis nulla in ligula pulvinar, eu tristique turpis aliquet. Vivamus sagittis turpis purus, rhoncus maximus nibh porttitor id.",
      "images": ["images/fake-project3.jpg", "images/fake-project3-1.jpg", "images/fake-project3-2.jpg" ],
      "source": "http://www.example.com",
      "demo": "http://www.example.com"
    }
  ]
};
