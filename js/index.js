const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Start my code

// set navigation links

let navLinks = document.querySelectorAll('a')

navLinks[0].innerHTML = siteContent['nav']['nav-item-1']
navLinks[1].innerHTML = siteContent['nav']['nav-item-2']
navLinks[2].innerHTML = siteContent['nav']['nav-item-3']
navLinks[3].innerHTML = siteContent['nav']['nav-item-4']
navLinks[4].innerHTML = siteContent['nav']['nav-item-5']
navLinks[5].innerHTML = siteContent['nav']['nav-item-6']

// set cta 

document.querySelector('h1').innerHTML = siteContent['cta']['h1']
document.querySelector('button').innerHTML = siteContent['cta']['button']
document.querySelector('.cta img').setAttribute('src', siteContent['cta']['img-src'])

// set main content

let mainContentBlockHeaders = document.querySelectorAll('.text-content h4')

mainContentBlockHeaders[0].innerHTML = siteContent['main-content']['features-h4']
mainContentBlockHeaders[1].innerHTML = siteContent['main-content']['about-h4']
mainContentBlockHeaders[2].innerHTML = siteContent['main-content']['services-h4']
mainContentBlockHeaders[3].innerHTML = siteContent['main-content']['product-h4']

let mainContentBlockText = document.querySelectorAll('.text-content p')

mainContentBlockText[0].innerHTML = siteContent['main-content']['features-content']
mainContentBlockText[1].innerHTML = siteContent['main-content']['about-content']
mainContentBlockText[2].innerHTML = siteContent['main-content']['services-content']
mainContentBlockText[3].innerHTML = siteContent['main-content']['product-content']

document.querySelector('.middle-img').setAttribute('src', siteContent['main-content']['middle-img-src'])

// set contact info

document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')

contactInfo[0].innerHTML = siteContent['contact']['address']
contactInfo[1].innerHTML = siteContent['contact']['phone']
contactInfo[2].innerHTML = siteContent['contact']['email']


// set footer info

document.querySelector('footer p').innerHTML = siteContent['footer']['copyright']

// changing color of navigation

    navLinks.forEach(link => {link.style.color = 'green'})

    // adding 2 links using prepend and append

    let parent = document.querySelector('nav a')

    navLinks[0].append(' Team')
    navLinks[1].prepend('Item ')




