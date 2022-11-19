const inputPrice = document.getElementById("InputPrice");
const inputDiscount = document.getElementById("InputDiscount");
const btn = document.getElementById("buttonCalcular");
const pResult = document.getElementById("ResultP");

btn.addEventListener('click', onClickButtonPriceDiscount);


function calcularPrecioConDiscount(precio, discount) {
  const porcentajeConDiscount = 100 - discount;
  const precioConDiscount = (precio * (porcentajeConDiscount)) / 100;

  return precioConDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = Number(inputPrice.value);

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = Number(inputDiscount.value);

  if (!priceValue || !discountValue) {
    pResult.innerText = "Por favor llena los datos!";
    return;
  }

  if (discountValue > 100) {
    pResult.innerText = "El discount no puede ser mayor a 100. Favor corregir."
    return;
  }

  const newPrice = (priceValue * (100 - discountValue)) / 100;

  pResult.innerText = "El nuevo precio con discount es $" + newPrice;
}
