let toBuyProducts = [
  {
    id:1,
    name:"破壞補丁修身牛仔褲",
    img:"images/Block@picture1.png",
    quantity:3,
    uniPrice:3999,
  },
  {
    id:2,
    name:"刷色直筒牛仔褲",
    img:"images/Block@picture2.png",
    quantity:7,
    uniPrice:1299,
  }
]

const itemsPanel = document.querySelector('.items-panel')
const deliveryFee = document.querySelector('.fee-panel__delivery--fee')
const totalFee = document.querySelector('fee-panel__total--fee')
const stepControl = document.querySelector('.stepper-container')
const steps = document.querySelectorAll('step')
const btnControl = document.querySelector('#btn-control')
const btnPrevious = document.querySelector('.btn-previous')
const btnNext = document.querySelector('.btn-next')
const deliveryInputStan = document.getElementById('#s-delivery')
const deliveryInputDhl = document.getElementById('#d-delivery')

let activeCard = 0
let step = 0

// function 
function renderCartItem (array) {
  array.forEach((product) => {
    itemsPanel.innerHTML += `
    <div class="item">
                <img
                  src="${product.img}"
                  alt="item picture"
                  class="picture"
                />
                <div class="info">
                  <p class="info__product">${product.name}</p>
                  <div class="info__count">
                    <div>
                      <img
                        src="images/icon/outline_remove_black_24dp.png"
                        alt=""
                        class="icon minus"
                        data-id="${product.id}"
                      />
                    </div>
                    <div class="info__count--number">${product.quantity}</div>
                    <div>
                      <img
                        src="images/icon/outline_add_black_24dp.png"
                        alt=""
                        class="icon plus"
                        data-id="${product.id}"
                      />
                    </div>
                  </div>
                </div>
                <div class="fee">$${(product.quantity*product.uniPrice).toLocaleString()}</div>
              </div>
    `
  })
}

// EventListener on the quantity Change
itemsPanel.addEventListener('click', function(event){
  const productID = event.target.dataset.id
  const quantityContro = event.target.className

  
})

// render here
renderCartItem (toBuyProducts)