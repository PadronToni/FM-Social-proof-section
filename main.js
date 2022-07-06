
const classes = 'review';

const reviews = [
	{
		name: 'Simone',
		body: 'fjdasklfjdka kfj dakfljdaklfjd asfjd'
	},
	{
		name: 'Simone',
		body: 'fjdasklfjdka kfj dakfljdaklfjd asfjd'
	},
	{
		name: 'Simone',
		body: 'fjdasklfjdka kfj dakfljdaklfjd asfjd'
	},
	{
		name: 'Simone',
		body: 'fjdasklfjdka kfj dakfljdaklfjd asfjd'
	},
	{
		name: 'Simone',
		body: 'fjdasklfjdka kfj dakfljdaklfjd asfjd'
	},
]

function toHTML(template) {
	const elem = document.createElement('template');
	elem.innerHTML = template.trim();
	return elem.content.firstElementChild;
}

const body = document.getElementsByTagName('body')[0];


for (const rev of reviews) {
	const review = `
	<div class="${classes}">
		<h4>${rev.name}</h4>
		<p>${rev.body}</p>
	</div>
`
	body.appendChild(toHTML(review));
	// console.log(toHTML(review));
}