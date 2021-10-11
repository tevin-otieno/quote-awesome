export class Quote {

    constructor(public id:number, 
                public name:string, 
                public quote:string, 
                public author:string, 
                public date:Date,
                public inspiration:number,
                public terrible:number){
        this.inspiration=0;
        this.terrible=0;
    }
}
