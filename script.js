function fibs(n) {
  const list = [0];

  if (n < 2) return list;

  let a = 0;
  let b = 0;
  let c = 1;

  for (let i = 1; i < n; i++) {
    a = b;
    b = c;
    c = a + b;

    list.push(b);
  }

  return list;
}

function fibsRec(n, a = 0, b = 1, list = [0]) {
  return n < 2 ? list : fibsRec(n - 1, b, a + b, list.concat(b));
}

function merge(a, b, sorted = []) {
  if (a.length < 1) return sorted.concat(b);
  if (b.length < 1) return sorted.concat(a);

  return a[0] < b[0]
    ? merge(a.slice(1), b, sorted.concat(a[0]))
    : merge(a, b.slice(1), sorted.concat(b[0]));
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const merged = merge(left, right);

  return merged;
}
