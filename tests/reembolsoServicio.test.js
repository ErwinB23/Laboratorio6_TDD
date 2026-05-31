const ReembolsoServicio = require("../src/reembolsoServicio");

describe("Servicio de reembolsos", () => {
    test("debe aprobar el reembolso de un pago aprobado", () => {
        const reembolsoServicio = new ReembolsoServicio();

        const pago = {
            id: 1,
            monto: 100,
            estado: "APROBADO",
            reembolsado: false,
        };

        const resultado = reembolsoServicio.procesarReembolso(pago, 100);

        expect(resultado.aprobado).toBe(true);
        expect(resultado.mensaje).toBe("Reembolso procesado correctamente");
    });

    test("debe rechazar el reembolso si el pago no está aprobado", () => {
        const reembolsoServicio = new ReembolsoServicio();

        const pago = {
            id: 2,
            monto: 100,
            estado: "RECHAZADO",
            reembolsado: false,
        };

        const resultado = reembolsoServicio.procesarReembolso(pago, 100);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe("Solo se pueden reembolsar pagos aprobados");
    });

    test("debe rechazar el reembolso si el monto supera al pago original", () => {
        const reembolsoServicio = new ReembolsoServicio();

        const pago = {
            id: 3,
            monto: 100,
            estado: "APROBADO",
            reembolsado: false,
        };

        const resultado = reembolsoServicio.procesarReembolso(pago, 150);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe(
            "El monto de reembolso no puede superar el pago original",
        );
    });

    test("debe rechazar el reembolso si el pago ya fue reembolsado", () => {
        const reembolsoServicio = new ReembolsoServicio();

        const pago = {
            id: 4,
            monto: 100,
            estado: "APROBADO",
            reembolsado: true,
        };

        const resultado = reembolsoServicio.procesarReembolso(pago, 100);

        expect(resultado.aprobado).toBe(false);
        expect(resultado.mensaje).toBe("El pago ya fue reembolsado");
    });
});
