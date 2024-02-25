function MyMathPower(b, n) {
  let r = 1;
  for (let i = 0; i < n; i++) {
    r *= b;
  }
  console.log(`The ${n}th power of ${b} equals ${r}`);
}

function MyMathPowerDefault1(b, n) {
  MyMathPower(b || 2, n || 4);
}

function MyMathPowerDefault2(b = 2, n = 4) {
  MyMathPower(b, n);
}

function TestAllFunctions() {
  MyMathPowerDefault1(2, 4);
  MyMathPowerDefault1(4);
  MyMathPowerDefault1(undefined, 2);
  MyMathPowerDefault1();
  console.log("\n\n\n");
  MyMathPowerDefault2(2, 4);
  MyMathPowerDefault2(4);
  MyMathPowerDefault2(undefined, 2);
  MyMathPowerDefault2();
}

TestAllFunctions();
