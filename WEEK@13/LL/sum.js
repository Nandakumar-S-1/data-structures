sum() {
    if (this.isEmpty()) return 0;                    // Empty list returns 0
    
    let total = 0;                                   // Running total
    let curr = this.head;                            // Start at head
    while (curr) {                                   // Traverse list
        total += curr.value;                         // Add value
        curr = curr.next;                            // Move to next
    }
    return total;                                    // Return sum
}


// Line 2: Returns 0 if empty.
// Line 4: Initializes total to 0.
// Line 5: Starts curr at head.
// Line 6: Loops through all nodes.
// Line 7: Adds current value to total.
// Line 8: Moves to next node.
// Line 10: Returns final sum.
// Example: List: 1 -> 2 -> 3

// total=0+1=1
// total=1+2=3
// total=3+3=6 → Returns 6