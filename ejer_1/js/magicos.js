// números mágicos / adivinar

let magico = (min, max) => {
    return Math.round((min + Math.random() * (max - min)));
}

function adivinarN(){
    let valor_magico = magico(1, 10);
    let valor = document.getElementById('name').value;
    valor = parseInt(valor);

    if (!isNaN(valor)){
        if (valor === valor_magico){
            alert('Adivinaste el número !!')
        }else{
            if (valor > valor_magico){
                alert('No adivinaste. Tu número es muy alto !!')
            }else{
                alert('No adivinaste. Tu número es muy bajo!!')
            }
        }
    }
    let mensaje = document.getElementById('msj');
    mensaje.innerHTML = `Tu número es: ${valor} y el mágico es: ${valor_magico}.`;
    
}