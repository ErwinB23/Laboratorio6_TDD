function calcularImpuesto(monto, tasaImpuesto) {
    if (monto < 0) {
        throw new Error("El monto no puede ser negativo");
    }

    if (tasaImpuesto < 0) {
        throw new Error("La tasa de impuesto no puede ser negativa");
    }

    return monto * tasaImpuesto;
}

module.exports = calcularImpuesto;
