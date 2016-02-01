var app = angular.module('miPortalApp', []);

app.controller('tableController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchPlayer   = '';     // set the default search/filter term

  // @todo get players trough web service
  $scope.players = [
    { position: 'Portero', team: 'Deportivo', name: 'Pletikosa', age: 26 },
    { position: 'Portero', team: 'Deportivo', name: 'Lux', age: 31 },
    { position: 'Portero', team: 'Barcelona', name: 'Ter Stegen', age: 25 },
    { position: 'Portero', team: 'Real Madrid', name: 'Keylor Navas', age: 24 },
    { position: 'Portero', team: 'Valencia', name: 'Ryan', age: 23 },
    { position: 'Defensa', team: 'Eibar', name: 'Dos Santos', age: 21 },
    { position: 'Defensa', team: 'Granada', name: 'Foulquier', age: 27 },
    { position: 'Defensa', team: 'Sporting', name: 'Bernardo', age: 22 },
    { position: 'Defensa', team: 'Granada', name: 'Babín', age: 25 },
    { position: 'Defensa', team: 'Deportivo', name: 'Sidnei', age: 32 },
    { position: 'Defensa', team: 'Real Sociedad', name: 'Iñigo Martínez', age: 31 },
    { position: 'Defensa', team: 'Getafe', name: 'Juan Cala', age: 30 },
    { position: 'Centrocampista', team: 'Atlético', name: 'Koke', age: 34 },
    { position: 'Centrocampista', team: 'Real Madrid', name: 'Modric', age: 28 },
    { position: 'Centrocampista', team: 'Athletic', name: 'Beñat', age: 31 },
    { position: 'Centrocampista', team: 'Las Palmas', name: 'Vicente Rodríguez', age: 21 },
    { position: 'Centrocampista', team: 'Rayo', name: 'Jozabed', age: 19 },
    { position: 'Delantero', team: 'Málaga', name: 'Camacho', age: 27 },
    { position: 'Delantero', team: 'Levante', name: 'Morales', age: 26 },
    { position: 'Delantero', team: 'Eibar', name: 'Saúl Berjón', age: 25 },
    { position: 'Delantero', team: 'Deportivo', name: 'Bergantiños', age: 24 },
    { position: 'Delantero', team: 'Villarreal', name: 'Denis Suárez', age: 23 },
    { position: 'Delantero', team: 'Celta', name: 'Nolito', age: 27 },
    { position: 'Delantero', team: 'Espanyol', name: 'Caicedo', age: 33 },
    { position: 'Delantero', team: 'Barcelona', name: 'Munir', age: 29 },
  ];

});