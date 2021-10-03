import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "cart",
  initialState: {
    restaurants: [
      {
        id: 1,
        title: "Sushi Baku",
        description: "Japanese",
        items: [
          {
            id: 1,
            title: "California roll",
            price: 10,
            quantity: 5,
            category: "Main",
          },
          {
            id: 2,
            title: "Teriyaki",
            price: 12,
            quantity: 5,
            category: "Side dishe",
          },
          {
            id: 3,
            title: "Tiramisu",
            price: 5,
            quantity: 4,
            category: "Desert",
          },
        ],
      },
      {
        id: 2,
        title: "Pizza Inn",
        description: "Italian",
        items: [
          {
            id: 1,
            title: "Margarita",
            price: 9,
            quantity: 6,
            category: "Pizza",
          },
          {
            id: 2,
            title: "Risotto",
            price: 12,
            quantity: 2,
            category: "Main",
          },
        ],
      },
      {
        id: 3,
        title: "Great Wall",
        description: "Chinese",
        items: [
          {
            id: 1,
            title: "Vegetable noodles",
            price: 7,
            quantity: 4,
            category: "Noodles",
          },
          {
            id: 2,
            title: "Hot and sour soup",
            price: 5,
            quantity: 3,
            category: "Soup",
          },
        ],
      },
    ],
  },
  reducers: {
    removeItemFromRestaurant(state, action) {
      state.changed = true;

      const { restaurant, item } = action.payload;
      const existingItem = state.restaurants.find(
        (rest) => rest.id === restaurant.id
      );
      existingItem.items.map((menuItem) => {
        if (menuItem.quantity > 1) {
          menuItem.quantity--;
        } else {
          existingItem.items = existingItem.items.filter(
            (stockItem) => stockItem.id !== item.id
          );
        }
      });
    },
  },
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice;
