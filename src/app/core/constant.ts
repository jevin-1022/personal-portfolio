const linkdinURL = "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BZ87fjtl7ScOVycJePTc%2BPw%3D%3D"
const mediumURL = "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BZ87fjtl7ScOVycJePTc%2BPw%3D%3D"
const githubURL = "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BZ87fjtl7ScOVycJePTc%2BPw%3D%3D"


export const data = {
    dashboard : {
        socials : [
            { link : linkdinURL, class : "uil-linkedin-alt" },   // Linkdin
            { link : mediumURL, class : "uil-dribbble" },   // Medium
            { link : githubURL, class : "uil-github-alt" },   // Github
        ],
        imgLink : '../assets/img/jevin-img.jpg',
        name : "Jevin Vaghasiya",
        position: "Full-stack developer",
        description: `Experienced Full Stack Developer with proficiency in front-end and back-end technologies. 
        Passionate about creating dynamic, responsive, and scalable web applications. Check out my portfolio for innovative projects.`
    },
    about: {
        imgLink : "../assets/img/jevin-img.jpg",
        descripton : `Experienced Full Stack Developer with proficiency in front-end and back-end technologies. 
        Passionate about creating dynamic, responsive, and scalable web applications. 
        Check out my portfolio for innovative projects`,
        aboutInfo : [
            { num : "08+", title : "Years", subTitle : "experience"  },
            { num : "20+", title : "Completed", subTitle : "project"  },
            { num : "05+", title : "Companies", subTitle : "worked"  }
        ],
        cvLink : "../assets/doc/Jevin-A-Vaghasiya-resume.pdf"
    },
    skills:[
        {
            skillTitle : "Frontend developer",
            skillSubtitle: "More than 1 years",
            skillIcon : "uil-brackets-curly",
            skills:[
                { skillName : "HTML", skillNum : "90%", skillClass : "skills__html" },
                { skillName : "CSS", skillNum : "70%", skillClass : "skills__css" },
                { skillName : "JavaScript", skillNum : "60%", skillClass : "skills__js" },
                { skillName : "React", skillNum : "85%", skillClass : "skills__react" },
            ]
        },
        {
            skillTitle : "Backend developer",
            skillSubtitle: "More than 1 years",
            skillIcon : "uil-server-network",
            skills:[
                { skillName : "Node Js", skillNum : "70%", skillClass : "skills__node" },
                { skillName : "Hapi Js", skillNum : "70%", skillClass : "skills__hapi" },
                { skillName : "Express Js", skillNum : "60%", skillClass : "skills__express" }
            ]
        },
        {
            skillTitle : "Designer",
            skillSubtitle: "More than 0.5 years",
            skillIcon : "uil-swatchbook",
            skills:[
                { skillName : "Figma", skillNum : "90%", skillClass : "skills__figma" },
                { skillName : "Sketch", skillNum : "85%", skillClass : "skills__sketch" },
                { skillName : "Photoshop", skillNum : "85%", skillClass : "skills__photoshop" }
            ]
        },
    ],
    qualification : [
        {
            dataTitle : "education",
            data : [
                { title : "Computer Enginner", from : "Silver Oak University", year : "2020 - 2024" },
                { title : "Web design", from : "Silver Oak University", year : "2020 - 2024" },
                { title : "Web Development", from : "Silver Oak University", year : "2020 - 2024" },
                { title : "M-Tech in CE", from : "Silver Oak University", year : "2020 - 2024" },
            ]
        },
        {
            dataTitle : "work",
            data : [
                { title : "Software Enginner", from : "SVNIT", year : "2025 - 2026" },
                { title : "Frontend developer", from : "Techivies University", year : "2022 - 2023" },
                { title : "Web Development", from : "Nathi avdatu University", year : "2020 - 2024" }
            ],
        }
    ],
    services : [
        {
            title1 : "Ui/Ux",
            title2 : "Designer",
            icon : "uil-web-grid",
            sentences : [
                "I develop the user interface.",
                "Webpage development.",
                "I create ux element interface.",
                "I position your company brand."
            ]
        },
        {
            title1 : "Frontend",
            title2 : "Developer",
            icon : "uil-arrow",
            sentences : [
                "I develop the user interface.",
                "Webpage development.",
                "I create ux element interface.",
                "I position your company brand."
            ]
        },
        {
            title1 : "Branding",
            title2 : "Designer",
            icon : "uil-pen",
            sentences : [
                "I develop the user interface.",
                "Webpage development.",
                "I create ux element interface.",
                "I position your company brand."
            ]
        },
    ],
    portfolio:[
        {
            imgLink : "../assets/img/dv1.jpg",
            title: "Morden Website",
            description: "Website adaptable to all devices, with ui and animated interactions.",
            demo : "#"
        },
        {
            imgLink : "../assets/img/dv2.jpg",
            title: "Brand Design",
            description: "Website adaptable to all devices, with ui and animated interactions.",
            demo : "#"
        },
        {
            imgLink : "../assets/img/dv3.jpg",
            title: "Online store",
            description: "Website adaptable to all devices, with ui and animated interactions.",
            demo : "#"
        },
    ],
    testimonial:[
        {
            name: "Sara smith",
            profileLink : '../assets/img/testi1.jpg',
            subTitle: "Client",
            rating : ['uil-star', 'uil-star', 'uil-star', 'uil-star', 'uil-star'],
            clientWords : "I get good impression, I carry out my project with all posibile quality and attention and support 24 hour a day."
        },
        {
            name: "Mat Robinson",
            profileLink : '../assets/img/testi3.jpg',
            subTitle: "Client",
            rating : ['uil-star', 'uil-star', 'uil-star', 'uil-star', 'uil-star'],
            clientWords : "I get good impression, I carry out my project with all posibile quality and attention and support 24 hour a day."
        },
        {
            name: "Raul Harris",
            profileLink : '../assets/img/testi4.jpg',
            subTitle: "Client",
            rating : ['uil-star', 'uil-star', 'uil-star', 'uil-star', 'uil-star'],
            clientWords : "I get good impression, I carry out my project with all posibile quality and attention and support 24 hour a day."
        },
    ],
    footerLinks:{
        fb : "https://www.facebook.com/",
        insta : "https://www.instagram.com/",
        x : "https://twitter.com/"
    }
}



