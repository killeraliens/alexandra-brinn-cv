(this["webpackJsonpabc-cv"]=this["webpackJsonpabc-cv"]||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),r=a.n(i);a(16);function o(e){return l.a.createElement("h2",{className:"SectionTitle ".concat(e.className?e.className:"")},e.title)}function c(e){var t=e.skills,a=l.a.createElement("span",{className:"bullet"},"\u2022");return l.a.createElement("p",{className:"Skills"},t.map((function(e,n){return t[t.length-1]===e?l.a.createElement("span",{key:n},e):l.a.createElement(l.a.Fragment,{key:n},l.a.createElement("span",null,e),a)})))}function s(e){var t=e.title,a=e.link,n=e.role,i=n?l.a.createElement(l.a.Fragment,null," | ",l.a.createElement("span",{className:"role"},n)):null,r=a?l.a.createElement(l.a.Fragment,null," | ",l.a.createElement("a",{href:a.href,target:"_blank",rel:"noopener noreferrer"},a.label)):null;return l.a.createElement("div",{className:"ProjectTitle"},l.a.createElement("h3",null,t,i,r))}var m=a(2),u=a(6),d=a(3);function p(e){var t=e.contact,a=t&&t.targetBlank;return t?l.a.createElement("nav",{className:"IconNav"},l.a.createElement("ul",{className:"contact-ul"},l.a.createElement("li",null,l.a.createElement("a",{href:t.github.href,"aria-label":"link to my Github",target:"".concat(a)},l.a.createElement(m.a,{icon:u.a}))),"  ",l.a.createElement("li",null,l.a.createElement("a",{href:t.linkedin.href,"aria-label":"link to my LinkedIn",target:"".concat(a)},l.a.createElement(m.a,{icon:u.b}))),"  ",l.a.createElement("li",null,l.a.createElement("a",{href:t.email.href,"aria-label":"link to my Email",target:"".concat(a)},l.a.createElement(m.a,{icon:d.a}))),"  ",l.a.createElement("li",null,l.a.createElement("a",{href:t.website.href,"aria-label":"link to my Website",target:"".concat(a)},l.a.createElement(m.a,{icon:d.b}))))):null}var g=a(9),h=a.n(g),b={devSkills:["Postgres","Express","React","Node.js","Ruby on Rails","HTML5","CSS/SCSS","Bootstrap","jQuery","SQL","MVC architecture","REST API","OOP","git & GitHub","Heroku","now & Zeit","server-side testing in Mocha, Chai, Supertest","frontend testing with Jest, Enzyme"],designSkills:["CSS Grid & Flexbox","responsive design","Adobe Creative Suite","Webflow","Invision","Sketch","Figma","Whimsical","Mindnode","AutoCad","user interviews & testing","branding & creative content"],intro:"Alexandra Campbell - AKA Ali. Designer gone full stack web developer.",about:"Dedicated programmer coming from a background in industrial design and graphics.   I love scripting digital experiences for people and can offer a range of both creative and technical skills.   Always ready to work with any new tools for the job.",profileImg:{src:"./assets/alexandra-brinn-profile.jpg",alt:"Portrait of Alexandra"},contact:{name:"ALEXANDRA BRINN CAMPBELL",phone:"1+ (602) 625-2503",location:"Phoenix, Arizona",email:{preLabel:"email",href:"mailto:AlexandraBrinnCampbell@gmail.com",label:"AlexandraBrinnCampbell@gmail.com",targetBlank:!1},github:{preLabel:"GitHub",href:"https://github.com/killeraliens",label:"killeraliens",targetBlank:!0},linkedin:{preLabel:"LinkedIn",href:"https://linkedin.com/in/alexandra-brinn-campbell",label:"/alexandra-brinn-campbell",targetBlank:!0},website:{preLabel:"www",href:"https://alexandrabrinn.com",label:"alexandrabrinn.com",targetBlank:!0}},projects:[{title:"Goat's Guide (pivot design)",text:"If you know about an upcoming concert, fest, or tour, share the flier on Goat's Guide - a DIY bulletin board for poster artwork and event information. \nThis is a new strategy on a passion project utilizing the PERN stack along with TDD and CI techniques. Custom authorizaton and protected endpoints make both the frontend and REST API private to the community. \nRead more about the project and get demo account access",stack:"The UI is built with React, and utilizes functional components (hooks!) and React's context API to manage state.I used Express and Node.js to build the service layer, which allowed more customization in the request/response cycles.\nPostgreSQL database. Deployed with Heroku (server) and Zeit (client).",stackSkills:["PostgreSQL","Express","React","Node.js","CSS","REST API","SQL","Zeit/Now","Heroku","TDD server-side","Mocha, Chai, and Supertest"],inlineLink:{href:"https://github.com/killeraliens/goats-client",label:"here."},link:{href:"https://goatsguide.com/",label:"goatsguide.com"},github:{href:"https://github.com/killeraliens/goats-api",label:"github.com/killeraliens/goats-api"}},{title:"Goat's Guide MVP",text:"Goat\u2019s Guide is a heavy metal event & venue database concept as well as an ongoing study in UX design.         I am currently reworking this project using React, Express, and Node.js to reduce app loading time,         and improve user experience while encouraging more complete and user-sourced event data.         Check out the early Invision prototype ",stack:"This version is built with Ruby on Rails, and utilizes HTML-scraping gems such as Watir and Nokogiri,         along with custom background tasks/Sidekiq to collect event data. Uses Devise gem for authentication.         PostgreSQL database. Deployed with Heroku.",stackSkills:["Ruby on Rails","HTML-scraping","Watir","Nokogiri","Sidekiq background tasks","Devise gem auth","PostgreSQL","Heroku"],link:{href:"https://goats-guide.herokuapp.com/",label:"goats-guide.herokuapp.com"},inlineLink:{href:"https://projects.invisionapp.com/share/YRQX2W587PM",label:"here."},github:{href:"https://github.com/killeraliens/goats-guide",label:"github.com/killeraliens/goats-guide"}}],courses:[{title:"Thinkful. JavaScript, Node Fullstack Engineering Program",date:"May 2019 - Feb 2020"},{title:"Le Wagon, London. Ruby on Rails Coding Bootcamp",date:"Jan - Mar 2019"},{title:"General Assembly 8 week course in UX design",date:"Feb - Mar 2018"},{title:"Emily Carr University, Vancouver BC",date:"BDES Industrial Design, 2007"}],experiences:[{date:"Apr 2015 - Jul 2018",title:"Burgeon Group",role:"Design Project Manager",text:"Burgeon group is a niche design & build firm with a stellar international reputation for the concept, design, and fabrication of children\u2019s experience in the public library space.         My role as design project manager included coordination between  client , design, and fabrication departments.  I worked closely with the CEO/lead designer contributing to client communications, design, and marketing, as well as executed the technical drafting, construction & installation plan documents for our inhouse fabrication teams.",textBullets:["Managed projects through a complete lifecycle by coordinating with stakeholders, including clients, designers, and fabrication departments.","Supported spatial design, client communications and presentations, marketing content, and file management.","Executed and presented technical drafting, construction & installation plan documents weekly."],insta:{href:"https://www.instagram.com/burgeongroup/",label:"instagram @BurgeonGroup"}},{date:"2012 - 2015",title:"Demi Coffee, Phoenix AZ",role:"Owner/Operations",text:"Developed and operated a small food & beverage concept with a partner. Great experience in customer service, creative offerings, fun with branding. Best cold brew.",textBullets:["Known in the community for a unique (tiny!) space, fantastic cold brew, and attention to quality.","Provided exceptional customer service and a niche experience with creative food, beverages, and atmosphere."],insta:{href:"https://www.instagram.com/demicoffee/",label:"instagram @DemiCoffee"}},{date:"2012 - Current",title:"Curiotile",role:"Design and Development",text:"Personal project in product design. Iterative flatpack designs in stainless and powedercoat steel, custom displays & storage solutions. Website coming soon.",textBullets:["A personal project which showcases knowledge on process, materials, and design.",'Iterative "flatpack" designs in stainless and powder coat steel, custom displays & storage solutions.',"Images & descriptions available on request."]},{date:"2009 - 2013",title:"Ah Di\xf3s",role:" Freelance Graphics & Branding",text:"Collaborating with three others in web, film, and UX backgrounds.         Brand development and various projects in graphic, signage, web, and packaging for Visual+Intent, Cartel Coffee Lab, Request Manufacturing, Sooh Media +",textBullets:["Collaborated with a small team in the areas of web, film, branding, and UX design.","Supported brand development through signage, web, and packaging graphics for Visual+Intent, Cartel Coffee Lab, Request Manufacturing, and Sooh Media."]}]},f=(a(22),a(10));function k(e){var t=e.path,a=Object(n.useState)(""),i=Object(f.a)(a,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){return function(e){var a=new XMLHttpRequest;a.open("HEAD",t,!0),a.onreadystatechange=function(){if(this.readyState===this.DONE&&200===this.status){var e=this.getResponseHeader("content-length");return o(e)}},a.send()}()}),[]),l.a.createElement("a",{id:"pdfLink",className:"live-only",href:t,rel:"noopener noreferrer",target:"_blank",download:!0},l.a.createElement(m.a,{icon:d.c}),"download my CV ","(pdf ".concat(r/1e3," kb)"))}var E=function(){return l.a.createElement("div",{className:"App live"},l.a.createElement("nav",{className:"live-only download-nav"},l.a.createElement(k,{path:h.a})),l.a.createElement("main",{className:"cv-pdf"},l.a.createElement("div",{className:"grid-template"},l.a.createElement("div",{className:"contact-lft"},l.a.createElement("section",null,l.a.createElement("ul",{className:"contact-ul"},l.a.createElement("li",null,l.a.createElement("b",null,"Alexandra Campbell")),l.a.createElement("li",null,l.a.createElement("b",null,b.contact.phone)),l.a.createElement("li",null,l.a.createElement("b",null,b.contact.email.preLabel)," ",l.a.createElement("a",{href:b.contact.email.href,"aria-label":"link to email"},b.contact.email.label)),l.a.createElement("li",null,l.a.createElement("b",null,b.contact.github.preLabel)," ",l.a.createElement("a",{href:b.contact.github.href,"aria-label":"link to my Github",target:"_blank",rel:"noopener noreferrer"},b.contact.github.label)),l.a.createElement("li",null,l.a.createElement("b",null,b.contact.linkedin.preLabel)," ",l.a.createElement("a",{href:b.contact.linkedin.href,"aria-label":"link to my LinkedIn",target:"_blank",rel:"noopener noreferrer"},b.contact.linkedin.label)),l.a.createElement("li",null,l.a.createElement("b",null,b.contact.website.preLabel)," ",l.a.createElement("a",{href:b.contact.website.href,"aria-label":"link to my Website",target:"_blank",rel:"noopener noreferrer"},b.contact.website.label))))),l.a.createElement("div",{className:"col-one"},l.a.createElement("section",null,l.a.createElement("p",{className:"intro-p"},b.about)),l.a.createElement("section",null,l.a.createElement(o,{title:"Dev"}),l.a.createElement(c,{skills:b.devSkills})),l.a.createElement("section",null,l.a.createElement(o,{title:"UX & UI"}),l.a.createElement(c,{skills:b.designSkills})),l.a.createElement("section",null,l.a.createElement(o,{title:"Projects"}),b.projects.map((function(e,t){return l.a.createElement("div",{className:"project",key:t},l.a.createElement(s,{title:e.title,link:e.link}),l.a.createElement("p",null,e.text," ",e.inlineLink&&e.inlineLink.href?l.a.createElement("a",{href:e.inlineLink.href,target:"_blank",rel:"noopener noreferrer"},e.inlineLink.label):null),l.a.createElement(c,{skills:e.stackSkills}))})),l.a.createElement("p",null,l.a.createElement("b",null,"You can find more projects on my website at"," ",l.a.createElement("a",{href:b.contact.website.href,target:"_blank",rel:"noopener noreferrer"},b.contact.website.label))))),l.a.createElement("div",{className:"col-two"},l.a.createElement("section",null,l.a.createElement(o,{title:"Experience"}),b.experiences.map((function(e,t){return l.a.createElement("div",{className:"experience",key:t},l.a.createElement(o,{className:"date",title:e.date}),l.a.createElement(s,{title:e.title,link:e.insta,role:e.role}),l.a.createElement("ul",{className:"section-list"},e.textBullets.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("span",{style:{float:"left"}},"\u2022"),l.a.createElement("li",null,e))}))))}))),l.a.createElement("section",null,l.a.createElement(o,{title:"Education"}),b.courses.map((function(e,t){return l.a.createElement("div",{className:"course",key:t},l.a.createElement(o,{className:"date",title:e.date}),l.a.createElement(s,{title:e.title}))})))))),l.a.createElement("footer",{className:"footer live-only"},l.a.createElement(p,{contact:b.contact})))};r.a.render(l.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/alexandra-brinn-campbell-cv.14e50028.pdf"}},[[11,1,2]]]);
//# sourceMappingURL=main.696adbac.chunk.js.map