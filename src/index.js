// write your code here

const imgContainer = document.getElementById('ramen-menu')

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(resp => {
    resp.map(populateImg)
    enlarge(resp[0])
})

function populateImg(obj){
    //takes an obj and creates a img element and assign its properties to it
    console.log(obj)
    let img = document.createElement('img')
    img.src = obj.image
    img.name2 = obj.name
    img.restaurant = obj.restaurant 
    img.rating = obj.rating
    img.comment = obj.comment
    imgContainer.append(img)
    img.addEventListener('click',(e => imgtoObj(e)))
    console.log('image added!')
}


function imgtoObj(e){
    // converts image click to an object to pass through enlarge
    const obj = {}
    obj.name = e.target.name2
    obj.restaurant = e.target.restaurant
    obj.image = e.target.src
    obj.rating = e.target.rating
    obj.comment = e.target.comment
    enlarge(obj)
}

//declare elements for enlarge and editForm
const imgElement = document.getElementsByClassName('detail-image')[0]
const nameElement = document.getElementsByClassName('name')[0]
const restaurantElement = document.getElementsByClassName('restaurant')[0]
const ratingElement = document.querySelectorAll('p')[0]
const commentElement = document.querySelectorAll('p')[1]

function enlarge(obj){
    //takes an obj and assigns its contents to html elements
    imgElement.src = obj.image
    nameElement.textContent = obj.name
    restaurantElement.textContent = obj.restaurant
    ratingElement.textContent = `${obj.rating} / 10`
    commentElement.textContent = obj.comment
}

const form = document.getElementById('new-ramen')
form.addEventListener('submit', (e => addRamen(e)))

function addRamen(e){
    //takes values as an obj 
    e.preventDefault()
    const obj = {}
    obj.name = (document.getElementById('new-name').value)
    obj.restaurant = (document.getElementById('new-restaurant').value)
    obj.image = (document.getElementById('new-image').value)
    obj.rating = (document.getElementById('new-rating').value)
    obj.comment = (document.getElementById('new-comment').value)
    console.log('form inputed!')
    populateImg(obj);
    e.target.reset()
}

//core deliverables done

const editForm = document.getElementById('edit-ramen')
editForm.addEventListener('submit', (e => editRamen(e)))

function editRamen(e){
    e.preventDefault
    let rating = document.getElementById('new-rating').value
    let comment = document.getElementById('new-comment').value
    ratingElement.textContent = `${rating} / 10`
    commentElement.textContent = comment
}