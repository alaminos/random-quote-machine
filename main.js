core = {
    quotes: [
        "L'interminable est la spécialité des indécis",
        "La lâcheté rend subtil",
        "Je sens que je suis libre mais je sais que je ne le suis pas",
        "Se méfier des penseurs dont l'esprit ne fonctionne qu'à partir d'une citation",
        "Un homme qui se respect n'a pas de patrie. La patrie c'est de la glu",
        "Un opinion, oui. Une conviction, non. Tel est le point de la fierté intelectuel"
    ],

    randomNum: 0,

    //para evitar que la misma cita sea elegida, debemos mantener el registro y prohibirla en la siguiente generación de random quote

    quotePicker: function() {
        var newRandomNum = Math.floor(Math.random() * (this.quotes.length));
        if ( newRandomNum === this.randomNum ) {
            this.quotePicker();
        } else {
            this.randomNum = newRandomNum;
            view.displayQuote(this.quotes[newRandomNum]);
        }
        
    },
}

controls = {
    changeTweetText: function() {
        var recipient = getElementById()
    }

}

view = {
    displayQuote: function(quote) {
        var recipient = document.getElementById("board");
        recipient.textContent = quote;
    }

    changeTweet: function() {
        var twitter = document.getElementById("tweet").
    }

}