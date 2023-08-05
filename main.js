import 'datatables.net-dt/css/jquery.dataTables.css'
import DataTable from 'datatables.net-dt';


const table = new DataTable('#myTable',{
    select: {
        style: 'multi'
    }
});

// Populate table with data
const data = [
    ["Johnny", "36", "New York"],
    ["John", "30", "New York"],
    ["Jane", "28", "Los Angeles"],
    ["Janny", "22", "Los Angeles"],
    ["Marc", "28", "Los Angeles"],
    ["Marco", "21", "Bahamas"],
    ["Joanna", "29", "New York"],
    ["Joanna", "29", "Los Angeles"],
];

table.rows.add(data).draw();

const locationFilterSelect = document.getElementById('locationFilter');

const uniqueLocations = Array.from(new Set(data.map(row => row[2])));

uniqueLocations.forEach(location => {
  const option = document.createElement('option');
  option.value = location;
  option.textContent = location;
  locationFilterSelect.appendChild(option);
});

// Filter event handler
locationFilterSelect.addEventListener('change', function() {
  const selectedLocations = Array.from(this.selectedOptions, option => option.value);
  table.column(2).search(selectedLocations.join('|'), true, false).draw();
});
