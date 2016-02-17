/**
 * Created by Maksym_Kondratenko on 17.02.2016.
 */

'use strict';

myApp.factory('formatService', ['$filter', function ($filter) {
    return {
        formatDate: function (date, event) {

            var dateFormat = $filter('dateFormat');

            function isNumericKeyCode(keyCode) {
                return (event.keyCode >= 48 && event.keyCode <= 57)
                    || (event.keyCode >= 96 && event.keyCode <= 105);
            }

            function isForwardSlashKeyCode(keyCode) {
                return event.keyCode === 191;
            }

            function isNavigationKeycode(keyCode) {
                switch (keyCode) {
                    case 8: //backspace
                    case 35: //end
                    case 36: //home
                    case 37: //left
                    case 38: //up
                    case 39: //right
                    case 40: //down
                    case 45: //ins
                    case 46: //del
                        return true;
                    default:
                        return false;
                }
            }

            if (dateFormat(date) && isNumericKeyCode(event.keyCode) || dateFormat(date) && isForwardSlashKeyCode(event.keyCode) || dateFormat(date) && isNavigationKeycode(event.keyCode)) {
                return true;
            }
            return false;
        }
    };
}]);

