export default class Search{
    constructor(term, country, limit, explicit, type){
        this.term = term;
        this.country = country;
        this.limit = limit;
        this.explicit = explicit;
        this.type = type;
    }
}