class Items {
  catogery: string;
  _id: string;
  name: string;
  calories: string;
  protiens: string;
  carbs: string;
  fat: string;

  constructor(itemData: {
    catogery: string;
    _id: string;
    name: string;
    calories: string;
    protiens: string;
    carbs: string;
    fat: string;
  }) {
          this.catogery = itemData.catogery;
          this._id = itemData._id;
          this.name = itemData.name;
          this.calories = itemData.calories;
          this.protiens = itemData.protiens;
          this.carbs = itemData.carbs;
          this.fat = itemData.fat;
  }
}
export default Items;
