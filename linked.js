class Node {
    constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let lastNode = this.tail();
            lastNode.nextNode = node;
        }
        this.size++;
        
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) {
            this.tail = null;
        } else {
            let tmp = this.head;
            while (tmp.nextNode) {
                tmp = tmp.nextNode;
            }
            return tmp;
        }
    }

    at(index) {
        if (index === 0) return this.head;
        let tmp = this.head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    pop() {
        if (!this.head) return;
        let lastNode = this.tail();
        let tmp = this.head;
        if (this.head == lastNode) {
            this.head = null;
        } else {
            while (tmp.nextNode !== lastNode) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = null;            
        }
        this.size--;
    }

    contains(value) {
        if (!this.head) return false;
        if (this.head.value == value) return true;        
        let tmp = this.head;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
            if (tmp.value == value) return true;
        }
        return false;
    }

    find(value) {
        if (!this.head) return null;
        if (this.head.value == value) return 0; 
        let index = 0;       
        let tmp = this.head;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
            index++;
            if (tmp.value == value) return index;
        }
        return null;
    }

    toString() {
        if (!this.head) return null;
        let tmp = this.head;
        let string = '';
        string += `( ${this.head.value} )`;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
            string += ` -> ( ${tmp.value} )`;
        }
        string += " -> null";
        return string;
    }

    insertAt(value, index) {
        if (index > this.size || index < 0) return;
        const node = new Node(value);
        if (!this.head || index === 0) {
            this.prepend(value);
        } else if (this.at(index) == this.tail()) {
            this.append(value);
        } else {
            let previousNode = this.at(index-1);
            node.nextNode = this.at(index);
            previousNode.nextNode = node;       
            this.size++;
        }
    }

    removeAt(index) {
        if (!this.head || index >= this.size || index < 0) return;
        if (this.at(index) == this.tail()) {
            this.pop();
        } else if (index === 0) {
            this.head = this.at(index+1);            
            this.size--;
        } else {
            let previousNode = this.at(index-1);
            previousNode.nextNode = this.at(index+1);
            this.size--;
        }
    }

}

// To test
testList = new LinkedList();
testList.prepend(5);
testList.append(2);
testList.append(4);
testList.prepend(1);
//testList.at(2)
//testList.pop();
//console.log(testList.tail());
//console.log(testList.contains(3));
//console.log(testList.contains(5));
//console.log(testList.find(5));
//console.log(testList.find(2));
//console.log(testList.find(3));
//testList.insertAt(10, 0);
//testList.insertAt(10, 4);
//testList.insertAt(10, 5);
//testList.insertAt(10, 2);
//testList.insertAt(10, -2);
//testList.removeAt(0);
//testList.removeAt(2);
//testList.removeAt(3);
//testList.removeAt(4);
//testList.removeAt(-4);
console.log(testList.toString());
console.log(testList);