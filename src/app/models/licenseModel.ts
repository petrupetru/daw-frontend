export class licenseModel{
    public Id : string | undefined;
    public Name : string | undefined;
    public Key : string | undefined;
    public ProducerId : string | undefined;

    public constructor(init? : Partial<licenseModel>){
        Object.assign(this, init);
    }
}