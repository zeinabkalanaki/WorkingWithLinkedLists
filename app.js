class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  append(value) {
    const newNode = { value: value, next: null /*append to end */ };

    if (this.last) {
      /* check list is not empty */
      this.last.next = newNode; /* update current last */
    }
    this.last = newNode; /* set current last */

    if (!this.first) {
      /* check list is not empty */
      this.first = newNode;
    }
  }

  toArray() {
    const elementsList = [];

    if (this.first) {
      let current = this.first;
      while (current) {
        elementsList.push(current);
        current = current.next;
      }
    }
    return elementsList;
  }
}

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append("1")
linkedList.append(true)

console.log(linkedList.toArray());