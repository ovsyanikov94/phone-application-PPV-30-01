"use strict";

import template from './template.hbs';
import Component from "../base/component";

export default class PhoneCart extends Component{

    constructor( options ){

        super( options );

        this._title = options.title;
        this._cart = [];

        this._render();

    }

    _render(){

        this._element.innerHTML = template({
            'title': this._title,
            'cart': this._cart
        });

        this.on('click' , this.removePhone.bind(this) , '.remove-phone');

    }

    removePhone( event ){

        let id = event.target.dataset.phoneId;

        let resultIndex = this._cart.findIndex( p => {
            return p.id === id;
        } );

        if(resultIndex !== -1){

            this._cart.splice(resultIndex , 1);

            this._render();

        }//if



    }//removePhone

    addPhone( phone ){

        let result = this._cart.find( p => {
           return p.id === phone.id;
        });

        if(!result){

            this._cart.push( {
                'name': phone.name,
                'id': phone.id,
                'amount': 1
            } );

        }//if
        else{
            result.amount++;
        }//else

        this._render();

    }//addPhone

}
