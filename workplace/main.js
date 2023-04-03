function betweenExtremes(numbers) {
return Math.max(...numbers) - Math.min(...numbers)
}

console.log(betweenExtremes([1, 434, 555, 34, 112]));