Feature: Purchasing items on Saucedemo

  Scenario: As a user, I can puchase an item

Given I am on the login page
Given I login with credentials
Given I am on the inventory page
Given I choose a product and click on add to cart
Given I click on the shopping cart
Given I am on the cart page
Given I click on checkout
Given I am on the checkout page step one
Given I input the requested information
Given I click on continue
Given I am on the checkout page step two
When I click on finish
Then I have completed my order