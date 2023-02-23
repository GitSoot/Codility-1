function compare(a, b) {
    switch (Math.sign(a - b)) {
      case 1:
        return a + ' is greater than ' + b;
      case -1:
        return a + ' is smaller than ' + b;
      case 0:
        return a + ' is equal to ' + b;
    }
  }

  console.log(compare(3, 8));

  console.log(compare(-2, -8));

  console.log(compare(2, 2));