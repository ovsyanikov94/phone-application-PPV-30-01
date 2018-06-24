"use strict";

import PhoneCatalogue from '../phone-catalogue/phone-catalogue';
import PhoneViewer from '../phone-viewer/phone-viewer';


const phones = [
    {
        "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "age": 1,
        "id": "motorola-xoom",
        "imageUrl": "img/phones/motorola-xoom.0.jpg",
        "name": "MOTOROLA XOOM\u2122",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "age": 2,
        "carrier": "AT&T",
        "id": "motorola-atrix-4g",
        "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
        "name": "MOTOROLA ATRIX\u2122 4G",
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    },
    {
        "age": 3,
        "id": "dell-streak-7",
        "imageUrl": "img/phones/dell-streak-7.0.jpg",
        "name": "Dell Streak 7",
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    },
    {
        "age": 4,
        "carrier": "Cellular South",
        "id": "samsung-gem",
        "imageUrl": "img/phones/samsung-gem.0.jpg",
        "name": "Samsung Gem\u2122",
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    },
    {
        "age": 5,
        "carrier": "Dell",
        "id": "dell-venue",
        "imageUrl": "img/phones/dell-venue.0.jpg",
        "name": "Dell Venue",
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
    },
    {
        "age": 6,
        "carrier": "Best Buy",
        "id": "nexus-s",
        "imageUrl": "img/phones/nexus-s.0.jpg",
        "name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    },
    {
        "age": 7,
        "carrier": "Cellular South",
        "id": "lg-axis",
        "imageUrl": "img/phones/lg-axis.0.jpg",
        "name": "LG Axis",
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    },
    {
        "age": 8,
        "id": "samsung-galaxy-tab",
        "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
        "name": "Samsung Galaxy Tab\u2122",
        "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
    },
    {
        "age": 9,
        "carrier": "Cellular South",
        "id": "samsung-showcase-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
        "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
    },
    {
        "age": 10,
        "carrier": "Verizon",
        "id": "droid-2-global-by-motorola",
        "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
        "name": "DROID\u2122 2 Global by Motorola",
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
    },
    {
        "age": 11,
        "carrier": "Verizon",
        "id": "droid-pro-by-motorola",
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
        "name": "DROID\u2122 Pro by Motorola",
        "snippet": "The next generation of DOES."
    },
    {
        "age": 12,
        "carrier": "AT&T",
        "id": "motorola-bravo-with-motoblur",
        "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
        "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
        "snippet": "An experience to cheer about."
    },
    {
        "age": 13,
        "carrier": "T-Mobile",
        "id": "motorola-defy-with-motoblur",
        "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
        "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
        "snippet": "Are you ready for everything life throws your way?"
    },
    {
        "age": 14,
        "carrier": "T-Mobile",
        "id": "t-mobile-mytouch-4g",
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
        "name": "T-Mobile myTouch 4G",
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    },
    {
        "age": 15,
        "carrier": "US Cellular",
        "id": "samsung-mesmerize-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone",
        "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
    },
    {
        "age": 16,
        "carrier": "Sprint",
        "id": "sanyo-zio",
        "imageUrl": "img/phones/sanyo-zio.0.jpg",
        "name": "SANYO ZIO",
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    },
    {
        "age": 17,
        "id": "samsung-transform",
        "imageUrl": "img/phones/samsung-transform.0.jpg",
        "name": "Samsung Transform\u2122",
        "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
    },
    {
        "age": 18,
        "id": "t-mobile-g2",
        "imageUrl": "img/phones/t-mobile-g2.0.jpg",
        "name": "T-Mobile G2",
        "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    },
    {
        "age": 19,
        "id": "motorola-charm-with-motoblur",
        "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
        "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122",
        "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
    }
];

const phone = {
    "additionalFeatures": "Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget",
    "android": {
        "os": "Android 2.2",
        "ui": ""
    },
    "availability": [
        "Verizon"
    ],
    "battery": {
        "standbyTime": "330 hours",
        "talkTime": "7 hours",
        "type": "Lithium Ion (Li-Ion) (1400 mAH)"
    },
    "camera": {
        "features": [
            "Flash",
            "Video"
        ],
        "primary": "5.0 megapixels"
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "800/1900 CDMA EVDO Rev. A with dual diversity antenna, 850/900/1800/1900MHz GSM, GPRS Class 12, EDGE Class 12, 850/1900/2100 WCDMA (category 9/10), HSDPA 10.2mbps, HSUPA 1.8 mbps",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 b/g/n"
    },
    "description": "Access your work directory, email or calendar with DROID Pro by Motorola., an Android-for-business smartphone with corporate-level security. It features both a QWERTY keyboard and touchscreen, a speedy 1 GHz processor and Adobe\u00ae Flash\u00ae Player 10.",
    "display": {
        "screenResolution": "HVGA (480 x 320)",
        "screenSize": "3.1 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz TI OMAP",
        "fmRadio": false,
        "physicalKeyboard": true,
        "usb": "USB 2.0"
    },
    "id": "droid-pro-by-motorola",
    "images": [
        "img/phones/droid-pro-by-motorola.0.jpg",
        "img/phones/droid-pro-by-motorola.1.jpg"
    ],
    "name": "DROID\u2122 Pro by Motorola",
    "sizeAndWeight": {
        "dimensions": [
            "61.0 mm (w)",
            "119.0 mm (h)",
            "11.7 mm (d)"
        ],
        "weight": "134.0 grams"
    },
    "storage": {
        "flash": "2048MB",
        "ram": "512MB"
    }
};


export default class PhonePage{

    constructor( options ){

        this._element = options.element;

        this._phoneCatalogue = new PhoneCatalogue({
            element: document.querySelector('[data-component="phone-catalogue"]'),
            phones: phones
        });

        this._phoneViwer = new PhoneViewer({
            element: document.querySelector('[data-component="phone-viewer"]'),
        });

        this._phoneCatalogue._element.addEventListener('phoneSelected' , this._onPhoneSelected.bind(this) )

    }//construct

    _onPhoneSelected( event ){

        //console.log(event.detail.phoneID);
        this._phoneCatalogue.hide();

        this._phoneViwer.setPhone( phone );

        this._phoneViwer.show();


    }

}