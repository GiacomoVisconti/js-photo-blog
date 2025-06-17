//! FUNCTIONS

function generate_markup(array, node_El){

    array.forEach((element) => {
        const {title, url, date} = element;
        const markup = `
        <!-- INIZIO COLONNA -->
                    <div class="col_4">

                        <!-- CARD -->
                        <div class="card">

                            <!-- IMAGE -->
                            <div class="card_image">
                                <img class="" src="${url}" alt="image_${title}">
                            </div>

                            <!-- PIN -->
                            <div class="pin_container">
                                <img class="pin" src="./assets/img/pin.svg" alt="pin">
                            </div>

                            <!-- TESTO -->
                            <div class="card_description">
                                <p> ${date} 
                                ${title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- FINE COLONNA  -->
        `
        
        console.log( element.date, element.title, url);

        node_El.
        
    })

}

//! END FUNCTIONS




const img_generator = 'https://lanciweb.github.io/demo/api/pictures/'
const row_El = document.querySelector('row')

fetch(img_generator)
.then(res => res.json())
.then((data)=>{
    data.forEach((element) => {
        
    }) 
    
    generate_markup(data, row_El)
})