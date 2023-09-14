function autosave(){
	//general variables that need to be saved
	localStorage.setItem("cheats",cheats)
	localStorage.setItem("curBase",curBase)
	//points variables that need to be saved
	localStorage.setItem("score",score.decimal)
	localStorage.setItem("pointGainBase",pointGainBase)
	localStorage.setItem("pointGainCost",pointGainCost)
	localStorage.setItem("initPointsUpgradeCostStep",initPointsUpgradeCostStep)
	localStorage.setItem("pointsUpgradeTimesBought",pointsUpgradeTimesBought)
	//base variables that need to be saved
	localStorage.setItem("enterCostForm",enterCostForm)
	localStorage.setItem("ipsiAmount",ipsiAmount)
	localStorage.setItem("baseMulti",baseMulti)
	localStorage.setItem("ipsiBonus",ipsiBonus)
	localStorage.setItem("bestBase",bestBase)
	localStorage.setItem("initIpsiAmt",initIpsiAmt)
	localStorage.setItem("baseUpgrades",baseUpgrades)
	//log variables that need to be saved
	localStorage.setItem("logUnlocked",logUnlocked)
	localStorage.setItem("logPoints",logPoints)
	localStorage.setItem("unspentPaths",unspentPaths)
	localStorage.setItem("totalPaths",totalPaths)
	localStorage.setItem("logPointBoost",logPointBoost)
	localStorage.setItem("ipsiMax",ipsiMax)
	localStorage.setItem("selfSyn",selfSyn)
	localStorage.setItem("ipsiPointMulti",ipsiPointMulti)
	localStorage.setItem("bestBaseMulti",bestBaseMulti)
	localStorage.setItem("freeIpsi",freeIpsi)
	localStorage.setItem("pointsUpgradeBoost",pointsUpgradeBoost)
	localStorage.setItem("startWithLogPointsPoints",startWithLogPointsPoints)
	//bitwise variables that need to be stored
	localStorage.setItem("bitwisePoints",bitwisePoints)
	//THE ENTIRE WEBPAGE OH MY GOODNESS!!!
	localStorage.setItem("webpageState",htmlContent.innerHTML)
	console.log("saving")
}
setInterval(autosave,30000)