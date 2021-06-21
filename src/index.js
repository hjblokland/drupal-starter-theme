// Import javascripts
import 'javascripts/breakpoint.es6'
import 'javascripts/svg4everybody.es6'

// Import stylesheets
import 'stylesheets/main.scss'

// Import icons
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('images/icons/', true, /\.svg$/));
