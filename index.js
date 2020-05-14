const ruLanguageId = document.getElementById("ru");
const engLanguageId = document.getElementById("eng");

const ruLanguageContent = document.getElementById("ruLanguage");
const engLanguageContent = document.getElementById("engLanguage");

const changeLanguages = (e) => {
    if (e.currentTarget.className == "changeLanguage active") {
    } else {
        e.currentTarget.classList.toggle("active");
        if (e.currentTarget.id == "ru") {
            engLanguageId.classList.remove("active");
            ruLanguageContent.style.display = "block";
            engLanguageContent.style.display = "none";
        } else {
            ruLanguageId.classList.remove("active");
            ruLanguageContent.style.display = "none";
            engLanguageContent.style.display = "block";
        }
    }


}

ruLanguageId.addEventListener("click", changeLanguages)
engLanguageId.addEventListener("click", changeLanguages)

