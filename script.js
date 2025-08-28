// Heart Icons
let heartCount = 0;
let hearts = document.getElementsByClassName("heart-icon-class");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count-id").innerText = heartCount;
  });
}
