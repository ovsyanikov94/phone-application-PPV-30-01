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

    }

    _render(){

        this._element.innerHTML = template( {
            'phone': this._phone
        } );

    }

}