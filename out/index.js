"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let m = ['a', 'aa', 'bxxxx', 'ccbb', 'axcc', 'zaaaaccc'];
for (let i = 0; i < m.length; i++) {
    if (m[i].length <= 4) {
        console.log('none');
    }
    else {
        console.log(m[i], m[i].length);
    }
}
