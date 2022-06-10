
function CriaCalculator() {

    this.display = document.querySelector('#display');

    let canWriteConsole;

    //Inicializador
    this.init = function() {
        canWriteConsole = true;
        alert("Calculator Started");
        this.buttonClick();
        this.pressionaEnter();
    };

    this.pressionaEnter = function() {
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13) {
                this.finished();
            }
        });
    };

    //Pega o evento dos butões e joga para o #display
    this.buttonClick = function() {
        document.addEventListener('click', (e) => {
            const el = e.target;


            if(el.classList.contains('number')) {    
                this.buttonNumberForDisplay(el.innerText);
            }
            if(el.classList.contains("operator")) {
                this.buttonOperatorForDisplay(el.innerText);
            }
            if(el.classList.contains("reset") && this.display.value) {
                this.buttonReset();

            } else if(el.classList.contains("reset") && !this.display.value) {
                printConsole("CASO NÃO TENHA PERCEBIDO VOCÊ NÃO DIGITOU NADA.");
                printConsole("SEU ANIMAL!");
                printConsole("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
            }
            if(el.classList.contains("equal")) {
                finished();
            }
        });
    };

    let printConsole = function(content) {
       if(canWriteConsole) {
           console.log(content);
        }
    };

    let finished = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            printConsole(`QUE CONTA FÁCIL TU É UM ANIMAL MESMO\n a resposta é ${conta} EASY D++++++`);
            printConsole("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");

            if(!conta) {
                alert("Conta indispónível");
                this.display.value = null;
                printConsole("BURRO!");
                printConsole("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert("Deu merda aqui!");
            return;
        }


    };

    this.buttonNumberForDisplay = function(valor) {
        this.display.value += valor;
        printConsole("Se você está vendo isso significa que o nuúmero foi adicionado no display :D");
        printConsole("PARE DE OLHAR O CONSOLE");

    };

    this.buttonOperatorForDisplay = function(valor) {
        this.display.value += valor;
        printConsole("Se você está vendo isso significa que o operador foi adicionado no display:D");
        printConsole("JÁ DISSE PARA PARAR DE OLHAR O CONSOLE");
        printConsole("SEU METIDO");
        printConsole("-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+");
    };

    this.buttonReset = function() {
        this.display.value = null;
        canWriteConsole = false;

        TextoFoda("eu sou inevitável" ,() => TextoFoda("e eu", () => TextoFoda("sou", () => TextoFoda("o homem de ferro" ,function() {
            setTimeout(function() {
                console.clear()
                canWriteConsole = true;
            }, 1000);
        }))));

        function TextoFoda(content, callback) {
            setTimeout(function() {
                console.log(content);
                callback();
            }, 1000);
        }
    };

};

const calculadora = new CriaCalculator();
calculadora.init();

