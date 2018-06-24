"use strict";

import template from './template.hbs';

import Component from '../base/component';

export default class PhoneCatalogue extends Component{

    constructor( options ){

        super( options );

        this._phones = options.phones;

        this._render();

        this._element.addEventListener( 'click' , this._onPhoneSelected.bind(this) );



    }

    _onPhoneSelected( event ){


        let target = event.target;

        let parent = target.closest("[data-element='phone']");

        if( parent ){

            if( target.matches("img") || target.matches("a")) {}

            let phoneSelectedEvent = new CustomEvent('phoneSelected',{
                detail: {
                    phoneID: parent.dataset.phoneId
                }
            });

            this._element.dispatchEvent(phoneSelectedEvent);

        }//if

    }//_onPhoneSelected

    _render(){

        this._element.innerHTML = template({
            'phonesArray': this._phones
        });
    }

};
