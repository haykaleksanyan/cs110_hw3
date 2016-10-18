<script>
const reverse = function(arr) {
	let reverselist = [];
	for (let i = arr.length - 1; i>=0; i=i-1) {
		reverselist.push(arr[i]);
	};
	return reverselist;
};

const reverseArray = reverse([1,2,3,4,5]);
console.log(reverseArray);
</script>