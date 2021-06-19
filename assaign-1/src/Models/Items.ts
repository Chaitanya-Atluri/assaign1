class Items {
  catogery: string;
  id: string;
  name: string;
  calories: string;
  protiens: string;
  carbs: string;
  fat: string;

  constructor(itemData: {
    catogery: string;
    id: string;
    name: string;
    calories: string;
    protiens: string;
    carbs: string;
    fat: string;
  }) {
          this.catogery = itemData.catogery;
          this.id = itemData.id;
          this.name = itemData.name;
          this.calories = itemData.calories;
          this.protiens = itemData.protiens;
          this.carbs = itemData.carbs;
          this.fat = itemData.fat;
  }
}
export default Items;
