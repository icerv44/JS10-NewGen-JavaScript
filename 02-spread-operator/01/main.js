const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

let sum = [5, ...nums1, -6, -1, ...nums2];

let total = 0;
for (let x of sum) {
  total += x;
}
console.log(sum);
console.log(total);
