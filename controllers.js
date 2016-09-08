angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
    console.log(' chats are' + $scope.chats);
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
// controller for graphs
    .controller('GraphCtrl', ['$scope','Chartfactory',function($scope,Chartfactory) {
        $scope.graph = Chartfactory.getGraphs();
        console.log($scope.graph);
        $scope.datas = Chartfactory.getGraph(2);
        console.log($scope.datas);
        $scope.labels = Chartfactory.getGraph(0);
        console.log($scope.labels);
        $scope.series = Chartfactory.getGraph(1);
        console.log($scope.series);

    }])

;
