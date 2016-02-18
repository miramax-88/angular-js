/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */

myApp.filter('duration', [function () {
    return function (min) {
        if(!min) {
            return '';
        }
        var hours = Math.trunc(min / 60);
        var minutes = min % 60;
        return hours + ' hours' + ":" + minutes + ' minutes';
    };
}]);

/*
myApp.filter('formattedDate', function () {

    return function (date) {
        var reg = /\d{2}\/\d{2}\/\d{4}/;
        var rez;
        if (!date) {
            return '';
        }
        rez = date.replace(reg, '');
        console.log(rez)
        return rez;
    };
});
*/
