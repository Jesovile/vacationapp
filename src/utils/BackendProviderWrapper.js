import BackendProviderStub from "./BackendProviderStub";

/*TODO refactor it as stateless component*/
export default class BackendProviderWrapper{
    constructor(){
        this.provider = new BackendProviderStub();
    }

    getProvider = () => {return this.provider}

}