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

export function initializeOuttie(sdkKey, clientId) {
    window.onload = function () { convertAllLinks(sdkKey, clientId); }
}

//TODO: Figure out why export is having issues within chrome extension