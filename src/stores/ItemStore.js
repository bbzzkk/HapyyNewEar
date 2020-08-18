import { observable, computed, action } from 'mobx';

import ItemData from "../data/ItemData";

export default class ItemStore {
  constructor(root) {
    this.root = root;
  }

  @observable 
  itemData = ItemData;

  @observable
  selectedCategory = {};
  
  @observable
  ItemDetail = {};

  @observable
  itemDetail = ItemData[0].items[0];

  @action
  clickCategory(categoryId) {
    this.SelectCategory = ItemData; //초기화
    this.SelectCategory = this.SelectCategory.find(
      (Json) => Json.id === categoryId
    );
  }
  
  @action
  clickItem(itemId, categoryId) {
    const categoryItems = (this.ItemDetail = this.ItemDetail.find(
      (Json) => Json.id === categoryId
    )); // 걸러준 카테고리의 items배열을 가져온다. 
    const items = categoryItems.items;
    this.ItemDetailObject = items.find((item) => item.id === itemId); // items 배열의 id를 이용해서 해당 아이템을 가져온다.
  }
}