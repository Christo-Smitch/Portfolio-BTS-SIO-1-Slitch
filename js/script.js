document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.getAttribute('data-page');
    document.querySelectorAll('.page').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  });
});

// Calcul automatique de l'âge
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

document.getElementById("age").textContent = calculateAge("2003-05-03");
