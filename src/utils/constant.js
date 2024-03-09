export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwusZEAaTh67zLBi2vsaeLSk30szlQhJ2Og&usqp=CAU";

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8676658&lng=75.3827335&restaurantId=";

export const checkTextLength = (arr, max) => {
  const string = arr.join(", ");
  return string.length > max ? string.substring(0, max) + "..." : string;
};

export const MENU_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
