function sortLib(arr, order, type) {
  let comparisons = 0,
    swaps = 0;

  function compare(a, b) {
    comparisons++;
    if (order === "asc") {
      return a - b;
    } else {
      return b - a;
    }
  }

  switch (type) {
    case "bubble":
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (compare(arr[j], arr[j + 1]) > 0) {
            swaps++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      break;
    case "selection":
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          comparisons++;
          if (compare(arr[minIndex], arr[j]) > 0) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          swaps++;
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }
      break;
    case "insertion":
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && compare(current, arr[j]) < 0) {
          comparisons++;
          swaps++;
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
      }
      break;
  }

  console.log(`Тип сортування: ${type}`);
  console.log(`Порядок: ${order}`);
  console.log(`Кількість порівнянь: ${comparisons}`);
  console.log(`Кількість обмінів/переміщень: ${swaps}`);
  console.log(`Відсортований масив:`, arr);
}

const arr = [10, 5, 2, 7, 1, 9, 4, 6, 8, 3];
sortLib([...arr], "asc", "bubble");
sortLib([...arr], "desc", "selection");
sortLib([...arr], "asc", "insertion");
