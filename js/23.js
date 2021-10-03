
const metodoPago = "efectivo";

switch(metodoPago){

    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;
        case "cheque":
            console.log("El usuario va a pagar con cheque");
            break;
            case "efectivo":
                console.log ("pagaste con efectivo");
                break; 
        default:
            console.log("aún no has pagado");
            break;
}