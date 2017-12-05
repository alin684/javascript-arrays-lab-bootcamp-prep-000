const app = "I don't do much."

function destructivelyAppendKitten(kitten1) {
  kittens.push(kitten1);
  return kittens;
}

function destructivelyPrependKitten(kitten2) {
  kittens.unshift(kitten2);
  return kittens;
}