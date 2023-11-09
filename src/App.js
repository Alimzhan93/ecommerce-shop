import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Футболка Nike Dri-FIT',
          img: 'nike-dri-fit-tshirt.jpeg',
          desc: 'Спортивная футболка Nike с технологией Dri-FIT для отвода влаги и комфорта во время тренировок.',
          category: 'T-shirts',
          price: '29.99',
        },
        {
          id: 2,
          title: 'Футболка Adidas Climalite',
          img: 'adidas-climalite-tshirt.jpeg',
          desc: 'Спортивная футболка Adidas с технологией Climalite для отвода влаги и проветривания.',
          category: 'T-shirts',
          price: '27.99',
        },
        {
          id: 3,
          title: 'Футболка Under Armour HeatGear',
          img: 'under-armour-heatgear-tshirt.jpeg',
          desc: 'Футболка Under Armour с технологией HeatGear для комфорта в жаркую погоду.',
          category: 'T-shirts',
          price: '32.99',
        },
        {
          id: 4,
          title: 'Толстовка Nike Sportswear',
          img: 'nike-sportswear-hoodie.jpeg',
          desc: 'Спортивная толстовка Nike Sportswear с капюшоном и карманами.',
          category: 'Hoodies',
          price: '44.99',
        },
        {
          id: 5,
          title: 'Толстовка Adidas Originals',
          img: 'adidas-originals-hoodie.jpeg',
          desc: 'Классическая толстовка Adidas Originals с логотипом и карманами.',
          category: 'Hoodies',
          price: '39.99',
        },
        {
          id: 6,
          title: 'Толстовка Puma Essentials',
          img: 'puma-essentials-hoodie.jpeg',
          desc: 'Спортивная толстовка Puma Essentials с удобным капюшоном.',
          category: 'Hoodies',
          price: '37.99',
        },
        {
          id: 7,
          title: 'Беговые кроссовки Nike Air Zoom',
          img: 'nike-air-zoom-running-shoes.jpeg',
          desc: 'Беговые кроссовки Nike Air Zoom с амортизацией и поддержкой стопы.',
          category: 'Shoes',
          price: '89.99',
        },
        {
          id: 8,
          title: 'Кроссовки Adidas Ultraboost',
          img: 'adidas-ultraboost-running-shoes.jpeg',
          desc: 'Беговые кроссовки Adidas Ultraboost с мягкой подошвой и адаптивной посадкой.',
          category: 'Shoes',
          price: '99.99',
        },
        {
          id: 9,
          title: 'Кроссовки Nike Air Force 1',
          img: 'nike-air-force-1-shoes.jpeg',
          desc: 'Классические кроссовки Nike Air Force 1 с иконичным дизайном и отличной амортизацией.',
          category: 'Shoes',
          price: '79.99',
        },
        {
          id: 10,
          title: 'Спортивные брюки Adidas',
          img: 'adidas-sport-pants.jpeg',
          desc: 'Спортивные брюки Adidas с манжетами и боковыми карманами.',
          category: 'Trousers',
          price: '49.99',
        },
        {
          id: 11,
          title: 'Бейсбольная кепка New Era',
          img: 'new-era-baseball-cap.jpeg',
          desc: 'Классическая бейсбольная кепка New Era с регулируемой застежкой.',
          category: 'Hats',
          price: '19.99',
        },
        {
          id: 12,
          title: 'Спортивный рюкзак Nike',
          img: 'nike-sport-backpack.jpeg',
          desc: 'Прочный спортивный рюкзак Nike с множеством карманов и удобными лямками.',
          category: 'Backpacks',
          price: '54.99',
        },
        {
          id: 13,
          title: 'Спортивные шорты Puma',
          img: 'puma-sport-shorts.jpeg',
          desc: 'Спортивные шорты Puma с логотипом Puma и регулируемым поясом.',
          category: 'Shorts',
          price: '29.99',
        },
        {
          id: 14,
          title: 'Шорты для йоги Lululemon',
          img: 'lululemon-yoga-shorts.jpeg',
          desc: 'Удобные и эластичные шорты для йоги от Lululemon с высокой посадкой.',
          category: 'Shorts',
          price: '39.99',
        },
        {
          id: 15,
          title: 'Тренировочная куртка Puma',
          img: 'puma-training-jacket.jpeg',
          desc: 'Тренировочная куртка Puma с водоотталкивающей отделкой и молнией на молнии.',
          category: 'Jackets',
          price: '49.99',
        },
        {
          id: 16,
          title: 'Беговые кроссовки Nike Air Zoom 2',
          img: 'nike-air-zoom-running-shoes-2.jpeg',
          desc: 'Беговые кроссовки Nike Air Zoom с амортизацией и поддержкой стопы.',
          category: 'Shoes',
          price: '89.99',
        },
        {
          id: 17,
          title: 'Кроссовки Adidas Ultraboost 2',
          img: 'adidas-ultraboost-running-shoes-2.jpeg',
          desc: 'Беговые кроссовки Adidas Ultraboost с мягкой подошвой и адаптивной посадкой.',
          category: 'Shoes',
          price: '99.99',
        },
        {
          id: 18,
          title: 'Беговые кроссовки Asics Gel-Kayano 2',
          img: 'asics-gel-kayano-running-shoes-2.jpeg',
          desc: 'Беговые кроссовки Asics Gel-Kayano с устойчивой посадкой и амортизацией.',
          category: 'Shoes',
          price: '94.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
