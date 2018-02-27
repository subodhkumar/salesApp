var app = angular.module('mockApp',['ui.router']);

const salesState = {
    name: 'salesDb',
    url:'/salesDb',
    templateUrl:'/views/templates/salesDb.html'
};

const estState = {
    name: 'estDb',
    url:'/estDb',
    templateUrl:'/views/templates/salesDb.html'
};

const addSales = {
    name: 'addSales',
    url:'/addSales',
    template:'Welcome to SalesDb'
};

const viewEst = {
    name: 'viewEst',
    url:'/viewEst',
    template:'Welcome to SalesDb'
};

const viewQuote = {
    name: 'viewQuote',
    url:'/viewQuote',
    template:'Welcome to SalesDb'
};

const viewSales = {
    name: 'viewSales',
    url:'/viewSales',
    template:'Welcome to SalesDb'
};

app.config(function($stateProvider){
    $stateProvider.state(salesState);
    $stateProvider.state(estState);
    $stateProvider.state(addSales);
    $stateProvider.state(viewEst);
    $stateProvider.state(viewQuote);
})
app.controller('SalesDashboardController',function($scope){

});