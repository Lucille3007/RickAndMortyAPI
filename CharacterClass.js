
class CharacterClass {

    #name
    #image
    #status

    constructor( name, image, status) {
        this.#name = name
        this.#image = image
        this.#status = status
    }

    get name(){
        return this.#name
    }

    get image(){
        return this.#image
    }

    get status(){
        return this.#status
    }

    set name( newName ){
        this.#name = newName
    }

    set image( newImage ){
        this.#image = newImage
    }

    set status( newStatus ){
        this.#status = newStatus
    }
}