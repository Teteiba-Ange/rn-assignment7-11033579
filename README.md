Components
HomeScreen
Displays a list of available products that users can view and add to their cart.

CartScreen
Displays selected items that are added to the cart. Users can remove items from the cart.

Buttons
Add to Cart Button: Displayed for each product on the HomeScreen to add the product to the cart.
Remove from Cart Button: Displayed for each selected item on the CartScreen to remove the item from the cart.
Storage
Utilizes Local Storage to store selected items locally on the device. Choose one of the following methods:

AsyncStorage
SecureStore
FileSystem
Functionality
View Products: Users can view a list of available products on the HomeScreen.
Add to Cart: Users can add products to their cart from the HomeScreen using the "Add to Cart" button.
Remove from Cart: Users can remove products from their cart on the CartScreen using the "Remove from Cart" button.
View Cart: Users can view the items currently in their cart on the CartScreen.
Features
HomeScreen: Displays a list of available products fetched from an external API.
ProductDetailScreen: Shows detailed information about a selected product.
CartScreen: Displays selected items that are added to the cart.
Drawer Navigation: Provides navigation through a swipe gesture or button press.
Add to Cart: Allows users to add products to their shopping cart.
Remove from Cart: Enables users to remove selected items from their cart.
Async Data Fetching: Utilizes Axios for fetching data asynchronously from an external API.
Local Storage: Uses AsyncStorage to store selected items locally on the device.
![Screenshot of My App](../assets\Screenshot1.jpg)

