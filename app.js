Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }

}).mount('#app');



// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredVal = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredVal;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

//  btnEl.addEventListener('click', addGoal);