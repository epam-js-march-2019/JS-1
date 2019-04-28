const {
  splitAndMerge,
  objectToArray,
  someObject,
  toCamelCase,
  stringReverser,
  stringExpansion,
  largest,
  smallest,
  newArray,
  sum,
  bound
} = require("./epam");

describe("1st task testing", () => {
  test("splitAndMerge() exists", () => {
    expect(splitAndMerge).toBeDefined();
  });

  test('splitAndMerge("My name is John"," ") returns "M y n a m e i s J o h n"', () => {
    expect(splitAndMerge("My name is John", " ")).toBe(
      "M y n a m e i s J o h n"
    );
  });

  test('splitAndMerge("Hello World!",",") returns "H,e,l,l,o W,o,r,l,d,!"', () => {
    expect(splitAndMerge("Hello World!", ",")).toBe("H,e,l,l,o W,o,r,l,d,!");
  });

  test("splitAndMerge() returns string ", () => {
    expect(typeof splitAndMerge("My name is John", " ")).toBe("string");
  });
});

describe("2nd task testing", () => {
  test("objectToArray() exists", () => {
    expect(objectToArray).toBeDefined();
  });

  test('objectToArray() returns [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]', () => {
    expect(objectToArray(someObject)).toEqual([
      ["name", "Jeremy"],
      ["age", 24],
      ["role", "Software Engineer"]
    ]);
  });

  test("objectToArray() returns array ", () => {
    expect(Array.isArray(objectToArray(someObject))).toBeTruthy();
  });
});

describe("3rd task testing", () => {
  test("toCamelCase() exists", () => {
    expect(toCamelCase).toBeDefined();
  });

  test('toCamelCase("the-stealth-warrior") returns "theStealthWarrior"', () => {
    expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
  });

  test('toCamelCase("The_Stealth_Warrior") returns "TheStealthWarrior"', () => {
    expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
  });

  test("toCamelCase() returns string ", () => {
    expect(typeof toCamelCase("The_Stealth_Warrior")).toBe("string");
  });
});

describe("4th task testing", () => {
  test("stringReverser() exists", () => {
    expect(stringReverser).toBeDefined();
  });

  test('stringReverser(" A fun little challenge! ") returns " A nuf elttil !egnellahc "', () => {
    expect(stringReverser(" A fun little challenge! ")).toBe(
      " A nuf elttil !egnellahc "
    );
  });

  test("stringReverser() returns string ", () => {
    expect(typeof stringReverser(" A fun little challenge! ")).toBe("string");
  });
});

describe("5th task testing", () => {
  test("stringExpansion() exists", () => {
    expect(stringExpansion).toBeDefined();
  });

  test('stringExpansion("3D2a5d2f") returns "DDDaadddddff"', () => {
    expect(stringExpansion("3D2a5d2f")).toBe("DDDaadddddff");
  });

  test('stringExpansion("3d332f2a") returns "dddffaa"', () => {
    expect(stringExpansion("3d332f2a")).toBe("dddffaa");
  });

  test('stringExpansion("abcde") returns "abcde"', () => {
    expect(stringExpansion("abcde")).toBe("abcde");
  });

  test("stringExpansion() returns string ", () => {
    expect(typeof stringExpansion("abcde")).toBe("string");
  });
});

describe("6th task testing", () => {
  test("largest() and smallest() exists", () => {
    expect(largest).toBeDefined();
    expect(smallest).toBeDefined();
  });

  test("largest(2, 0.1, -5, 100, 3) returns 100", () => {
    expect(largest(2, 0.1, -5, 100, 3)).toBe(100);
  });

  test("smallest(2, 0.1, -5, 100, 3) returns -5", () => {
    expect(smallest(2, 0.1, -5, 100, 3)).toBe(-5);
  });

  test("largest() and smallest() returns number", () => {
    expect(typeof largest(2, 0.1, -5, 100, 3)).toBe("number");
    expect(typeof smallest(2, 0.1, -5, 100, 3)).toBe("number");
  });
});

describe("7th task testing", () => {
  test("newArray exists", () => {
    expect(newArray).toBeDefined();
  });

  test("newArray[3]() returns 40", () => {
    expect(newArray[3]()).toBe(40);
  });

  test("newArray[4]() returns 50", () => {
    expect(newArray[4]()).toBe(50);
  });

  test("newArray[3]() returns number", () => {
    expect(typeof newArray[3]()).toBe("number");
  });
});

describe("8th task testing", () => {
  test("sum() exists", () => {
    expect(sum).toBeDefined();
  });

  test("sum(1,3,5,7) returns 16", () => {
    expect(sum(1, 3, 5, 7)).toBe(16);
  });

  test("sum(5, -27, -5, 7) returns -20", () => {
    expect(sum(5, -27, -5, 7)).toBe(-20);
  });

  test("sum() returns number", () => {
    expect(typeof sum(1, 3, 5, 7)).toBe("number");
  });
});

describe("10th task testing", () => {
  test("bound() exists", () => {
    expect(bound).toBeDefined();
  });

  test("bound(1) returns 10", () => {
    expect(bound(1)).toBe(10);
  });

  test("bound() returns number", () => {
    expect(typeof bound(1)).toBe("number");
  });
});
