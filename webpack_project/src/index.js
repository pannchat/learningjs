//src > index.js
import 'normalize.css';
import styles from './index.css';
function component(){
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack!';

    console.log(styles);
    element.classList = styles.hellowebpack

    return element;
}

document.body.appendChild(component());