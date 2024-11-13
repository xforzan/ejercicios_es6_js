
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


  
  const input = document.querySelector(".input");
  
  input.addEventListener("input", () => {

    const text = input.value.toLowerCase();
    
    const filteredStreamers = streamers.filter(streamer => {
      return streamer.name.toLowerCase().includes(text);
    });

    console.log(filteredStreamers);
  });
  