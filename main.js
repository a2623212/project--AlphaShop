const toBuyProducts = [
  {
    id:1,
    name:"破壞補丁修身牛仔褲",
    img:"images/Block@picture1.png",
    quantity:1,
    uniPrice:3999,
  },
  {
    id:2,
    name:"刷色直筒牛仔褲",
    img:"images/Block@picture2.png",
    quantity:1,
    uniPrice:1299,
  }
]

// declare the variables
const itemsPanel = document.querySelector('.items-panel')
const deliveryPanel = document.querySelector('.fee-panel__delivery--fee')
const totalFeePanel = document.querySelector('.fee-panel__total--fee')
const stepControl = document.querySelector('.stepper-container')
const steps = document.querySelectorAll('step')
const btnControl = document.querySelector('#btn-control')
const btnPrevious = document.querySelector('.btn-previous')
const btnNext = document.querySelector('.btn-next')
const deliveryMethods = document.querySelector('.form-part__delivery')


let activeCard = 0
let step = 0
let deliFee = 0
let totalFee = 0
let allItemsFee = 0

// function 
function renderCartItem (array) {
  itemsPanel.innerHTML = ''
  array.forEach((product) => {
    if (product.quantity) {
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
    }
    
  })
}

function computeTotleFee (array) {
  allItemsFee = 0

  array.forEach( (item) => {
    allItemsFee += item.quantity*item.uniPrice
  })

  totalFee = (allItemsFee + deliFee).toLocaleString()
  totalFeePanel.innerHTML = `$${totalFee}`
  

}

// EventListener on the quantity Change
itemsPanel.addEventListener('click', function(event){
  const productID = Number(event.target.dataset.id)
  const quantityContro = event.target.className

  const addItem = toBuyProducts.find((product) => product.id === productID)

  if (quantityContro.includes('plus')) {
    addItem.quantity += 1
    renderCartItem (toBuyProducts)
    computeTotleFee(toBuyProducts)
  } else if (quantityContro.includes('minus')) {
    if(!addItem.quantity){
      return
    }
    addItem.quantity -= 1
    renderCartItem (toBuyProducts)
    computeTotleFee(toBuyProducts)
  }
  
})

deliveryMethods.addEventListener('click', function (event){
  const eventName = event.target.tagName.toLowerCase()
  deliFee = Number(event.target.value)
  if (eventName !== 'input') {
    return
  }
  if (deliFee > 0) {
    deliveryPanel.innerHTML = deliFee
  } else {
    deliveryPanel.innerHTML = '免費'
  }
  computeTotleFee(toBuyProducts)
  
} )

// render here
renderCartItem (toBuyProducts)