document.addEventListener('DOMContentLoaded', () => {
    const partidosDiv = document.getElementById('partidos');
    const graficoVotos = document.getElementById('graficoVotos').getContext('2d');
    let chart;
    let partidos = [];

    const colorMap = {
        'Partido A': 'rgba(0, 123, 255, 0.8)', // Blue
        'Partido B': 'rgba(40, 167, 69, 0.8)', // Green
        'Partido C': 'rgba(255, 193, 7, 0.8)', // Yellow
        'Partido D': 'rgba(220, 53, 69, 0.8)'  // Red
    };

    const borderColorMap = {
        'Partido A': 'rgba(0, 123, 255, 1)', // Blue
        'Partido B': 'rgba(40, 167, 69, 1)', // Green
        'Partido C': 'rgba(255, 193, 7, 1)', // Yellow
        'Partido D': 'rgba(220, 53, 69, 1)'  // Red
    };

    const obtenerPartidos = () => {
        partidos = [
            { nombre: 'Partido A', votos: Math.floor(Math.random() * 100) },
            { nombre: 'Partido B', votos: Math.floor(Math.random() * 100) },
            { nombre: 'Partido C', votos: Math.floor(Math.random() * 100) },
            { nombre: 'Partido D', votos: Math.floor(Math.random() * 100) }
        ];
        actualizarPartidos(partidos);
        actualizarGrafico(partidos);
    };

    const votar = async (button) => {
        const nombrePartido = button.getAttribute('data-nombre');
        try {
            await fetch('/gobernanza/votar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({ nombrePartido })
            });
            partidos = partidos.map(partido => {
                if (partido.nombre === nombrePartido) {
                    return { ...partido, votos: partido.votos + 1 };
                }
                return partido;
            });
            actualizarGrafico(partidos);
            alert(`You voted for ${nombrePartido}`);
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    const actualizarPartidos = (partidos) => {
        partidosDiv.innerHTML = '';
        partidos.forEach(partido => {
            const button = document.createElement('button');
            button.innerHTML = `<i class="fas fa-vote-yea"></i> Votar por ${partido.nombre}`;
            button.setAttribute('data-nombre', partido.nombre);
            button.style.backgroundColor = colorMap[partido.nombre];
            button.onclick = () => votar(button);
            partidosDiv.appendChild(button);
        });
    };

    const actualizarGrafico = (partidos) => {
        const nombres = partidos.map(p => p.nombre);
        const votos = partidos.map(p => p.votos);

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(graficoVotos, {
            type: 'pie',
            data: {
                labels: nombres,
                datasets: [{
                    data: votos,
                    backgroundColor: nombres.map(nombre => colorMap[nombre]),
                    borderColor: nombres.map(nombre => borderColorMap[nombre]),
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                return `${label}: ${value} votos`;
                            }
                        }
                    }
                }
            }
        });
    };

    obtenerPartidos();
});