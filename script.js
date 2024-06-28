// script.js
function toggleDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function updateProgress() {
    var totalItems = 12; // Total number of items
    var checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var progress = (checkedItems / totalItems) * 100;

    // Update the progress chart
    progressChart.data.datasets[0].data[0] = progress;
    progressChart.data.datasets[0].data[1] = 100 - progress;
    progressChart.update();
}

// Configuração do gráfico de barras
var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Planejamento', 'Desenvolvimento do MVP', 'Testes e Ajustes', 'Lançamento e Implementação'],
        datasets: [{
            label: 'Duração (semanas)',
            data: [8, 16, 8, 8],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

// Configuração do gráfico de linhas
var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Planejamento', 'Desenvolvimento do MVP', 'Testes e Ajustes', 'Lançamento e Implementação'],
        datasets: [{
            label: 'Progresso Acumulado (semanas)',
            data: [8, 24, 32, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

// Configuração do gráfico de progresso
var ctxProgress = document.getElementById('progressChart').getContext('2d');
var progressChart = new Chart(ctxProgress, {
    type: 'doughnut',
    data: {
        labels: ['Concluído', 'Restante'],
        datasets: [{
            data: [0, 100],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});
