import { Saxon } from "./Saxon";
import { Viking } from "./Viking";


export class War {
    vikingArmy: Viking[];
    saxonArmy: Saxon[];

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking:Viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon:Saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
        let resultVikingAttack = this.saxonArmy[randomSaxonNumber].receiveDamage(this.vikingArmy[randomVikingNumber].strength);
        
        if (this.saxonArmy[randomSaxonNumber].health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        }
        return resultVikingAttack;
    }

    saxonAttack(){
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
        let resultSaxonAttack = this.vikingArmy[randomVikingNumber].receiveDamage(this.saxonArmy[randomSaxonNumber].strength);
        
        if (this.vikingArmy[randomVikingNumber].health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        }
        return resultSaxonAttack;
    }

    showStatus(){
        if (this.saxonArmy=[]){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy=[]) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
                return "Vikings and Saxons are still in the thick of battle."
            }
        }

}