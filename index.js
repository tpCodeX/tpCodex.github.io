const API = "https://api.bluelytics.com.ar/v2/latest";


async function preciosDolar(api) {
    // const dolarBlue = document.getElementById("dolarBlue");
    // const dolarOficial = document.getElementById("dolarOficial");
    const blueVenta = document.getElementById("blueVenta");
    const blueCompra = document.getElementById("blueCompra");
    const oficialVenta = document.getElementById("oficialVenta");
    const oficialCompra = document.getElementById("oficialCompra");

    

    let data = await fetch(API)
        .then(data => data.json())
        .then(precios => precios)
    
        let ultimaActualizacion = data.last_update;

        let fecha={
            año:ultimaActualizacion.slice(0,4),
            mes:ultimaActualizacion.slice(5,7),
            dia:ultimaActualizacion.slice(8,10),
            hora:ultimaActualizacion.slice(11,16)
        };
        
        const dolarBlue ={
            compra:data.blue.value_buy,
            venta:data.blue.value_sell,
        }
        
        const dolarOficial ={
            compra:data.oficial.value_buy,
            venta:data.oficial.value_sell,
        }

        blueCompra.innerHTML="$"+dolarBlue.compra
        blueVenta.innerHTML="$"+dolarBlue.venta
        oficialCompra.innerHTML="$"+dolarOficial.compra
        oficialVenta.innerHTML="$"+dolarOficial.venta

        

};

preciosDolar(API);