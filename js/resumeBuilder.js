var bio = {
    name: "Zhiqian Liu",
    role: "Front-End Develeper",
    contacts: {
        mobile: "(631) 590-9058",
        email: "roger.zq.liu@gmail.com",
        github: "zhichl",
        location: "San Francisco Bay Area"
    },
    biopic: "https://avatars1.githubusercontent.com/u/5053922?v=4&s=460",
    welcomeMessage: "Please sit and take a look",
    skills: ["Javasript", "Python", "Swift", "Java", "C"],

    display: function () {
        var headerInfo = [];
        headerInfo.push(HTMLheaderName.replace("%data%", this.name));
        headerInfo.push(HTMLheaderRole.replace("%data%", this.role));
        for (var hi = headerInfo.length - 1; hi >= 0; hi--) {
            $("#header").prepend(headerInfo[hi]);
        }

        var contactInfo = [];
        contactInfo.push(HTMLmobile.replace("%data%", this.contacts.mobile));
        contactInfo.push(HTMLemail.replace("%data%", this.contacts.email));
        contactInfo.push(HTMLgithub.replace("%data%", this.contacts.github));
        contactInfo.push(HTMLlocation.replace("%data%", this.contacts.location));
        for (var contacti = 0; contacti < contactInfo.length; contacti++) {
            $("#topContacts").append(contactInfo[contacti]);
            $("#footerContacts").append(contactInfo[contacti]);
        }

        var otherInfo = [];
        otherInfo.push(HTMLbioPic.replace("%data%", this.biopic));
        otherInfo.push(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        for (var oi = 0; oi < otherInfo.length; oi++) {
            $("#header").append(otherInfo[oi]);
        }

        var skillInfo = [];
        for (var si = 0; si < this.skills.length; si++) {
            skillInfo.push(HTMLskills.replace("%data%", this.skills[si]));
        }
        $("#header").append(HTMLskillsStart);
        for (var sInfoi = 0; sInfoi < skillInfo.length; sInfoi++) {
            $("#skills-h3").append(skillInfo[sInfoi]);
        }
    }
};

var education = {
    schools: [{
            name: "Stony Brook University",
            degree: "MS",
            dates: "Aug 2015 - May 2017",
            majors: ["Computer Science"],
            location: "Stony Brook, NY, US",
            url: "http://www.stonybrook.edu/"
        },

        {
            name: "Nanjing University of Posts and Telecommunications",
            degree: "BE",
            dates: "Set 2010 - Jul 2014",
            majors: ["Electrical Information Engineering"],
            location: "Nanjing, Jiangsu, China",
            url: "http://www.njupt.edu.cn/"
        }
    ],

    onlineCourses: [{
        title: "Front-End Nanodegree",
        school: "Udacity",
        dates: "Sep 2016 - Aug 2017",
        url: "https://printer.udacity.com/certificate/nd001?utm_medium=email&utm_campaign=nd-graduation-trigger&utm_source=blueshift&utm_content=nd-graduation&bsft_clkid=0c39b34b-5a22-481d-a481-b71812ec054f&bsft_uid=c69b802e-6758-4ddf-8e1b-c5f950b24cb6&bsft_mid=1b3b89e&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKC%2BwVbR5S02kn5VQWx45cw%3D%3D"
    }],

    display: function () {

        for (var schooli = 0; schooli < this.schools.length; schooli++) {
            var school = this.schools[schooli];
            var educationInfo = [];

            var schoolNameDegree = HTMLschoolName.replace("#", school.url).replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
            educationInfo.push(schoolNameDegree);
            educationInfo.push(HTMLschoolDates.replace("%data%", school.dates));
            educationInfo.push(HTMLschoolLocation.replace("%data%", school.location));

            var majorsCat = "";
            for (var i = 0; i < school.majors.length; i++) {
                majorsCat += school.majors[i];
                if (i !== school.majors.length - 1) {
                    majorsCat += ", ";
                }
            }

            educationInfo.push(HTMLschoolMajor.replace("%data%", majorsCat));

            $("#education").append(HTMLschoolStart);
            var educationEntry = $(".education-entry:last");
            for (var edui = 0; edui < educationInfo.length; edui++) {
                educationEntry.append(educationInfo[edui]);
            }
        }

        $("#education").append(HTMLonlineClasses);
        for (var onlinei = 0; onlinei < this.onlineCourses.length; onlinei++) {
            var onlineCourse = this.onlineCourses[onlinei];
            var onlineCourseInfo = [];

            var onlineTitleSchool = HTMLonlineTitle.replace("#", onlineCourse.url).replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school);
            onlineCourseInfo.push(onlineTitleSchool);
            onlineCourseInfo.push(HTMLonlineDates.replace("%data%", onlineCourse.dates));

            $("#education").append(HTMLonlineClassStart);
            var onlineClassEntry = $(".onlineClass-entry:last");
            for (var oci = 0; oci < onlineCourseInfo.length; oci++) {
                onlineClassEntry.append(onlineCourseInfo[oci]);
            }
        }

    }
};

