/**
 * Created by ethan on 2014/7/10.
 */
angular.module('sportsStore')
    .constant("productListActiveClass","btn-primary")
.controller("productListCtrl",function($scope, $filter){
       var selectedCategory = null;
        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
        };
        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        };
        $scope.getCategoryClass=function() {
            return selectedCategory == category?productListActiveClass:"";
        };
    });