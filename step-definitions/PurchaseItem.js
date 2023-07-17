//Script for purchasing 1 item (saucelabs backpack) on www.saucedemo.com;
//Below are steps to be taken to log in, place item in cart and reach the order confirmation page. 

import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../support/pages/LoginPage.js';
import InventoryPage from '../support/pages/InventoryPage.js';
import ShoppingCart from '../support/pages/ShoppingCart.js';
import CheckoutStepOne from '../support/pages/CheckoutStepOne.js';
import CheckoutStepTwo from '../support/pages/CheckoutStepTwo.js';
import CheckoutCompleteConfirmation from '../support/pages/CheckoutCompleteConfirmation.js';
import { userCredentials } from '../userData.js';
import { requestedInformation } from '../userData.js';

Given(/I am on the login page$/, async () => {
    await browser.url("/")});

Given(/^I login with credentials$/, async () => {
    await LoginPage.login(userCredentials.username,userCredentials.password);
});

Given(/^I am on the inventory page$/, async () => {
    await InventoryPage.SauceLabsBackpackExists()});

Given(/^I choose a product and click on add to cart$/, async () => {
    await InventoryPage.SauceLabsBackpackAddToCart()});

Given(/^I click on the shopping cart$/, async () => {
    await InventoryPage.GoToCart()});

Given(/^I am on the cart page$/, async () => { 
    await ShoppingCart.CartPageIdentifier()});

Given(/^I click on checkout$/, async () => {
    await ShoppingCart.CheckoutButtonClick()});

Given(/^I am on the checkout page step one$/, async () => {
    await CheckoutStepOne.CheckoutPageOneIdentifier()});

Given(/^I input the requested information$/, async () => {
    await CheckoutStepOne.InputRequestedInformation(requestedInformation.name,requestedInformation.surname,requestedInformation.zipcode)});

Given(/^I click on continue$/, async () => {
    await CheckoutStepOne.ClickOnContinueButton()});

Given(/^I am on the checkout page step two$/, async () => { 
    await CheckoutStepTwo.CheckoutPageTwoIdentifier()});

When(/^I click on finish$/, async () => {
    await CheckoutStepTwo.ClickOnFinish()});

Then(/^I have completed my order$/, async () => {
    await CheckoutCompleteConfirmation.OrderCompleted()});