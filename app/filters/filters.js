/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */

myApp.filter('duration', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});

myApp.filter('dateFormat', function() {
    return function(date) {
        var regex = /\d\d.\d\d.\d\d\d\d/;
        return regex.test(date);
    }
});
