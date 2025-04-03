    function occurence(arr) {
    let freq = {};
    for (let i of arr) {
        freq[i] = (freq[i] || 0) + 1;
    }
    let min = Infinity;
    let least = null;
    console.log(freq);
    for (let i in freq) {
        if (freq[i] < min) {
        min = freq[i];
        least = Number(i);
        }
    }
    return least;
    }
    console.log(occurence([1, 2, 3, 4, 1, 3, 4, 2, 5, 5, 6, 3]));
