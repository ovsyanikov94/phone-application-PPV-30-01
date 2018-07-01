"use strict";

import template from './template.hbs';
import Component from '../base/component';

export default class PhoneViewer extends Component{

    constructor( options ){

        super( options );

        this._phone = null;

    }

    setPhone( phone ){

        this._phone = phone;
        this._render();

        this._element.addEventListener('click' , this._onButtonBack.bind(this) );


    }

    _onButtonBack( event ){


        if( event.target.matches('[data-element="button-back"]') ){

            let backEvent = new CustomEvent('backEvent');

            this._phone = null;

            this._element.dispatchEvent(backEvent);

        }//if


    }//_onButtonBack

    _render(){

        this._element.innerHTML = template( {
            'phone': this._phone
        } );

    }

}