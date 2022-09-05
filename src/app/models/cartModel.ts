export class cartModel{
    public Id : string | undefined;
    public UserId : string | undefined;

    public constructor(init? : Partial<cartModel>){
        Object.assign(this, init);
    }
}