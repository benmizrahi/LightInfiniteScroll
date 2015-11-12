# LightInfiniteScroll
Light infinite scroll implementation on Typescript and AngularJS


This directive implement infiniteScroll with Typescript + AngularJs = quick and easy
NOTE: you should add AngularJS Typescript signature --> angular.d.ts
______________________________________________________________________________________________

#Implemention Exemple :

####Services

`module InfiniteExample.Services {
    /* Service - Get data from server  */
    class DataProvider : Global.Interfaces.IScrollService
    {
      public NoMoreDetails:boolean;
      public Items:Array<any>;
      private PageNumber:number;
      
      public pullNext(): Array<any>
      {
            /* $http.get(...).then(
                add to items
                Items.push(....);
            )
            
                
            */
            PageNumber++;
            set NoMoreDetails when data is done
      }
    }
}`


#### Controller:

`module InfiniteExample.Controllers {
    class HomeController
    {
      
      constructor($scope: IMyScope,DataProvider :MyApp.Services.DataProvider)
      {
            $scope.ScrollAction = ()=> {
                //Do Something...
                DataProvider.pullNext();
            }
            
            //Or use controllerAs insted
            $scope.DataProvider = DataProvider;
      }
    }
}`



####Module

`module InfiniteExample {
    var appModule = angular.module("InfiniteExample", []).
    service("DataFactory",MyApp.Services.DataFactory).
    controller("HomeController", InfiniteExample.Controllers.HomeController).
    directive("lightInfiniteScroll", () => new Global.Directives.LightInfiniteScroll.factory('DataFactory'));
}`


####View :

`<html ng-app="InfiniteExample">
    <head>....</head>
    <body ng-controller="HomeController">
        <div class="scoller" style="overflow-y: scroll;"  light-infinite-scroll>
                <div ng-repeat="item in DataProvider.Items">
                    <p>{{item}}</p>
                </div>
        </div>
    </body>
</html>`
