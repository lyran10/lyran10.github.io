
// selectors
let cells = document.querySelectorAll(".cell")
let btn = [...document.querySelectorAll("button")]
let boardID = document.getElementById("board")
let board = document.querySelector(".board")
let show = document.querySelector(".winner") 
let winner_msg = document.querySelector(".winner_msg")
let choose = document.querySelector(".choose")
let box = document.querySelectorAll(".box")
let arcade_heading = document.querySelector(".arcade-heading")
let header = document.querySelector(".header")
let container = document.querySelector(".container")
let para = [...document.querySelectorAll("p")]
let div = document.querySelector("div")
let x = document.querySelector("x")
let h2 = document.querySelectorAll("h2")
let h3 = document.querySelector("h3")

// variables
let game_is_on = true
let turn = true
let winner = null
let num = 0
let arr =[]
let countx = 1
let counto = 1

//functions

let array1 = [choose,show,board,board]
let array2 = ["show1","show","x","o",]
// this function is to reset everything and start again
const reset = () =>{
  winner = null
  turn = true
  cells.forEach((ele) =>{
    ele.classList.remove("x")
    ele.classList.remove("o")
    ele.style.background = "#2a4380"
    ele.style.opacity = ""
  })
  for(i = 0; i< array1.length;i++){
    array1[i].classList.remove(array2[i])
  }

}

// this is also reset function specially for the best of 3 function
let reset2 = () =>{
  cells.forEach((ele) =>{
    ele.style.opacity = ""
  })
    num = 0
  for(i=0;i < para.length;i++){
    para[i].innerHTML = ""
    para[i].innerHTML = ""
  }
  btn[0].style.display = "block"
  btn[1].style.display = "none"
countx = 1 
counto = 1
arr.length = 0
 }



// function to show who the winner is
const handle_winner = (word) =>{
  game_is_on = false
  winner = word
  winner_msg.innerHTML = `${winner} wins`
  btn[0].innerHTML = "Back"

}

// function to change the color of the cells when x or o wins
const changeBackGroundColor = (cell1,cell2,cell3) =>{
  cell1.style.opacity = "0.3"
  cell2.style.opacity = "0.3"
  cell3.style.opacity = "0.3"
}


