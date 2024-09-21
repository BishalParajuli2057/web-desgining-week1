fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff')
    .then(res => res.json())
    .then(populationData => {
        const municipalities = populationData.dataset.dimension.Alue.category.label;
        const populations = populationData.dataset.value;

        fetch('https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065')
            .then(res => res.json())
            .then(employmentData => {
                const employmentAmounts = employmentData.dataset.value;

                const tableBody = document.querySelector("#municipalityTable tbody");
                let index = 0;

                for (const key in municipalities) {
                    if (populations[index] !== undefined && employmentAmounts[index] !== undefined) {
                        const row = document.createElement('tr');
                        const municipalityCell = document.createElement('td');
                        const populationCell = document.createElement('td');
                        const employmentCell = document.createElement('td');
                        const employmentPercentCell = document.createElement('td');

                        const population = populations[index];
                        const employment = employmentAmounts[index];
                        const employmentPercent = (employment / population * 100).toFixed(2); // Employment percentage

                    
                        municipalityCell.textContent = municipalities[key];
                        populationCell.textContent = population;
                        employmentCell.textContent = employment;
                        employmentPercentCell.textContent = employmentPercent + '%';

                    
                        row.appendChild(municipalityCell);
                        row.appendChild(populationCell);
                        row.appendChild(employmentCell);
                        row.appendChild(employmentPercentCell);

                        if (employmentPercent > 45) {
                            row.style.backgroundColor = '#abffbd'; // Green for high employment
                        } else if (employmentPercent < 25) {
                            row.style.backgroundColor = '#ff9e9e'; // Red for low employment
                        }

                        tableBody.appendChild(row);
                    }
                    index++;
                }
            })
            .catch(error => console.log('Error fetching employment data:', error));
    })
    .catch(error => console.log('Error fetching population data:', error));




