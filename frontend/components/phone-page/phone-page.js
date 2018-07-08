"use strict";

import PhoneCatalogue from '../phone-catalogue/phone-catalogue';
import PhoneViewer from '../phone-viewer/phone-viewer';
import httpService from '../../services/http-service';
import Component from "../base/component";
import PhoneCart from "../phone-cart/phone-cart";
import SearchComponent from "../search-component/search-component";


export default class PhonePage extends Component{

    constructor( options ){

        super( options );

        httpService
            .send(`phones/phones.json`)
            .then( phones => {

                this._phoneCatalogue = new PhoneCatalogue({
                    element: document.querySelector('[data-component="phone-catalogue"]'),
                    phones: phones
                });

                this.on('phoneSelected' , this._onPhoneSelected.bind(this) , '[data-component="phone-catalogue"]' );

            } )
            .catch( error => {
                debugger;
                console.log( 'Exception: ' , error );
            } );

        this._phoneViwer = new PhoneViewer({
            element: document.querySelector('[data-component="phone-viewer"]'),
        });

        this._phoneCart = new PhoneCart({
            element: document.querySelector('[data-component="phone-cart"]'),
            title: 'Shopping Cart'
        });

        this._searchComponent = new SearchComponent({
            element: document.querySelector('[data-component="search-component"]'),
            title: 'Search phones:'
        });

        this.on('backEvent' , this._onButtonBack.bind(this) , '[data-component="phone-viewer"]' );
        this.on('addToCartEvent' , this._onAddPhoneToCart.bind(this) , '[data-component="phone-viewer"]' );
        this.on('searchEvent' , this._onSearchEvent.bind(this) , '[data-component="search-component"]' );

    }//construct

    _onButtonBack(  ){


        this._phoneViwer.hide();
        this._phoneCatalogue.show();

    }//_onButtonBack

    _onAddPhoneToCart( event ){

        this._phoneCart.addPhone( event.detail );

    }//_onAddPhoneToCart

    async _onSearchEvent( event ){

        let searchString = event.detail.searchString;

        try{

            let phones = await httpService.send(`phones/phones.json`);

            let resultPhones = phones.filter( ( phone )=> {

                return phone.name.toLowerCase().indexOf( searchString.toLowerCase() ) !== -1;

            } );

            this._phoneCatalogue.setPhones( resultPhones );

        }//try
        catch(ex){

            console.log('EXCEPTION: ' , ex);

        }//catch


    }//_onSearchEvent

    async _onPhoneSelected( event ){// event === CustomEvent('phoneSelected')

        try{

            let id = event.detail.phoneID;
            let phone = await httpService.send(`phones/${id}.json`);

            this._phoneCatalogue.hide();

            this._phoneViwer.setPhone( phone );

            this._phoneViwer.show();

        }//try
        catch(ex){

            console.log( 'Exception: ' , ex);

        }//catch

    }//_onPhoneSelected

}