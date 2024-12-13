class MyClass {
  [Symbol.iterator]() {
    return {
      next: () => ({ value: 1, done: false })
    };
  }

  getGreeting() {
    return "Hello World from MyClass!";
  }
}

console.log(new MyClass().getGreeting());
