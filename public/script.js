document.getElementById('matricesForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const filas = parseInt(document.getElementById('filasMatriz').value);
    const columnas = parseInt(document.getElementById('columnasMatriz').value);

    if (isNaN(filas) || isNaN(columnas)) {
        alert('Por favor, ingrese valores válidos para filas y columnas.');
        return;
    }

    const matriz1 = [];
    const matriz2 = [];

    for (let i = 0; i < filas; i++) {
        matriz1[i] = [];
        matriz2[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz1[i][j] = parseFloat(prompt(`Ingrese el valor para la Matriz 1 en la posición (${i + 1}, ${j + 1}):`));
            matriz2[i][j] = parseFloat(prompt(`Ingrese el valor para la Matriz 2 en la posición (${i + 1}, ${j + 1}):`));
            if (isNaN(matriz1[i][j]) || isNaN(matriz2[i][j])) {
                alert('Por favor, ingrese valores numéricos válidos.');
                return;
            }
        }
    }

    const response = await fetch('/sumar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ matriz1, matriz2 })
    });

    const resultado = await response.json();

    document.getElementById('resultado').innerHTML = `<h3>Matriz Resultante:</h3><pre>${JSON.stringify(resultado, null, 2)}</pre>`;
});
