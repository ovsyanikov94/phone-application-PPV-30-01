"use strict";

import PhoneCatalogue from '../phone-catalogue/phone-catalogue';
import PhoneViewer from '../phone-viewer/phone-viewer';
import httpService from '../../services/http-service';

export default class PhonePage{

    constructor( options ){

        this._element = options.element;

        httpService
            .send(`phones/phones.json`)
            .then( phones => {

                debugger;

                this._phoneCatalogue = new PhoneCatalogue({
                    element: document.querySelector('[data-component="phone-catalogue"]'),
                    phones: phones
                });

                this._phoneCatalogue._element.addEventListener('phoneSelected' , this._onPhoneSelected.bind(this) )


            } )
            .catch( error => {
                debugger;
                console.log( 'Exception: ' , error );
            } );

        this._phoneViwer = new PhoneViewer({
            element: document.querySelector('[data-component="phone-viewer"]'),
        });

        this._phoneViwer._element.addEventListener('backEvent' , this._onButtonBack.bind(this) )


    }//construct

    _onButtonBack(  ){


        this._phoneViwer.hide();
        this._phoneCatalogue.show();

    }//_onButtonBack

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