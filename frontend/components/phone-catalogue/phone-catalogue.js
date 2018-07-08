"use strict";

import template from './template.hbs';

import Component from '../base/component';

export default class PhoneCatalogue extends Component{

    constructor( options ){

        super( options );

        this._phones = options.phones;

        this._render();

    }

    _onPhoneSelected( event ){

        let target = event.target;

        if( target.matches("img") || target.matches("a")) {

            let phoneSelectedEvent = new CustomEvent('phoneSelected',{
                detail: {
                    phoneID: target.closest('[data-element="phone"]').dataset.phoneId
                }
            });

            this._element.dispatchEvent(phoneSelectedEvent);

        }//if


    }//_onPhoneSelected

    _render(){

        this._element.innerHTML = template({
            'phonesArray': this._phones
        });

        this.on('click' , this._onPhoneSelected.bind(this) ,"[data-element='phone']");

    }//_render


    setPhones( phones ){

        this._phones = phones;
        this._render();

    }//setPhones

};
