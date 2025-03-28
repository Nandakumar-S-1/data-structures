printReverse() {
    if (this.isEmpty()) return "List is Empty";      // Check empty list
    
    const printHelper = (node) => {                  // Recursive helper
        if (!node) return "";                        // Base case: null
        return printHelper(node.next) + `${node.value} `;  // Recurse + add value
    }
    
    return printHelper(this.head).trim();            // Start recursion and trim
}





// Line 2: Returns message if empty.
// Line 4: Defines recursive helper function.
// Line 5: Base case: if node is null, returns empty string.
// Line 6: Recursively calls itself on next node, then adds current value.
// Line 9: Starts recursion at head and trims trailing space.
// Example: List: 1 -> 2 -> 3

// printHelper(1) → printHelper(2) + "1 "
// printHelper(2) → printHelper(3) + "2 "
// printHelper(3) → printHelper(null) + "3 "
// "" + "3 " + "2 " + "1 " → "3 2 1"