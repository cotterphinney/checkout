(function(angular) {
  'use strict';
angular.module('checkout', [])
  .controller('CheckoutController', function CheckoutController() {
    this.products = window.torch.testData;
    this.selectedProducts = [];

    this.addToCart = function addToCart(product) {
      if (!product.addedToCart) {
        this.selectedProducts.push(product);
        product.addedToCart = true;
      }
      product.quantity++;
    };

    this.removeFromCart = function removeFromCart(product) {
      this.selectedProducts.splice( this.selectedProducts.indexOf(product), 1 );
      product.addedToCart = false;
    };

    this.maxQuantity = function maxQuantity() {
      var a = [];
      for (var i = 1; i < 100; i++) {
        a.push(i);
      }
      return a;
    };

    this.cartIsEmpty = function cartIsEmpty() {
      return this.selectedProducts.length === 0;
    };

  });
})(window.angular);