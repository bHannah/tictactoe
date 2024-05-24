import Elem  from "./elem.js";

export default class Jatekter{
    #aktElem="X";
    #lista=[" "," "," "," "," "," "," "," "," "];
    constructor(){
        this.#megjelenit();

        $(window).on("lepes",(event)=>{
            console.log(event.detail);
            let id = event.detail;
            this.#beallit(id);
        })
    }

    #megjelenit(){
        let szuloElem = $(".jatekter");
        szuloElem.empty();
        this.#lista.forEach((ertek, index)=>{
            new Elem(ertek,szuloElem, index);
        });
    }

    #beallit(id){
        this.#lista[id]=this.#aktElem;
        if (this.#aktElem === "X") {
            this.#aktElem = "O";
        }
        else{
            this.#aktElem = "X";
        }
        this.#megjelenit();
    }
}