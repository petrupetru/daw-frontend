export class producerModel{
    public Id : string | undefined;
    public Name : string | undefined;

    public constructor(init? : Partial<producerModel>){
        Object.assign(this, init);
    }
}