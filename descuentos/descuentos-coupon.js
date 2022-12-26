const inputPriceCoupon = document.getElementById("InputPriceCoupon");
const inputCoupon = document.getElementById("InputCoupon");
const couponButton = document.getElementById("buttonCalcularCoupon");
const pResultCoupon = document.getElementById("ResultPCoupon");

couponButton.addEventListener('click', calcularPrecioConCoupon);


const couponsList = [];
    couponsList.push({
        name: "genial",
        discount: 80,
    });
    couponsList.push({
        name: "normis",
        discount: 40,
    }),
    couponsList.push({
        name: "meh",
        discount: 20,
    });

function calcularPrecioConCoupon() {
    const price = Number(inputPriceCoupon.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResultCoupon.innerText = "Llena los datos por favor"
        return;
    }

    let discount;

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray);

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResultCoupon.innerText = "El coupon no es valido";
        return;
    }
      
    const newPrice = (price * (100 - discount)) / 100;

    pResultCoupon.innerText = "El nuevo precio con descuento es $" + newPrice;
}

   /* 
   
   Con Else if:

    if (coupon == "genial") {
        discount = 80;
    } else if (coupon == "normis") {
        discount = 40;
    } else if (coupon == "meh") {
        discount = 20;
    } else {
        pResultCoupon.innerText = "El cupon no existe";
        return;
    } 
    

   Con Swich:
    
    switch (coupon) {
        case "genial":
            discount = 80;
            break;
        case "normis":
            discount = 40;
            break;
        case "meh":
            discount = 20;
            break;
        default:
            pResultCoupon.innerText = "El coupon no existe."
            return;
    } 
    

    Con Objetos:
    
    const couponsObj = {
    "genial" : 80,
    "normis" : 40,
    "meh" : 20,
    "holi" : 50,
    "secreto" : 99,
    }; 

    */





 /*  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El coupon " + couponValue + " no es válido");
  } else {
    const discount = userCoupon.discount;
    const precioCondiscount = calcularPrecioCondiscount(
      priceValue,
      discount
    );
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con discount es de: $" + precioCondiscount;
  } */


/* console.log({
  precioOriginal,
  discount,
  porcentajePrecioCondiscount,
  precioCondiscount,
}); */
