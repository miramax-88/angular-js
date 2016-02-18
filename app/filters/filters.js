/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */

myApp.filter('duration', [function() {
    return function(min) {
        var hours = Math.trunc(min/60);
        var minutes = min % 60;
        return hours + ' hours'+":"+ minutes +' minutes';
    };
}]);
