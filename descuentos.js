const inputPrice = document.getElementById("InputPrice");
const inputDiscount = document.getElementById("InputDiscount");
const btn = document.getElementById("buttonCalcular");
const pResult = document.getElementById("ResultP");

btn.addEventListener('click', onClickButtonPriceDiscount);


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * (porcentajeConDescuento)) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = Number(inputPrice.value);

  const InputDiscount = document.getElementById("InputDiscount");
  const discountValue = Number(InputDiscount.value);

  //const inputCoupon = document.getElementById("InputCupon");
  //const couponValue = Number(inputCoupon.value);

  if (!priceValue || !discountValue) {
    pResult.innerText = "Por favor llena los datos!";
    return;
  }

  if (discountValue > 100) {
    pResult.innerText = "El descuento no puede ser mayor a 100. Favor corregir."
    return;
  }

  const newPrice = (priceValue * (100 - discountValue)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}

















































/*  const precioOriginal = 120;
const descuento = 18;

  /*   const coupons = ["El mejor descuento", "Un buen descuento", "Ça va"];
   */
  //let descuento;

  // SOLUCION 1

  /*   switch (couponValue) {
    case coupons[0]: // "El mejor descuento"
      descuento = 70;
      break;
    case coupons[1]: // "Un buen descuento"
      descuento = 50;
      break;
    case coupons[2]: // "Ça va";
      descuento = 25;
      break;
  } */

  // SOLUCION 2

  /*   if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
  } else if (couponValue === "El mejor descuento") {
    descuento = 70;
  } else if (couponValue === "Un buen descuento") {
    descuento = 50;
  } else if (couponValue === "Ça va") {
    descuento = 25;
  } */

  /* /const coupons = [
    {
      name: "El mejor descuento",
      descuento: 70,
    },
    {
      name: "Un buen descuento",
      descuento: 50,
    },
    {
      name: "Ça va",
      descuento: 25,
    },
  ];

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El coupon " + couponValue + " no es válido");
  } else {
    const descuento = userCoupon.descuento;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
  }
} */

/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
}); */
