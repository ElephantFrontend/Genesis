	// Поэкранная прокрутка
		var scroll = document.getElementsByClassName('scroll_go');
		var block = document.getElementsByClassName('block');

		scroll_blocks = function () {
			for(var i = 0; i<scroll.length; i++){
				var scroll_button = scroll[i];
				scroll_button.onclick = function () {
					var window_height = window.innerHeight;
					scrollBy(0,window_height);
				}
			}
		}
		scroll_blocks();
	
	// Валидация формы 
		var floor = document.getElementsByName("floor");

		function checkeds() {
			for(var i = 0; i<floor.length; i++) {
				if(floor[i].checked){
					floor[i].parentElement.style.background = "#1DA7C1";
					floor[i].parentElement.style.color = "white";
					// floor[i].parentElement.style.backgroundImage = "url('woomen_white.svg')";
				} else {
					floor[i].parentElement.style.background = "";
					floor[i].parentElement.style.color = "";
				}
			}
		}

		submit.onclick = function () {
			var name_v = document.getElementById("name").value;
			var name = document.getElementById("name");
			
			var email_v = document.getElementById("email").value;
			var email = document.getElementById("email");
			
			var pass_v = document.getElementById("pass").value;
			var pass = document.getElementById("pass");
			
			var span = document.getElementById("span");
			
			var regexp = /(\d+)/i;
			var varName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
			var varMail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
			var found = name_v.match(regexp);
			var varMailFound = email_v.match(varMail);
			var varNameFound = name_v.match(varName);

				if (name_v == 0 || found != null || varNameFound == null) {
					name.style.borderColor = "red";
					span.innerHTML = "Имя введено не верно!";
					name.placeholder="Введите свое имя";
				}else{
					name.style.borderColor = "";
					span.innerHTML = "";
				}
				
				if(email_v == 0 || varMailFound == null) {
					email.style.borderColor = "red";
					email.placeholder="Неверный формат email";
				}else{
					email.style.borderColor = "";
				}

				if(pass_v == 0) {
					pass.style.borderColor = "red";
					pass.placeholder="Придумывайте новый пароль";
				}else{
					pass.style.borderColor = "";
				}
		}
	// checked 
	var option_1 = document.getElementsByName('option_1');
	var option_2 = document.getElementsByName('option_2');

	var woomen = document.getElementsByClassName('woomen');
	var buttonHidden = document.getElementsByClassName("scroll_go__hidden");
	var buttonHidden1 = document.getElementsByClassName("scroll_go__hidden1");

	var percentages = document.getElementsByClassName("percentages");
	var percentages1 = document.getElementsByClassName("percentages1");

	var percent_data = {
		'first_radio1' : {
			'percent' : '25%',
			'letter' : 'A',
		},
		'first_radio2' : {
			'percent' : '30%',
			'letter' : 'Б',
		},
		'first_radio3' : {
			'percent' : '35%',
			'letter' : 'В',
		},

		'second_radio1' : {
			'percent' : '47,6%',
			'letter' : 'А',
		},
		'second_radio2' : {
			'percent' : '52,4%',
			'letter' : 'Б',
		},
	};

// function checkeds
		function checkeds1() {
			var first_letter = document.getElementById('first_letter');

			for(var q = 0; q<buttonHidden1.length; q++){
				var buttonHiddenQ = buttonHidden1[q];
			}
			
			for(var w = 0; w<percentages1.length; w++){
				var percentagesT = percentages1[w];
				var percentagesW = percentages1[w].parentElement;
			}

		    for (var i=0;i<option_2.length; i++) {
		    	var radis = option_2[i].id;
		    	var option_2_parent = option_2[i].parentElement;
		    	var radId = document.getElementById(radis);

		    if (option_2[i].checked) {
		        option_2_parent.style.background = "#fc8950";
		        option_2_parent.style.color = "white";
		        buttonHiddenQ.style.display = "block";
		        percentagesW.style.display = "block"; 
			    percentagesT.innerHTML = percent_data[radis]['percent'];
				first_letter.innerHTML = percent_data[radis]['letter'];
		        }else{
		        	option_2_parent.style.background = "";
		            option_2_parent.style.color = "";
		            buttonHiddenQ.style.display = "block";
		        }
	    } // end for
	} // end checkeds

// two function checkeds
	function checkedSecondRadio() {
		for(var q = 0; q<buttonHidden.length; q++){
			var buttonHiddenQ = buttonHidden[q];
		}

		for(var w = 0; w<percentages.length; w++){
			var percentagesT = percentages[w];
			var percentagesW = percentages[w].parentElement;
		}

	    for (var i=0;i<option_1.length; i++) {
	    	var radis = option_1[i].id;
	    	var option_1_parent = option_1[i].parentElement;
			var radId = document.getElementById(radis);
			var secondLetter = document.getElementById('second_letter');

	    if (option_1[i].checked) {
	            option_1_parent.style.background = "#fcc050";
	            option_1_parent.style.color = "white";
	            buttonHiddenQ.style.display = "block";
	            percentagesW.style.display = "block";
				percentagesT.innerHTML = percent_data[radis]['percent'];
				secondLetter.innerHTML = percent_data[radis]['letter'];
	        } else {
	        	option_1_parent.style.background = "";
	            option_1_parent.style.color = "";
	            buttonHiddenQ.style.display = "block";
	        }     
	    } // end for
	} // end checkeds