var work = {
    jobs: [{
        employer: "Self-employed",
        title: "Web Developer",
        location: "San Francisco, CA",
        dates: "Jul 2017 - Present",
        description: "Develop dynamic websites and front-end interactive applications using modern design patterns and website architecture. Employ the core web technologies Javascript, HTML, CSS and JS frameworks."
    }],

    display: function () {
        $("#workExperience").append(HTMLworkStart);
        for (var wi = 0; wi < this.jobs.length; wi++) {
            var job = this.jobs[wi];
            var jobInfo = [];
            var jobEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            jobInfo.push(jobEmployerTitle);
            jobInfo.push(HTMLworkDates.replace("%data%", job.dates));
            jobInfo.push(HTMLworkLocation.replace("%data%", job.location));
            jobInfo.push(HTMLworkDescription.replace("%data%", job.description));
            var workEntry = $(".work-entry:last");
            for (var i = 0; i < jobInfo.length; i++) {
                workEntry.append(jobInfo[i]);
            }
        }
    }

};

var webProjects = {
    projects: [
        {
            title: "Readable App (Online demo not available yet)",
            dates: "Oct. 2017 -- Present",
            description: "Combined the declarative component model from React with the state management features of Redux to build a \"Readable\" application. Users can submit their own posts, comment on existing posts, edit, delete, upvote / downvote posts and comments. Leveraged the strengths of React-Router to manage routing of the application. Implemented a backend server providing request APIs using Express and MongoDB.",
            github_url: "#", // https://github.com/zhichl/readable
            demo_url: "#",
            images: []
        },

        {
            title: "Neighborhood Map App",
            dates: "Sep. 2017 -- Oct. 2017",
            description: "Created a single-page app listing places of interests in SF with details showing when interacted. Users can search all included landmarks and, when selected, additional information about a landmark is presented. Implemented MVVM design pattern using Knockout.js and simple filtering functionality. Utilized Google Map APIs and RESTful Flickr APIs for map interaction and image info fetching.",
            github_url: "https://github.com/zhichl/neighborhood-map",
            demo_url: "https://zhichl.github.io/neighborhood-map/",
            images: [
                "images/neighborhood_map.png"
            ]
        },

        {
            title: "Memory Game",
            dates: "March. 2017 -- May. 2017",
            description: "Built a complete browser-based card matching game (also known as Concentration). Used JQuery for DOM manipulation and event listening. Constructed the code in an extendable way for further difficulty upgrading needed.",
            github_url: "https://github.com/zhichl/memory-game", 
            demo_url: "https://zhichl.github.io/memory-game/",
            images: [
                "images/memory_game.png"
            ]
        },

        {
            title: "Arcade Game: Frogger",
            dates: "Jan. 2017 -- March. 2017",
            description: "This is a classic forgger arcade game built with vanilla JS and CSS. Goal to the game is to direct the character going from the grass part to the river part without colliding with any of the enemy bugs.",
            github_url: "https://github.com/zhichl/arcade-game-frogger", 
            demo_url: "https://zhichl.github.io/arcade-game-frogger/",
            images: [
                "images/arcade_game_frogger.png"
            ]
        },
    ],

    display: function () {
        for (var pi = 0; pi < this.projects.length; pi++) {
            $("#web-projects").append(HTMLprojectStart);

            var project = this.projects[pi];
            var projectInfo = [];
            
            projectInfo.push(HTMLprojectTitle.replace("#", project.github_url).replace("%data%", project.title));
            projectInfo.push(HTMLprojectDates.replace("%data%", project.dates));
            projectInfo.push(HTMLprojectDescription.replace("%data%", project.description));
            for (var imgi = 0; project.images.length > 0 && imgi < project.images.length; imgi++) {
                projectInfo.push(HTMLprojectImage.replace("#", project.demo_url).replace("%data%", project.images[imgi]));
            }
            var projectEntry = $("#web-projects .project-entry:last");
            for (var pInfoi = 0; pInfoi < projectInfo.length; pInfoi++) {
                projectEntry.append(projectInfo[pInfoi]);
            }
        }
    }
};

