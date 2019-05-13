import random
# coding: utf-8


#generate multiple with one instance?
    #randomly generated name, age and give three or so
#House of Dust
    #have each line start with the same phrase, and then each line follows from that, generate a bunch of them
    #"run and...", "..., sitring ocassionally"
#Heighten incongruity with recipe book, get more stock phrases
#Change individual instructions after set number of time
#Lines getting longer?
    #Kinda novel but cool


poem = [["empty out your pail",				
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
"roll in mud"]]

final_poem = ""

for lines in poem:
    line_index = random.randint(0,len(lines) - 1)
    final_poem += (lines[line_index] + "\n")

print(final_poem)

