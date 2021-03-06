var app = angular.module('nbaRoutes');

// this controller needs to be injected the resolved data from the router
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

    $scope.teamData = teamData;
    $scope.newGame = {};
    $scope.showNewGameForm = false;
    
    $scope.toggleNewGameForm = function(){
        $scope.showNewGameForm = !$scope.showNewGameForm;
    }
    
    if ($stateParams.team === 'utahjazz') {
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    } else if ($stateParams.team === 'losangeleslakers') {
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    } else if ($stateParams.team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }
    
    $scope.submitGame = function () {
        $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
        teamService.addNewGame($scope.newGame)
        .then(function() {
            teamService.getTeamData($scope.newGame.homeTeam)
            .then(function (data) {
                $scope.teamData = data;
                $scope.newGame = {};
                $scope.showNewGameForm = false;
            });
        });
    };
console.log($scope);
}); //ends app controller