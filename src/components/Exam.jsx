import React from 'react';
import Submit from './Submit';
import Switch from '@material-ui/core/Switch';


//cf documentation https://reactjs.org/docs/forms.html: Handling Multiple Inputs
//Pas de subdivision en composants (toggle, checkbox, radio ...) qui aurait impliqué redux.
//J'ai fait juste deux composants et j'imagine que tu aurais peut-être souhaité que j'en fasse davantage.
//Merci pour le cours Julien; très enrichissant.
class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      q0: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5_a1: false,
      q5_a2: false,
      q5_a3: false,
      q6_a1: false,
      q6_a2: false,
      q6_a3: false,
      q7_a1: false,
      q7_a2: false,
      q7_a3: false,
      q8: false,
      q9: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    console.log(this.state)
  }

  render() {
    return (
      <form action="http://188.165.104.163/exam" method="POST" onSubmit={this.handleSubmit}>
         <img class="logo" 
         src="assets/react.png" 
         alt="Logo React" />
        <h1>
          QCM React
          </h1>
          <br/>
         <p>Un peu de musique classique durant le QCM?</p>
         <figure><audio class="audio"
            controls
            src="assets/Tchaikovsky.mp3">
          </audio> </figure>
        <label>
          <div class="line"></div>
          <h3>Votre nom </h3>
          <input
            name="lastname"
            type="text"
            placeholder="nom"
            value={this.state.lastname}
            onChange={this.handleInputChange} /><br />
        </label>


        <label>
          <h3>Votre prénom</h3>
          <input
            name="firstname"
            type="text"
            placeholder="prénom"
            value={this.state.firstname}
            onChange={this.handleInputChange} /> <br />
        </label>


        <label>
          <h3>A quoi sert React?</h3>
        </label>
        <div className="radio">
          <label>
            <input
              name="q0"
              type="radio"
              value="q0_a1"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A administer des bases de données</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q0"
              type="radio"
              value="q0_a2"
              onChange={this.handleInputChange}
            />
            <span class="answer">A créer des interfaces utilisateurs en Javascript</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q0"
              type="radio"
              value="q0_a3"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A envoyer des requêtes réseau avec Javascript</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q0"
              type="radio"
              value="q0_a4"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A rien</span>
          </label>
        </div>



        <label>
          <h3> Sur quel concept repose React?</h3>
        </label>
        <div className="radio">
          <label>
            <input
              name="q1"
              type="radio"
              value="q1_a1"
              onChange={this.handleInputChange}
            />
            <span class="answer"> Les modules</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q1"
              type="radio"
              value="q1_a2"
              onChange={this.handleInputChange}
            />
            <span class="answer">Les services</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q1"
              type="radio"
              value="q1_a3"
              onChange={this.handleInputChange}
            />
            <span class="answer">Les composants</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="q1"
              type="radio"
              value="q1_a4"
              onChange={this.handleInputChange}
            />
            <span class="answer"> Les microservices</span>
          </label>
        </div>



        <label>
          <h3> Qui développe React?</h3>
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q2"
              value="q2_a1"
              onChange={this.handleInputChange}
            />
            <span class="answer">Google</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q2"
              value="q2_a2"
              onChange={this.handleInputChange}
            />
            <span class="answer"> Twitter</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q2"
              value="q2_a3"
              onChange={this.handleInputChange}
            />
            <span class="answer">Apple</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q2"
              value="q2_a4"
              onChange={this.handleInputChange}
            />
            <span class="answer">Facebook</span>
          </label>
        </div>



        <label>
          <h3>A quoi servent les 'props'?</h3>
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q3"
              value="q3_a1"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A passer des propriétés au composant</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q3"
              value="q3_a2"
              onChange={this.handleInputChange}
            />
            <span class="answer">A créer un état pour le composant</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q3"
              value="q3_a3"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A afficher le composant</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q3"
              value="q3_a4"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A casser les pieds</span>
          </label>
        </div>



        <label>
          <h3>A quoi sert 'JSX'?</h3>
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q4"
              value="q4_a1"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A faire des appels à la base de données</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q4"
              value="q4_a2"
              onChange={this.handleInputChange}
            />
            <span class="answer"> A rajouter des types à Javascript</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q4"
              value="q4_a3"
              onChange={this.handleInputChange}
            />
            <span class="answer">A fournir une surcouche syntaxique à Javascript pour appeler les fonctions React</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="q4"
              value="q4_a4"
              onChange={this.handleInputChange}
            />
            <span class="answer">C'est un autre nom pour Javascript</span>
          </label>
        </div>

        <div>
          <label>
            <h3>  Qu'est-ce qu'un 'state' ? (Plusieurs réponses possibles)</h3><br />
            <input
              name="q5_a1" type="checkbox"
              checked={this.state.q5_a1}
              onChange={this.handleInputChange} /><span class="answer">un stockage permanent</span><br />
            <input
              name="q5_a2" type="checkbox"
              checked={this.state.q5_a2}
              onChange={this.handleInputChange} /><span class="answer">un stockage interne du composant</span><br />
            <input
              name="q5_a3" type="checkbox"
              checked={this.state.q5_a3}
              onChange={this.handleInputChange} /><span class="answer">aucun des deux</span><br />
          </label><br />

          <label>
            <h3> Quels sont les avantages de React ?(Plusieurs réponses possibles) </h3><br />
            <input
              name="q6_a1" type="checkbox"
              checked={this.state.q6_a1}
              onChange={this.handleInputChange} /><span class="answer">Il permet de générer des balises HTML dynamiquement sur le navigateur</span><br />
            <input
              name="q6_a2" type="checkbox"
              checked={this.state.q6_a2}
              onChange={this.handleInputChange} /><span class="answer">Il permet d'améliorer les performances en réduisant les échanges réseau</span><br />
            <input
              name="q6_a3" type="checkbox"
              checked={this.state.q6_a3}
              onChange={this.handleInputChange} /><span class="answer">Il permet de faire un site le plus léger possible</span><br />
          </label><br />

          <label>
            <h3> Comment puis-je faire un affichage conditionnel ? (Plusieurs réponses possibles)</h3><br />
            <input
              name="q7_a1" type="checkbox"
              checked={this.state.q7_a1}
              onChange={this.handleInputChange} /><span class="answer">En utilisant une fonction</span><br />
            <input
              name="q7_a2" type="checkbox"
              checked={this.state.q7_a2}
              onChange={this.handleInputChange} /><span class="answer">En passant des paramètres à la fonction 'ReactDOM.render'</span><br />
            <input
              name="q7_a3" type="checkbox"
              checked={this.state.q7_a3}
              onChange={this.handleInputChange} /><span class="answer">En utilisant une expression ternaire</span><br />
          </label><br />


          <label>
            <h3> 'react-dom-router' permet de faire varier l'affichage en fonction de l'URL</h3><br />
            <Switch
            checked={this.state.q8}
        onChange={this.handleInputChange}
        color="primary"
        name="q8"
        inputProps={{ 'aria-label': 'primary checkbox' }}
            /><br />
          </label>

          <label>
            <h3> 'create-react-app' permet de générer un projet React préconfiguré</h3><br />
            <Switch
        checked={this.state.q9}
        onChange={this.handleInputChange}
        color="primary"
        name="q9"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        
            /><br /><br />
          </label>
        </div>
        <Submit />
      </form>

    );
  }
}
export default Exam;