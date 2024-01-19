const accessKey = "67diMzCHbSFRw0aTx9gki8KW6lhZ9ncfD71AT5-p5nw";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

const photoElement = document.getElementById("photo");
const photographerElement = document.getElementById("photographer");
const likeButton = document.getElementById("likeButton");
const likeCountElement = document.getElementById("likeCount");

let likeCount = 0;

// Функция для получения случайного фото из Unsplash
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.urls && data.user) {
      const photoUrl = data.urls.regular;
      const photographerName = data.user.name;

      photoElement.src = photoUrl;
      photographerElement.textContent = `Фотограф: ${photographerName}`;
    } else {
      console.error("Ошибка при получении данных");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

// Функция для обработки нажатия на кнопку "Лайк"
likeButton.addEventListener("click", () => {
  likeCount++;
  likeCountElement.textContent = `Лайков: ${likeCount}`;
});

// Загрузка первого случайного фото при загрузке страницы
getRandomPhoto();
