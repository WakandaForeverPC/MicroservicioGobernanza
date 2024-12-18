document.addEventListener('DOMContentLoaded', () => {
    const partidosDiv = document.getElementById('partidos');
    const graficoVotos = document.getElementById('graficoVotos').getContext('2d');
    let chart;

    const obtenerPartidos = async () => {
        try {
            const response = await fetch('/gobernanza');
            const partidos = await response.json();
            actualizarPartidos(partidos);
            actualizarGrafico(partidos);
        } catch (error) {
            console.error('Error fetching partidos:', error);
        }
    };

    const votar = async (nombrePartido) => {
        try {
            await fetch('/gobernanza/votar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nombrePartido)
            });
            obtenerPartidos();
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    const actualizarPartidos = (partidos) => {
        partidosDiv.innerHTML = '';
        partidos.forEach(partido => {
            const button = document.createElement('button');
            button.innerText = `Votar por ${partido.nombre}`;
            button.onclick = () => votar(partido.nombre);
            partidosDiv.appendChild(button);
        });
    };

    const ctx = document.getElementById('graficoVotos').getContext('2d');
    const actualizarGrafico = (partidos) => {
        const nombres = partidos.map(p => p.nombre);
        const votos = partidos.map(p => p.votos);

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: nombres,
                datasets: [{
                    data: votos,
                    backgroundColor: votos.map(value => value > 50 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)'),
                    borderColor: votos.map(value => value > 50 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
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
