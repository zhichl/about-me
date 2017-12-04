var bio = {
    name: "Zhiqian Liu",
    role: "Front-End Develeper",
    contacts: {
        mobile: "(631) 590-9058",
        email: "e.mbryo@hotmail.com",
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
        url: "https://www.udacity.com/"
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
        description: "Develop dynamic websites and cross-platform front-end interactive applications using modern design patterns and website architecture using the core technologies Javascript, HTML, CSS, Swift and JS frameworks."
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

var projects = {
    projects: [{
            title: "Pathology Visual Query App",
            dates: "Sep 2016 - Jan 2017",
            description: "Employed the design pattern of MVC to develope this iOS App. Implemented methods to represent the nuclei distribution on respect of direction and density from pathology images of PAIS, which allows users to locate and inspect pathological areas in tissue based on their own drawing. Constructed a simple back-end server for communication between the database and the application.",

            images: [
                ""
            ]
        },

        {
            title: "Prediction of Gene Localization",
            dates: "Oct 2015 - Dec 2015",
            description: "Implemented K-Nearest Neighbor method to predict gene localization with gene data with features. Dealing with missing values to predict given incomplete training gene data. Analysed simulated data to obtain velocity field and compared it with theoretical data to obtain results.",

            images: [
                ""
            ]
        },

        {
            title: "Proposing a New Method for Fire Brigade Agent in RoboCup Rescue",
            dates: "2013 - 2014",
            description: "Constructed building temperature predicting model based on algorithm from the Grey Theory. Proposed a new pre-extinguish fire brigade fire control method instead of the traditional one. Awarded Excellence by Experts Committee (Awarded to 3/37 projects). Results applied by Apollo-Rescue team in competitions and published in ICCAS 2014.",

            images: [
                "images/non-predicted.png", "images/predicted.png", "images/pre-extinguish02-annotated.png"
            ]
        }
    ],

    display: function () {
        for (var pi = 0; pi < this.projects.length; pi++) {
            $("#projects").append(HTMLprojectStart);

            var project = this.projects[pi];
            var projectInfo = [];
            projectInfo.push(HTMLprojectTitle.replace("%data%", project.title));
            projectInfo.push(HTMLprojectDates.replace("%data%", project.dates));
            projectInfo.push(HTMLprojectDescription.replace("%data%", project.description));
            for (var imgi = 0; imgi < project.images.length; imgi++) {
                projectInfo.push(HTMLprojectImage.replace("%data%", project.images[imgi]));
            }
            var projectEntry = $(".project-entry:last");
            for (var pInfoi = 0; pInfoi < projectInfo.length; pInfoi++) {
                projectEntry.append(projectInfo[pInfoi]);
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);