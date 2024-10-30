class Welcome {
	constructor() {
		//header 1
		this.headerOne = document.createElement("h1");
		this.headerOne.innerText = "Hawaiian Blues";
		fretBoard.element.appendChild(this.headerOne);

		//header2
		this.headerTwo = document.createElement("h2");
		this.headerTwo.innerText = "Play the blues solo on the Uke";
		fretBoard.element.appendChild(this.headerTwo);

		//paragraph
		this.paragraph = document.createElement("p");
		this.paragraph.innerText =
			"You will play a pentatonic blues scale in C major. Follow the back track music. Only use the notes in the key you select.";
		fretBoard.element.appendChild(this.paragraph);

		//form
		this.form = document.createElement("form");
		//this.paragraph.innerText = "You will play a pentatonic blues scale in C major. Follow the back track music. Only use the notes in the scale you select.";
		fretBoard.element.appendChild(this.form);
		
		this.selectDiv = document.createElement("div");
		this.selectDiv.classList.add("select");
		
		// <label for="standard-select">Standard Select</label>
		this.labelSelectKey = document.createElement("label");
        this.labelSelectKey.setAttribute("for", "standard-select");
		this.labelSelectKey.innerText = "Select the Key"
		this.form.appendChild(this.labelSelectKey);

		//select key
		this.selectKey = document.createElement("select");
		this.selectKey.classList.add("select-key");
        this.selectKey.setAttribute("id", "standard-select");
        this.selectKey.setAttribute("name", "key");
		this.selectKeyOptions = availableKeys.forEach((element) => {
			const optionElement = document.createElement("option");
			optionElement.innerText = element.description;
			
			optionElement.setAttribute("value", element.key);
			this.selectKey.appendChild(optionElement);
		});

		this.selectDiv.appendChild(this.selectKey);
		this.form.appendChild(this.selectDiv);

		//select mode (learn or game)
		this.selectMode = document.createElement("div");
		this.selectMode.classList.add("select-mode");
		const selectModes = [
			{ mode: "learn", label: "Learn" },
			{ mode: "game", label: "Play the game" },
		];
		this.selectModeOptions = selectModes.forEach((element, index) => {
			const radioWrapper = document.createElement("div");
			const optionElement = document.createElement("input");
			optionElement.setAttribute("type", "radio");
			optionElement.setAttribute("name", "mode");
			optionElement.setAttribute("value", element.mode);
			optionElement.setAttribute("id", element.mode);
			optionElement.setAttribute("index", index);
			if (index === 0) {
				optionElement.setAttribute("checked", "checked");
			}
			const labelElement = document.createElement("label");
			labelElement.innerText = element.label;
			labelElement.setAttribute("for", element.mode);
			radioWrapper.appendChild(optionElement);
			radioWrapper.appendChild(labelElement);
			this.selectMode.appendChild(radioWrapper);
		});

		this.form.appendChild(this.selectMode);
        //console.log(this.form);
        

		//play button
		this.playbutton = document.createElement("button");
		this.playbutton.classList.add("start");
		this.playbutton.setAttribute("type", "submit");
		this.playbutton.innerText = "Let's play!";
		this.form.appendChild(this.playbutton);

		this.form.addEventListener("submit", (event) => {
            event.preventDefault();
			const formData = new FormData(this.form)
            //console.log(formData.entries());
            const formDataObject = [];
            for (const keyValue of formData.entries()) {
                formDataObject.push(keyValue[1])              
            }
            console.log(formDataObject);
            fretBoard.element.innerHTML = "";
			startTheGame(formDataObject[0], formDataObject[1]);
		});
	}
}
