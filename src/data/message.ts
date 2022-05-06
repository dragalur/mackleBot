export const messagesArray = [
	{
		id: 1,
		text: 'Hello world!!!',
		nextAtomId: 2,
	},
	{
		id: 2,
		text: 'I am Macle bot, hope you are well!!',
		nextAtomId: 3,
	},
	{
		id: 3,
		text: 'How are your mood?',
		buttons: [
			{
				title: 'Good',
				nextAtomId: 41,
			},
			{
				title: 'Sad',
				nextAtomId: 42,
			},
			{
				title: 'Cool',
				nextAtomId: 43,
			},
		],
	},
	{
		id: 41,
		text: 'I glad to hear it.',
		nextAtomId: 3,
	},
	{
		id: 42,
		text: 'Please, eat something tasty.',
		nextAtomId: 3,
	},
	{
		id: 43,
		text: 'That awesome!',
		nextAtomId: 3,
	},
];
