if(localStorage){
	var localStorageWorks = true
	console.log("local storage works")
}
else{
	var localStorageWorks = false
	console.log("local storage does not works")
}

function getElement(elementName){
	return document.getElementById(elementName)
}

function multiplyThru(initial,list){
	for(let i of list){
		initial*=i
	}
	return Math.round(initial)
}

function log(x,logBase=Math.E){
	if(x == 0){
		return 0
	}
	if(logBase == Math.E){
		return Math.log(x)
	}
	else{
		return Math.log(x)/Math.log(logBase)
	}
}

function factorial(x){
	result = 1
	for (let i = 1; i <= x; i++){
		result *= i
	}
	return result
}
function myFactorial(x){
	return factorial((x*2)-1)
}

function bitwiseOr(p,q){
	p=new base(p,2).value
	q=new base(q,2).value
	
	while(q.length < p.length){
		q="0"+q
	}
	while(p.length < q.length){
		p="0"+p
	}
	
	result = []
	
	for(let i = 0; i < p.length; i++){
		result.push(String(Number(p[i])||Number(q[i])))
	}
	
	value = 0
	
	for(let i = result.length-1; i >= 0; i--){
		if(result[i]=='1'){
			value += 2**(result.length-(i+1))
		}
	}
	return value
	
}

function plural(amt,what){
	if(amt != 1){
		return amt+" "+what+'s'
	}
	else{
		return amt+" "+what
	}
}

function ruinSave(){
	localStorage.setItem(2,1)
}

function Bool(inputString){
	if(inputString == "true"){
		return true
	}else{
		return false
	}
}

if(!localStorageWorks){
	confirm("uh oh! local storage doesn't work on your browser, so the game won't be able to save data. That means every time you close the tab, your progress will reset. Either export your save every now and then or switch to a browser that supports saving.")
}

function reloadIpsi(){
	if(ipsiKey != -1){
		clearInterval(ipsiKey)
	}
	if(ipsiAmount > 0){
		ipsiKey = setInterval(addPoint,1000/(ipsiAmount))
	}
	
}

var ipsiKey = -1

setInterval(baseAuto,0)
setInterval(pointsAuto,0)
setInterval(ipsiAuto,0)

