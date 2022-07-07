// Let's create a linked list : 15--> 3--> 6
//A class to generate a linked list as it's not built-in in JavaScript.
//@Saumyadua08

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

//Function to insert a node in the end of the list.
  
  append(value) {
    const newNode = {    // object in js.
      value: value,
      next: null
    };
    this.tail.next = newNode; //point the tail to the new     node.
    this.tail = newNode; //Now newNode is the new tail.
    this.length++;
    return this;
  }

//Function to insert a node in the front of the list.
  
  prepend(value) {
    const newNode = {
      value: value,
      next: null //this.head can't be done like that so we're just creating an empty node.
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

//Function to insert a node anywhere.
  
  insert(index, value) {
    const newNode = {
      value: value,
      next: null
    }
    if (index >= this.length) {
      return this.append(value);
    }
    else if (index === 0) {
      return this.prepend(value);
    }
    else {
      let i = 0;
      let pre = this.head;
      while (i !== index - 1) {
        pre = pre.next;
        i++;
      }
      let aft = pre.next;
      newNode.next = aft;
      pre.next = newNode;
      this.length++;
    }
  }

//Function to delete a node.
  
  delete(index) {
    if(index > 0 && index < this.length){
      let i = 0;
      let pre = this.head;
      while (i !== index - 1) {
        pre = pre.next;
        i++;
      }
      const del= pre.next;
      pre.next=del.next;
      this.length--;
    }
  }

// Function to print Linked list in more readable form.
  
  printlist() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

//Calling functions.

const obj1 = new LinkedList(15);
obj1.append(3);
obj1.append(6);
obj1.prepend(2);
obj1.insert(1, 8);
obj1.delete(3);
obj1.printlist();

