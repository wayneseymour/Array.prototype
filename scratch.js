ls = xs => (a, b) => xs.splice(a, b);
orig = ['zero', 'one', 'two', 'three'];
lsF = ls(orig);

mutated = lsF(1, 3);