if(localStorage.length == 28){
	//general variables
	var curBase = Number(localStorage.getItem("curBase"));
	var cheats = Bool(localStorage.getItem("cheats"));

	//points variables
	var score = new base(Number(localStorage.getItem("score")),Number(curBase));
	var pointGainBase = Number(localStorage.getItem("pointGainBase"));
	var pointGainCost = Number(localStorage.getItem("pointGainCost"));
	var initPointsUpgradeCostStep = Number(localStorage.getItem("initPointsUpgradeCostStep"))
	var pointsUpgradeTimesBought = Number(localStorage.getItem("pointsUpgradeTimesBought"))

	//base variables
	var enterCostForm = Number(localStorage.getItem("enterCostForm"))
	var ipsiAmount = Number(localStorage.getItem("ipsiAmount"))
	var baseMulti = Bool(localStorage.getItem("baseMulti"))
	var ipsiBonus = Bool(localStorage.getItem("ipsiBonus"))
	var bestBase = Number(localStorage.getItem("bestBase"))
	var initIpsiAmt = Number(localStorage.getItem("initIpsiAmt"))
	var baseUpgrades = localStorage.getItem("baseUpgrades")

	//log variables
	var logUnlocked = Bool(localStorage.getItem("logUnlocked"))
	var logPoints = Number(localStorage.getItem("logPoints"))
	var logUpgrades = {1:false,10:false,11:false,100:false,101:false,110:false,111:false,1000:false,1001:false,1010:false,1011:false,1100:false,1101:false,1110:false,1111:false}
	var unspentPaths = Number(localStorage.getItem("unspentPaths"))
	var totalPaths = Number(localStorage.getItem("totalPaths"))
	var logPointBoost = Bool(localStorage.getItem("logPointBoost"))
	var ipsiMax = Bool(localStorage.getItem("ipsiMax"));
	var selfSyn = Bool(localStorage.getItem("selfSyn"));
	var ipsiPointMulti = Bool(localStorage.getItem("ipsiPointMulti"));
	var safeFastEnter = Bool(localStorage.getItem("safeFastEnter"));
	var bestBaseMulti = Bool(localStorage.getItem("bestBaseMulti"));
	var freeIpsi = Bool(localStorage.getItem("freeIpsi"));
	var pointsUpgradeBoost = Bool(localStorage.getItem("pointsUpgradeBoost"));
	var startWithLogPointsPoints = Bool(localStorage.getItem("startWithLogPointsPoints"));

	//bitwise variables
	var bitwisePoints = Number(localStorage.getItem("bitwisePoints"))
	
	htmlContent.innerHTML = localStorage.getItem("webpageState")
	
	reloadIpsi()
}
else{
	if(localStorage.length != 0){
		confirm("Uh oh! Either your save file was made on a previous version or it was corupted. Sadly this means the game will restart.")
		localStorage.clear()
	}
	else{
		console.log("no save data to load")
	}
	//general variables
	var curBase = 2;
	var cheats = false;

	//points variables
	var score = new base(0,2);
	var pointGainBase = 1;
	var pointGainCost = curBase;
	var initPointsUpgradeCostStep = 1
	var pointsUpgradeTimesBought = 0

	//base variables
	var enterCostForm = 1
	var ipsiAmount = 0
	var ipsiKey = -1
	var baseMulti = false
	var ipsiBonus = false
	var bestBase = 2
	var initIpsiAmt = 0
	var baseUpgrades = "12345"

	//log variables
	var logUnlocked = false
	var logPoints = 0
	var logUpgrades = {1:false,10:false,11:false,100:false,101:false,110:false,111:false,1000:false,1001:false,1010:false,1011:false,1100:false,1101:false,1110:false,1111:false}
	var unspentPaths = 0
	var totalPaths = 0
	var logPointBoost = false
	var ipsiMax = true;
	var selfSyn = false;
	var ipsiPointMulti = false;
	var safeFastEnter = false;
	var bestBaseMulti = false;
	var freeIpsi = false;
	var pointsUpgradeBoost = false;
	var startWithLogPointsPoints = false;

	//bitwise variables
	var bitwisePoints = 0
}



