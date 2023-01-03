//convert single link to outtie api call
export function convertLink(link, clientId, sdkKey) {
    //get href attribute of link
    let href = link.getAttribute("href");

    //convert href to link with API call
    let convertedLink = "https://api.outtie.io/create_link?sdkKey=" + sdkKey + "&clientId=" + clientId + "&redirect=" + href;

    //replace href with api call
    link.setAttribute("href", convertedLink);
}


//function that loops through href tags and converts them to proper outtie api calls
export function convertAllLinks(sdkKey, clientId) {
    // get list of all links on page
    let links = document.getElementsByTagName("a");
  
    // loop through links in foreach loop and convert them to api calls
    for (let element of links) {
      // get href attribute of link
      let href = element.getAttribute("href");
  
      if (href) {
        if (href.includes("http") || href.includes("https")) {
          // convert href to link with API call
          let convertedLink =
            "https://api.outtie.io/create_link?sdkKey=" +
            sdkKey +
            "&clientId=" +
            clientId +
            "&redirect=" +
            href;
  
          // replace href with api call
          element.setAttribute("href", convertedLink);
        }
      }
    }
  }

// Example: https://api.outtie.io/create_link?sdkKey={sdkKey}&clientId={clientId}&redirect=https://www.aloyoga.com

// initializes Outtie Base and Outtie Hyper (Beta)
export function initializeSuite(sdkKey, clientId) {
  var xhr = new XMLHttpRequest();

  var currentUrl = window.location.href;
  console.log("CURRENT URL: " + currentUrl);
  xhr.open('GET', 'https://api.outtie.io/scan_site/oOT55l7kNvEeZDvVLPkIIQ?site_url=' + currentUrl, true);

  xhr.onload = function () {
    // handle the response
    console.log(this.responseText);
    var data = JSON.parse(this.responseText);
    var elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    elements.forEach(function(element) {
      // process each element
      var html = element.innerHTML;
      data.forEach(function(item) {
        // process each item element
        console.log(item.name)
        if (html.includes(String(item.name))) {
          console.log('The string contains a word from the array');
          html = html.split(item.name).join('<a href="https://api.outtie.io/create_link?sdkKey=ljLuuEFFWVyOmP8ThCHsFQ&clientId=oOT55l7kNvEeZDvVLPkIIQ&redirect=' + item.website + '">' + item.name + '</a>');
        }
      })
      element.innerHTML = html;
    });
  };

  xhr.send();
}

export function initialize(sdkKey, clientId) {
    window.onload = function () { initializeSuite(sdkKey, clientId); }
}

//TODO: Figure out why export is having issues within chrome extension