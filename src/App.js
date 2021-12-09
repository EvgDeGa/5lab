import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyFunction = this.keyFunction.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.click = this.click.bind(this);

    this.state = {
      id: "rect1",
    };
    this.array = {
      rect1: [0, "rect2", "rect4", 0],
      rect2: [0, "rect3", "rect5", 0],
      rect3: [0, 0, "rect7", 0],
      rect4: ["rect1", 0, 0, "rect11"],
      rect5: ["rect2", "rect6", "rect8", 0],
      rect6: [0, 0, "rect10", 0],
      rect7: [0, 0, 0, "rect6"],
      rect8: [0, 0, "rect12", 0],
      rect9: ["rect5", 0, "rect13", 0],
      rect10: ["rect6", 0, "rect13", 0],
      rect11: ["rect4", 0, 0, 0],
      rect12: [0, 0, 0, "rect11"],
      rect13: [0, 0, 0, "rect9"],
    };

    // this.node.focus();
  }

  handleMouseMove(ev) {
    if (ev.target.dataset.id != undefined) {
      this.state = { id: ev.target.dataset.id };
      document.getElementById(this.state.id).focus();
    }
  }
  click(ev) {
    if (ev.target.dataset.id != undefined) {
      console.log(ev.target.dataset.id);
      // this.state = { id: ev.target.dataset.id };
      // document.getElementById(this.state.id).focus();
    }
  }

  keyFunction(event) {
    var buf = this.state.id;
    // console.log("dd", this.state.id);
    switch (event.keyCode) {
      case 38:
        // console.log("up");
        if (this.array[this.state.id][0] != 0) {
          buf = this.array[this.state.id][0];
        }
        break;
      case 40:
        // console.log("down");
        if (this.array[this.state.id][2] != 0) {
          buf = this.array[this.state.id][2];
        }
        break;
      case 37:
        // console.log("left");
        if (this.array[this.state.id][3] != 0) {
          buf = this.array[this.state.id][3];
        }
        break;
      case 39:
        // console.log("right");
        if (this.array[this.state.id][1] != 0) {
          buf = this.array[this.state.id][1];
        }
        break;
    }
    this.state = { id: buf };
    document.getElementById(this.state.id).focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyFunction, false);
  }
  render() {
    return (
      <body
        className='App'
        onMouseMove={(ev) => this.handleMouseMove(ev)}
        onClick={(ev) => this.click(ev)}>
        <div className='container'>
          <div className='firstLine'>
            <div className='rect' data-id='rect1' id='rect1' tabindex='0' />
            <div className='rect' data-id='rect2' id='rect2' tabindex='0' />
            <div className='rect' data-id='rect3' id='rect3' tabindex='0' />
          </div>
          <div className='secondLine'>
            <div className='rect' id='rect4' data-id='rect4' tabindex='0' />
            <div className='secondLineCont'>
              <div className='secondLineCont1'>
                <div className='rect' id='rect5' data-id='rect5' tabindex='0' />
                <div className='secondLineCont11'>
                  <div
                    className='rect'
                    id='rect6'
                    data-id='rect6'
                    tabindex='0'
                  />
                  <div
                    className='rect'
                    id='rect7'
                    data-id='rect7'
                    tabindex='0'
                  />
                </div>
              </div>
              <div className='secondLineCont2'>
                <div className='rect' id='rect8' data-id='rect8' tabindex='0' />
                <div className='rect' id='rect9' data-id='rect9' tabindex='0' />
                <div
                  className='rect'
                  id='rect10'
                  data-id='rect10'
                  tabindex='0'
                />
              </div>
            </div>
          </div>
          <div className='thirdLine'>
            <div className='thirdLineCont'>
              <div
                className='rect11 rect'
                id='rect11'
                data-id='rect11'
                tabindex='0'
              />
              <div
                className='rect12 rect'
                id='rect12'
                data-id='rect12'
                tabindex='0'
              />
            </div>
            <div
              className='rect13 rect'
              id='rect13'
              data-id='rect13'
              tabindex='0'
            />
          </div>
        </div>
      </body>
    );
  }
}

export default App;
