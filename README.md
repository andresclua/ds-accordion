Hello everyone! 
This is my second project within npm, it's a simple collapse/expand component

#### CSS Setup
1 - super easy to customize //
```sh
.b--btn-a{
    background:rgb(246, 181, 170);
    color:white;
    display: inline-block;
    text-decoration: none;
    padding:16px;
    transition: all .6s cubic-bezier(0, 1, 0, 1); 
    }
.b--btn-a--is-active{
    background:red;
}
.b--collapse-a {
    height: 0px;
    overflow: hidden;
    background:grey;
    transition: all .6s cubic-bezier(0, 1, 0, 1); 

}   
.b--collapse-a--is-active{
    transition: all .6s cubic-bezier(0, 1, 0, 1);
}
```
### JS Setup
2 - Import the package
```sh
npm install @andresclua/collapse
```
3 -  the package
```sh
import Collapse from '@andresclua/collapse/src/Collapse';
new Collapse()  
```
4 - Your Html should look like this

```sh
<a href="#" class="b--btn-a" data-ds-element="collapse" data-collapse-id="collapse-x" data-target-class="b--collapse-a--is-active" data-self-class="b--btn-a--is-active">Trigger Element</a>
<div class="b--collapse-a" id="collapse-x">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati incidunt quod labore illum sint odit! Saepe eligendi laboriosam earum a molestias, totam praesentium vero! Provident ad iure facilis veniam.</p>
</div>
```

### For Nuxt
1 - Create a file Collapse.js inside plugins folder & add this.
```sh
import Collapse from '@andresclua/collapse/src/Collapse';
export default ({ app }) => {
    new Collapse()
};
```
2 - Reference in your nuxt.config.js
```sh
plugins: [
    { src: '~/plugins/collapse.js', ssr: false }
  ]
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)