// 3.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(userName=> userName.name)


// 3.2

const namess = users.map(userName => {
    if (userName.name.startsWith("A")) {
      return "Anacleto";
    }
    return userName.name;
  });
  
  console.log(namess);

  // 3.3

  const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const city = cities.map(city => {
    if (city.isVisited === true) {
      return city.name + ' (Visitado)';
    }
    return city.name;
  });
  
  console.log(city);