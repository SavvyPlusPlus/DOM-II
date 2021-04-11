// Your code goes here

//Navigation (3 Events)
let nav = document.querySelector('.nav')

nav.addEventListener('mouseover', event => {
    event.target.style.color ="teal"
  })

nav.addEventListener('mouseout', event => {
    event.target.style.color = 'black'
  })
  
nav.addEventListener('click', event => {
    event.target.style.color = "tan"
    event.preventDefault()
  })

  //Head Text 
let headTxt = document.querySelector('.logo-heading')

headTxt.addEventListener('mouseover', event => {
    event.target.textContent = "Click the 'J' Key"
})
headTxt.addEventListener('mouseout', event => {
    event.target.textContent = "Fun Bus"
});

//Header Image (1 Event)
let headerImg = document.querySelectorAll('img')

headerImg.forEach(element => {
    element.addEventListener('mousemove', event => {
        event.target.style.opacity = "80%"
    element.addEventListener('mouseout', event => {
        event.target.style.opacity = "100%"
        });
    });
  });

//Scavenger Hunt (Event 2)
  document.addEventListener('keydown', event =>{
    if (event.key == 'j') {
        alert('🤔 SOLVE to find the secret Key1️⃣2️⃣3️⃣ . "Six was afraid of seven because seven ate ___." ')
    }
  });

  document.addEventListener('keyup', event => {
    if (event.key == '9') {
        alert('🎉CONGRATS, the answer was 9!!!🎉')}
  });

//Scavenger Load (1)
  window.addEventListener('load', event => {
    alert( '😎✨Welcome to the Scavengar Hunt! Find the Hidden Message within the Page!✨😎 hint: It is at the top');
  });

//Button MsDown (2)
  let button = document.querySelectorAll('.btn')
  button.forEach(element => {
    element.addEventListener('mousedown', event => {
        event.target.style.backgroundColor = "tan"
        event.target.style.color = "white"
      })

      element.addEventListener('mouseup', event => {
        event.target.style.backgroundColor = "white";
        event.target.style.color = "teal"
        alert('HA! SIKE! 😂')
      });
        });


        //Warning Keypress (1)
        window.addEventListener('keypress', event => {
            if (event.key == 's') { 
                event.target.style.backgroundColor ="black"
                alert('🚨WARNING🚨 You Hit the Detonation Key!')
            }
        })
      
    

        