//Things that need to update constantly
function updatePage(){
	//update page elements
	scoreTrack.innerHTML = plural(score.value,"point");
	score.convert(curBase);
	pointGainLabel.innerHTML = plural(new base(pointGainCost,curBase).value,"point");
	pointButton.innerHTML = "+"+plural(new base(multipliers(pointGainBase),curBase).value,"point");
	scoreBase.innerHTML = "Base "+curBase;
	baseScore.innerHTML = "You are in base "+curBase+". ("+(curBase-2)+" avalible to spend)"
	ipsiAmt.innerHTML = "You have "+plural(new base(ipsiAmount,10).value,"ipsiClicker")

	//buttons
	//Enter next base button
	switch(enterCostForm){
		case 1:
			if(score.ge(curBase**(6+Math.floor(curBase/60)))){
				basePrestButton.disabled = false;
				if(logUnlocked == false){
					basePrestButton.innerHTML = "Enter base "+(curBase+1)
				}
				else{
					basePrestButton.innerHTML = "Reset for "+plural(new base(Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost)),10).value,"log point")
				}
			}
			else{
				basePrestButton.disabled = true;
				basePrestButton.innerHTML = "Reach "+plural(new base(curBase**(6+Math.floor(curBase/60)),curBase).value,"point")
			}
			break;
		case 2:
			if(score.ge(Math.round(curBase**(6-(log(curBase)/log(60))+Math.floor(curBase/60))))){
				basePrestButton.disabled = false;
				if(logUnlocked == false){
					basePrestButton.innerHTML = "Enter base "+(curBase+1)
				}
				else{
					basePrestButton.innerHTML = "Reset for "+plural(new base(Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost)),10).value,"log point")
				}
			}
			else{
				basePrestButton.disabled = true;
				basePrestButton.innerHTML = "Reach "+ new base(Math.round(curBase**(6-((log(curBase)/log(60)))+Math.floor(curBase/60))),curBase).value +" points"
			}
			break
		case 3:
			if(curBase == bestBase){
				if(score.ge(Math.round(curBase**(6-(log(curBase)/log(60))+Math.floor(curBase/60))))){
					basePrestButton.disabled = false;
					if(logUnlocked == false){
						basePrestButton.innerHTML = "Enter base "+(curBase+1)
					}
					else{
						basePrestButton.innerHTML = "Reset for "+plural(new base(Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost)),10).value,"log point")
					}
				}
				else{
					basePrestButton.disabled = true;
					basePrestButton.innerHTML = "Reach "+ new base(Math.round(curBase**(6-((log(curBase)/log(60)))+Math.floor(curBase/60))),curBase).value +" points"
				}
			}
			else{
				if(score.ge(1)){
					basePrestButton.disabled = false;
					basePrestButton.innerHTML = "Reset for "+plural(new base(Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost)),10).value,"log point")
				}
				else{
					basePrestButton.disabled = true;
					basePrestButton.innerHTML = "Reach 1 point"
				}
			}
	}
	
	//increase point gain button
	if(score.ge(pointGainCost)){
		pointGainButton.disabled = false;
	}
	else{
		pointGainButton.disabled = true;
	}
	
	//base upgrade buttons
	for(let upgrade of baseUpgrades){
		if((curBase-2)>=getElement("baseUpgrade"+upgrade).getAttribute("cost")){
			getElement("baseUpgrade"+upgrade).disabled = false;
		}
		else{
			getElement("baseUpgrade"+upgrade).disabled = true;
			
		}
	}
	
	//ipsiClicker button
	if(ipsiAmount != 100 || ipsiMax == false){
		if(ipsiAmount >= 100){
			if(curBase-2 >= Number(buyIpsi.getAttribute("cost"))){
				buyIpsi.disabled = false;
				getElement("buyIpsi").innerHTML = "Buy " + plural(new base((Math.round((ipsiAmount*((curBase-1)-Number(buyIpsi.getAttribute("cost"))))**0.5+1+ipsiBonus)),10).value,"ipsiClicker")+". Cost: "+plural(getElement("buyIpsi").getAttribute("cost"),"base")
			}
			else{
				buyIpsi.disabled = true;
				getElement("buyIpsi").innerHTML = "Buy " + plural(new base((Math.round((ipsiAmount)**0.5+1+ipsiBonus)),10).value,"ipsiClicker")+". Cost: "+plural(getElement("buyIpsi").getAttribute("cost"),"base")
			}
		}
		else{
			if(curBase-2 >= Number(buyIpsi.getAttribute("cost"))){
				buyIpsi.disabled = false;
				getElement("buyIpsi").innerHTML = "Buy " + plural(new base(((ipsiAmount*(curBase-Number(buyIpsi.getAttribute("cost")))+1+ipsiBonus)-ipsiAmount),10).value,"ipsiClicker")+". Cost: "+plural(getElement("buyIpsi").getAttribute("cost"),"base")
			}
			else{
				buyIpsi.disabled = true;
				getElement("buyIpsi").innerHTML = "Buy " + plural(new base(((ipsiAmount*(2)+1+ipsiBonus)-ipsiAmount),10).value,"ipsiClicker")+". Cost: "+plural(getElement("buyIpsi").getAttribute("cost"),"base")
			}
		}
	}
	else{
		buyIpsi.disabled = true;
		getElement("buyIpsi").innerHTML = "At max ipsiClickers."
		
	}
	
	//log ipsiClicker button
	if(logPoints > buyIpsiLog.getAttribute("cost")){
		buyIpsiLog.disabled = false;
		buyIpsiLog.innerHTML = "Buy "+ plural(new base(Math.round(logPoints**0.5),10).value,"ipsiClicker")+". Cost: "+ plural(new base(buyIpsiLog.getAttribute("cost"),10).value,"log point")
	}
	else{
		buyIpsiLog.disabled = true;
		buyIpsiLog.innerHTML = "Buy "+ plural(new base(Math.round(buyIpsiLog.getAttribute("cost")**0.5),10).value,"ipsiClicker")+". Cost: "+ plural(new base(buyIpsiLog.getAttribute("cost"),10).value,"log point")
	}
	
	//log path button
	if(logPoints >= buyLogPath.getAttribute("cost")){
		if(totalPaths < 8){
			buyLogPath.disabled = false;
		}
		else{
			buyLogPath.disabled = true;
		}
	}
	else{
		buyLogPath.disabled = true;
	}
	
	//check for endgame
	if(ipsiAmount == Infinity){
		body.innerHTML = "<h1>You reached infinite ipsiClickers, which breaks the entire game, so you win ig.</h1><p>Look forward to...<br>save data<br>named upgrades<br>log tree respecing<br>achievements<br>settings<br>a news ticker<br>...coming to an update near you!</p>"
	}
	
	logAmount.innerHTML="You have "+plural(new base(logPoints,10).value,"log point")
	pathAmount.innerHTML = "You have "+plural(unspentPaths,"unused path")
	
	
	//Bitwise reset button
	
	if(ipsiAmount >= 60**3){
		bitwisePrestigeButton.innerHTML = "Reset everything up to this point for "+((Math.round(log(ipsiAmount,60)*100)/100)-2)+" (floored) bitwise points."
		
		bitwisePrestigeButton.disabled=false
	}
	else{
		bitwisePrestigeButton.innerHTML = "Reach base 60 and 60^3 ipsiClickers (currently 60^"+(Math.round(log(ipsiAmount,60)*100)/100)+")."
		
		bitwisePrestigeButton.disabled=true
	}
	bitwiseAmount.innerHTML=bitwisePoints
	
}

