
import Accordion from './Accordion';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        const accordion = new Accordion({
            accActive : 'accordion-1',
            accActiveClass : 'b--accordion-a--is-active',
            accClose : false,
            accAllOpen : false,
            accTrigger : 'tf-ds-acc-target',
            accBody : 'tf-ds-acc-body',
            onHide : () => {
                console.log("hide modal");
            },
            onShow : () =>{
                console.log("show");
            }
        });
    }
}
export default Page;

new Page()
