// Write code under this line
const getSortedUniqueSkills = (array) => array
.reduce((allSkills, user) => {
 return allSkills.concat(...user.skills);

}, [])
.filter((user, index, arr) => arr.indexOf(user) === index)
.sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */