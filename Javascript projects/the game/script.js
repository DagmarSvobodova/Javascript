let tableElements = document.querySelectorAll(".table");
let numOfTable = tableElements.length
let positionKey = Math.floor(Math.random() * numOfTable) + 1;
let key = tableElements[positionKey];
let height;
let width;
let axeX;
let axeY;
let axeXOfKey;
let axeYOfKey;
let moves = 15;
let anyMovesRest = false;
let h = document.querySelector('.h');

function renderRestMoves() {

    let restMoves = document.querySelector('#move');
    restMoves.textContent = moves;
}

function calculMoves() {

    moves = moves - 1;

    if (moves < 0 || moves === 0) {
        anyMovesRest = true;

        h.textContent = "Game Over";
        document.querySelector('#move').textContent = "O";



    } else {
        renderRestMoves()
    }
}

function getInfo(element) {
    let info = element.getBoundingClientRect();
    height = Math.floor(info.height);
    width = Math.floor(info.width);
    axeX = Math.floor(info.x);
    axeY = Math.floor(info.y);


}

function getAxisOfKey() {
    let infoOfAxe = key.getBoundingClientRect();
    axeXOfKey = Math.floor(infoOfAxe.x);
    axeYOfKey = Math.floor(infoOfAxe.y);

}


tableElements.forEach((table) => {
    table.addEventListener('click', function() {

        if (anyMovesRest === false) {
            if (table.className === "table") {
                calculMoves()
            }

            getAxisOfKey()
            getInfo(table)

            let differenceOfAxeX = Math.abs(axeXOfKey - axeX);
            let differenceOfAxeY = Math.abs(axeYOfKey - axeY);

            let distanceX = Math.floor(differenceOfAxeX / width);
            let distanceY = Math.floor(differenceOfAxeY / height);



            if (distanceX === 0 && distanceY === 0) {
                table.className = "key";
                anyMovesRest = true;
                h.textContent = "You win!";
            } else if (distanceX < 2 && distanceY < 2) {
                table.className = "position-2"
            } else if (distanceX < 3 && distanceY < 3) {
                table.className = "position-1"
            } else {
                table.className = "position-0"
            }

        }

    });
})

;