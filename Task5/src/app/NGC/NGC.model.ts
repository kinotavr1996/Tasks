import { CONFIG } from './NGC.config';
import {Observable} from 'rxjs/Rx';

export module NGCModels {

    
    export class Product {

        id: number;
        productId:number;
        productName: string;
        productPrice: number;
        productUnits: number;
        promotions: NGCModels.Promotion[];
    }

    export class Promotion {
        id: number;
        promotionId:number;
        promotionName:string;
        promotionBudget:number;
       
    }

}




