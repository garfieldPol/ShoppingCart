class App extends React.Component {
  state = {
    magazineState: 7,
    ordersShop: 0
  };

  handleRemove = () => {
    this.setState({
      ordersShop: this.state.ordersShop - 1
    });
  };

  handleAdd = () => {
    this.setState({
      ordersShop: this.state.ordersShop + 1
    });
  };

  handleTake = () => {
    this.setState({
      magazineState: this.state.magazineState - this.state.ordersShop,
      ordersShop: 0
    });
  };
  render() {
    const { ordersShop, magazineState } = this.state;
    const style = this.state.ordersShop === 0 ? { opacity: 0.3 } : {};
    return (
      <>
        <button
          disabled={ordersShop ? false : true}
          onClick={this.handleRemove}
        >
          -
        </button>
        <span style={style}>{ordersShop}</span>
        <button
          disabled={ordersShop === magazineState ? true : false}
          onClick={this.handleAdd}
        >
          +
        </button>
        {this.state.ordersShop > 0 && (
          <button onClick={this.handleTake}>Kup</button>
        )}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
