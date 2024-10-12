const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((res) => {
    for (const character of res) {
      const option = document.createElement("option");
      select.appendChild(option);
      option.value = character.id;
      option.innerText = character.firstName;
    }

    const changeImage = () => {
      img.src = res[select.value].imageUrl;
    };

    select.addEventListener("change", changeImage);
  })
  .catch((err) => console.log(err));
