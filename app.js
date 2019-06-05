function Fruit(props) {
  return (
    <li>
      {props.type} {props.emoji}
    </li>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    // this.fruits = [
    //   {
    //     id: "0",
    //     name: "apple"
    //   },
    //   {
    //     id: "1",
    //     name: "banana"
    //   },
    //   {
    //     id: "2",
    //     name: "orange"
    //   },
    //   {
    //     id: "3",
    //     name: "watermelon"
    //   },
    //   {
    //     id: "4",
    //     name: "durian"
    //   }
    // ];

    this.state = {
      input: "",
      fruits: []
    };
  }

  componentDidMount() {
    console.log("mounted");
    fetch(
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
    )
      .then(res => res.json())
      .then(data => {
        // do something with the data
        data.map((item, index) => {
          item["id"] = index;
        });

        this.setState({
          fruits: data
        });
      });
  }

  handleChange = () => {
    let userInput = document.querySelector(".search-box");
    return this.setState({
      input: userInput.value
    });
  };

  render() {
    const filteredFruitList = this.state.fruits
      .filter(elem => {
        let fruit = elem["type"];
        return fruit.indexOf(this.state.input) !== -1;
      })
      .map(fruit => {
        return <Fruit key={fruit.id} type={fruit.type} emoji={fruit.emoji} />;
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
