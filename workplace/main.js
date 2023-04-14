const maxGap = (numbers) =>
  Math.max(
    ...numbers
      .sort((a, b) => a - b)
      .map((e, i, a) => {
        return i > 0 ? Math.abs(e - a[i - 1]) : 0;
      })
  );

console.log(maxGap([-3, -27, -4, -2]));
