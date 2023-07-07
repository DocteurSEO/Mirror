

import Mirror from './lib/Mirror.js';

const [title, setTitle] = Mirror(['#subtitle','#title'], 'title');

setInterval(() => {
    
    setTitle(`Tada : ${new Date().toLocaleString()}`);
    
}, 2000);

