core = {
    quotes: [
        "L'interminable est la spécialité des indécis",
        "La lâcheté rend subtil",
        "Je sens que je suis libre mais je sais que je ne le suis pas",
        "Se méfier des penseurs dont l'esprit ne fonctionne qu'à partir d'une citation",
        "Un homme qui se respecte n'a pas de patrie. La patrie c'est de la glu",
        "Une opinion, oui. Une conviction, non. Tel est le point de la fierté intelectuelle",
        "Tout désespoir est un ultimatum à Dieu.",
        "Apprenez à aimer les attitudes injustifiées, les gestes inexplicables, les actions sans mobile !",
        "Une larme a toujours des sources plus profondes qu'un sourire.",
        "L'acte absurde est l'expression la plus haute de la liberté.",
        "L'indifférence est un crime envers la vie et envers la souffrance.",
        "Que la folie soit notre seule sagesse ; que toute notre vie soit un élan qui nous brûle d'une fièvre.",
        "Qui parle au nom des autres est toujours un imposteur.",
        "Plus les hommes s'éloignent de Dieu, plus ils avancent dans la connaissance des religions.",
        "On n’habite pas un pays, on habite une langue.",
        "Quel dommage que, pour aller à Dieu, il faille passer par la foi !",
        "Le scepticisme est l'élégance de l'anxiété.",
        "Ce n’est pas la peine de se tuer puisqu’on se tue toujours trop tard.",
        "Sur le plan spirituel, toute douleur est une chance ; sur le plan spirituel seulement.",
        "Je donnerais tous les paysages du monde pour celui de mon enfance.",
        "On meurt depuis toujours et cependant la mort n'a rien perdu de sa fraîcheur."
    ],

    randomNum: 0,

    quotePicker: function() {
        var newRandomNum = Math.floor(Math.random() * (this.quotes.length));
        console.log(newRandomNum);
        if ( newRandomNum === this.randomNum ) {
            this.quotePicker();
        } else {
            this.randomNum = newRandomNum;
            view.displayQuote(this.quotes[newRandomNum]);
            view.tweetBtn(this.quotes[newRandomNum]);
        }
    },
}

//----------------------------------------------------------------
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
