// Sales calculation script
async function loadSalesData() {
    try {
        const response = await fetch('data.csv');
        const csvText = await response.text();
        const lines = csvText.trim().split('\n').slice(1);
        
        let total = 0;
        lines.forEach(line => {
            if (line.trim()) {
                const cells = line.split(',');
                const sales = parseFloat(cells[1]);
                if (!isNaN(sales)) {
                    total += sales;
                }
            }
        });
        
        document.getElementById('total-sales').textContent = total.toFixed(2);
    } catch (error) {
        console.error('Error loading sales data:', error);
        document.getElementById('total-sales').textContent = 'Error';
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadSalesData);