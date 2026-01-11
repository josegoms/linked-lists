class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }
}