import Component, { hbs } from '@glimmerx/component';

import logo from './logo.svg';
import styles from './App.css';

export default class App extends Component {

  constructor() {
    super(...arguments);
    this.styles = styles;
    this.logo = logo;
  }

  static template = hbs`
    <div id="intro" class={{this.styles.intro}}>
      <img src={{this.logo}}/>
      <h1>Hello, glimmerx!</h1>
      <h3>
        you can get started by editing <code>src/App.js</code>,
        and run tests by visiting <a href="./tests">/tests</a>
      </h3>
    </div>
  `;
}
