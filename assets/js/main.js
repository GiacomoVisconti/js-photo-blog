//! FUNCTIONS

function generate_markup(array){

    array.forEach((element) => {

        const {title, url, date} = element;
        const markup = `
                    <!-- INIZIO COLONNA -->
                    <div class="col_4 col_md_6 col_sm_12">

                        <!-- CARD -->
                        <div class="card">

                            <!-- IMAGE -->
                            <div class="card_image">
                                <img class="" src="${url}" alt="image_ ${title}">
                            </div>

                            <!-- PIN -->
                            <div class="pin_container">
                                <img class="pin" src="./assets/img/pin.svg" alt="pin">
                            </div>

                            <!-- TESTO -->
                            <div class="card_description">
                                <p class="d_flex"> <span class="image_date">${date}</span> <span class="image_title">${title}</span> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- FINE COLONNA  -->
        `


        row_El.insertAdjacentHTML('beforeend', markup)
    })

}

//! END FUNCTIONS




const img_generator = 'https://lanciweb.github.io/demo/api/pictures/'
const row_El = document.querySelector('.row')

fetch(img_generator)
.then(res => res.json())
.then((data)=>{
    generate_markup(data);
})