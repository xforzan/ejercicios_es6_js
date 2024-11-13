// 3.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(userName=> userName.name)


// 3.2

const Names = users.map(userName=>  if (userName.name.startsWith("A")){
    return "Anacleto"}

)



console.log(Names)