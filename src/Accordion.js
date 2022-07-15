import JSUTIL from '@andresclua/jsutil/src/js_helper';
class Accordion {
    constructor(config){
        this.accActive = config.accActive;
        this.accActiveClass = config.accActiveClass;
        this.accTrigger = config.accTrigger
        this.accBody = config.accBody
        this.accClose = config.accClose
        this.accAllOpen = config.accAllOpen

        this.JSUTIL = new JSUTIL();
        this.init()
        this.events()
    }
    init() {
        this.show()
    }
    events(){
        document.querySelectorAll(`[${this.accTrigger}]`).forEach((element)=>{
            element.addEventListener('click', (item)=>{
                item.preventDefault();
                // Hides all active classes
                this.toggle(element);
            })
        })
    }
    show(){
        console.log(this.accActive);
        this.JSUTIL.addClass(document.getElementById(this.accActive),this.accActiveClass);
    }
    toggle(element){
        // Hides all active classes
        // apply class to trigger 
        var targetID = element.getAttribute(`${this.accTrigger}`);
        var bodyelement = document.getElementById(targetID);
        if(this.accClose === true){
            if(bodyelement.classList.contains(this.accActiveClass)){
                this.JSUTIL.toggleClass(bodyelement,this.accActiveClass);
                if(!this.accAllOpen)
                    this.hideAllTabsExceptActual(targetID);
            }else{
                if(!this.accAllOpen)
                    this.hide();
                this.JSUTIL.toggleClass(bodyelement,this.accActiveClass);
            }

        }else{
            this.hide();
            //apply class to element   
            this.JSUTIL.toggleClass(bodyelement,this.accActiveClass);
        }
    }

    hide(){
        //removes class element
        document.querySelectorAll(`[${this.accBody}]`).forEach((element)=>{
            this.JSUTIL.removeClass(element,this.accActiveClass)
        });
    }

    hideAllTabsExceptActual(targetID){
        //removes class element except actual
        console.log('aa',this.accBody);
        document.querySelectorAll(`[${this.accBody}]`).forEach((element)=>{
            if(element.getAttribute(`${this.accBody}`) != targetID){
                this.JSUTIL.removeClass(element,this.accActiveClass)
            }
        });
    }
}

export default Accordion;   