const dotenv = require('dotenv');

//load environment variables
dotenv.config();

//convert single link to outtie api call
export function convertLink(link) {
    //get href attribute of link
    let href = link.getAttribute("href");

    //convert href to link with API call
    let convertedLink = "https://api.outtie.io/create_link?sdkKey=" + process.env.SDK_KEY + "&clientId=" + process.env.CLIENT_ID + "&redirect=" + href;

    //replace href with api call
    link.setAttribute("href", convertedLink);
}


//function that loops through href tags and converts them to proper outtie api calls
function convertAllLinks() {
    //get list of all links on page
    let links = document.getElementsByTagName("a");

    //loop through links in foreach loop and convert them to api calls
    links.array.forEach(element => {
        //get href attribute of link
        let href = element.getAttribute("href");


        //convert href to link with API call
        let convertedLink = "https://api.outtie.io/create_link?sdkKey=" + process.env.SDK_KEY + "&clientId=" + process.env.CLIENT_ID + "&redirect=" + href;

        //replace href with api call
        element.setAttribute("href", convertedLink);

    }); {
    }


}

// example link
// Example: https://api.outtie.io/create_link?sdkKey=ljLuuEFFWVyOmP8ThCHsFQ&clientId=oOT55l7kNvEeZDvVLPkIIQ&redirect=https://www.aloyoga.com”

//call function when page loads, if running standalone to convert all 
// window.onload = function () { convertAllLinks();}

export function initializeOuttie() {
    window.onload = function () { convertAllLinks(); }
}