//when you click the +_points button
function addPoint(){
	var gain = multipliers(pointGainBase)
	score = score.add(gain);
}

//when you base reset
function prestige(){
	if(logUnlocked){
		logPoints += Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost))
	}
	if(bestBase == curBase){
		if(base==60){
			bestBase = 61
			baseSlider.max = 60
			curBase = 60
		}else{
			bestBase += 1
			baseSlider.max = Number(baseSlider.max)+1
			curBase ++;
			baseTabButton.hidden=false;
		}
	}else{
		if(enterCostForm != 3){
			if(curBase == 60){
				curBase = 60
			}
			else{
				curBase ++;
			}
		}
	}
	pointsUpgradeTimesBought = 0;
	score = score.sub(score);
	if(startWithLogPointsPoints){
		score = score.add(logPoints)
	}
	
	document.getElementById("scoreBase").innerHTML = "Base "+curBase;
	pointGainCost = curBase**initPointsUpgradeCostStep;
	pointGainBase = 1;
	reloadIpsi()
	basePrestButton.disabled = true
	
	
}

//when you bitwise reset
function bitwiseReset(){
	console.log("you are preforming a bitwise reset...")
	
	bitwisePoints += Math.floor(log(ipsiAmount,60))-2
	bitwiseTab.hidden=false
	//points variables
	score = new base(0,2);
	pointGainBase = 1;
	pointGainCost = curBase;
	initPointsUpgradeCostStep = 1
	pointsUpgradeTimesBought = 0
	
	//base variables
	enterCostForm = 1
	ipsiAmount = 0
	ipsiKey = -1
	baseMulti = false
	ipsiBonus = false
	bestBase = 2
	initIpsiAmt = 0
	
	//log variables
	logUnlocked = false
	logPoints = 0
	unspentPaths = 0
	totalPaths = 0
	logPointBoost = false
	ipsiMax = true;
	selfSyn = false;
	ipsiPointMulti = false;
	safeFastEnter = false;
	bestBaseMulti = false;
	freeIpsi = false;
	pointsUpgradeBoost = false;
	startWithLogPointsPoints = false;
	
	baseAutoEnabled.checked=false
	pointAutoEnabled.checked=false
	baseIpsiAutoEnabled.checked=false
	logIpsiAutoEnabled.checked=false
	autoTab.hidden=true
	baseAutobuyer.hidden=true
	pointAutobuyer.hidden=true
	ipsiAutobuyer.hidden=true
	logIpsiAutobuyer.hidden=true
	
	buyIpsiLog.hidden=true
	
	baseUpgrades = [getElement("baseUpgrade1"),getElement("baseUpgrade2"),getElement("baseUpgrade3"),getElement("baseUpgrade4"),getElement("baseUpgrade5")]
	baseUpgrade1.innerHTML="Divides the cost of the points upgrade by your current base. Cost: 1 base"
	baseUpgrade2.innerHTML="Decreses the requirement for entering the next base. Cost: 5 bases"
	baseUpgrade3.innerHTML="Multiplies point gain by your current base. Cost: 3 bases"
	baseUpgrade4.innerHTML="Multiplies your current ipsiClickers by 2 and you gain an extra ipsiClicker whenever you buy them. Cost: 2 bases"
	baseUpgrade5.innerHTML="Unlock log points, gained on base reset, and the log tab. Cost: 8 bases"
	
	logNumbers=[1,10,11,100,101,110,111,1000,1001,1010,1011,1100,1101,1110,1111]
	for(let i of logNumbers){
		getElement("log"+i).classList.remove("logUpgrade")
	}
	
	
}

