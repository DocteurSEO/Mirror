import Mirror from './mirror.js';

const [title, setTitle] = Mirror(['#subtitle','#title'], 'title');

setInterval(() => {
    setTitle(`Tada : ${new Date().toLocaleString()}`);
}, 2000);
