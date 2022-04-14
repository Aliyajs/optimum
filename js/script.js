let year = document.querySelector('.year'),
  yearTop = year.getBoundingClientRect().top,
  start = +year.innerHTML,
  end = +year.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > yearTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function() {
        year.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 1);
  }
});

let plus = document.querySelector('.plus'),
plusTop = plus.getBoundingClientRect().top,
started = +plus.innerHTML,
ends = +plus.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > plusTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function() {
      plus.innerHTML = ++started;
      if (started == ends) {
        clearInterval(interval);
      }
    }, 5);
  }
});

let ninety = document.querySelector('.ninety'),
ninetyTop = ninety.getBoundingClientRect().top,
startes = +ninety.innerHTML,
endes = +ninety.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > ninetyTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function() {
      ninety.innerHTML = ++startes;
      if (startes == endes) {
        clearInterval(interval);
      }
    }, 5);
  }
});

let twenty = document.querySelector('.twenty'),
twentyTop = twenty.getBoundingClientRect().top,
starting = +twenty.innerHTML,
ending = +twenty.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > twentyTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function() {
      twenty.innerHTML = ++starting;
      if (starting == ending) {
        clearInterval(interval);
      }
    }, 5);
  }
});
