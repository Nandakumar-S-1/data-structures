removeNth(n) {
    if (n < 0 || n >= this.size) return "invalid index";  // Validate index
    
    if (n === 0) {                                        // Special case for head
        this.head = this.head.next;                       // Move head to next
        this.size--;                                      // Decrease size
        return;
    }
    
    let prev = this.head;                                 // Start at head
    for (let i = 0; i < n - 1; i++) {                    // Go to node before nth
        prev = prev.next;
    }
    prev.next = prev.next.next;                           // Skip nth node
    this.size--;                                          // Decrease size
}


// Line 2: Checks if n is negative or exceeds list size. If so, returns error.
// Line 4: If n is 0 (head), handles it separately.
// Line 5: Moves head to next node, effectively removing the first node.
// Line 6: Decrements size.
// Line 7: Exits since head removal is complete.
// Line 10: For non-head cases, starts prev at head.
// Line 11: Loops n-1 times to reach the node before the one to remove.
// Line 12: Moves prev forward each iteration.
// Line 14: Links prev.next to prev.next.next, skipping the nth node.
// Line 15: Decrements size.
// Example: List: 1 -> 2 -> 3 -> 4, removeNth(2)

// n=2, loop runs 1 time (n-1), prev at 2, links 2.next to 4 → 1 -> 2 -> 4