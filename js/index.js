//the way this is coded is a bit iffy...

const beginning = document.querySelector(".inOne img");
const inTwoA = document.querySelectorAll(".inTwo a");
const inThreeA = document.querySelectorAll(".inThree a");
const inFourA = document.querySelectorAll(".inFour a");

function reveal() {
  //landing
  if (this.scrollY > 0) {
    beginning.classList.remove("inHere");
    beginning.classList.add("inNotHere");
  } else {
    beginning.classList.remove("inNotHere");
    beginning.classList.add("inHere");
  }

  //first pictures
  if (
    this.scrollY > this.innerHeight * 0.55 &&
    this.scrollY < this.innerHeight * 1.55
  ) {
    for (element of inTwoA) {
      element.classList.remove("inNotHere");
      element.classList.add("inHere");
    }
  } else {
    for (element of inTwoA) {
      element.classList.add("inNotHere");
      element.classList.remove("inHere");
    }
  }

  //second pictures
  if (
    this.scrollY > this.innerHeight * 1.55 &&
    this.scrollY < innerHeight * 2.55
  ) {
    for (element of inThreeA) {
      element.classList.remove("inNotHere");
      element.classList.add("inHere");
    }
  } else {
    for (element of inThreeA) {
      element.classList.add("inNotHere");
      element.classList.remove("inHere");
    }
  }

  //third pictures
  if (this.scrollY > this.innerHeight * 2.55) {
    for (element of inFourA) {
      element.classList.remove("inNotHere");
      element.classList.add("inHere");
    }
  } else {
    for (element of inFourA) {
      element.classList.add("inNotHere");
      element.classList.remove("inHere");
    }
  }
}

window.addEventListener("scroll", reveal);

//note: heights less than given amount = not something to worry about too much!
