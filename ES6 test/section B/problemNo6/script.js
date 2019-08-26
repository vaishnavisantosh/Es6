import {MyLibrary} from './welcome.js'

(function()
{
    oldLibrary=library.MyLibrary.welcome;
    library.MyLibrary.welcome=extendedWelcome;
    function extendedWelcome(username)
    {
        oldLibrary.apply(library.MyLibrary);
        return `Hello ${this.username}`;

    }

})();
