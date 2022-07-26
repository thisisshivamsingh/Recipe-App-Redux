import axios from "axios";

const YOUR_APP_KEY = "24b924cc83d234f3a3dbc69f2291a0c9";
const YOUR_APP_ID = "06a17beb";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  await axios.get(url);
};
