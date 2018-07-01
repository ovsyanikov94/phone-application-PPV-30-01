"use strict";


export default class Component{


    constructor( options ){

        this._element = options.element;

    }

    on( eventName , callback , cssSelector ){

        let elements = this._element.querySelectorAll(cssSelector);

        elements.forEach( el => {

            el.addEventListener( eventName , callback );

        } );

    }

    hide(){
        this._element.classList.add('js-hidden');
    }//hide

    show(){
        this._element.classList.remove('js-hidden');
    }//show


}