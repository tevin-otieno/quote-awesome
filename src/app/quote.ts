export class Quote {
    public inspiration;
    public terrible;

    constructor(public id:number, public name:string, public quote:string, public author:string, public date:Date){
        this.inspiration=0;
        this.terrible=0;

    }
}
