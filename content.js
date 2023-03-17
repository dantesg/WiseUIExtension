document.querySelector('[class^="BalanceCarouselSection_carousel__"]').style.flexWrap = 'wrap';

var elementsText = document.querySelectorAll('[class^="BalanceCard_balanceCardText__"]')
for (var i = 0; i < elementsText.length; i++) {
    elementsText[i].style.marginLeft = '15px';
    elementsText[i].style.textAlign = 'right';
}

var elements = document.querySelectorAll('[class^="BalanceCarouselSection_carousel__"] > a')
for (var i = 0; i < elements.length; i++) {
    elements[i].style.height = 'fit-content';
    elements[i].style.width = 'auto';
    elements[i].style.flexDirection = 'row';
    elements[i].style.justifyContent = 'auto';
}


