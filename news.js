var newsOptions=[
	"It should not be this hard to make a news ticker...",
	//"VROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM",
	"The creator of antimatter dimensions had requested that your base be capped at nine so that the digit 9 will never show up in your point amount. Sadly, I have no clue how to cap your base.",
	"Base 1 cannot, does not, and will not ever exist.",
	"The TAS speedrun record for this game is 10:22. However, that run was completed on a previous version, making it obsolete. That means that the WR is still up for grabs. Be the first to claim it!",
	"Hevipelle once said that if Gaben can't count to three and he can't count to nine, then there may very well be a game developer that can't count to 27. However, I can't count to one, but no one cares 😢",
	"The next prestige layer will have lootboxes. Have fun gambling all of your money away on in-game items.",
	"I learned HTML just to make this stupid game.",
	"Robocittykat's 3-step guide to making an incremental game: step 1: Add a score counter and a button to increase that. Step 2: Add useless fluff to make it go faster. Step 3: watch number go brrr",
	"They are called ipsiClickers because ipsi- is the greek alternative for auto-. However, they both actually mean self, so an autoclicker is actually a self-clicker",
	"In the most glamourous of burrows you will find a base 6",
	"Base 10 sucks because 1/3 of 10 is not an integer. We should use base 10 instead, because in base 10, 1/10 of 10 is 1.",
	"Turn away from decimal, seek dozenal instead.",
	"the number 144 is gross",
	"The problem with talking about bases is that in base x, we would refer to x as 10, making every base base 10.",
	"Did you know that time is mostly kept in base 60?",
	"Just so you know, capital O and lowercase e are not used as digits in this game because capital O could easily be confused with zero while lowercase e is used for scientific notation.",
	"Base 1 will trick you into believing in it's existance, but it is all a lie.",
	"Invest in paperclip",
	"Praise paperclip",
	"Man do I love forturne cookies. Let's see what my fortune is. 'you will buy a paperclip tomorrow'",
	"Paperclips are so not useless. You use them for selling them.",
	"safety pin is evil",
	"Base 2 crook. Base 60 boss. That's how mafia works.",
	//"Reach infinite ipsiclickers to win. If you don't know what I mean by infinite, then you haven't played Antimatter dimensions or any game remotely inspired by it.",
	//"The monkey is at the typewriter, typing the code for the game about the monkey at the typewriter. It will finish in a million years.",
	"incremental game recomendations: Idle dice by Luts games. Antimatter dimensions by Hevipelle. Universal paperclips by Frank Lantz. The prestige tree by Jacorb90. And of corse, base incremental by Robocittykat.",
	"This game is based.",
	"'Incremental games are stupid because you don't do anything but click a button and then lose all of your progress' -everyone who hasn't played an incremental game",
	"Alexa, play BIG SHOT. Okay, playing big shot, by Billy Joel.",
	"Stuck? click <a href='https://robocittykat.github.io/Base-incremental-guide/' target='_blank' style='color: dodgerBlue;'>here</a>!",
	"How are parts of this game already outdated if they were created durring this update?",
	"Fun fact: you can break this news ticker by going onto another tab, window, or doing anything like that. Don't ask me why, I don't know how the news ticker code works, I just stole it off the internet.",
	"All your base are belong to us",
	"This game is a ripoff of Antimatter dimensions. Points are like antimatter, bases are like infinities, log points are like IP, log paths are TT, IpsiClickers are replicanti, etc.",
	"Who wants to buy a paperclip? Only ten bases, for the best paperclip you've ever seen. Come on down, get your paperclip.",
	"I have made one other game called account defense. Check it out on Itch.io. Or don't.",
	"Fun fact: I'm watching You...                                                              ...tube right now what are you doing?",
	"Thank you mario! But your princess is in another base!",
	"Be polite. Be efficient. And have a plan to click every button you meet.",
	"Hand jumpscare",
	"Basically, the goal is to get your base as high as possible.",
	"Base incremental do what Algebreic progression don't",
	"Infinite % of studies show that getting your news from this news ticker, you will stay up-to-date with major world events. Infinite % of studies say otherwise. There have been 0 studies.",
	"Based on your progress, you should increase your base.",
	"Base 1 is the new ninth dimension.",
	"The problem with base 1 is that if base 3 uses digits 0,1,2, base 2 uses digits 0,1, then base 1 would only use 0. The problem with that is that 000000 is equal to 0. You cannot display any number other than 0 in base 1. However, you could argue that tally marks (without the crosses) could be considered base 1."
]

function newNews(){
	currentTicker.innerHTML=newsOptions[Math.floor(Math.random()*newsOptions.length)]
	//currentTicker.innerHTML=newsOptions[newsOptions.length-1]
	setTimeout(newNews,20000)
	
}
newNews()