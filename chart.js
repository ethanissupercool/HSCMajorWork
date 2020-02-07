new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Home & Utilities", "Insurance & Financial", "Shopping", "Groceries", "Personal & Medical", "Entertainment & Eat Out", "Transport & Auto", "Children", "Other"],
      datasets: [
        {
          label: "$",
          backgroundColor: ["#3e95cd", "#a5447c","#daf7b5","#d01258","#a449b2", "#15c343", "#d44e47", "#fc618e", "#b2ea7c"],
          data: [2478,5267,734,784,433,2342,2352,6462,235]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Spending'
      }
    }
});
