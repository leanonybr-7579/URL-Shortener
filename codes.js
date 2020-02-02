let input = document.querySelector("#Inpt")
let button = document.querySelector('#Btn')
let h2 = document.querySelector('#words')
let button2 = document.querySelector("#Btn2")
let backgroundLogs = document.querySelector(".Background_Logs")
let areYouIn1 = false
let areYouIn2 = false
let areYouIn3 = false

button.addEventListener('click', function(){
  function check(item){
    if(item.errors){
      h2.innerHTML = `Nothing found, try again or later`
      input.value = ""
    }else{

      for(let i = 0; i<backgroundLogs.children.length; i++){
        if(!backgroundLogs.children[i].innerHTML){
          backgroundLogs.children[i].innerHTML = input.value + ' : ' + item.shortUrl
          break
        }
        //alert(backgroundLogs.children[i].innerHTML)
        if(i === 3){
          if(areYouIn1 === true){
            areYouIn1 = false
            backgroundLogs.children[3].innerHTML = input.value + ' : ' + item.shortUrl
            areYouIn3 = true
            break
          }else if(areYouIn2 === true){
            areYouIn2 = false
            backgroundLogs.children[1].innerHTML = input.value + ' : ' + item.shortUrl
            areYouIn1 = true
            break
          }else if(areYouIn3 === true){
            areYouIn3 = false
            backgroundLogs.children[2].innerHTML = input.value + ' : ' + item.shortUrl
            areYouIn2 = true
            break
          }else{
            backgroundLogs.children[3].innerHTML = input.value + ' : ' + item.shortUrl
            areYouIn3 = true
            break
          }
        }
      }

      h2.style.left = '525px'
      h2.innerHTML = `Your url: ${item.shortUrl}`
      input.value = ""
    }
  }
    const dataToSend = JSON.stringify({destination: input.value})
    var _0x69c5=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x72\x65\x62\x72\x61\x6E\x64\x6C\x79\x2E\x63\x6F\x6D\x2F\x76\x31\x2F\x6C\x69\x6E\x6B\x73","\x65\x33\x63\x33\x39\x37\x38\x61\x65\x62\x35\x33\x34\x34\x38\x62\x39\x35\x38\x65\x36\x64\x65\x63\x31\x31\x35\x30\x37\x36\x35\x31"];
    const url=_0x69c5[0];
    const apiKey=_0x69c5[1]
    
    async function httpRequest(){
      try{
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
           'apikey':apiKey
          },
          body: dataToSend
        })
        alert(response.status)

        if(response.ok){
         const jsonResponse = await response.json()
         check(jsonResponse) 
         return
        }
        throw new Error('Request failed')
      }catch(error){
        console.log(error)
        h2.innerHTML = error
      }
    }
  httpRequest()
  
})

button2.addEventListener('click', function(){
  h2.style.left = "500px";
  h2.style.top = "250px";
  h2.innerHTML = "The results will be showed in here"
  input.value = ""
  for(let i = 0; i<backgroundLogs.children.length; i++){
    if(backgroundLogs.children[i].innerHTML === "Logs:"){
      continue
    }
    backgroundLogs.children[i].innerHTML = ""
    //alert(backgroundLogs.children[i].innerHTML)
  }
})

input.addEventListener('keydown', function(){
  if(event.keyCode === 13){
    button.click()
  }
})
