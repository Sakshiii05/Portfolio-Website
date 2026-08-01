const projects = [

{
title:"Blog Platform",
description:"A full-stack blog application where users can create, view and comment on blog posts."
},

{
title:"E-Commerce Web Application",
description:"Online shopping application with product catalog, cart and checkout functionality."
},

{
title:"Task Management Application",
description:"Task manager to create, update and delete daily tasks."
}

];

const projectList=document.getElementById("projectList");

projects.forEach(project=>{

projectList.innerHTML += `

<div class="project">

<h3>${project.title}</h3>

<p>${project.description}</p>

</div>

`;

});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});