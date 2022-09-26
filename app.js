const container = document.getElementById("create");

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

  draw() {
    document.querySelectorAll(".node").forEach((note) => note.remove());

    const mlist = this.toArray();

    if (mlist.length == 0) {
      container.style.display = "block";
      return;
    }

    container.style.display = "none";

    if (mlist.length == 1) {

      container.insertAdjacentHTML(
        "afterend",
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
                        <p>first</p>
                        
                    </div>
                    <div class="next">
                        <span class="material-symbols-rounded  size-48">cancel</span>
                    </div>
                </div>
                <div class="modify">
                    <span class="material-symbols-rounded">delete</span>
                    <span class="material-symbols-rounded">add_box</span>
                </div>
            </div>
        </div>`
      );
      return;
    }

    container.style.display = "none";

    mlist.forEach((note, index) => {
      if (index == 0) {
        container.insertAdjacentHTML(
          "afterend",
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
                            <p>first</p>
                            
                        </div>
                        <div class="next">
                            <span  class="material-symbols-rounded size-48">radio_button_checked</span>
                            <div class="next-arrow-container">                
                                <span class="material-symbols-rounded  size-60">arrow_right_alt</span>
                            </div>
                        </div>
                    </div>
                    <div class="modify">
                        <span class="material-symbols-rounded">delete</span>
                        <span class="material-symbols-rounded">add_box</span>
                    </div>
                </div>
            </div>`
        );
      }

 if(index == (mlist.length - 1) ){
  container.insertAdjacentHTML(
    "afterend",`
        <div class="node">
            <div class="node-header">
                <p>Tail</p>
                <span class="material-symbols-rounded size-48 ">upgrade</span>
               
            </div>
            <div class="indicate">
                <div class="node-body ">
                    <div class="value">
                        <p>last</p>
                        
                    </div>
                    <div class="next">
                        <span class="material-symbols-rounded  size-48">cancel</span>
                    </div>
                </div>
                <div class="modify">
                    <span class="material-symbols-rounded">delete</span>
                    <span class="material-symbols-rounded">add_box</span>
                </div>
            </div>
           
        </div>`)
 }

 if (index != 0 && index != (mlist.length - 1)) {
  container.insertAdjacentHTML(
    "afterend",`
    <div class="node">
    <div class="node-header">
    </div>
    <div class="indicate">
        <div class="node-body ">
            <div class="value">
                <p>middle</p>
                
            </div>
            <div class="next">
            <span  class="material-symbols-rounded size-48">radio_button_checked</span>
            <div class="next-arrow-container">                
                <span class="material-symbols-rounded  size-60">arrow_right_alt</span>
            </div>
            </div>
        </div>
        <div class="modify">
            <span class="material-symbols-rounded">delete</span>
            <span class="material-symbols-rounded">add_box</span>
        </div>
    </div>
   
</div>`)
 }

    });
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append("1");
 linkedList.append(true);
linkedList.draw();

console.log(linkedList.toArray());