//The only pre-base upgrade
function pointGain(){
	pointGainBase += Math.max(1,(curBase**0.25)**pointsUpgradeBoost);
	score = score.sub(pointGainCost);
	pointGainCost *= curBase;
	pointsUpgradeTimesBought ++;
}

//switch tabs
function tab(tab){
	var tabs = [document.getElementById("baseTab"),document.getElementById("pointsTab"),getElement("logTab"),getElement("autoTab"),getElement("optionsTab"),getElement("bitwiseTab")]
	
	for(let i of tabs){
		i.hidden = true
	}
	document.getElementById(tab+"Tab").hidden = false
	
}

//buying base upgrades
function baseUpgrade(number){
	//upgrade 1
	if(number == 1){
		//curBase -= 1;
		initPointsUpgradeCostStep = 0;
		getElement("baseUpgrade1").innerHTML = "Divides the cost of the points upgrade by your current base. Bought"
	}
	//upgrade 2
	if(number == 2){
		//curBase -= 5;
		if(enterCostForm != 3){
			enterCostForm = 2
		}
			
		getElement("baseUpgrade2").innerHTML = "Decreses the requirement for entering the next base. Bought"
	}
	//upgrade 3
	if (number == 3){
		//curBase -= 3;
		baseMulti = true;
		getElement("baseUpgrade3").innerHTML = "Multiplies point gain by your current base. Bought"
	}
	//upgrade 4
	if(number == 4){
		//curBase -= 3;
		ipsiBonus = true
		if(ipsiAmount != 100 || ipsiMax == false){
			ipsiAmount *= 2;
		}
		getElement("baseUpgrade4").innerHTML = "Multiplies your current ipsiClickers by 2 and you gain an extra ipsiClicker whenever you buy them. Bought"
	}
	//upgrade 5
	if(number == 5){
		logUnlocked = true;
		getElement("baseUpgrade5").innerHTML = "Unlock log points, gained on base reset, and the log tab. Bought"
		logTabButton.hidden = false
		baseChange.hidden = false
		basePrestButton.classList.add("logButton")
	}
	curBase -= getElement("baseUpgrade"+number).getAttribute("cost")
	pointGainBase = 1;
	pointGainCost = curBase**initPointsUpgradeCostStep;
	baseUpgrades = baseUpgrades.replace(number,'');
	getElement("baseUpgrade"+number).disabled = true;
	reloadIpsi()
}

