const container = document.getElementById("create");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null /*append to end */ };

    if (this.tail) {
      /* check list is not empty */
      this.tail.next = newNode; /* update current tail */
    }
    this.tail = newNode; /* set current tail */

    if (!this.head) {
      /* check list is not empty */
      this.head = newNode;
      this.head.next = this.tail;
    }
  }

  myprepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      /* check list is not empty */
      this.tail = newNode;
    }
  }

  toArray() {
    const elementsList = [];

    if (this.head) {
      let current = this.head;
      while (current) {
        elementsList.push(current);
        current = current.next;
      }
    }
    return elementsList;
  }

  indexOf(value) {
    var index = 0;
    var current = this.head;
    while (current != null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  findByIndex(input) {
    var index = 0;
    var current = this.head;
    while (current != null) {
      if (index == input) return current;
      current = current.next;
      index++;
    }

    return null;
  }

  addAfter(index) {
    var next = this.findByIndex(index + 1);
    const newNode = {
      value: (Math.random() + 1).toString(36).substring(7) + " New",
      next: next,
    };

    if (next == null) this.tail = newNode;

    var previous = this.findByIndex(index);
    previous.next = newNode;
  }

  remove(index) {
    var previous = this.findByIndex(index - 1);
    var next = this.findByIndex(index + 1);
    previous.next = next;
  }

  draw() {
    document.querySelectorAll(".node").forEach((note) => note.remove());

    if (this.head == null) {
      container.style.display = "block";
      return;
    }

    container.style.display = "none";

    if (this.head.value === this.tail.value) {
      container.insertAdjacentHTML(
        "beforebegin",
        `<div id="node">
            <div class="node-header">
                <div class="indicator">
                    <p>Head & Tail</p>
                    <span class="material-symbols-rounded size-48">upgrade</span>
                </div>
            </div>
            <div class="indicate">
                <div class="node-body ">
                    <div class="value">
                        <p>${this.head.value}</p>
                        
                    </div>
                    <div class="next">
                        <span class="material-symbols-rounded  size-48">cancel</span>
                    </div>
                </div>
                <div class="modify">
                <span class="material-symbols-rounded" onclick="removeMe(0)" >delete</span>
                    <span class="material-symbols-rounded" onclick="testme(0)" >add_box</span>
                </div>
            </div>
        </div>`
      );
      return;
    }

    container.style.display = "none";

    var current = this.head;
    while (current.next != null) {
      if (current.value === this.head.value) {
        container.insertAdjacentHTML(
          "beforebegin",
          `<div class="node">
                <div class="node-header">
                    <div class="indicator">
                        <p>Head</p>
                        <span class="material-symbols-rounded size-48">upgrade</span>
                    </div>
                </div>
                <div class="indicate">
                    <div class="node-body ">
                        <div class="value">
                            <p>${current.value}</p>
                            
                        </div>
                        <div class="next">
                            <span  class="material-symbols-rounded size-48">radio_button_checked</span>
                            <div class="next-arrow-container">                
                                <span class="material-symbols-rounded  size-60">arrow_right_alt</span>
                            </div>
                        </div>
                    </div>
                    <div class="modify">
                        <span class="material-symbols-rounded" onclick="removeMe(${this.indexOf(
                          current.value
                        )})" >delete</span>
                        <span class="material-symbols-rounded" onclick="testme(${this.indexOf(
                          current.value
                        )})" >add_box</span>
                    </div>
                </div>
            </div>`
        );
      } else {
        container.insertAdjacentHTML(
          "beforebegin",
          `
              <div class="node">
              <div class="node-header">
              </div>
      
                  <div class="node-body ">
                      <div class="value">
                      <p>${current.value}</p>
      
                      </div>
                      <div class="next">
                      <span  class="material-symbols-rounded size-48">radio_button_checked</span>
                      <div class="next-arrow-container">
                          <span class="material-symbols-rounded  size-60">arrow_right_alt</span>
                      </div>
                      </div>
                  </div>
                  <div class="modify">
                  <span class="material-symbols-rounded" onclick="removeMe(${this.indexOf(
                    current.value
                  )})" >delete</span>
                      <span class="material-symbols-rounded" onclick="testme(${this.indexOf(
                        current.value
                      )})" >add_box</span>
                  </div>
      
          </div>`
        );
      }
      current = current.next;
    }

    container.insertAdjacentHTML(
      "beforebegin",
      `
                <div class="node">
                    <div class="node-header">
                        <p>Tail</p>
                        <span class="material-symbols-rounded size-48 ">upgrade</span>
                       
                    </div>
                    <div class="indicate">
                        <div class="node-body ">
                            <div class="value">
                            <p>${this.tail.value}</p>
                            </div>
                            <div class="next">
                                <span class="material-symbols-rounded  size-48">cancel</span>
                            </div>
                        </div>
                        <div class="modify">
                        <span class="material-symbols-rounded" onclick="removeMe(${this.indexOf(
                          this.tail.value
                        )})" >delete</span>
                            <span class="material-symbols-rounded" onclick="testme(${this.indexOf(
                              this.tail.value
                            )})" >add_box</span>
                        </div>
                    </div>
                   
                </div>`
    );
  }
}

const linkedList = new LinkedList();

linkedList.append((Math.random() + 1).toString(36).substring(7));
linkedList.append((Math.random() + 1).toString(36).substring(7));
linkedList.append((Math.random() + 1).toString(36).substring(7));
linkedList.append((Math.random() + 1).toString(36).substring(7));

linkedList.draw();

function testme(params) {
  linkedList.addAfter(params);
  console.log(linkedList);
  linkedList.draw();
  console.log(linkedList);
}

function removeMe(params) {
  linkedList.remove(params);
  console.log(linkedList);
  linkedList.draw();
  console.log(linkedList);
}