// this is to check weather who is winning or if its a tie.
const game_status = () =>{
  let first = cells[0].classList[2]
  let second = cells[1].classList[2]
  let third = cells[2].classList[2]
  let fourth = cells[3].classList[2]
  let fifth = cells[4].classList[2]
  let sixth = cells[5].classList[2]
  let seventh = cells[6].classList[2]
  let eighth = cells[7].classList[2]
  let nineth = cells[8].classList[2]


  if(first && first === second && second === third){
    setTimeout(() =>(changeBackGroundColor(cells[0],cells[1],cells[2]),200))
    handle_winner(first)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(fourth && fourth === fifth && fifth === sixth){
    setTimeout(() =>(changeBackGroundColor(cells[3],cells[4],cells[5]),200))
    handle_winner(fourth)
    setTimeout(() => {show.classList.add("show")},500)
    
  }else if(seventh && seventh === eighth && eighth === nineth){
    setTimeout(() =>(changeBackGroundColor(cells[6],cells[7],cells[8]),200))
    handle_winner(seventh)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(first && first === fourth && fourth === seventh){
    setTimeout(() =>(changeBackGroundColor(cells[0],cells[3],cells[6]),200))
    handle_winner(first)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(second && second === fifth && fifth === eighth){
    setTimeout(() =>(changeBackGroundColor(cells[1],cells[4],cells[7]),200))
    handle_winner(second)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(third && third === sixth && sixth === nineth){
    setTimeout(() =>(changeBackGroundColor(cells[2],cells[5],cells[8]),200))
    handle_winner(third)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(first && first === fifth && fifth === nineth){
    setTimeout(() =>(changeBackGroundColor(cells[0],cells[4],cells[8]),200))
    handle_winner(first)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(third && third === fifth && fifth === seventh){
    setTimeout(() =>(changeBackGroundColor(cells[2],cells[4],cells[6]),200))
    handle_winner(third)
    setTimeout(() => {show.classList.add("show")},500)

  }else if(first && second && third && fourth && fifth && sixth && seventh && eighth && nineth){
    game_is_on = false
    if(div.classList[1] === "show-header"){
      num++
      btn[0].innerHTML = `round ${num+1}`
      }else if(div.classList[1] != "show-header"){
        btn[0].innerHTML = "Back"
      }

    winner_msg.innerHTML = "its a tie"
    setTimeout(() => {show.classList.add("show")},500)
  }else{
    turn = !turn
  }

}

// functions for best of 3
let changeButton = () =>{
  btn[0].style.display = "none"
  btn[1].style.display = "block"
}

// check the winner of the best of 3 
let checkWinner = () =>{
  let x = arr.filter(ele => ele === "x" )
  let o = arr.filter(ele => ele === "o" )
  if(num === 3 && arr.length === 0){
    winner_msg.innerHTML = `its a tie between both of you`
    changeButton()
  }if(num === 3 && x.length === 1 && o.length === 1){
    winner_msg.innerHTML = `its a tie between both of you`
    changeButton()
  }else if(num === 3 && arr.length === 1){
    winner_msg.innerHTML = `${arr[0]} wins the best of 3`
    changeButton()
  }else if(x.length === 2){
  winner_msg.innerHTML = `${x[0]} wins the best of 3`
  changeButton()
}else if(o.length === 2){
  winner_msg.innerHTML = `${o[0]} wins the best of 3`
  changeButton()
}
}


let pushToTheArray = ()=>{
  if(winner === "x" || winner === "o"){
    num = num +1
    arr.push(winner)
    console.log(arr)
  winner_msg.innerHTML = `${winner} wins round ${num}`
  btn[0].innerHTML = `round ${num+1}`
  }
    if(winner === "x"){
      para[0].innerHTML = `${countx++}`
    }else if(winner === "o"){
      para[1].innerHTML = `${counto++}`
    }
  
  checkWinner()
}

// main function of the game
let cell_click1 = (e)=>{
  let classList = e.target.classList
  board.classList.remove("x")
  board.classList.remove("o")
  
    if(classList[2] === "x" || classList[2] === "o"){
      return;
    }
    if(turn){
      board.classList.add("o")
      e.target.style.background = "#371bc2"
      classList.add("x")
      game_status()
      
    }else{
      board.classList.add("x")
      e.target.style.background = "#c2421b"
      classList.add("o")
      game_status()
  }
  if(div.classList[1]=== "show-header"){
  pushToTheArray()
  }
  return;
  }

// select which to play
let select = ()=>{
  choose.classList.add("show1")
  box.forEach((ele) =>{
  ele.classList.add("box1")
  })

}

// event listeners
let playGame = () =>{
  select()
  btn[2].innerHTML = "PLAY"
  btn[3].innerHTML = "PLAY"

  btn[0].addEventListener("click",function(){
    reset()
    if(num === 0 && arr.length === 0){
      select()
    }
})

btn[1].addEventListener("click",function(){
  reset()
  reset2()
  select()
})

btn[2].onclick = function(){
  
  header.classList.remove("show-header")
  reset()
  cells.forEach(ele =>{
    ele.addEventListener("click",cell_click1)
    })
  
}

  btn[3].onclick = function(){
    board.classList.add("move")
    header.classList.add("show-header")
    h2[0].innerHTML = localStorage.getItem("input1")
    h2[1].innerHTML = localStorage.getItem("input2")
    reset()
    reset2()
    cells.forEach(ele =>{
      ele.addEventListener("click",cell_click1)
    })
  }
  return;
}


console.log(playGame())





