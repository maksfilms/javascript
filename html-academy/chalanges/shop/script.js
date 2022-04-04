var assortmentData = [
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  },
  {
    inStock: true,
    isHit: true
  },
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  }
];

var updateCards = function(assort) {
  var iceCreams = document.querySelectorAll('.good');
  var available = 'good--available';
  var unavailable = 'good--unavailable';
  var hit = 'good--hit';
  
  for(var i = 0; i < assort.length; i++) {
    
    if (assort[i].inStock) {
      iceCreams[i].classList.add(available);
      } else {
        iceCreams[i].classList.add(unavailable);
        }
    if (assort[i].isHit) {
      iceCreams[i].classList.add(hit);
      }
    }
  }
updateCards(assortmentData);


/* Техническое задание

Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.

Каждому состоянию товара соответствует специальный класс:

Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.

Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

*/
