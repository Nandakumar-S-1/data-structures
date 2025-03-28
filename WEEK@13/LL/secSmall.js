secondSmallest() {
    if (this.size < 2) return "list too small";      // Need at least 2 nodes
    
    let smallest = Infinity;                         // Track smallest
    let secondSmall = Infinity;                      // Track second smallest
    
    let curr = this.head;                            // Start at head
    while (curr) {                                   // Traverse list
        if (curr.value < smallest) {                 // New smallest found
            secondSmall = smallest;                  // Old smallest becomes second
            smallest = curr.value;                   // Update smallest
        } else if (curr.value < secondSmall && curr.value !== smallest) {  // New second smallest
            secondSmall = curr.value;                // Update second smallest
        }
        curr = curr.next;                            // Move to next
    }
    return secondSmall === Infinity ? "no second smallest" : secondSmall;  // Return result
}


// Line 2: Checks if list has fewer than 2 nodes.
// Line 4: Initializes smallest to infinity.
// Line 5: Initializes secondSmall to infinity.
// Line 7: Starts curr at head.
// Line 8: Loops through all nodes.
// Line 9: If current value is less than smallest:
// Line 10: Old smallest becomes secondSmall.
// Line 11: Updates smallest to current value.
// Line 12: Else if current value is less than secondSmall and not equal to smallest:
// Line 13: Updates secondSmall.
// Line 15: Moves to next node.
// Line 17: Returns secondSmall or error message if still infinity.
// Example: List: 3 -> 1 -> 4 -> 2

// smallest=3, secondSmall=∞
// smallest=1, secondSmall=3
// smallest=1, secondSmall=3 (4>3)
// smallest=1, secondSmall=2 → Returns 2