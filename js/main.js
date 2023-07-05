let title = document.querySelector(".title");
let title_info = document.querySelector(".title-info");
let form = document.querySelector(".form");
let fio = document.querySelector(".fio");

const data = [
  "В доме вкусная еда будет у тебя всегда!😀",
  "Ты у нас учиться будешь просто класс!😎",
  "Не тратьте время свое зря как это делают друзья!🤔",
  "Шансы на богатство есть но ради них придется попотеть!🎯",
  "Чем чаще будешь улыбаться тем больше будет получаться!😁",
  "Будешь плавать, загорать и с друзьями отдыхать!😛",
  "Будет радость и удача с крупной денежкой впридачу!!🤑",
  "Будет в жизни все отлично, особенно на фронте личном!😍",
  "Вам удачи, счастья, мира. Будет и своя квартира!🤪",
  "Негаданно, случайно откроешь чью-то тайну!🤫",
  "Если ты нарисуешь свою мечту, она обязательно сбудится!🤩",
  "Внутри вас есть сила и страсть, чтобы дотянуться до звезд и изменить мир!🤩",
  "Дело мастера боится, ты в лицей пойдешь учиться!🙂",
  "Очень скоро у тебя появятся еще друзья!😊",
  "Удивительная встреча ждет тебя в ближайший вечер!🤭",
];

let getLoading = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1700);
  });
};

let showMessage = (message) => {
  title.innerHTML = message;
};

let randomAnswer = (variants) => {
  let variant = variants[Math.floor(Math.random() * variants.length)];
  title.innerHTML = 'Приветствую вас ' + fio.value + '!<hr><br>' + variant;
  resetButton();

  let fireworks = new Fireworks();
  fireworks.run();
};

let resetButton = () => {
  let button = document.createElement("button");
  button.className = "button";
  button.textContent = "Попробовать еще раз";

  document.querySelector(".main").append(button);

  button.addEventListener("click", function () {
    location.reload();
  });
};

form.addEventListener("submit", function (e) {
  title_info.style.display = "none";
  e.preventDefault();

  this.remove();

  showMessage("Идет загрузка данных...");

  getLoading("Данные в обработке...")
    .then((message) => {
      showMessage(message);

      return getLoading("Ведется поиск информации...");
    })
    .then((message) => {
      showMessage(message);

      return getLoading("Уже почти готово...");
    })
    .then((message) => {
      showMessage(message);

      return getLoading(data);
    })
    .then(randomAnswer);
});
