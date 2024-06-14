import Node from "./Node.js"
class LinkedList {
    #head
    #size

    constructor(){
        this.#head = null
        this.#size = 0
    }

    add(key, weigth){
        let node = new Node(key, weigth)
        console.log(node);
        if(this.#head == null){
            this.#head = node
        }else{
            let current = this.#head
            while(current.next != null){
                current = current.next
            }
            current.next = node
            console.log(current.next);
        }

        this.#size++
    }

    getAt(index){
        if(index >= 0 && index<this.#size){
            let node = this.#head
            for(let i = 0; i < index && node != null; i++)
                node = node.next
            return node
        } 
        return
    }

    run(callback){
        let current = this.#head
        if(this.#head == null){
            return
        }else{
            while(current != null){
                callback(current)
                current = current.next
            }
        }
    }

    isEmpty(){
        return (this.#head == null) ? true:false
    }

    size(){
        return this.#size
    }
}

export default LinkedList