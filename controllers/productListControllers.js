/**
 * Created by ethan on 2014/7/10.
 */
angular.module('sportsStore')
    .constant("productListActiveClass","btn-primary")
    .constant("productListPageCount",3)
.controller("productListCtrl",function($scope, $filter, productListActiveClass,productListPageCount, cart){
       var selectedCategory = null;

        $scope.selectedPage=1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
            $scope.selectedPage =1;
        };
        $scope.selectPage=function(newPage) {
            $scope.selectedPage = newPage;
        };
        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        };
        $scope.getCategoryClass=function(page) {
            return $scope.selectedPage == page?productListActiveClass:"";
        };
        $scope.addProductToCart = function(product) {
            cart.addProduct(product.id, product.name, product.price);
        };
    });

//问题1： $scope里的变量和普通变量有什么区别
//2. 函数里面的参数是如何对应到调用他们的html里面的函数的参数的？