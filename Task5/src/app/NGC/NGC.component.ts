import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { NGCService } from './NGC.service';
import { Observable } from 'rxjs/Rx';
import { NGCModels } from './NGC.model';
import { CONFIG } from './NGC.config';
import { Pipe ,PipeTransform} from '@angular/core';
import { PagerService } from './index'

@Component({
    selector: 'NGC-component',
    templateUrl: './NGC.component.html',
    providers: [NGCService]

})

export class NGCComponent implements OnInit {

    products: Observable<NGCModels.Product[]>;
    currentPageOffset:number;
    pageSize:number;
    TotalPages:number;
    TotalRecords:number;

    childTableDispaly:boolean;
    sortColumn:string;
    sortOrder:string='ASC';
    totalResults:number=10;
    maxSize:number = 3;
Parsed:any;
    
    pager: any = {};
    pagedItems: any[];
    constructor(public _ngcService: NGCService,
    private pagerService: PagerService) { }

    ngOnInit() {
        console.log("ngOnInit NGC called.");
        this.currentPageOffset=1;
        this.pageSize= CONFIG.pageSize;
        this.sortColumn='id';
        this.Parsed=JSON.parse(CONFIG.DATA);
        this.products=this.Parsed.products;
        console.log(this.products);
         this.setPage(1);
        console.log('Bind done');        
    }

setPage(page: number) {
            if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.currentPageOffset=page;
        this.pager = this.pagerService.getPager(10, page,5);
        this.Parsed=JSON.parse(CONFIG.DATA);
        this.products=this.Parsed.products;
        this.products= this.Parsed.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
                                
    }

    Sort(columnName:string){
        this.sortColumn=columnName;
        if(this.sortOrder=='ASC'){
            this.sortOrder="DESC";
            this.pager = this.pagerService.getPager(10, this.currentPageOffset,5);
            this.Parsed=JSON.parse(CONFIG.DATA);
            this.products=this.Parsed.products;
            var temp1= this.Parsed.products.slice(this.pager.startIndex, this.pager.endIndex + 1);

            this.products= temp1.reverse();
            console.log(this.products);                
        }
        else{
            this.sortOrder="ASC";
            this.pager = this.pagerService.getPager(10, this.currentPageOffset,5);
            this.Parsed=JSON.parse(CONFIG.DATA);
            this.products=this.Parsed.products;
            var temp1= this.Parsed.products.slice(this.pager.startIndex, this.pager.endIndex + 1);

            temp1.sort(function(a, b) {
                return parseFloat(a.columnName) - parseFloat(b.columnName);
            });

            this.products= temp1;
                               
        }

         var eles =document.querySelectorAll("tr[id^='promotion']");
        for(var i=0;i<eles.length;i++){
            var temp= <HTMLElement>eles[i];
            temp.style.display='none';
        }
        
    }

    GetChildTable(productId:number){
        if(this.childTableDispaly)
        {
            this.childTableDispaly=false;
            var eles =document.querySelectorAll("tr[id^='promotion']");
            for(var i=0;i<eles.length;i++){
                var temp= <HTMLElement>eles[i];
                temp.style.display='none';
            }
        }
        else
        {
            this.childTableDispaly=true;
            var eles =document.querySelectorAll("tr[id^='promotion']");
            for(var i=0;i<eles.length;i++){
                var temp= <HTMLElement>eles[i];
                temp.style.display='none';
            }

        document.getElementById('promotion'+productId).style.display='';
        }
    }
}
