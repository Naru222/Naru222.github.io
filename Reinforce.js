
function getWeightedIndex() {
  const rand = Math.random() * 100;
  if (rand < 60) return Math.floor(Math.random() * 5);
  else if (rand < 95) return Math.floor(Math.random() * 5) + 5;
  else return Math.floor(Math.random() * 5) + 10;
}

const options = [
  { name: "우월코드 데미지 증가", values: [9.54, 10.94, 12.34, 13.75, 15.15, 16.56, 17.96, 19.37, 20.75, 22.15, 23.56, 24.96, 26.36, 27.76, 29.16] },
  { name: "명중률 증가", values: [4.77, 5.47, 6.18, 6.88, 7.59, 8.29, 9.00, 9.70, 10.40, 11.11, 11.81, 12.52, 13.22, 13.93, 14.63] },
  { name: "최대 장탄 수 증가", values: [27.84, 31.94, 36.04, 40.14, 44.24, 48.34, 52.44, 56.54, 60.64, 64.74, 68.84, 72.94, 77.04, 81.26, 85.37] },
  { name: "공격력 증가", values: [9.54, 10.94, 12.34, 13.75, 15.15, 16.56, 17.96, 19.37, 20.75, 22.15, 23.56, 24.96, 26.36, 27.76, 29.16] },
  { name: "자기 데미지 증가", values: [4.77, 5.47, 6.18, 6.88, 7.59, 8.29, 9.00, 9.70, 10.40, 11.11, 11.81, 12.52, 13.22, 13.93, 14.63] },
  { name: "자기 속도 증가", values: [4.77, 5.47, 6.18, 6.88, 7.59, 8.29, 9.00, 9.70, 10.40, 11.11, 11.81, 12.52, 13.22, 13.93, 14.63] },
  { name: "크리티컬 피해량 증가", values: [6.64, 7.62, 8.60, 9.58, 10.56, 11.54, 12.52, 13.50, 14.48, 15.46, 16.44, 17.42, 18.40, 19.38, 20.36] },
  { name: "크리티컬 발생률 증가", values: [4.77, 5.47, 6.18, 6.88, 7.59, 8.29, 9.00, 9.70, 10.40, 11.11, 11.81, 12.52, 13.22, 13.93, 14.63] },
  { name: "방어력 증가", values: [4.77, 5.47, 6.18, 6.88, 7.59, 8.29, 9.00, 9.70, 10.40, 11.11, 11.81, 12.52, 13.22, 13.93, 14.63] }
];

let customCount = 0;

function getRandomOptions(optionList, count = 3) {
  const shuffled = [...optionList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateOptions() {
  customCount++;
  document.getElementById("countText").textContent = customCount;

  const selected = getRandomOptions(options);
  const tbody = document.getElementById("resultBody");
  tbody.innerHTML = "";

  selected.forEach(opt => {
    const idx = getWeightedIndex();
    const row = `<tr>
          <td>${opt.name}</td>
          <td>${opt.values[idx]}</td>
          <td>${idx + 1}</td>
        </tr>`;
    tbody.insertAdjacentHTML("beforeend", row);
  });

  document.getElementById("resultTable").style.display = "table";
}