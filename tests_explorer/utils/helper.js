/**
   * Untuk Get Data dri String
*/

function getTokenURL(data, beforelink, afterlink, regexvalue) {

    // Get Token / Code from URL
    regexvalue = new RegExp(`${regexvalue}([^&]+)`)
    const link = new RegExp(`${beforelink}[^>]*href="([^"]*)"[^>]*>${afterlink}`,'i')
    const linkmatch = data.match(link);

    // Menambahkan hasil ekstraksi parameter pada link ke dalam data
    let result = ''; 
    if (linkmatch.length !== 0) {
        const link = linkmatch[1];
        const match = link.match(regexvalue);
        result = match ? match[1] : null;
    }

    // Mengembalikan data
    return result;
}


// Fungsi untuk ekstrak data dari String dengan menggunakan regular expression
function collectString(data, before, after) {

    const matches = data.matchAll(new RegExp(`${before}(.*?)${after}`, 'gs'));
    // Objek untuk menyimpan data yang diekstrak
    const collectedData = {};

    // Loop data yang cocok
    for (const match of matches) {
        // Ambil nilai dari kecocokan dan hapus spasi di awal dan akhir
        const value = match[1].trim();

        // Tentukan label dengan cara simpel, misalnya "Data 1", "Data 2", dan seterusnya
        const label = `${Object.keys(collectedData).length + 1}`;

        // Tambahkan data ke dalam objek collectedData dengan label sebagai kunci
        collectedData[label] = value;
    }

    // Kembalikan objek collectedData yang berisi data yang diekstrak
    return collectedData;
}

module.exports = {
    getTokenURL,
    collectString
}