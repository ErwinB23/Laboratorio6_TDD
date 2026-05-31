class ReembolsoServicio {
    procesarReembolso(pago, montoReembolso) {
        if (pago.estado !== "APROBADO") {
            return {
                aprobado: false,
                mensaje: "Solo se pueden reembolsar pagos aprobados",
            };
        }

        if (montoReembolso > pago.monto) {
            return {
                aprobado: false,
                mensaje: "El monto de reembolso no puede superar el pago original",
            };
        }

        if (pago.reembolsado) {
            return {
                aprobado: false,
                mensaje: "El pago ya fue reembolsado",
            };
        }

        pago.reembolsado = true;

        return {
            aprobado: true,
            mensaje: "Reembolso procesado correctamente",
        };
    }
}

module.exports = ReembolsoServicio;
