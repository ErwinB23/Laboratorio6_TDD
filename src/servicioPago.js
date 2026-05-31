class ServicioPago {
    constructor() {
        this.MONTO_MINIMO = 10;
        this.LIMITE_DIARIO = 5000;
    }

    procesarPago(monto, montoAcumuladoDiario) {
        if (monto < this.MONTO_MINIMO) {
            return {
                aprobado: false,
                mensaje: "El monto es menor al mínimo permitido",
            };
        }

        if (monto > this.LIMITE_DIARIO) {
            return {
                aprobado: false,
                mensaje: "El pago supera el límite diario permitido",
            };
        }

        if (montoAcumuladoDiario + monto > this.LIMITE_DIARIO) {
            return {
                aprobado: false,
                mensaje: "El pago supera el límite diario permitido",
            };
        }

        return {
            aprobado: true,
            mensaje: "Pago procesado correctamente",
        };
    }
}

module.exports = ServicioPago;
