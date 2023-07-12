class Password {
    constructor(length) {
        this.length = length;
        this.smAlpha = "abcdefghijklmnopqrtuvwxyz";
        this.capAlpha = this.smAlpha.toUpperCase();
        this.numbers = "1234567890";
        this.symbols = "!@#$%^&*()_+=-?></.,\":;'\][`~";
    }

    generateEasyPassword() {
        let password = "";
        let i = 0;
        while (i < this.length) {
            password += this.capAlpha[Math.floor(Math.random() * this.capAlpha.length)]
            password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
            i += 2;
        }
        let result = password.substr(0, this.length);
        return result;
    }

    generateDifficultPassword() {
        let password = "";
        let i = 0;
        while (i < this.length) {
            password += this.capAlpha[Math.floor(Math.random() * this.capAlpha.length)]
            password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
            password += this.symbols[Math.floor(Math.random() * this.symbols.length)]
            i += 3;
        }
        let result = password.substr(0, this.length);
        return result;
    }

    generateStrongPassword() {
        let password = ""
        let i = 0;
        while (i < this.length) {
            password += this.capAlpha[Math.floor(Math.random() * this.capAlpha.length)]
            password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
            password += this.smAlpha[Math.floor(Math.random() * this.smAlpha.length)]
            password += this.symbols[Math.floor(Math.random() * this.symbols.length)]
            i += 4
        }
        let result = password.substr(0, this.length)
        return result;
    }

};



let output = document.querySelector('#outputPass');

document.querySelector('form').addEventListener("submit", (event) => {
  event.preventDefault();
  let act = document.querySelector('#dropdownMenuButton1').value
  let length = document.querySelector('#input').value;

  let obj = new Password(length);
    if (act == "Week") {
        output.value = obj.generateEasyPassword();
    }
    else if (act == "Difficult") {
        output.value = obj.generateDifficultPassword();
    }
    else if (act == "Strong")
    {
        output.value = obj.generateStrongPassword();
    }
    
});

output.addEventListener("click", (e) => { 
    let copy = e.target.value;
    if (copy.length > 0) {   
        e.target.select()
        alert("Text Copied")
        navigator.clipboard.writeText(copy)

        document.querySelector('#input').value = "";
        output.value = "";
    }
})