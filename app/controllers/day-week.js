const dayTheWeek = () => {
  const dayWeek = new Date().getDay();
  const dayTask = [0, 3, 5];

  return dayTask.includes(dayWeek);
 }

module.exports = dayTheWeek;
