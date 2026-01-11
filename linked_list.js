class Node {
    constructor(value) {
        //Node composition
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        //Linked List head
        this.head = null;
    }

    append(value) {
        //Create new node
        let newNode = new Node(value);

        //Empty list
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        //loop over the list to reach the tail
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        //Append new node
        current.nextNode = newNode;
    }

    prepend(value) {
        //Create new node
        const newNode = new Node(value);

        //Rearrange list's head
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        //Reference and count
        let current = this.head;
        let count = 0;

        //Loop over to reach tail + count
        while(current !== null) {
            current = current.nextNode;
            count++;
        }

        return count;
    }

    getHead() {
        //Reference
        let current = this.head;

        //Empty list
        if (current === null) return undefined;

        return current.value;
    }

    tail() {
        //Reference
        let current = this.head;

        //Empty list
        if (current === null) return undefined;

        //Loop over to reach tail
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current.value;

    }

    at(index) {
        //Negative index
        if (index < 0) return undefined;

        //Reference
        let current = this.head;
        let count = 0;

        //Loop over till reach index-position value
        while (current !== null) {
            if (count === index) return current.value;
            current = current.nextNode;
            count++;
        }

        return undefined;
    }

    pop() {
        //Reference
        let current = this.head;
        
        //Empty list
        if (current == null) return undefined;

        //Deattach current head
        let popped = current.value;
        this.head = current.nextNode;
        return popped;
    }

    contains(value) {
        //Reference
        let current = this.head;

        //Loop over to possibly find the wanted value
        while (current !== null) {
            if (current.value === value) return true;
        }

        return false;
    }

    findIndex(value) {
        //Reference and count
        let current = this.head;
        let count = 0;

        //Loop over to possibly find the wanted index
        while (current !== null) {
            if (current.value === value) return count;
            current = current.nextNode;
            count++;
        }

        return -1;
    }

    toString() {
        //Reference
        let current = this.head;
        let text = "";

        //Empty list
        if (current === null) return text;

        //Add elements to string
        while (current !== null) {
            text += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        return text += "null";
    }

    insertAt(index, ...values) {
        //Reference
        let current = this.head;
        let size = this.size();

        //Index check
        if (index < 0 || index > size) throw RangeError;

        //First node
        if (index === 0) {
            for (v of values) {
                this.prepend(v);
            }
            return;
        }

        //Other nodes
        for (let i = 0; i < size; i++) {
            if (i + 1 === index) {
                //Save rest of the list
                let rest = current.nextNode.nextNode;

                //Create all necessary nodes and append
                for (v of values) {
                    let newNode = new Node(v);

                    current.nextNode = newNode;
                    current = current.nextNode;
                }

                //Reappend the rest
                current.nextNode = rest;
                return;
            }
            current = current.nextNode;
        }
    }

    removeAt(index) {
        //Reference
        let current = this.head;
        let size = this.size();

        //Index check
        if (index < 0 || index > size) throw RangeError;

        //First node
        if (index === 0) {
            this.pop();
            return;
        }
        
        //Find index position
        for (let i = 0; i < size; i++) {
            if (i + 1 === index) {
                current.nextNode = current.nextNode.nextNode;
            }
            current = current.nextNode;
        }
    }
}