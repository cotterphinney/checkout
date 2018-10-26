(function(angular) {
  'use strict';
angular.module('checkout', ['ui.bootstrap'])
  .controller('CheckoutController', function CheckoutController() {
    // this.qty = 1;
    // this.cost = 2;
    // this.inCurr = 'EUR';
    // this.currencies = ['USD', 'EUR', 'CNY'];
    // this.usdToForeignRates = {
    //   USD: 1,
    //   EUR: 0.74,
    //   CNY: 6.09
    // };

    // this.total = function total(outCurr) {
    //   return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    // };
    // this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    //   return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    // };
    // this.pay = function pay() {
    //   window.alert('Thanks!');
    // };
    this.products = window.torch.testData;
    this.selectedProducts = [];

    this.addToCart = function addToCart(product) {
      if (product.addedToCart) {
        product.quantity++;
      } else {
        this.selectedProducts.push(product);
        product.addedToCart = true;
      }
    };
  });
})(window.angular);