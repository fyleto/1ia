class oneArray {
    constructor(...arr) {
        this.arr = [...arr];
    }

    pos(num) {
        return this.arr[num - 1];
    }

    set(pos, val) {
        this.arr[pos - 1] = val;
    }
}

module.exports = oneArray;
