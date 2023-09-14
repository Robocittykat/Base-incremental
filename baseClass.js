class base{
	constructor(value,base=10){
		this.base = base;
		this.decimal = value;
		this.convert(base);
		//console.log(colonThreshold)
	}
	convert(toBase){
		var value = this.decimal;
		var digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var result = [];
		
		if(toBase > 60){
			toBase = 60;
		}
		
		if(this.decimal == Infinity){
			this.value = "∞"
			return
		}
		while(value > 0){
			result.unshift(value%toBase);
			value /= toBase;
			value = Math.floor(value);
		}
		this.value = "";
		if(result.length - 1 >= 9){
			this.value += digits[result[0]]
			this.value += "."
			this.value += digits[result[1]]
			this.value += digits[result[2]]
			this.value += digits[result[3]]
			this.value += "e"
			this.value += new base(result.length-1,this.base).value
		}
		else{
			for(let i of result){
				this.value += digits[i];
			}
		}
		if(this.value == ""){
			this.value = "0"
		}
		this.base = toBase;
	}
	add(other){
		if(typeof other == 'number'){
					return new base(this.decimal + other,this.base);
			}
			else if(typeof other == 'object'){
					return new base(this.decimal + other.decimal,this.base);
			}
	}
	sub(other){
		if(typeof other == 'number'){
				return new base(this.decimal - other,this.base);
		}
		else if(typeof other == 'object'){
				return new base(this.decimal - other.decimal,this.base);
		}
	}
	ge(other){
		if(typeof other == 'number'){
			if(this.decimal >= other){
				return true;
			}
			else{
				return false;
			}
		}
		else if(typeof other == 'object'){
			if(this.decimal >= other.value){
				return true;
			}
			else{
				return false;
			}
		}
	}
}