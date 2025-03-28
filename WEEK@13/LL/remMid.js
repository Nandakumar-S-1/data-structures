removeMiddle() {
    if (this.isEmpty()) return "list is empty";      // Check empty list
    if (this.size === 1) {                           // Special case: one node
        this.head = null;                            // Clear list
        this.size--;                                 // Decrease size
        return;
    }
    
    let slow = this.head;                            // Moves one step
    let fast = this.head;                            // Moves two steps
    let prev = null;                                 // Tracks node before slow
    
    while (fast && fast.next) {                      // Until fast reaches end
        prev = slow;                                 // Update prev
        slow = slow.next;                            // Move slow
        fast = fast.next.next;                       // Move fast
    }
    prev.next = slow.next;                           // Skip middle node
    this.size--;                                     // Decrease size
}


// Line 2: Returns message if empty.
// Line 3: If only one node:
// Line 4: Sets head to null.
// Line 5: Decrements size.
// Line 8: slow moves one step.
// Line 9: fast moves two steps.
// Line 10: prev tracks node before slow.
// Line 12: Loops until fast reaches end.
// Line 13-15: Updates prev, slow, fast.
// Line 17: Links prev.next to slow.next, skipping middle.
// Line 18: Decrements size.
// Example: List: 1 -> 2 -> 3 -> 4 -> 5

// slow=3, prev=2, fast=5 → prev.next=4 → 1 -> 2 -> 4 -> 5