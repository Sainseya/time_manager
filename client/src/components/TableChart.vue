<template>
  <BarChart aria-describedby="my-data-table" />
  <table id="my-data-table">
    <caption>
      Sales figures for the years 2022 to 2024.
    </caption>
    <thead>
      <tr>
        <th>2022</th>
        <th>2023</th>
        <th>2024</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>987</td>
        <td>1209</td>
        <td>825</td>
      </tr>
    </tbody>
  </table>
</template>

<script></script>

<style>
/* Style général pour le corps de la page */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #1a1616;
}

/* Styles pour le tableau */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

caption {
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
}

/* En-tête du tableau */
thead th {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
}

/* Corps du tableau */
tbody td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  transition: background-color 0.3s;
}

tbody tr:hover td {
  background-color: #f1f1f1;
}

/* Styles pour le graphique à barres */
.bar-chart {
  margin-top: 20px;
}

/* Ajout de styles de responsive design */
@media (max-width: 600px) {
  table {
    font-size: 14px;
  }

  caption {
    font-size: 1.2em;
  }

  thead th {
    padding: 8px;
  }

  tbody td {
    padding: 6px;
  }
}
</style>
