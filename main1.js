// function to pass the value to another html page through local storage
let passValue = ()=>{
  let x = document.getElementById("playerx").value
  let o = document.getElementById("playero").value
  localStorage.setItem("input1",x)
  localStorage.setItem("input2",o)
  return
}




