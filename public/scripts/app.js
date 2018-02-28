var app = angular.module('mockApp',['ui.router']);

const home = {
    name:'app',
    url:'/app',
    abstract:true
}
const salesDb = {
    name: 'app.salesDb',
    url:'/salesDb',
    templateUrl:'/views/templates/salesDb.html'
};

const estDb = {
    name: 'app.estDb',
    url:'/estDb',
    templateUrl:'/views/templates/estDb.html'
};

const projDb = {
    name: 'app.projDb',
    url:'/projDb',
    templateUrl:'/views/templates/projDb.html'
};

const addSales = {
    name: 'app.addSales',
    url:'/addSales',
    templateUrl:'/views/templates/addSales.html'
};

const viewEst = {
    name: 'app.viewEst',
    url:'/viewEst',
    templateUrl:'/views/templates/viewEst.html'
};

const viewQuote = {
    name: 'app.viewQuote',
    url:'/viewQuote',
    templateUrl:'/views/templates/viewQuote.html'
};

const viewSales = {
    name: 'app.viewSales',
    url:'/viewSales',
    templateUrl:'/views/templates/viewSales.html'
};

app.config(function($stateProvider,$urlRouterProvider){

    $stateProvider.state(home);

    $stateProvider.state(salesDb);
    $stateProvider.state(estDb);
    $stateProvider.state(projDb);

    $stateProvider.state(addSales);

    $stateProvider.state(viewEst);
    $stateProvider.state(viewQuote);
    $stateProvider.state(viewSales);

    $urlRouterProvider.otherwise('app');

    
})
app.controller('homeController',function($scope,$state,$timeout){

   
    $scope.state = $state;
    $scope.goSalesDb = function(){
        
        $state.go('app.salesDb');
    }
    $scope.goEstDb = function(){
        $state.go('app.estDb');
    }
    $scope.goProjDb = function(){
        $state.go('app.projDb');
    }
    $scope.goAddSales = function(){
        $state.go('app.addSales');
    }
    $scope.goViewEst = function(){
        $scope.resetIncExc();
        $state.go('app.viewEst');
    }
    $scope.goViewQuote = function(){
        $state.go('app.viewQuote');
    }
    $scope.goViewSales = function(){
        $state.go('app.viewSales');
    }

    
    $scope.showSalesLead = function(lead){
        $scope.resetIncExc();
        $scope.curLead = lead;
        $scope.goViewSales();
    }

    $scope.showEstimate = function(lead){
        $scope.curLead = lead;
        $scope.goViewEst();
    }

    $scope.inclusion = [
        'Anchor Bolts',
        'Beams',
        'Columns',
        'Braces',
        'Kickers',
        'Beam bearing plates',
        'Joint bearing plates',
        'Loose Plates',
        'Ledger Angles',
        'Lintels'
    ];
    $scope.exclusions = [
        'Connection Design & PE Stamping',
        'Stairs',
        'Hand Rails',
        'Wall Rails',
        'Guard Rails',
        'Joists',
        'Roof Deck',
        'Trash Gate',
        'Bollard'
    ];
    $scope.salesStatus = [
        'Lead','Published','Estimation','Quote','Bid','Close','Win'
    ];

    $scope.showNotification  = function(){
        $scope.nHeader = 'Welcome to Apex';
        $scope.nContent = 'Please check out the features';
        $scope.nShow = true;
        $timeout(function(){
            $scope.nShow = false;
        },5000);
    }

    $scope.closeNotification = function(){
        $scope.nShow = false;
    }

    $scope.resetIncExc = function(){
        $scope.incSelected = $scope.excSelected = [];
    }

    $scope.resetIncExc();
    
    $scope.setExclusion = function(val){
        let index = $scope.excSelected.indexOf(val);
        if(index>-1){
            $scope.excSelected.splice(index,1);
        } else {
            $scope.excSelected.push(val);
        }
    } ;
    $scope.setInclusion = function(val){
        let index = $scope.incSelected.indexOf(val);
        if(index>-1){
            $scope.incSelected.splice(index,1);
        } else {
            $scope.incSelected.push(val);
        }
    } ;

    
    $scope.addressList = [
        {
          "address": "152 Erskine Loop, Volta, Federated States Of Micronesia, 2654"
        },
        {
          "address": "158 Seagate Terrace, Diaperville, New Hampshire, 5474"
        },
        {
          "address": "302 Onderdonk Avenue, Yettem, Washington, 7215"
        },
        {
          "address": "197 Chauncey Street, Chesterfield, Michigan, 8180"
        },
        {
          "address": "796 High Street, Tyhee, New York, 4641"
        },
        {
          "address": "830 Miller Place, Coyote, Louisiana, 1377"
        },
        {
          "address": "251 Friel Place, Rowe, South Carolina, 7502"
        }
      ];

      $scope.nameList = [
        {
          "name": "Elaine Gilmore"
        },
        {
          "name": "Nixon Parsons"
        },
        {
          "name": "Massey Frazier"
        },
        {
          "name": "Orr Ford"
        },
        {
          "name": "Davenport Stokes"
        },
        {
          "name": "Charlene Cole"
        }
      ];

    $scope.getAmount = function(){
        return Math.ceil(Math.random())*9999;
    }
    $scope.getYesNo = function(){
        return ((Math.ceil(Math.random())*10)%2)?'Yes':'No';
    }  
   
    $scope.getHours = function(){
        let res = Math.round(Math.random())*100;
        return res;
    }
    
    $scope.getReceivedDate = function(){
        return new Date(2018,Math.ceil(Math.random())*11,Math.ceil(Math.random())*29);
    }
    $scope.getSentDate = function(){
        return new Date(2017,Math.ceil(Math.random())*11,Math.ceil(Math.random())*29);
    }
    $scope.getStatus = function(){
        return $scope.salesStatus[Math.floor(Math.random())*$scope.salesStatus.length];
    }
    $scope.getAddress = function(){
        return $scope.addressList[Math.floor(Math.random())*$scope.addressList.length].address;
    }
    $scope.getName = function(){
        return $scope.nameList[Math.floor(Math.random())*$scope.nameList.length].name;
    }

    

    $scope.pushToSalesList = function(cname){
        if(cname){
            $scope.salesList.push({
                index:$scope.salesList.length,
                assignee: $scope.getName(),
                company:cname
            });
        }
        $scope.goSalesDb();
    }

    $scope.salesList = [
        {
          "index": 0,
          "assignee": "Jan Brennan",
          "company": "HELIXO"
        },
        {
          "index": 1,
          "assignee": "Estrada Floyd",
          "company": "HAWKSTER"
        },
        {
          "index": 2,
          "assignee": "Karin Knox",
          "company": "PATHWAYS"
        },
        {
          "index": 3,
          "assignee": "Delacruz Sykes",
          "company": "NORSUP"
        },
        {
          "index": 4,
          "assignee": "Stanton Schwartz",
          "company": "OBONES"
        },
        {
          "index": 5,
          "assignee": "Clements Bass",
          "company": "PLASTO"
        },
        {
          "index": 6,
          "assignee": "Aurora Moore",
          "company": "ZORK"
        },
        {
          "index": 7,
          "assignee": "Gena Whitehead",
          "company": "ENERFORCE"
        },
        {
          "index": 8,
          "assignee": "Ines Erickson",
          "company": "PRINTSPAN"
        },
        {
          "index": 9,
          "assignee": "Spears Lindsey",
          "company": "EZENT"
        },
        {
          "index": 10,
          "assignee": "Susanne Gamble",
          "company": "CEPRENE"
        },
        {
          "index": 11,
          "assignee": "Rosie Travis",
          "company": "FARMAGE"
        },
        {
          "index": 12,
          "assignee": "Tanner Guy",
          "company": "JUNIPOOR"
        }
      ];

      
});