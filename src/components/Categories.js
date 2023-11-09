import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "T-shirts",
          name: "Футболки",
        },
        {
          key: "Hoodies",
          name: "Толстовки",
        },
        {
          key: "Shoes",
          name: "Обувь",
        },
        {
          key: "Trousers",
          name: "Брюки",
        },
        {
          key: "Hats",
          name: "Головные уборы",
        },
        {
          key: "Backpacks",
          name: "Рюкзаки",
        },
        {
          key: "Shorts",
          name: "Шорты",
        },
        {
          key: "Jackets",
          name: "Куртки",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Categories;
