//global variables
let resources = 0
let moonRocks = 0
let bonusPerSec = 0
let store = {
    moonRocks1: {
        price: 50, 
        seconds: 1000, 
        modifier: 5
    },
    moonRocks2: {
        price: 100, 
        seconds: 3000, 
        modifier: 10
    },
    moonRocks3: {
        price: 150, 
        seconds: 5000, 
        modifier: 15
    },
    moonRocks4: {
        price: 200, 
        seconds: 7000, 
        modifier: 20
    }

}
//main onclick function
function moonClick(){
resources++
plusTwo()
draw()
}
//bonus addition
function plusTwo(){
if(moonRocks >= 50){
resources++
}
}
//store modifiers
//the functions below repeat. find out how to make this repeatable using different array values from store.
function mod1(){
    if(resources >= store.moonRocks1.price){
        resources -= store.moonRocks1.price
        moonRocks += store.moonRocks1.modifier
        store.moonRocks1.price++
        setInterval(moonRockMultiplier1, 3000)
    }
    draw() 
}
function moonRockMultiplier1(){ 
        resources += store.moonRocks1.modifier
        document.getElementById("multi").innerHTML = `${store.moonRocks1.modifier}`
        draw() 
    }  
function mod2(){
    if(resources >= store.moonRocks2.price){
        resources -= store.moonRocks2.price
        moonRocks += store.moonRocks2.modifier
        store.moonRocks2.price++
        setInterval(moonRockMultiplier2, 3000)
    }
    draw()
}
function moonRockMultiplier2(){ 
    resources += store.moonRocks2.modifier
    document.getElementById("multi").innerHTML = `${store.moonRocks2.modifier}`
    draw()
}  
function mod3(){
    if(resources >= store.moonRocks3.price){
        resources -= store.moonRocks3.price
        moonRocks += store.moonRocks3.modifier
        store.moonRocks3.price++
        setInterval(moonRockMultiplier3, 3000)
    }
    draw()
}
function moonRockMultiplier3(){ 
    resources += store.moonRocks3.modifier
    document.getElementById("multi").innerHTML = `${store.moonRocks3.modifier}`
    draw()
}  
function mod4(){
    if(resources >= store.moonRocks4.price){
        resources -= store.moonRocks4.price
        moonRocks += store.moonRocks4.modifier
        store.moonRocks4.price++
        setInterval(moonRockMultiplier4, 3000)
    }
    draw()
}
function moonRockMultiplier4(){ 
    resources += store.moonRocks4.modifier
    document.getElementById("multi").innerHTML = `${store.moonRocks4.modifier}`
    draw()
}  

function draw(){
    document.getElementById("resources").innerHTML = `${resources}`
    document.getElementById("moon_rocks").innerHTML = `${moonRocks}`
    document.getElementById("mr1-price").innerHTML = `${store.moonRocks1.price}`
    document.getElementById("mr2-price").innerHTML = `${store.moonRocks2.price}`
    document.getElementById("mr3-price").innerHTML = `${store.moonRocks3.price}`
    document.getElementById("mr4-price").innerHTML = `${store.moonRocks4.price}`



}
//page refresh
draw()
