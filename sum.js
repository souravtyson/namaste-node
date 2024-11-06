function calculateSum(a, b) {
    return a + b;
}

var x = "hello your inside module file"

// module.exports = {calculateSum, x};

export {calculateSum, x};
