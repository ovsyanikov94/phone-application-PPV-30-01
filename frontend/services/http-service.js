"use strict";


export default class httpService{

    static send( url , METHOD = 'GET'){

        return new Promise( ( resolve , reject )=>{

            let xhr = new XMLHttpRequest();
            xhr.open( METHOD , url , true );

            xhr.send();

            xhr.onerror = () => {
                reject(xhr.responseText);
            }//onerror

            xhr.onreadystatechange = ()=>{

                if(xhr.status === 200 && xhr.responseText){
                    resolve( JSON.parse( xhr.responseText ) );
                }//if
            }

        } );

    }//static send

}