//buying log upgrades
function logUpgrade(number){
	if(number == 0){
		unspentPaths += 1
		totalPaths += 1
		logPoints -= buyLogPath.getAttribute("cost")
		buyLogPath.setAttribute("cost",buyLogPath.getAttribute("cost")*(6))
		pathAmount.innerHTML = "You have "+unspentPaths+" unused paths."
		if(totalPaths == 2 || totalPaths == 4 || totalPaths == 6){
			buyLogPath.setAttribute("cost",buyLogPath.getAttribute("cost")*(6))
		}
		if(totalPaths >= 8){
			buyLogPath.innerHTML = "At max paths"
		}else{
			buyLogPath.innerHTML = "Unlock another path of the log tree. Cost: "+new base(buyLogPath.getAttribute("cost"),10).value+" log points"
		}
		return
	}
	if(getElement("log"+number).classList.contains("logButton") == true){
		return
	}
	
	if(unspentPaths >= 1){
		if(getElement("log"+number).classList.contains("logButton")){
			return
		}
		getElement("log"+number).classList.add("logButton")
		
	}
	if(number == 1){
		logPointBoost = true
		
	}
	if(number == 10){
		logUpgrade(1)
		baseSlider.hidden = false
	}
	if(number == 11){
		logUpgrade(1)
		ipsiMax = false;
	}
	if(number == 100){
		logUpgrade(10)
		enterCostForm = 3
	}
	if(number == 101){
		logUpgrade(10)
		startWithLogPointsPoints = true;
	}
	if(number == 110){
		logUpgrade(11)
		initIpsiAmt = 100
		ipsiAmount = initIpsiAmt
		getElement("buyIpsi").setAttribute("cost",1)
		getElement("buyIpsi").innerHTML = "Buy 1 ipsiClicker. Cost: "+getElement("buyIpsi").getAttribute("cost")+" bases"
		reloadIpsi()
	}
	if(number == 111){
		logUpgrade(11)
		autoTabButton.hidden = false
		baseAutobuyer.hidden = false
		
	}
	if(number == 1000){
		if(unspentPaths >= 1){
			logUpgrade(100)
			unspentPaths -= 1
			selfSyn = true;
		}
	}
	if(number == 1001){
		if(unspentPaths >= 1){
			logUpgrade(100)
			unspentPaths -= 1
			pointsUpgradeBoost = true;
		}
	}
	if(number == 1010){
		if(unspentPaths >= 1){
			logUpgrade(101)
			unspentPaths -= 1
			ipsiPointMulti = true
		}
	}
	if(number == 1011){
		if(unspentPaths >= 1){
			logUpgrade(101)
			unspentPaths -= 1
			bestBaseMulti = true;
		}
	}
	if(number == 1100){
		if(unspentPaths >= 1){
			logUpgrade(110)
			unspentPaths -= 1
			freeIpsi = true;
		}
	}
	if(number == 1101){
		if(unspentPaths >= 1){
			logUpgrade(110)
			unspentPaths -= 1
			buyIpsiLog.hidden = false
			buyIpsi.style="float: left;"
		}
	}
	if(number == 1110){
		if(unspentPaths >= 1){
			logUpgrade(111)
			unspentPaths -= 1
			pointAutobuyer.hidden = false
			
		}
	}
	if(number == 1111){
		if(unspentPaths >= 1){
			logUpgrade(111)
			unspentPaths -= 1
			ipsiAutobuyer.hidden = false
			
			if(buyIpsiLog.hidden == false){
				logIpsiAutobuyer.hidden = false
			}
		}
	}
	
}

baseSlider.oninput = function(){
	baseSlideVal.innerHTML = baseSlider.value
}
function fastEnterBase(){
	
	if(!safeFastEnter || baseSlider.value==bestBase){
		score = new base(0,baseSlider.value)
		pointsUpgradeTimesBought = 0;
		pointGainCost = baseSlider.value**initPointsUpgradeCostStep;
		pointGainBase = 1;
	}
	else{
		score = new base(score.decimal,baseSlider.value)
		pointGainCost = baseSlider.value**(pointsUpgradeTimesBought-(1-initPointsUpgradeCostStep))
	}
	curBase = baseSlider.value
	document.getElementById("scoreBase").innerHTML = "Base "+curBase;
}

