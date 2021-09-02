import Items from "./components/Items.js"
class App{
    constructor(){
        const $app = document.getElementById('app');
        new Items($app);
        console.log("test")
    }
}
new App();