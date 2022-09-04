export class Register{
    public Email : string | undefined;
    public Password : string | undefined;
    public role :  string | undefined;

    public constructor(init? : Partial<Register>){
        Object.assign(this, init);
        this.role = 'BasicUser';
    }
}