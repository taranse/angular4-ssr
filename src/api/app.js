import { data } from './data';
var App = (function () {
    function App() {
    }
    App.prototype.getData = function () {
        return data;
    };
    return App;
}());
export { App };
