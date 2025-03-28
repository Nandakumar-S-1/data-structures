deleteEven(){
    if (this.isEmpty()) return "list is empty";  // Check if list is empty
    // If it is, return message and exit
    
    // Handle head separately if even
    while (this.head && this.head.value % 2 === 0) {  // While head exists and is even
        this.head = this.head.next;                   // Move head to next node
        this.size--;                                  // Decrease size
    }
    
    let curr = this.head;                             // Start with current head
    while (curr && curr.next) {                       // While curr and next node exist
        if (curr.next.value % 2 === 0) {             // If next node's value is even
            curr.next = curr.next.next;               // Skip the even node
            this.size--;                              // Decrease size
        } else {
            curr = curr.next;                         // Move to next node if not even
        }
    }
}

// Line 2: Checks if the list is empty using isEmpty(). If true, returns a message and stops.
// Line 5: Starts a loop to handle cases where the head (or multiple heads) are even. Continues as long as head exists and its value is even (% 2 === 0).
// Line 6: Updates head to skip the current even-valued head by pointing to the next node.
// Line 7: Decrements size since a node was removed.
// Line 10: Sets curr to the head (which is now either null or odd).
// Line 11: Loops while curr and curr.next exist (ensures we don’t access null.next).
// Line 12: Checks if the next node’s value is even.
// Line 13: If even, skips it by linking curr.next to curr.next.next.
// Line 14: Decrements size for the removed node.
// Line 16: If not even, moves curr forward to continue checking.
// Example: List: 2 -> 4 -> 1 -> 6 -> 3

// Head loop removes 2, 4 → List: 1 -> 6 -> 3
// Main loop removes 6 → Final: 1 -> 3