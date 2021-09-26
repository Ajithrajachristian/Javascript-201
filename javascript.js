

     const name = document.getElementById("name")
          
     const type_one = document.getElementById("type_one")
     const type_two = document.getElementById("type_two")

     const ability_one = document.getElementById("ability_one")
     const ability_two = document.getElementById("ability_two")

     const moves_one = document.getElementById("moves_one")
     const moves_two = document.getElementById("moves_two")
    
     const image = document.querySelector(".image")

  
       

      const button = document.querySelector(".press");
      button.addEventListener ('click', (e) => {
         e.preventDefault()
         const randomNumber = Math.ceil(Math.random()*50)
         fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      name.innerHTML = data.name;
      type_one.innerHTML = data['types'][0]['type']['name'];
        
      if((data['types'][1])== undefined) {
                type_two.innerHTML = "...";
        } else {
            type_two.innerHTML = data['types'][1]['type']['name'];
        }
       
      

        ability_one.innerHTML = data['abilities'][0]['ability']['name'];
        
        if((data['abilities'][1])== undefined) {
                  ability_two.innerHTML = "...";
          } else {
              ability_two.innerHTML = data['abilities'][1]['ability']['name'];
          }

         

          moves_one.innerHTML = data['moves'][0]['move']['name'];
        
        if((data['moves'][1])== undefined) {
                  move_two.innerHTML = "...";
          } else {
              moves_two.innerHTML = data['moves'][1]['move']['name'];
          }

      image.innerHTML = `<img src = "${data.sprites.front_default}" />`
      
     
       
      console.log(data)
   

    })
      })
    
   
