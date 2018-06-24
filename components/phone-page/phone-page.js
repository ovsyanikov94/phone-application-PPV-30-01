"use strict";


class PhonePage{

    constructor( options ){

        this._element = options.element;

        this._phoneCatalogue = new PhoneCatalogue({
            element: document.querySelector('[data-component="phone-catalogue"]')
        });

    }

}