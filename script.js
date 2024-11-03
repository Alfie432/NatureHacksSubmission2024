function calculateFootprint(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const km = parseFloat(document.getElementById('km').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const waste = parseFloat(document.getElementById('waste').value);

    // approximate Conversion factors 
    const carEmissionFactor = 0.171; //e kg CO2 per km
    const electricityEmissionFactor = 0.92; // kg CO2 per kWh
    const wasteEmissionFactor = 2.5; // kg CO2 per kg

    // Calculate each category's carbon footprint
    const transportFootprint = km * carEmissionFactor * 30; // Approximate for a month
    const electricityFootprint = electricity * electricityEmissionFactor;
    const wasteFootprint = waste * wasteEmissionFactor;

    // Calculate total footprint
    const totalFootprint = transportFootprint + electricityFootprint + wasteFootprint;

    // Display the result
    document.getElementById('result').textContent = 
        `Your monthly carbon footprint is approximately ${totalFootprint.toFixed(2)} kg of CO2.`;
}