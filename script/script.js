var gameArray = [
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("0"),
		rerender: function() {
			var str = "<span id='dirblack'>&#x21B7</span>";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 2,
		id: document.getElementById("1"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("2"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("3"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("4"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("5"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 5,
		wht: 0,
		id: document.getElementById("6"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("7"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 3,
		wht: 0,
		id: document.getElementById("8"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("9"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("10"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("11"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 5,
		id: document.getElementById("12"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 5,
		wht: 0,
		id: document.getElementById("13"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("14"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("15"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("16"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 3,
		id: document.getElementById("17"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("18"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 5,
		id: document.getElementById("19"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("20"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("21"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("22"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("23"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 2,
		wht: 0,
		id: document.getElementById("24"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		wht: 0,
		blk: 0,
		id: document.getElementById("25"),
		rerender: function() {
			var str = "<span id='dirwhite'>&#x21B6</span>";
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	},
	{
		blk: 0,
		wht: 0,
		id: document.getElementById("middle"),
		rerender: function() {
			var str = "";
			for (var i = 0; i < this.blk; i++) {
				str += "<div class='blk'></div>";
			}
			for (var i = 0; i < this.wht; i++) {
				str += "<div class='wht'></div>";
			}
			this.id.innerHTML = str;
		}
	}
],
	validArray = [],
	turn = "",
	die1 = 0,
	die2 = 0,
	die3 = 0,
	die4 = 0,
	home = 0,
	current = 0,
	diceButton = document.getElementById("diceButton"),
	diceButtonStart = document.getElementById("diceButtonStart"),
	chooseAgainButton = document.getElementById("chooseAgain"),
	resetButton = document.getElementById("reset"),
	die1Node = document.getElementById("die1"),
	die2Node = document.getElementById("die2"),
	die3Node = document.getElementById("die3"),
	die4Node = document.getElementById("die4"),
	rulesButton = document.getElementById("rulesButton"),
	rules = document.getElementById("rules"),
	hideRules = document.getElementById("hideRules"),
	rollDice = function() {
		if (die1 == 0 && die2 == 0 && die3 == 0 && die4 ==0) {
			die1 = Math.ceil(Math.random() * 6);
			die2 = Math.ceil(Math.random() * 6);
			die1Node.innerHTML = die1;
			die2Node.innerHTML = die2;
			if (die1 == die2) {
				die3 = die1;
				die4 = die1;
				die3Node.innerHTML = die3;
				die3Node.style.display = "block";
				die4Node.innerHTML = die4;
				die4Node.style.display = "block";
			}
			else {
				die3Node.style.display = "none";
				die4Node.style.display = "none";
			}
			checkValidity();
		}
	},
	rollDiceStart = function() {
		die1 = Math.ceil(Math.random() * 6);
		die2 = Math.ceil(Math.random() * 6);
		die1Node.innerHTML = die1;
		die2Node.innerHTML = die2;
		if (die1 == die2) {
			rollDiceStart();
		}
		else {
			setTimeout(function() {
				diceButtonStart.style.display = "none";
				diceButton.style.display = "block";
				if (die1 < die2) {
					window.alert("Black goes first.");
					turn = "black";
				}
				else {
					window.alert("White goes first.");
					turn = "white";
				}
			}, 500);
			setTimeout(function() {checkValidity()}, 500);
		}
	},
	checkValidity = function() {
		var valid = false,
			i = 0,
			count = 0,
			inArray = false;
		validArray = [];
		home = 0;
		if (turn == "black") {
			if (gameArray[26].blk == 0) {
				home = gameArray[0].blk + gameArray[1].blk + gameArray[2].blk +
					gameArray[3].blk + gameArray[4].blk	+ gameArray[5].blk +
					gameArray[6].blk;
				for (i = 0; i < 25 && count < 15; i++) {
					inArray = false;
					if (gameArray[i].blk > 0) {
						count += gameArray[i].blk;
						if (i > 0) {
							if (i - die1 < 1 && die1 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die1 != 0) {
								if (gameArray[i - die1].wht < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i - die2 < 1 && die2 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die2 != 0) {
								if (gameArray[i - die2].wht < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i - die3 < 1 && die3 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die3 != 0) {
								if (gameArray[i - die3].wht < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i - die4 < 1 && die4 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die4 != 0) {
								if (gameArray[i - die4].wht < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
						}
					}
				}
			}
			else {
				if (die1 != 0 && gameArray[25-die1].wht < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die2 != 0 && gameArray[25-die2].wht < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die3 != 0 && gameArray[25-die3].wht < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die4 != 0 && gameArray[25-die4].wht < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
			}
		}
		else if (turn == "white") {
			if (gameArray[26].wht == 0) {
				home = gameArray[25].wht + gameArray[24].wht + gameArray[23].wht
					+ gameArray[22].wht + gameArray[21].wht + gameArray[20].wht
					+ gameArray[19].wht;
				for (i = 0; i < 25 && count < 15; i++) {
					inArray = false;
					if (gameArray[i].wht > 0) {
						count += gameArray[i].wht;
						if (i > 0) {
							if (i + die1 > 24 && die1 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die1 != 0) {
								if (gameArray[i + die1].blk < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i + die2 > 24 && die2 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die2 != 0) {
								if (gameArray[i + die2].blk < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i + die3 > 24 && die3 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die3 != 0) {
								if (gameArray[i + die3].blk < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							if (i + die4 > 24 && die4 != 0) {
								if (home == 15) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
							else if (die4 != 0) {
								if (gameArray[i + die4].blk < 2) {
									valid = true;
									if (inArray == false) {
										validArray.push(i);
										inArray = true;
									}
								}
							}
						}
					}
				}
			}
			else {
				if (die1 != 0 && gameArray[die1].blk < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die2 != 0 && gameArray[die2].blk < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die3 != 0 && gameArray[die3].blk < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
				if (die4 != 0 && gameArray[die4].blk < 2) {
					valid = true;
					if (inArray == false) {
						validArray.push(26);
						inArray = true;
					}
				}
			}
		}
		if (valid == false) {
			setTimeout(function() {
				if (die1 != 0 || die2 != 0 || die3 != 0 || die4 != 0) {
					window.alert("There are no valid moves.");
					die1 = 0;
					die2 = 0;
					die3 = 0;
					die4 = 0;
					die1Node.innerHTML = "";
					die2Node.innerHTML = "";
				}
				die3Node.style.display = "none";
				die4Node.style.display = "none";
				chooseAgainButton.style.display = "none";
				diceButton.style.display = "block";
				if (turn == "white") {
					turn = "black";
				}
				else if (turn == "black") {
					turn = "white";
				}
			}, 500);
		}
		else {
			beginMove();
		}
	},
	beginMove = function() {
		for (var space in validArray) {
			var thisSpace = validArray[space],
				id = gameArray[thisSpace].id;
			id.style.backgroundColor = "#e6c300bb";
			id.addEventListener("click", wrapperFunctionMid);
		}
	},
	wrapperFunctionMid = function() {
		middleMove(this);
	},
	middleMove = function(oldId) {
		diceButton.style.display = "none";
		chooseAgainButton.style.display = "block";
		for (var old in validArray) {
			var thisSpace = validArray[old],
				id = gameArray[thisSpace].id;
			id.removeEventListener("click", wrapperFunctionMid);
			if (id == oldId) {
				id.style.backgroundColor = "#00ccccbb";
				current = thisSpace;
				if (turn == "white") {
					if (thisSpace == 26) {
						if (die1 != 0 && gameArray[die1].blk < 2) {
							die1Node.style.color = "#00aa00";
							die1Node.style.borderColor = "#e6c300";
							die1Node.addEventListener("click",
													  wrapperFunctionEnd1);
						}
						if (die2 != 0 && gameArray[die2].blk < 2) {
							die2Node.style.color = "#00aa00";
							die2Node.style.borderColor = "#e6c300";
							die2Node.addEventListener("click",
													  wrapperFunctionEnd2);
						}
						if (die3 != 0 && gameArray[die3].blk < 2) {
							die3Node.style.color = "#00aa00";
							die3Node.style.borderColor = "#e6c300";
							die3Node.addEventListener("click",
													  wrapperFunctionEnd3);
						}
						if (die4 != 0 && gameArray[die4].blk < 2) {
							die4Node.style.color = "#00aa00";
							die4Node.style.borderColor = "#e6c300";
							die4Node.addEventListener("click",
													  wrapperFunctionEnd4);
						}
					}
					else {
						if (thisSpace + die1 > 24 && die1 != 0) {
							if (home == 15) {
								die1Node.style.color = "#00aa00";
								die1Node.style.borderColor = "#e6c300";
								die1Node.addEventListener("click",
														  wrapperFunctionEnd1);
							}
						}
						else if (die1 != 0) {
							if (gameArray[thisSpace + die1].blk < 2) {
								die1Node.style.color = "#00aa00";
								die1Node.style.borderColor = "#e6c300";
								die1Node.addEventListener("click",
														  wrapperFunctionEnd1);
							}
						}
						if (thisSpace + die2 > 24 && die2 != 0) {
							if (home == 15) {
								die2Node.style.color = "#00aa00";
								die2Node.style.borderColor = "#e6c300";
								die2Node.addEventListener("click",
														  wrapperFunctionEnd2);
							}
						}
						else if (die2 != 0) {
							if (gameArray[thisSpace + die2].blk < 2) {
								die2Node.style.color = "#00aa00";
								die2Node.style.borderColor = "#e6c300";
								die2Node.addEventListener("click",
														  wrapperFunctionEnd2);
							}
						}
						if (thisSpace + die3 > 24 && die3 != 0) {
							if (home == 15) {
								die3Node.style.color = "#00aa00";
								die3Node.style.borderColor = "#e6c300";
								die3Node.addEventListener("click",
														  wrapperFunctionEnd3);
							}
						}
						else if (die3 != 0) {
							if (gameArray[thisSpace + die3].blk < 2) {
								die3Node.style.color = "#00aa00";
								die3Node.style.borderColor = "#e6c300";
								die3Node.addEventListener("click",
														  wrapperFunctionEnd3);
							}
						}
						if (thisSpace + die4 > 24 && die4 != 0) {
							if (home == 15) {
								die4Node.style.color = "#00aa00";
								die4Node.style.borderColor = "#e6c300";
								die4Node.addEventListener("click", 
														  wrapperFunctionEnd4);
							}
						}
						else if (die4 != 0) {
							if (gameArray[thisSpace + die4].blk < 2) {
								die4Node.style.color = "#00aa00";
								die4Node.style.borderColor = "#e6c300";
								die4Node.addEventListener("click",
														  wrapperFunctionEnd4);
							}
						}
					}
				}
				else if (turn == "black") {
					if (thisSpace == 26) {
						if (die1 != 0 && gameArray[25-die1].wht < 2) {
							die1Node.style.color = "#00aa00";
							die1Node.style.borderColor = "#e6c300";
							die1Node.addEventListener("click",
													  wrapperFunctionEnd1);
						}
						if (die2 != 0 && gameArray[25-die2].wht < 2) {
							die2Node.style.color = "#00aa00";
							die2Node.style.borderColor = "#e6c300";
							die2Node.addEventListener("click",
													  wrapperFunctionEnd2);
						}
						if (die3 != 0 && gameArray[25-die3].wht < 2) {
							die3Node.style.color = "#00aa00";
							die3Node.style.borderColor = "#e6c300";
							die3Node.addEventListener("click",
													  wrapperFunctionEnd3);
						}
						if (die4 != 0 && gameArray[25-die4].wht < 2) {
							die4Node.style.color = "#00aa00";
							die4Node.style.borderColor = "#e6c300";
							die4Node.addEventListener("click",
													  wrapperFunctionEnd4);
						}
					}
					else {
						if (thisSpace - die1 < 1 && die1 != 0) {
							if (home == 15) {
								die1Node.style.color = "#00aa00";
								die1Node.style.borderColor = "#e6c300";
								die1Node.addEventListener("click",
														  wrapperFunctionEnd1);
							}
						}
						else if (die1 != 0) {
							if (gameArray[thisSpace - die1].wht < 2) {
								die1Node.style.color = "#00aa00";
								die1Node.style.borderColor = "#e6c300";
								die1Node.addEventListener("click",
														  wrapperFunctionEnd1);
							}
						}
						if (thisSpace - die2 < 1 && die2 != 0) {
							if (home == 15) {
								die2Node.style.color = "#00aa00";
								die2Node.style.borderColor = "#e6c300";
								die2Node.addEventListener("click",
														  wrapperFunctionEnd2);
							}
						}
						else if (die2 != 0) {
							if (gameArray[thisSpace - die2].wht < 2) {
								die2Node.style.color = "#00aa00";
								die2Node.style.borderColor = "#e6c300";
								die2Node.addEventListener("click",
														  wrapperFunctionEnd2);
							}
						}
						if (thisSpace - die3 < 1 && die3 != 0) {
							if (home == 15) {
								die3Node.style.color = "#00aa00";
								die3Node.style.borderColor = "#e6c300";
								die3Node.addEventListener("click",
														  wrapperFunctionEnd3);
							}
						}
						else if (die3 != 0) {
							if (gameArray[thisSpace - die3].wht < 2) {
								die3Node.style.color = "#00aa00";
								die3Node.style.borderColor = "#e6c300";
								die3Node.addEventListener("click",
														  wrapperFunctionEnd3);
							}
						}
						if (thisSpace - die4 < 1 && die4 != 0) {
							if (home == 15) {
								die4Node.style.color = "#00aa00";
								die4Node.style.borderColor = "#e6c300";
								die4Node.addEventListener("click",
														  wrapperFunctionEnd4);
							}
						}
						else if (die4 != 0) {
							if (gameArray[thisSpace - die4].wht < 2) {
								die4Node.style.color = "#00aa00";
								die4Node.style.borderColor = "#e6c300";
								die4Node.addEventListener("click",
														  wrapperFunctionEnd4);
							}
						}
					}
				}
			}
			else {
				id.style.backgroundColor = "transparent";
			}
		}
	},
	wrapperFunctionEnd1 = function() {
		endMove(current, die1, die1Node, 1);
	},
	wrapperFunctionEnd2 = function() {
		endMove(current, die2, die2Node, 2);
	},
	wrapperFunctionEnd3 = function() {
		endMove(current, die3, die3Node, 3);
	},
	wrapperFunctionEnd4 = function() {
		endMove(current, die4, die4Node, 4);
	},
	endMove = function(space, die, dieNode, dieNumber) {
		if (turn == "white") {
			if (space == 26) {
				gameArray[space].wht--;
				gameArray[die].wht++;
				if (gameArray[die].blk == 1) {
					gameArray[die].blk = 0;
					gameArray[26].blk++;
				}
				gameArray[space].rerender();
				gameArray[die].rerender();
			}
			else {
				gameArray[space].wht--;
				if (space + die > 24) {
					gameArray[25].wht++;
					gameArray[25].rerender();
				}
				else {
					gameArray[space + die].wht++;
					if (gameArray[space + die].blk == 1) {
						gameArray[space + die].blk = 0;
						gameArray[26].blk++;
						gameArray[26].rerender();
					}
					gameArray[space + die].rerender();
				}
				gameArray[space].rerender();
			}
		}
		else if (turn == "black") {
			if (space == 26) {
				gameArray[space].blk--;
				gameArray[25 - die].blk++;
				if (gameArray[25 - die].wht == 1) {
					gameArray[25 - die].wht = 0;
					gameArray[26].wht++;
				}
				gameArray[space].rerender();
				gameArray[25 - die].rerender();
			}
			else {
				gameArray[space].blk--;
				if (space - die < 1) {
					gameArray[0].blk++;
					gameArray[0].rerender();
				}
				else {
					gameArray[space - die].blk++;	
					if (gameArray[space - die].wht == 1) {
						gameArray[space - die].wht = 0;
						gameArray[26].wht++;
						gameArray[26].rerender();
					}
					gameArray[space - die].rerender();
				}
				gameArray[space].rerender();
			}
		}
		if (dieNumber == 1) {
			die1 = 0;
			die1Node.innerHTML = "";
		}
		else if (dieNumber == 2) {
			die2 = 0;
			die2Node.innerHTML = "";
		}
		else if (dieNumber == 3) {
			die3 = 0;
			die3Node.innerHTML = "";
		}
		else if (dieNumber == 4) {
			die4 = 0;
			die4Node.innerHTML = "";
		}
		die1Node.style.color = "#dddddd";
		die1Node.style.borderColor = "#771111";
		die1Node.removeEventListener("click", wrapperFunctionEnd1);
		die2Node.style.color = "#dddddd";
		die2Node.style.borderColor = "#771111";
		die2Node.removeEventListener("click", wrapperFunctionEnd2);
		die3Node.style.color = "#dddddd";
		die3Node.style.borderColor = "#771111";
		die3Node.removeEventListener("click", wrapperFunctionEnd3);
		die4Node.style.color = "#dddddd";
		die4Node.style.borderColor = "#771111";
		die4Node.removeEventListener("click", wrapperFunctionEnd4);
		if (space == 26) {
			gameArray[space].id.style.backgroundColor = "#3b2112";
		}
		else {
			gameArray[space].id.style.backgroundColor = "transparent";
		}
		if (gameArray[0].blk == 15) {
			window.alert("Black wins!");
			chooseAgainButton.style.display = "none";
			resetButton.style.display = "block";
		}
		else if (gameArray[25].wht == 15) {
			window.alert("White wins!");
			chooseAgainButton.style.display = "none";
			resetButton.style.display = "block";
		} 
		else{
			checkValidity();			
		}
	},
	chooseAgain = function() {
		beginMove();
		die1Node.style.color = "#dddddd";
		die1Node.style.borderColor = "#771111";
		die1Node.removeEventListener("click", wrapperFunctionEnd1);
		die2Node.style.color = "#dddddd";
		die2Node.style.borderColor = "#771111";
		die2Node.removeEventListener("click", wrapperFunctionEnd2);
		die3Node.style.color = "#dddddd";
		die3Node.style.borderColor = "#771111";
		die3Node.removeEventListener("click", wrapperFunctionEnd3);
		die4Node.style.color = "#dddddd";
		die4Node.style.borderColor = "#771111";
		die4Node.removeEventListener("click", wrapperFunctionEnd4);
	},
	reset = function() {
		resetButton.style.display = "none";
		diceButtonStart.style.display = "block";
		die1 = 0;
		die1Node.innerHTML = "";
		die2 = 0;
		die2Node.innerHTML = "";
		die3 = 0;
		die3Node.style.display = "none";
		die4 = 0;
		die4Node.style.display = "none";
		for (var item in gameArray) {
			var node = gameArray[item];
			node.blk = 0;
			node.wht = 0;
			node.rerender();
		}
		gameArray[1].wht = 2;
		gameArray[1].rerender();
		gameArray[6].blk = 5;
		gameArray[6].rerender();
		gameArray[8].blk = 3;
		gameArray[8].rerender();
		gameArray[12].wht = 5;
		gameArray[12].rerender();
		gameArray[13].blk = 5;
		gameArray[13].rerender();
		gameArray[17].wht = 3;
		gameArray[17].rerender();
		gameArray[19].wht = 5;
		gameArray[19].rerender();
		gameArray[24].blk = 2;
		gameArray[24].rerender();
	},
	showRules = function() {
		rules.style.display = "block";
		rules.style.animation = "2s forwards showRules";
	},
	hideRulesFn = function() {
		rules.style.animation = "2s forwards hideRules";
		setTimeout(function() {rules.style.display = "none";}, 2000);
	};
diceButton.addEventListener("click", rollDice);
diceButtonStart.addEventListener("click", rollDiceStart);
chooseAgainButton.addEventListener("click", chooseAgain);
resetButton.addEventListener("click", reset);
rulesButton.addEventListener("click", showRules);
hideRules.addEventListener("click", hideRulesFn);
window.addEventListener("load", function() {
	for (var node in gameArray) {
		gameArray[node].rerender();
	}
});