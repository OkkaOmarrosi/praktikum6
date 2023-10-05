<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Data Fetcher</title>
</head>
<body>
    <h1>Tugas Alpro Week 6</h1>
    <div class="container">
        <h1>Data Fetcher</h1>
        <div class="input-container">
            <input type="text" id="url" placeholder="Masukkan URL JSON">
            <button onclick="fetchData()">Fetch Data</button>
        </div>
    </div>
    <div id="table-container" class="table-container">
        <table id="data-table" class="data-table">
            <thead></thead>
            <tbody></tbody>
        </table>
        
    </div>
    <script src="script.js"></script>
</body>
</html>
