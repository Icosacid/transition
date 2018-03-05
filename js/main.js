document.addEventListener('DOMContentLoaded', function() {

    // If IE, display fallback view and return false
    if (isIE()) {
        var ieBlock = document.getElementById('ie-fallback');
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML = ieBlock.outerHTML;
        ieBlock.style.display = 'inherit';
        body.className += ' ie';
        return false;
    }

    // App views
    var HomeComponent = {
        template: jQuery('#home-template').html()
    };

    // Custom components
    Vue.component('logo-links', {
        template: jQuery('#logo-links-template').html()
    });

    // App routes
    var routes = [
        { path: '/', component: HomeComponent }
    ];

    // Build router
    var router = new VueRouter({
        routes: routes
    });

    // Scroll to top on route change
    router.beforeEach(function(to, from, next) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 100);
        next();
    });

    var app = new Vue({
        router: router,
        el: '#transition-web',
        data: {
            isOpen: false
        }
    });

});