var otherProjects = {
    projects: [
        {
            title: "Pathology Visual Query App (Online demo not available)",
            dates: "Sep 2016 -- Jan 2017",
            description: "Employed the design pattern of MVC to develope this iOS App. Implemented methods to represent the nuclei distribution on respect of direction and density from pathology images of PAIS, which allows users to locate and inspect pathological areas in tissue based on their own drawing. Constructed a simple back-end server for communication between the database and the application.",
            github_url: "#",
            demo_url: "#",
            images: []
        },

        {
            title: "Prediction of Gene Localization (Online demo not available)",
            dates: "Oct 2015 -- Dec 2015",
            description: "Implemented K-Nearest Neighbor method to predict gene localization with gene data with features. Dealing with missing values to predict given incomplete training gene data. Analysed simulated data to obtain velocity field and compared it with theoretical data to obtain results.",
            github_url: "#",
            demo_url: "#",
            images: []
        },

        {
            title: "Fire Brigade Agent Strategy in RoboCup Rescue",
            dates: "2013 -- 2014",
            description: "Constructed building temperature predicting model based on algorithm from the Grey Theory. Proposed a new pre-extinguish fire brigade fire control method instead of the traditional one. Awarded Excellence by Experts Committee (Awarded to 3/37 projects). Results applied by Apollo-Rescue team in competitions and published in ICCAS 2014.",
            github_url: "http://ieeexplore.ieee.org/document/6988051/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKC%2BwVbR5S02kn5VQWx45cw%3D%3D",
            demo_url: "#",
            images: [
                "images/non_predicted.png", "images/predicted.png", "images/pre_extinguish02_annotated.png"
            ]
        }
    ],

    display: function () {
        for (var pi = 0; pi < this.projects.length; pi++) {
            $("#other-projects").append(HTMLprojectStart);

            var project = this.projects[pi];
            var projectInfo = [];
            
            projectInfo.push(HTMLprojectTitle.replace("#", project.github_url).replace("%data%", project.title));
            projectInfo.push(HTMLprojectDates.replace("%data%", project.dates));
            projectInfo.push(HTMLprojectDescription.replace("%data%", project.description));
            for (var imgi = 0; project.images.length > 0 && imgi < project.images.length; imgi++) {
                projectInfo.push(HTMLprojectImage.replace("#", project.demo_url).replace("%data%", project.images[imgi]));
            }
            var projectEntry = $("#other-projects .project-entry:last");
            for (var pInfoi = 0; pInfoi < projectInfo.length; pInfoi++) {
                projectEntry.append(projectInfo[pInfoi]);
            }
        }
    }
};

bio.display();
education.display();
work.display();
webProjects.display();
otherProjects.display();
// $("#mapDiv").append(googleMap);