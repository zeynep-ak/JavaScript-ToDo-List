const ekleButton = document.getElementById("ekleButton");

const ulDOM = document.getElementById("todo-list");

ekleButton.addEventListener("click", function () {

    if (eklenecekVeri.value) {
        var li = document.createElement("li");

        li.textContent = eklenecekVeri.value;

        ulDOM.appendChild(li);

        eklenecekVeri.value = "";

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'btn')
        deleteButton.setAttribute('id', 'deleteButton');
        deleteButton.innerHTML = "Sil";

        ulDOM.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            ulDOM.removeChild(li);
            ulDOM.removeChild(deleteButton);
        });

    } else {
        alert("Hata");
    }
});