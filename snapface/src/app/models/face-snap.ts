export class FaceSnap{
    constructor(public title: string,
        public imageUrl: string, 
        public description: string,
        public createdAt: Date,
        public snaps: number){}

    public addSnap(): void{
        this.snaps++;
    }

    public removeSnap(): void{
        this.snaps--;
    }
}