"use strict";


export default class Component{


    constructor( options ){

        this._element = options.element;

    }

    hide(){
        this._element.classList.add('js-hidden');
    }//hide

    show(){
        this._element.classList.remove('js-hidden');
    }//show


}