export default class CommonRequest{
    constructor( id, type, requester, status, content){
        this.id = id;
        this.type = type;
        this.requester = requester;
        this.status = status;
        this.content = content;
    }
}