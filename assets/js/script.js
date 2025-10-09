const getAgeUTC = (onDate = new Date()) => {
  const year = onDate.getUTCFullYear();
  const month = onDate.getUTCMonth();
  const day = onDate.getUTCDate();

  let age = year - 2002;
  const hasBirthdayPassed = month > 5 || (month === 5 && day >= 15);
  return hasBirthdayPassed ? age : age - 1;
};

const ageEl = document.getElementById('age');
ageEl.textContent = String(getAgeUTC());
