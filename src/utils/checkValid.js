// Değer tanımsızsa bilinmiyor tanımlıysa değeri döndüren bir fonksiyon
const checkValid = (value) => {
    return !value ? 'Bilinmiyor' : value;
};

export default checkValid;
