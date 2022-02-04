window.addEventListener('load',function () {
    const canvas = document.getElementById('canvas1');

    /*ctx = context, Instance of built-in canvas 2d api, that holds all drawing methods and properties we will need to animate  the game*/

    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;

    class inputHandler {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown',  e => {
                
                if (e.key === 'ArrowDown'){
                   this.keys.push(e.keys); 
                }
                console.log(e.key);
            });
        }

    }
    class player {
        
    }
    class Background {
        
    }
    class Enemy {
        
    }
    function handleEnemies() {
        
    }
    function displayStatusText(){
        
    }
    const   input = new inputHandler();

   function animate() {
       
   }


});