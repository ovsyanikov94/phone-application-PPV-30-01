"use strict";

import template from './template.hbs';
import Component from "../base/component";

export default class SearchComponent extends Component{

    constructor( options ) {


        super( options );

        this._title = options.title;

        this._render();

        this.on( 'input'  , this._onSearchStringChanged.bind(this) , '#SearchString' );

    }//constructor

    _render(){

        this._element.innerHTML = template({
           'title': this._title
        });
    }//_render

    _onSearchStringChanged( event ){


        let searchEvent = new CustomEvent('searchEvent' , {
           detail: {
               searchString: event.target.value
           }
        });

        this._element.dispatchEvent( searchEvent  );

    };

}
