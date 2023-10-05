function fetchData() {
    const urlInput = document.getElementById('url').value;
    const tableContainer = document.getElementById('table-container');
    const dataTable = document.querySelector('#data-table tbody');

    // Buat objek AJAX
    const xhr = new XMLHttpRequest();
    
    // Atur fungsi penanganan ketika permintaan AJAX selesai
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                // Hapus semua baris tabel sebelum menambahkan yang baru
                dataTable.innerHTML = '';

                // Buat header tabel
                const headerRow = document.querySelector('#data-table thead');
                headerRow.innerHTML = '';
                for (const key in data[0]) {
                    if (data[0].hasOwnProperty(key)) {
                        const headerCell = document.createElement('th');
                        headerCell.textContent = key;
                        headerRow.appendChild(headerCell);
                    }
                }

                // Tambahkan data ke tabel
                data.forEach(function(item) {
                    const dataRow = document.createElement('tr');
                    for (const key in item) {
                        if (item.hasOwnProperty(key)) {
                            const dataCell = document.createElement('td');
                            dataCell.textContent = item[key];
                            dataRow.appendChild(dataCell);
                        }
                    }
                    dataTable.appendChild(dataRow);
                });

                // Tampilkan tabel
                tableContainer.style.display = 'block';
            } else {
                alert('Gagal mengambil data. Pastikan URL benar dan dapat diakses.');
            }
        }
    };

    // Kirim permintaan GET ke URL yang diinputkan
    xhr.open('GET', urlInput, true);
    xhr.send();
}
