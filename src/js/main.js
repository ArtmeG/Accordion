var $btn = document.querySelectorAll('.btn');
var $cardCont = document.querySelectorAll('.card-content');

$cardCont.forEach(function (item) {
    $(item).hide();
});

function cardController(cardId) {
    $cardCont.forEach(function (item) {
        $(item).slideUp("slow");
    });

    if ($(".card-content#" + cardId).is(":hidden")) {
        $(".card-content#" + cardId).slideDown("slow");
    } else {
        $(".card-content#" + cardId).slideUp("slow");
    }
}

$btn.forEach(function (element) {
    element.addEventListener('click', function () {
        var cardId = this.getAttribute('data-model');
        cardController(cardId);
    });
});