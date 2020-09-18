const display = document.querySelector('.display');
const happy = document.querySelector('.happy');
const sad = document.querySelector('.sad');
const angry = document.querySelector('.angry');
const confused = document.querySelector('.confused');

display.innerHTML = '┐( ˘_˘ )┌';

happy.addEventListener('click', (e) => {
	store.dispatch({ type: 'HAPPY' });
	const mood = store.getState().mood;
	display.innerText = mood;
});

sad.addEventListener('click', (e) => {
	store.dispatch({ type: 'SAD' });
	const mood = store.getState().mood;
	display.innerText = mood;
});

angry.addEventListener('click', (e) => {
	store.dispatch({ type: 'ANGRY' });
	const mood = store.getState().mood;
	display.innerText = mood;
});

confused.addEventListener('click', (e) => {
	store.dispatch({ type: 'CONFUSED' });
	const mood = store.getState().mood;
	display.innerText = mood;
});
