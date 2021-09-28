export class STDResponse {
    status: boolean;
    data: any;
    meta: any;

    constructor(obj: any) {
        this.status = obj.status;
        this.data = obj.data;
        this.meta = obj.meta;
    }
}