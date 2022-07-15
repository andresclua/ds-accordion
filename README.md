Hello everyone! 
This is my second project within npm, it's a simple collapse/expand component

#### CSS Setup
1 - super easy to customize //
```sh
.b--accordion-a{
    border:1px solid #3ca8b0
}
.b--accordion-a__hd{
    position:relative;
    width:100%;
    height:100%;
    padding:.5rem;
    background-color:rgba(120,242,197,.4);
    cursor:pointer
}
.b--accordion-a__hd__title{
    font-family:Jost,sans-serif;
    font-weight:300;
    line-height:1.35;
    letter-spacing:.26px;
    font-size:1rem;
    color:#3ca8b0;
    text-decoration:none!important
}
.b--accordion-a__bd{
    max-height:0;
    overflow:hidden;
    -webkit-transition:max-height .6s cubic-bezier(0,1,0,1);
    transition:max-height .6s cubic-bezier(0,1,0,1)
}
.b--accordion-a__bd__content{
    padding:.5rem
}
.b--accordion-a--is-active .b--accordion-a__hd{
    border-bottom:1px solid #3ca8b0
}
.b--accordion-a--is-active .b--accordion-a__hd__artwork--first{
    display:none
}
.b--accordion-a--is-active .b--accordion-a__hd__artwork--second{
    display:block
}
.b--accordion-a--is-active .b--accordion-a__bd{
    max-height:99em;
    -webkit-transition:max-height .9s ease-in-out
    ;transition:max-height .9s ease-in-out
}
```
### JS Setup
2 - Import the package
```sh
npm install @andresclua/accordion
```
3 -  the package
```sh
import Collapse from '@andresclua/accordion/src/Accordion';
new Collapse()  
```
4 - Your Html should look like this

```sh
<div class="f--mb-24">
    <div class="b--accordion-a" id="accordion-1" tf-ds-acc-body="accordion-1"> 
        <div class="b--accordion-a__hd">
            <p class="b--accordion-a__hd__title" tf-ds-acc-target="accordion-1">Accordion 1</p>
        </div>
        <div class="b--accordion-a__bd">
            <div class="b--accordion-a__bd__content b--content-a">
                <p>Accordion content 1</p>
            </div>
        </div>
    </div>
    <div class="b--accordion-a" id="accordion-2" tf-ds-acc-body="accordion-2"> 
        <div class="b--accordion-a__hd">
            <p class="b--accordion-a__hd__title" tf-ds-acc-target="accordion-2">Accordion 2</p>
        </div>
        <div class="b--accordion-a__bd">
            <div class="b--accordion-a__bd__content b--content-a">
                <p>Accordion content 2</p>
            </div>
        </div>
    </div>
    </div>
```

### For Nuxt
1 - Create a file Accordion.js inside plugins folder & add this.
```sh
import Accordion from '@andresclua/accordion/src/Accordion';
export default ({ app }) => {
    new Accordion()
};
```
2 - Reference in your nuxt.config.js
```sh
plugins: [
    { src: '~/plugins/accordion.js', ssr: false }
  ]
```
3 - Use it in your .vue file
```sh
mounted(){
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
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)