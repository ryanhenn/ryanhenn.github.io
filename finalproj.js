
var names = ["janice", "stacy", "maisey", "jon jon", "jacob", "matthew", "claire", "pj", "joey", "elizabeth", "timmy", "patrick", "hope", "summers"]

var selected = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1]];

var poem_1 = [["mud",				
"stick",				
"rocks",			
"leaves",			
"sculpt"],			

["get pail",				
"grab dirt",   			
"squeeze it",  			
"roll around",      		
"scare mittens"],    		

["get the twigs",			
"throw at sister",   		
"break into pieces",   		
"bind with elmer's",   		
"gently stir rocks"],   		

["get out of bathtub",			
"spray yard with hose",       
"scoop up mom's posies",      
"add almost clean worm", 
"cover fully with sand"], 

["tell mom lay off already",	     		
"make small basin in sandbox",		
"add cheerios stuck to hands",		
"garnish with fresh torn grass",  
"porch bake til cooked through"],  

["stub biggest toe, cry to parent",
"wrangle up some mud, remove grass",	
"care for ladybug, but break wings",
"blow dandelion seeds all over pie",
"accidentally lose favorite Lego in muck"]];


var poem = [["empty out your pail",				
"shovel up some dirt",				
"fill pockets with sand",			
"spray hose at yard to loosen up dirt", 			
"find Sparky's hole and grab mud"],	

["get some leaves from Uncle Joe's",
"grab rocks",
"mold the pie into desired shape",
"massage material until hands crusty",     		
"let rest between 10 minutes and multiple days"],   		

["scare Mittens",
"throw things at sister",   		
"step on pie",
"experiment with Elmer's",   		
"find walkie talkie in bush"],   		

["get in bath",			
"scoop up mom's posies",      
"add relatively clean worms", 
"put everything in bowl and fling into neighbor's yard",
"ride bike without a helmet"],

["talk to Ricky",
"get yelled at by Mom",
"get Mom off your back",	     		
"add cheerios stuck to hands",		
"stub toe, cry to Mom",],
	
["care for ladybug but break wing",
"accidentally lose favorite Lego in muck",
"put tack in pie and present to enemy, Ricky Doonsle",
"take a nap, you've earned it",
"roll in mud"]];




function reportWhole() {
   var b_poem = "";
   for(var i = 0; i < 6; i++) {
      for(var j = 0; j < 5; j++) {
         b_poem += `<div id=\'${i},${j}\'>` + poem_1[i][j] + "</div>";
      }
      b_poem += "<br>";
   }

   document.getElementById("whole").innerHTML = b_poem;

   var opacity = window.getComputedStyle(document.getElementById("whole")).getPropertyValue("opacity");

   if(opacity == "0") {
      opacity = "1.0";
      for(var i = 0; i < 6; i++) {
         for(var j = 0; j < 5; j++) {
            if(selected[0][i] == j) {
               try {
                  document.getElementById(`${i},${j}`).style.color = "#86af49";                  
               } catch(TypeError) {
                  var foo = 0;
               } finally {
                  var foo = 0;
               }
            }
            if(selected[1][i] == j) {
               try {
                  document.getElementById(`${i},${j}`).style.color = "#c1502e";                  
               } catch(TypeError) {
                  var foo = 0;
               } finally {
                  var foo = 0;
               }

            }
         }
      }
      




   } else {
      opacity = "0.0";
   }

   document.getElementById("whole").style.opacity = opacity;




}

function genPoem() {

   //reset colors
   for(var i = 0; i < 6; i++) {
      for(var j = 0; j < 5; j++) {
         try {
            document.getElementById(`${i},${j}`).style.color = "black";
         } catch(TypeError) {
            var foo = 0;
         } finally {
            var foo = 0;
         }
      }
   }

   var s_poem = "<div>two</div><div>ways</div><div>to make</div><div>a mud pie</div><div>in six easy steps</div><br><br>";

   var_one_nums = [-1, -1, -1, -1, -1, -1];

   for(var t = 0; t < 2; t++) {
      var name_index = Math.floor(Math.random() * names.length);
      s_poem += `<div class="name${t}">` + names[name_index] + ", age " + Math.floor(Math.random() * 13) + "</div><br>";


      for(var i = 0; i < 6; i++) {
         var num = Math.floor(Math.random() * 5);
         if(t == 0) {
            var_one_nums[i] = num;
         } else {
            while(var_one_nums[i] == num) {
               num = Math.floor(Math.random() * 5);
            }
         }
         selected[t][i] = num;
         s_poem += "<div>" + poem_1[i][num] + "</div>";
         try {
            if(t == 0){
               document.getElementById(`${i},${num}`).style.color = "#86af49";
            } else {
               document.getElementById(`${i},${num}`).style.color = "#c1502e";
            }
         } catch(TypeError) {
            var foo = 0;
         } finally {
            var foo = 0;
         }
      }
      if(t==0) {
         s_poem += "<br><br>"
      }
   }
   

   document.getElementById("poem").innerHTML = s_poem;
}
