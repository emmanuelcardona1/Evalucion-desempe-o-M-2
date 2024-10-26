let gastos = [
  {
    alimentacion: "comida",
    disponibilidad: 500000,
    gastado: 0,
  },
  {
    transporte: "transporte",
    disponibilidad: 500000,
    gastado: 0,
  },
  {
    entretenimiento: "entretenimiento",
    disponibilidad: 500000,
    gastado: 0,
  },
  {
    otros: "otros",
    disponibilidad: 500000,
    gastado: 0,
  },
];

function obtenerGastosalimeticios() {
  let alimentacion = Number(prompt("ingrese el gasto de alimentacion"));
  gastos[0].gastado = alimentacion;
  let gastosExecedidos = gastos[0].disponibilidad - alimentacion;
  if (alimentacion <= gastos[0].disponibilidad) {
    alert(
      "su gasto de alimentacion es de: " +
        alimentacion +
        "\n" +
        " su disponibilidad es de " +
        gastosExecedidos +
        " pesos"
    );
  } else if (alimentacion > gastos[0].disponibilidad) {
    alert(
      "usted ah exedido su gasto de alimentacion que  es de " +
        gastos[0].disponibilidad +
        "\n" +
        "por el total de: " +
        gastosExecedidos +
        " pesos"
    );
  }
}

function obtenerGastosTransporte() {
  let transporte = Number(prompt("ingrese el gasto de transporte"));
  gastos[1].gastado = transporte;
  let gastosExecedidos = gastos[1].disponibilidad - transporte;
  if (transporte <= gastos[1].disponibilidad) {
    alert(
      "su gasto de transporte es de: " +
        transporte +
        "\n" +
        " su disponibilidad es de " +
        gastosExecedidos +
        " pesos"
    );
  } else if (transporte > gastos[1].disponibilidad) {
    alert(
      "usted ah exedido su gasto de transporte que  es de " +
        gastos[1].disponibilidad +
        "\n" +
        "por el total de: " +
        gastosExecedidos +
        " pesos"
    );
  }
}

function obtenerGastosEntretenimiento() {
  let entretenimiento = Number(prompt("ingrese el gasto de entretenimiento"));
  gastos[2].gastado = entretenimiento;
  let gastosExecedidos = gastos[2].disponibilidad - entretenimiento;
  if (entretenimiento <= gastos[2].disponibilidad) {
    alert(
      "su gasto de entretenimiento es de: " +
        entretenimiento +
        "\n" +
        " su disponibilidad es de " +
        gastosExecedidos +
        " pesos"
    );
  } else if (entretenimiento > gastos[2].disponibilidad) {
    alert(
      "usted ah excede su gasto de entretenimiento que  es de " +
        gastos[2].disponibilidad +
        "\n" +
        "por el total de: " +
        gastosExecedidos +
        " pesos"
    );
  }
}

function obtenerGastosOtros() {
  let otros = Number(prompt("ingrese el gasto de otros"));
  gastos[3].gastado = otros;
  let gastosExecedidos = gastos[3].disponibilidad - otros;
  if (otros <= gastos[3].disponibilidad) {
    alert(
      "su gasto de otros es de: " +
        otros +
        "\n" +
        " su disponibilidad es de " +
        gastosExecedidos +
        " pesos"
    );
  } else if (otros > gastos[3].disponibilidad) {
    alert(
      "usted ah excede su gasto de otros que  es de " +
        gastos[3].disponibilidad +
        "\n" +
        "por el total de: " +
        gastosExecedidos +
        " pesos"
    );
  }
}

function totalGastos() {
  let sumaTotalMes =
    gastos[0].gastado +
    gastos[1].gastado +
    gastos[2].gastado +
    gastos[3].gastado;

  alert("usted ah gastado un total de: " + sumaTotalMes + " pesos");
}

for (let index = 0; index <=6 ; index++) {
  
    let categoria = Number(
        prompt(
          "ingrese la categoria de gastos: \n1. alimentacion \n2. transporte \n3. entretenimiento \n4. otros \n5. total de gastos"
        )
      );
      
      switch (categoria) {
        case 1:
          obtenerGastosalimeticios();
          break;
        case 2:
          obtenerGastosTransporte();
          break;
        case 3:
          obtenerGastosEntretenimiento();
          break;
        case 4:
          obtenerGastosOtros();
          break;
        case 5:
          totalGastos();
          break;
        default:
          alert("usted ha ingresado una opcion incorrecta");
          break;
      }
}
   
    



