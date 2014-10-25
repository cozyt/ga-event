/**
 * Google Analytics Event Tracking
 * Methods for binding Google Analytics event tracking to DOM elements using data attributes.
 * Also provides a simple method for sending events programatically. *
 *
 * @param function ga The Google Analytics object
 * @param boolean cookiesEnabled Flag to identify if the user allows cookies (EU)
 * @url https://bitbucket.org/cozyt/ga-events
 * @author  A. Harvey @since 0.1
 * @version  0.1
 * @since  0.1
 * @return object
 */


/* jshint ignore:start */

var gaEvent = {

    /**
     * Method for sending events programatically
     *
     * @param  object element
     * @param  string category
     * @param  string action
     * @param  string label
     * @param  string|int val
     * @param  string|int nonint
     * @author  A. Harvey @since 0.1
     * @version  0.1
     * @since  0.1
     * @return void
     */
    send: function(element, category, action, label, val, nonint) {
        if(
            typeof ga === 'function' &&
            typeof cookiesEnabled !== 'undefined' &&
            cookiesEnabled !== false
        ) {

            if(typeof category === 'undefined') {
                category = element.data('category');
            }

            if(typeof action === 'undefined') {
                action = element.data('action');
            }


            if(typeof label === 'undefined') {
                label = element.data('label');
            }

            if(label === '') {
                label = element.attr('href');
            }


            if(typeof val === 'undefined') {
                val = element.data('val');
            }

            if(typeof val === 'undefined' || val === '') {
                val = 1;
            }


            if(typeof nonint === 'undefined') {
                nonint = element.data('nonint');
            }

            if(typeof nonint === 'undefined' || nonint === '' || nonint === 'false') {
                nonint = false;
            } else {
                nonint=true;
            }

            ga('send', 'event', category, action, label, val, nonint);
        }
    },


    /**
     * Bind tracking events to DOM elements
     *
     * @author  A. Harvey @since 0.1
     * @version  0.1
     * @since  0.1
     * @return void
     */
    bind: function() {
        $('.ga-track-event').on('touchstart click',function(e){
            gaEvent.send($(this));
        });

        $('.ga-track-event-form').on('submit',function(e){
            gaEvent.send($(this));
        });
    }
};

/* jshint ignore:end */
