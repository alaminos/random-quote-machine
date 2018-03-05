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
            view.tweetBtn(this.quotes[newRandomNum]);
        }
        
    },
}

controls = {
    

}

view = {
    displayQuote: function(quote) {
        var quoteBox = document.getElementById("quote");
        quoteBox.textContent = quote;
    },



    tweetBtn: function(txt2tweet) {

        var newBtn = document.createElement('a');
        var container = document.getElementById('twtBtn');
        var script = document.createElement('script');

        container.innerHTML = "";

        script.setAttribute('src', "https://platform.twitter.com/widgets.js");
        script.setAttribute('async', true);
        script.setAttribute('charset', 'utf-8');

        container.appendChild(script);

        newBtn.setAttribute('href', 'https://twitter.com/share');
        newBtn.setAttribute('class', 'twitter-share-button');
        newBtn.setAttribute('style', 'margin-top:5px;');
        newBtn.setAttribute('id', 'temporaryBtn');
        newBtn.setAttribute('data-text', txt2tweet);
        newBtn.setAttribute('data-via', 'aadomix');
        newBtn.setAttribute('data-size', 'large');
        
        container.appendChild(newBtn);
        
        twttr.widgets.load();

        /*<script 
        async 
        src="https://platform.twitter.com/widgets.js" 
        charset="utf-8"></script>*/
    }

}