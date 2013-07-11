var App = (function() {
    
    var self = this;
    
    
    /**
     * Listener for when the window is about to be shown
     */
    var onShowing = function() {    
        console.log('[Event] App is almost visible.');
        // Do something
    };
    
    /**
     * Listener for when the window is shown
     */
    var onShown = function() {
        console.log('[Event] App is visible.');
        // Your logic to be executed when the pokki is shown.
        

       
       
    };
    
    /**
     * Listener for when the window is about to be minimized
     */
    var onHiding = function() {
        console.log('[Event] App is about to be hidden.');
        // Do something
    };
    
    /**
     * Listener for when the window is minimized
     */
    var onHidden = function() {
        console.log('[Event] App was hidden.');
        // Do something, save state, etc.
    };
    
    /**
     * Listener for when the page is unloaded via a relaunch/reload
     */
    var onUnload = function() {
        console.log('[Event] App is being unloaded in 4 seconds.');
        // Do something, save state, etc.
        pokki.saveWindowState('main'); // save the position of the current window


    };
    
    /**
     * Listener for when the user requests to enter/exit fullscreen
     */
    var onFullscreen = function() {
        console.log('[Event] App is ' + (document.webkitIsFullScreen ? 'exiting fullscreen' : 'entering fullscreen') + '.');
        
        if (document.webkitIsFullScreen) {
            // Already in fullscreen, user wants to exit
            document.webkitCancelFullScreen();
        }
        else {
            // Not currently in fullscreen, user wants to enter fullscreen
            document.body.webkitRequestFullScreen();
        }
    };
    
    /**
     * Listener for context menu clicks
     */
    var onContextMenu = function(id) {
        console.log('[Event] Context menu item clicked:', id);
        
        ///////////////////////////////////////////
        // Map your context menu items to their specific actions
        switch(id) {
            case 'item1':
                // Do something
                break;
            case 'item2':
                // Do something
                break;
        }
    };
    
    
    
    /**
     * Initialize whatever needs to be initialized
     */
    var init = function() {
        ///////////////////////////////////////////
        // Initialize classes, objects, event delegation, etc.
        pokki.loadWindowState('main'); // restore window position
        
        
        // Example to illustrate the badge icons
        
        
        
        ///////////////////////////////////////////
        // Enable optional pokki features
        pokki.allowResize(true, true, { // allows resizing vertically
            minHeight: 557,
            minWidth: 700
        }); 
        
        
        // Optional: Context menu items
        pokki.addContextMenuItem('Item 1', 'item1');
        pokki.addContextMenuItem('Item 2', 'item2');
        
        
        ///////////////////////////////////////////
        // Add optional pokki platform event listeners
        pokki.addEventListener('showing', onShowing);
        pokki.addEventListener('shown', onShown);
        pokki.addEventListener('hiding', onHiding);
        pokki.addEventListener('hidden', onHidden);
        pokki.addEventListener('unload', onUnload);
        pokki.addEventListener('context_menu', onContextMenu);

        $(document).ready(function(){
            $("#playerBG").click(function(){
            console.log("BG click");
            $(this).remove();
        });
        });
        

    };
    
    
    /**
     * Publically accessible methods
     */
    return {
        init: init
    };
})();