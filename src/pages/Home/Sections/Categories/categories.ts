import Lunch from "../../../../assets/images/CategoriesImages/lunchImages/grilled-beef-2000x1200.jpg";
import Breakfast from "../../../../assets/images/CategoriesImages/BreakfastImages/1768620_77926-710x550x.jpg";
import Dinner from "../../../../assets/images/CategoriesImages/DinnerImages/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg";
import Desserts from "../../../../assets/images/CategoriesImages/DessertsImages/SYketSivcIk8LvHObLLBFlFNHBpuaXnwmJxNbycGshjv55OD3HWFWh2pL8EsPwl5DpSHzm95vRzNbdeHauL5EWcJ5w9e=OiYFo0lmcWt9IP4InWp13w.jpg";
import Snacks from "../../../../assets/images/CategoriesImages/Snacks/furshetnie-zakuski-na-stol.jpeg";
import Beverages from "../../../../assets/images/CategoriesImages/Beverages/colour-in-non-alcoholic-beverages.jpg";
import Vegan from "../../../../assets/images/CategoriesImages/Vegan/what-can-vegans-eat-12.jpg";
import Salads from "../../../../assets/images/CategoriesImages/Salads/MCA_826677_Colossal Carrot Cake and Pecanberry Salad_System_App Images_Pecanberry Salad_664x4401.jpg";
import BabyFood from "../../../../assets/images/CategoriesImages/BabyFood/top-view-bear-shape-cereals-with-banana_23-2148572207.avif";
import FestiveFoods from "../../../../assets/images/CategoriesImages/FestiveFoods/unsplash-main_2062786_20211217131430.jpg";

export interface Subcategory {
  id: number;
  name: string;
  image: string;
}

export const categories = [
  {
    id: 1,
    name: "Breakfast",
    image: Breakfast,
    subcategories: [] as Subcategory[],
  },
  {
    id: 2,
    name: "Lunch",
    image: Lunch,
    subcategories: [] as Subcategory[],
  },
  {
    id: 3,
    name: "Dinner",
    image: Dinner,
    subcategories: [] as Subcategory[],
  },
  {
    id: 4,
    name: "Desserts",
    image: Desserts,
    subcategories: [] as Subcategory[],
  },
  {
    id: 5,
    name: "Snacks",
    image: Snacks,
    subcategories: [
      { id: 1, name: "Chips", image: Dinner },
      { id: 2, name: "Nuts", image: Dinner },
      { id: 3, name: "Popcorn", image: Dinner },
    ] as Subcategory[],
  },
  {
    id: 6,
    name: "Beverages",
    image: Beverages,
    subcategories: [
      { id: 1, name: "Hot Drinks (Tea, Coffee)", image: Beverages },
      { id: 2, name: "Alcoholic Cocktails", image: Beverages },
      { id: 3, name: "Milkshakes", image: Beverages },
    ] as Subcategory[],
  },
  {
    id: 7,
    name: "Vegan",
    image: Vegan,
    subcategories: [] as Subcategory[],
  },
  {
    id: 8,
    name: "Salads",
    image: Salads,
    subcategories: [] as Subcategory[],
  },
  {
    id: 9,
    name: "Baby Food",
    image: BabyFood,
    subcategories: [] as Subcategory[],
  },
  {
    id: 10,
    name: "Festive Foods",
    image: FestiveFoods,
    subcategories: [] as Subcategory[],
  },
];