//buying ipsiClickers
function ipsiClicker(currency){
	switch(currency){
		case "base":
			var cost = getElement("buyIpsi").getAttribute("cost")
			
			
			if(ipsiAmount >= 100){
				ipsiAmount = ipsiAmount + Math.round((ipsiAmount*(curBase-1-Number(cost)))**0.5)+1+ipsiBonus
			}
			else{
				ipsiAmount *= curBase-Number(cost)
				ipsiAmount += 1+ipsiBonus
			}
			if(!freeIpsi){
				curBase -= Number(cost)
				pointGainBase = 1;
				pointGainCost = curBase**initPointsUpgradeCostStep;
			}
			if(ipsiAmount > 100 && ipsiMax){
				ipsiAmount = 100
			}
			getElement("buyIpsi").setAttribute("cost",Number(cost)+1)
			
			cost = getElement("buyIpsi").getAttribute("cost")
			getElement("buyIpsi").innerHTML = "Buy 1 ipsiClicker. Cost: "+cost+" bases"
			reloadIpsi()
			break
		case "log":
			var cost = buyIpsiLog.getAttribute("cost")
			var timesBought = buyIpsiLog.getAttribute("timesBought")
			buyIpsiLog.setAttribute("timesBought",Number(timesBought)+1)
			ipsiAmount += Math.round(logPoints ** 0.5)
			if(!freeIpsi){
				logPoints -= cost
			}
			buyIpsiLog.setAttribute("cost",myFactorial(buyIpsiLog.getAttribute("timesBought")))
	}
}

//respec ipsiClickers to try for better multipliers
function respecIpsi(){
	var response = confirm("Are you sure you want to reset your ipsiClickers? This is only useful if you want to try for better multipliers!")
	if(response){
		ipsiAmount = initIpsiAmt
		
		getElement("buyIpsi").setAttribute("cost",1)
		buyIpsiLog.setAttribute("cost",1)
		buyIpsiLog.setAttribute("timesBought",0)
		getElement("buyIpsi").innerHTML = "Buy 1 ipsiClicker. Cost: "+getElement("buyIpsi").getAttribute("cost")+" bases"
		reloadIpsi()
	}
}

//contains the code for possible multipliers
function multipliers(baseAmt){
	multis = [];
	multis.push(Math.min(Math.max(curBase,bestBase**bestBaseMulti)**baseMulti,60))
	//multis.push(1000000000000**cheats)
	if(ipsiAmount > 100){
		multis.push(ipsiAmount/100)
	}
	multis.push(((log(score.decimal+1)/log(curBase))+1)**selfSyn)
	multis.push((log(ipsiAmount)/log(2))**ipsiPointMulti)
	multis.push(freex2.value)
	
	
	return multiplyThru(bitwiseOr(baseAmt,bitwisePoints),multis);
}



//cheats
function enableCheats(){
	cheats = true
	ipsiAmount = 100;
	reloadIpsi();
	baseUpgrade(1)
	baseUpgrade(2)
	baseUpgrade(3)
	baseUpgrade(4)
	baseUpgrade(5)
	curBase = 2
	bestBase = 10
	baseSlider.max = "10"
}

function baseAuto(){
	if(baseAutoAmt.value < baseAutoAmt.min){
		baseAutoAmt.value = baseAutoAmt.min
	}
	if(Math.round((log(score.decimal)/log(curBase))**((curBase**0.5)**logPointBoost)) >= baseAutoAmt.value){
		if(basePrestButton.disabled == false){
			if(baseAutoEnabled.checked){
				prestige()
			}
		}
	}
}
function pointsAuto(){
	
	if(score.ge(pointGainCost)){
		if(pointAutoEnabled.checked){
			pointGain()
		}
	}
}
function ipsiAuto(){
	if(logIpsiAutoAmt.value < 1){
		logIpsiAutoAmt.value = 1
	}
	if(baseIpsiAutoAmt.value < 0){
		baseIpsiAutoAmt.value = 0
	}
	if(logPoints/logIpsiAutoAmt.value > buyIpsiLog.getAttribute("cost")){
		
		if(logIpsiAutoEnabled.checked){
			ipsiClicker("log")
			return
		}
	}
	
	if(curBase-(2+Number(baseIpsiAutoAmt.value)) >= buyIpsi.getAttribute("cost")){
		if(baseIpsiAutoEnabled.checked){
			ipsiClicker("base")
		}
	}
}

setInterval(updatePage,0)