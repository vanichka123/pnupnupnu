function sortLib(arr, order, type) {
  let comparisons = 0,
    swaps = 0;

  let undefinedCount = countUndefined(arr);
  if (undefinedCount > 0) {
    console.log(`Попередження: ${undefinedCount} undefined-елементів у масиві`);
  }

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
    case "shell":
      let gap = Math.floor(arr.length / 2);
      while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
          let current = arr[i];
          let j = i - gap;
          while (j >= 0 && compare(current, arr[j]) < 0) {
            comparisons++;
            swaps++;
            arr[j + gap] = arr[j];
            j -= gap;
          }
          arr[j + gap] = current;
        }
        gap = Math.floor(gap / 2);
      }
      break;
    case "quick":
      function quickSort(arr, start, end) {
        if (start >= end) return;
        let pivot = arr[Math.floor((start + end) / 2)];
        let i = start - 1;
        let j = end + 1;
        while (i < j) {
          comparisons++;
          while (compare(arr[++i], pivot) < 0);
          while (compare(arr[--j], pivot) > 0);
          if (i < j) {
            swaps++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }
        quickSort(arr, start, j - 1);
        quickSort(arr, j + 1, end);
      }
      quickSort(arr, 0, arr.length - 1);
      break;
    case "shell":
      let gapShell = Math.floor(arr.length / 2);
      while (gapShell > 0) {
        for (let i = gapShell; i < arr.length; i++) {
          let current = arr[i];
          let j = i - gapShell;
          while (j >= 0 && compare(current, arr[j]) < 0) {
            comparisons++;
            swaps++;
            arr[j + gapShell] = arr[j];
            j -= gapShell;
          }
          arr[j + gapShell] = current;
        }
        gapShell = Math.floor(gapShell / 2);
      }
      break;
    case "quick":
      function quickSort(arr, start, end) {
        if (start >= end) return;
        let pivot = arr[Math.floor((start + end) / 2)];
        let i = start - 1;
        let j = end + 1;
        while (i < j) {
          comparisons++;
          while (compare(arr[++i], pivot) < 0);
          while (compare(arr[--j], pivot) > 0);
          if (i < j) {
            swaps++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }
        quickSort(arr, start, j - 1);
        quickSort(arr, j + 1, end);
      }
      quickSort(arr, 0, arr.length - 1);
      break;
  }

  console.log(`Тип сортування: ${type}`);
  console.log(`Порядок: ${order}`);
  console.log(`Кількість порівнянь: ${comparisons}`);
  console.log(`Кількість обмінів/переміщень: ${swaps}`);
  console.log(`Відсортований масив:`, arr);
}

function countUndefined(arr) {
  let undefinedCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) undefinedCount++;
  }
  return undefinedCount;
}

const arr = [...Array(100)];
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}
sortLib([...arr], "asc", "bubble");
sortLib([...arr], "desc", "selection");
sortLib([...arr], "asc", "insertion");
sortLib([...arr], "asc", "shell");
sortLib([...arr], "asc", "quick");
