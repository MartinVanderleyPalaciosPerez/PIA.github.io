const confettifull = function (el){
    this.el - el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = ["#FCE18A","#FF726D","#B48DEF","#F4306D"];
    this.confettiAnimations = ["slow","medium","fast"];

    this._setupElements();
    this._renderConfetti();
};

confettifull.prototype._setupElements = function (){
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;

    if(elPosition !== "relative" || elPosition !==  "absolute"){
        this.el.style.position = "relative";
    }

    containerEl.classList.add("confetti-container");

    this.el.appendChild(containerEl)
    this.containerEl = containerEl;
};

confettifull.prototype._renderConfetti = function (){
    this.confettiInterval = setInterval(()=>{
        const conffetiEl = document.createElement("div");
        const confettiSize = Math.floor(Math.random()*3)+7+ "px";
        const ConfettuBackground = this.confettiColors[
            Math.floor(Math.random()* this.confettiAnimations.length)
        ];

        conffetiEl.classList.add(
            "confeti","confetti--animation" + this.confettiAnimations
        );
        
        conffetiEl.style.left = confetttiLeft;
        conffetiEl.style.whidth = confettiSize;
        conffetiEl
    })
}