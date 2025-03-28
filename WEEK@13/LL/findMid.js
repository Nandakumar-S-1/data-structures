findMiddle() {
    if (this.isEmpty()) return "list is empty";      // Check empty list
    
    let slow = this.head;                            // Moves one step
    let fast = this.head;                            // Moves two steps
    
    while (fast && fast.next) {                      // Until fast reaches end
        slow = slow.next;                            // Move slow one
        fast = fast.next.next;                       // Move fast two
    }
    return slow.value;                               // Slow is at middle
}


// Line 2: Returns message if empty.
// Line 4: slow moves one node at a time.
// Line 5: fast moves two nodes at a time.
// Line 7: Loops until fast reaches end (null) or has no next.next.
// Line 8: Moves slow one step.
// Line 9: Moves fast two steps.
// Line 11: When loop ends, slow is at middle, returns its value.
// Example: List: 1 -> 2 -> 3 -> 4 -> 5

// Start: slow=1, fast=1
// Step 1: slow=2, fast=3
// Step 2: slow=3, fast=5
// Step 3: fast.next=null, stops, slow.value=3