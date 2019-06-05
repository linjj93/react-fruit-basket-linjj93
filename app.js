function Fruit(props) {
  return <li>{props.name}</li>;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.fruits = fetch(
    //   "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     // do something with the data
    //     data.map(item => item);
    //   });
    // console.log(this.fruits);
    this.fruits = [
      {
        id: "0",
        name: "apple"
      },
      {
        id: "1",
        name: "banana"
      },
      {
        id: "2",
        name: "orange"
      },
      {
        id: "3",
        name: "watermelon"
      },
      {
        id: "4",
        name: "durian"
      }
    ];

    this.state = {
      input: ""
    };
  }

  handleChange = () => {
    let userInput = document.querySelector(".search-box");
    return this.setState({
      input: userInput.value
    });
  };

  render() {
    const filteredFruitList = this.fruits
      .filter(elem => {
        let fruit = elem["name"];
        return fruit.indexOf(this.state.input) !== -1;
      })
      .map(fruit => {
        return <Fruit key={fruit.id} name={fruit.name} />;
      });

    return (
      <React.Fragment>
        <input className="search-box" onChange={this.handleChange} />
        {filteredFruitList}
      </React.Fragment>
    );
  }
}

const element = <Form />;
const container = document.querySelector("#app");
ReactDOM.render(element, container);
