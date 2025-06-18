//! FUNCTIONS

function generate_markup(array){

    array.forEach((element) => {

        const {title, url, date} = element;
        // const markup = `
        //             <!-- INIZIO COLONNA -->
        //             <div class="col_4 col_md_6 col_sm_12">

        //                 <!-- CARD -->
        //                 <div class="card">

        //                     <!-- IMAGE -->
        //                     <div class="card_image">
        //                         <img class="" src="${url}" alt="image_ ${title}">
        //                     </div>

        //                     <!-- PIN -->
        //                     <div class="pin_container">
        //                         <img class="pin" src="./assets/img/pin.svg" alt="pin">
        //                     </div>

        //                     <!-- TESTO -->
        //                     <div class="card_description">
        //                         <p class="d_flex"> <span class="image_date">${date}</span> <span class="image_title">${title}</span> 
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <!-- FINE COLONNA  -->
        // `


        

        const div_El = document.createElement('div')
        div_El.classList.add('col_4', 'col_md_6', 'col_sm_12')
        
        const card_El = document.createElement('div')
        card_El.classList.add('card')
        
        const card_image_El = document.createElement('div')
        card_image_El.classList.add('card_image')
        
        const img_El = document.createElement('img')
        img_El.src = url
        img_El.alt = 'image' + ' ' + title
        
        const pin_cont_El = document.createElement('div')
        pin_cont_El.classList.add('pin_container')
        
        const pin_El = document.createElement('img')   
        pin_El.classList.add('pin')
        pin_El.src = './assets/img/pin.svg' 
        pin_El.alt = 'pin'
        
        const card_description_El = document.createElement('div')
        card_description_El.classList.add('card_description')

        const card_description_text_El = document.createElement('p')
        card_description_text_El.classList.add('d_flex')

        const image_date_El = document.createElement('span')
        image_date_El.classList.add('image_date')
        image_date_El.innerHTML = date
        
        const image_title_El = document.createElement('span')
        image_title_El.classList.add('image_title')
        image_title_El.innerHTML = title
        

        div_El.appendChild(card_El)

        card_El.appendChild(card_image_El)
        card_image_El.appendChild(img_El)

        card_El.appendChild(pin_cont_El)
        pin_cont_El.appendChild(pin_El)
        
        card_El.appendChild(card_description_El)
        card_description_El.appendChild(card_description_text_El)

        card_description_text_El.appendChild(image_date_El)
        card_description_text_El.appendChild(image_title_El)

        row_El.appendChild(div_El)
        
        card_El.addEventListener('click', () => {

            

            const modal_El = document.getElementById('modal_container')
            modal_El.classList.add('modal')

            const modal_markup = `
            
            <!-- CARD -->
            <div>
                <button class="modal_button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="card">
                
                <!-- IMAGE -->
                <div class="card_image">
                    <img class="" src=" ${url} " alt="image_ ${title}">
                </div>

                <!-- TESTO -->
                <div class="card_description">
                    <p class="d_flex"> <span class="image_date">${date}</span> <span class="image_title">${title}</span>
                    </p>
                </div>
                
            </div>
            `
            modal_El.innerHTML = modal_markup
            modal_El.classList.remove('d_none')
            
            const modal_button_El = document.querySelector('.modal_button')
            
            modal_button_El.addEventListener('click', () => {
                modal_El.classList.remove('modal')
                modal_El.classList.add('d_none')
            })

        })
        

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

