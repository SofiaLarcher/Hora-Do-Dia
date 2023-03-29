function carregar() {
    let msg;
    let imagens;
    let data;
    let hora;
    let minuto
    msg = window.document.getElementById('msg');
    imagens = window.document.getElementById('imagem');
    data = new Date();
    hora = data.getHours();
    minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`;

    if (hora< 12) {
        imagens.src= "fotos/manha.png"
        document.body.style.background ='#efcB97'
    } if (hora >=12 && hora <= 18) {
        imagens.src= "fotos/tarde.png"
        document.body.style.background ='#98d4e6'
    } if (hora >=19 && hora <=23) {
        imagens.src = "fotos/madrugada.png"
        document.body.style.background ='#625fae'
    };
}