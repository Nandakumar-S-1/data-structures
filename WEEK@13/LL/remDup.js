removeDuplicates() {
    if (this.isEmpty()) return "list is empty";      // Check empty list
    
    let seen = new Set();                            // Track seen values
    let curr = this.head;                            // Current node
    let prev = null;                                 // Previous node
    
    while (curr) {                                   // Traverse list
        if (seen.has(curr.value)) {                  // If value already seen
            prev.next = curr.next;                   // Skip current node
            this.size--;                             // Decrease size
        } else {
            seen.add(curr.value);                    // Add new value to set
            prev = curr;                             // Update prev
        }
        curr = curr.next;                            // Move to next
    }
}

// Line 2: Returns message if list is empty.
// Line 4: Creates a Set to track unique values.
// Line 5: Starts curr at head.
// Line 6: Initializes prev as null (updated as we go).
// Line 8: Loops through all nodes.
// Line 9: Checks if current value is in seen.
// Line 10: If duplicate, links prev.next to skip current node.
// Line 11: Decrements size.
// Line 13: If not duplicate, adds value to seen.
// Line 14: Updates prev to current node.
// Line 16: Moves curr to next node.
// Example: List: 1 -> 2 -> 2 -> 3 -> 1

// seen={1}, prev=1, next 2 added
// seen={1,2}, prev=2, next 2 skipped → 1 -> 2 -> 3 -> 1
// seen={1,2,3}, prev=3, next 1 skipped → 1 -> 2 -> 3