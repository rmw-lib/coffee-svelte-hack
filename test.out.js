var i, j, k, l, len, len1, ref, ref1, x, y;

y = 0;

$ : x = y * 2;

$ : y > 2 ? x += y : x -= y;

$ : {
  if (x > y) {
    x = y / 2;
  } else {
    x = y + 9;
  }
  x += 1;
}

out : {
  ref = [1, 2, 3];
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = [4, 5, 6];
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      console.log(i, j);
      if (i > 1) {
        break out;
      }
    }
  }
}

