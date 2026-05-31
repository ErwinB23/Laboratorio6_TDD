const ServicioPago = require("../src/servicioPago");

describe("Servicio de pagos", () => {
    test("debe aprobar un pago válido", () => {
        const servicioPago = new ServicioPago();

        const resultado = servicioPago.procesarPago(100, 0);

        expect(resultado.aprobado).toBe(true);
        expect(resultado.mensaje).toBe("Pago procesado correctamente");
    });

    test("debe rechazar un pago menor al monto mínimo", () => {
        const servicioPago = new ServicioPago();

        const resultado = servicioPago.procesarPago(5, 0);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe("El monto es menor al mínimo permitido");
    });

    test("debe rechazar un pago que supera el límite diario", () => {
        const servicioPago = new ServicioPago();

        const resultado = servicioPago.procesarPago(6000, 0);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe("El pago supera el límite diario permitido");
    });

    test("debe rechazar un pago si el monto acumulado del día supera el límite", () => {
        const servicioPago = new ServicioPago();

        const resultado = servicioPago.procesarPago(1000, 4500);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe("El pago supera el límite diario permitido");
    });
});
