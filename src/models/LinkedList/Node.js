class Node {
    #key
    #weight
    #next

    constructor(key, weigth){
        this.#key = key
        this.#weight = weigth
        this.#next = null
    }

    getKey(){
        return this.#key
    }

    getWeight(){
        return this.#weight
    }
}

export default Node