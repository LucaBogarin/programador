var moment = require('moment');
moment.locale('es');
console.log('naci '+moment('07/06/2002','DD/MM/YYYY').fromNow());