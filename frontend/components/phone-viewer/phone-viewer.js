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

        this._thumbnail = this._element.querySelector('#phone-thumbnail');

        this.on('click' , this._onButtonBack.bind(this) , '[data-element="button-back"]');
        this.on('click' , this._onButtonAddToCart.bind(this) , '[data-element="button-add-to-cart"]');
        this.on('click' , this._changeThumbnail.bind(this) , '.phone-thumbs img');

    }//setPhone

    _changeThumbnail( event ){


        let src = event.target.getAttribute('src');

        if( src !== this._thumbnail.getAttribute('src') ){
            this._thumbnail.setAttribute('src' , src);
        }//if

    }//_changeThumbnail

    _onButtonBack( event ){


        let backEvent = new CustomEvent('backEvent');

        this._phone = null;

        this._element.dispatchEvent(backEvent);


    }//_onButtonBack

    _onButtonAddToCart(){

        let addToCartEvent = new CustomEvent('addToCartEvent', {
            detail: {
                'name': this._phone.name,
                'id'  : this._phone.id
            }
        });

        this._element.dispatchEvent(addToCartEvent);

    }//_onButtonAddToCart

    _render(){

        this._element.innerHTML = template( {
            'phone': this._phone
        } );

    }

}