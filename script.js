window.onload = () => {
    
    const techStackChart = document.getElementById('techStackChart').getContext('2d');
    const techStackData = {
      labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Powershell', 'HTML'],
      datasets: [{
        label: 'Top Technologies of 2024',
        data: [58.3, 67.3, 47.6, 64.1, 48.3, 43.3, 62.4],  
        backgroundColor: [
          '#4e73df', // JavaScript
          '#1cc88a', // Python
          '#36b9cc', 
          '#f6c23e', 
          '#e74a3b', 
          '#858796', 
          '#ff851b', 
        ],
        borderColor: [
          '#4e73df', // JavaScript
          '#1cc88a', // Python
          '#36b9cc', // Java
          '#f6c23e', // C#
          '#e74a3b', 
          '#858796', 
          '#ff851b', 
        ],
        borderWidth: 1,
      }]
    };
  
    new Chart(techStackChart, {
      type: 'bar',  
      data: techStackData,
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: {
            position: 'top',
          }
        }
      }
    });
  
    // Database Trend Bar Chart
    const databaseTrendChart = document.getElementById('databaseTrendChart').getContext('2d');
    const databaseData = {
      labels: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'MariaDB'],
      datasets: [{
        label: 'Most Popular Databases',
        data: [40.3, 48.7, 24.8, 33.1, 17.2],  
        backgroundColor: [
          '#ff6347', // MySQL
          '#1cc88a', // PostgreSQL
          '#f39c12', // MongoDB
          '#3498db', // SQLite
          '#9b59b6', // MariaDB
        ],
        borderColor: [
          '#ff6347', // MySQL
          '#1cc88a', // PostgreSQL
          '#f39c12', // MongoDB
          '#3498db', // SQLite
          '#9b59b6', // MariaDB
        ],
        borderWidth: 1,
      }]
    };
  
    new Chart(databaseTrendChart, {
      type: 'bar',  
      data: databaseData,
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            enabled: true
          }
        }
      }
    });
};
