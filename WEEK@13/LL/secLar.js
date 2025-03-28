secondLargest() {
    if (this.size < 2) return "list too small";      // Need at least 2 nodes
    
    let largest = -Infinity;                         // Track largest
    let secondLarge = -Infinity;                     // Track second largest
    
    let curr = this.head;                            // Start at head
    while (curr) {                                   // Traverse list
        if (curr.value > largest) {                  // New largest found
            secondLarge = largest;                   // Old largest becomes second
            largest = curr.value;                    // Update largest
        } else if (curr.value > secondLarge && curr.value !== largest) {  // New second largest
            secondLarge = curr.value;                // Update second largest
        }
        curr = curr.next;                            // Move to next
    }
    return secondLarge === -Infinity ? "no second largest" : secondLarge;  // Return result
}


// Line 2: Checks if list has fewer than 2 nodes.
// Line 4: Initializes largest to negative infinity.
// Line 5: Initializes secondLarge to negative infinity.
// Line 7: Starts curr at head.
// Line 8: Loops through all nodes.
// Line 9: If current value exceeds largest:
// Line 10: Old largest becomes secondLarge.
// Line 11: Updates largest.
// Line 12: Else if current value exceeds secondLarge and isn’t largest:
// Line 13: Updates secondLarge.
// Line 15: Moves to next node.
// Line 17: Returns secondLarge or error if still negative infinity.
// Example: List: 3 -> 1 -> 4 -> 2

// largest=3, secondLarge=-∞
// largest=3, secondLarge=1
// largest=4, secondLarge=3
// largest=4, secondLarge=3 (2<3) → Returns 3