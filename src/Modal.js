
import JSUTIL from '@andresclua/jsutil/src/js_helper';
class Modal {
    constructor(config) {
        this.backdrop = config.backdrop;
        this.backdropActiveClass = config.backdropActiveClass;
        this.modal = config.modal;
        this.modalActiveClass = config.modalActiveClass;
        this.modalID = config.modalIdTarget
        this.time = 400

        this.onshow = config.onShow;
        this.onhide = config.onHide;

        this.JSUTIL = new JSUTIL();
        this.init()
        this.events()
    }
    init() {
        // empty for now
    }
    events() {
        document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((element) => {
            element.addEventListener('click', event => this.show());
        })
        document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((element) => {
            element.addEventListener('click', event => this.hide());
        })
        
    }
    async hide(){
        // Start Modal
        await this.tf_sto(this.time)
        this.JSUTIL.removeClass(document.getElementById(`${this.modalID}`), this.modalActiveClass);
        // End Modal

        // Backdrop
        await this.tf_sto(this.time);
        this.JSUTIL.removeClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);
        await this.tf_sto(this.time);

        if (document.querySelector(`.${this.backdrop}`)) {
            var backdropHTML = document.querySelector(`.${this.backdrop}`);
            backdropHTML.parentNode.removeChild(backdropHTML);
        }
        // End Backdrop

        if(this.onhide){
            this.onhide()
        }
    }
    async show(element) {

        // Backdrop
        var backdropHTML = document.createElement('div');
        backdropHTML.className = this.backdrop;
        document.body.appendChild(backdropHTML);
        await this.tf_sto(this.time);
        this.JSUTIL.toggleClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);

        await this.tf_sto(300);
        this.JSUTIL.toggleClass(document.getElementById(this.modalID), this.modalActiveClass)

        if (document.querySelector(`.${this.backdrop}`)) {
            document.querySelector(`.${this.backdrop}`).addEventListener('click', event => this.hide());
        }

        if(this.onshow){
            this.onshow()
        }
    }

    async tf_sto(time) {
        return new Promise((resolve, reject) => {
            if (isNaN(time))
                reject(new Error('is not a number'))
            else
                setTimeout(resolve, time)
        });
    }
}
export default Modal;