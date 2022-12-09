
![outtietoppic](https://user-images.githubusercontent.com/69208945/206003175-3228e56a-841a-4521-9d76-aa3bce957b07.png)

<h1 align="left"> Outtie Web SDK</h1>

![Travis](https://img.shields.io/travis/stripe/stripe-ios/master.svg?style=flat)
![Languages](https://img.shields.io/badge/languages-javascript-blue.svg?maxAge=2592000)
![License](https://img.shields.io/cocoapods/l/Stripe.svg?style=flat)

The Outtie web SDK makes it quick and easy to monetize URL taps in your web app or website. Our SDK helps you add commissionable affiliate links to your web apps in minutes. It captures existing URLs and converts them to affiliate links so you can earn every time a user taps a link.

Earn up to 10% commissions from 5,000+ popular brands like Skims, Ulta Beauty, Walmart, Macy's, Nordstrom, Bloomingdale's, Madewell, Alo Yoga, Bonobos, Adidas, and more. Simply integrate Outtie into your app with a few lines of code and start earning on link taps.

Get started by creating a [🔑 Outtie SDK Key](https://google.com) and view our [📘 integration examples](#example) below.



Table of contents
=================

<!--ts-->
   * [Features](#features)
   * [Requirements](#requirements)
   * [Installation](#installation)
   * [Usage](#usage)
 * [Feedback](#feedback)

<!--te-->

## Features

A few of the things you can do with Outtie web right now:

* Automatically create affiliate links and redirect users when they click a link
* Convert individual links to affiliate links and redirect users to the converted link
* **More developer features coming soon...**
<!-- * Open links natively within your app or in the Safari app (to enable browser cookies) -->
<!-- * Track unique links for users -->
<!-- * View clicks, sales, and commissions -->
<!-- * Leverage the Outtie Developer API -->

## Requirements

The Outtie web SDK requires nodeJS 16.0.0 to integrate into code-based websites. For script-based initialization or no-code integration, no NodeJS is necessary. 






## Installation

```javascript
npm install outtie-web 

# or

yarn add outtie-web
```

#### **For script-based initialization or use in no-code sites, you can add our sdk script to the root of your wenbsite:**

```html
<script
    type = "text/javascript"
    src = "https://sdk.outtie.io/js/{clientID}/outtie.js">   
</script>
```

Adding this script to your website will automatically monetize all links on your website by default.

## Usage

#### Import the SDK in your code:
```javascript
import * as Outtie from 'outtie-web'
``` 

#### Initialization:

To initialize Outtie and convert all of your web links by default, use the `initialize()` function with your generated `sdkKey` and `clientId`. You can generate these variables [[here]].

```javascript
const outtie = Outtie.initialize(sdkKey, clientKey)
```


#### OR, manually convert a Link to use however you'd like 
```javascript
outtie.convertLink(link, clientId, sdkKey)
```

That's it! It's really that simple. 






## Feedback

Feel free to send us feedback on [Instagram](https://instagram.com/outtie) or [file an issue](https://github.com/OuttieDev/outtie-web/issues/new). Feature requests are always welcome.

If there's anything you'd like to chat about, please feel free to email Krish at krish@outtie.io!

