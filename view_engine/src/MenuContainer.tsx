import * as React from 'react';
import { OrderButton } from "./components/PresentationalOrderButton";
import { SlidingNavBar } from "./components/SlidingNavBarContainer";
import { CategoryContainer } from './components/CategoryContainer';
import { ItemContainer }  from './components/ItemsContainer'



export class Menu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div id="menu">
            <SlidingNavBar />
            <CategoryContainer ids={['all','special','daily','feast','fitness','business']}/>
            <ItemContainer imgs={[
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  },
                { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price:'15.50',recipe:'100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g'  }
            ]}/>
        </div>)
    }
}
