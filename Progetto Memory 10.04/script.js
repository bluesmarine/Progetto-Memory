const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

// creo una variabile che mi contiene le immagini cliccate
let clickedimages = document.querySelector(".clickedimages");

// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.
$(document).ready(function randomNum(mieImg){
    return mieImg[Math.floor(Math.random() * mieImg.length)];
//let randomNum = Math.floor(Math.random() * mieImg.length); 
        //icons.setAttribute("img", mieImg[randomNum]);
        // console.log("numero random = " + randomNum);
    });

// creo una variabile "images" che contiene il selettore della classe "images". 
let images = document.querySelector(".images");
//console.log(images);

// così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.
$( images ).html("<img>" + mieImg + "</img>" ).css({'width' : '600px', 'height' : '600px'});
console.log(images);
// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.
$(images); function cicloFor(){
for(i=0; i <16; i++){
    $(images).append("<div class='img'></div>");
}};
    randomNum;
// prendo a caso un elemento dalla mia lista
    randomNum([1]);
// vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

 // creo la funzione principale "mostraImg"
//function mostraImg() {
    //animazione che mostra l'immagine / show / hide
//    $( images ).css({'display':'inline;'});
//};

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.
// da rivedere
var countClick = 0;
$(".images").on("click", function tuttiIClick(){
    countClick++;
    //document.getReadyById('clicks') = countClick;
});

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.
    $('images').click(function(){
        mostraImg();
        twoCards++;
        checkImages();
    });

 //   var twoCards;
 //   function checkImages() {
 //   if (twoCards == 2) {
 //       if(){
// come fare il check delle due immagini uguali!
//        }
//        then (twoCards == 0)
//    }             
//    };

        // se non sono due visualizzo l'emoji e la inserisco in "clickImgs".
        
            // se sono uguali azzero la mia lista.
            
                // se sono diverse nascondo le due immagini.
                