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
