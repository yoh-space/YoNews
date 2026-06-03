
const today = new Date();

const day = today.toLocaleString('en-US', { weekday: 'long'});
const month = today.toLocaleString('en-US', { month: 'long'});

const dateNo = today.getDate();

export { day, month, dateNo };