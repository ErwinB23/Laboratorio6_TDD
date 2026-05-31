const calcularImpuesto = require("../src/impuestoCalcular");

describe("Cálculo de impuestos", () => {
    test("debe calcular correctamente el impuesto del 18%", () => {
        const monto = 100;
        const tasaImpuesto = 0.18;

        const resultado = calcularImpuesto(monto, tasaImpuesto);

        expect(resultado).toBe(18);
    });

    test("debe calcular impuesto cero cuando el monto es cero", () => {
        const resultado = calcularImpuesto(0, 0.18);

        expect(resultado).toBe(0);
    });

    test("debe lanzar error si el monto es negativo", () => {
        expect(() => calcularImpuesto(-100, 0.18)).toThrow(
            "El monto no puede ser negativo",
        );
    });

    test("debe lanzar error si la tasa de impuesto es negativa", () => {
        expect(() => calcularImpuesto(100, -0.18)).toThrow(
            "La tasa de impuesto no puede ser negativa",
        );
    });
});
