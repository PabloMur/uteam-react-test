// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS' },
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ' },
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA' },
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ' },
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS' },
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];

const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
];

const banks = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'CHILE' },
  { id: 3, name: 'ESTADO' }
];

/* ===============================================
    Soluciones
================================================ */

// 0 Arreglo con los ids de clientes
function listClientsIds() {
  return clients.map(c => c.id);
}

// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {
  return [...clients]
    .sort((a, b) => a.taxNumber.localeCompare(b.taxNumber))
    .map(c => c.id);
}

// Helper para cálculo de total por cliente
function getTotalBalanceByClient() {
  return clients.map(c => ({
    name: c.name,
    id: c.id,
    total: accounts
      .filter(acc => acc.clientId === c.id)
      .reduce((sum, acc) => sum + acc.balance, 0)
  }));
}

// 2 Nombres ordenados de mayor a menor por saldo total
function sortClientsTotalBalances() {
  return getTotalBalanceByClient()
    .sort((a, b) => b.total - a.total)
    .map(c => c.name);
}

// 3 Objeto con bancos -> ruts de clientes ordenados por nombre
function banksClientsTaxNumbers() {
  const result = {};

  banks.forEach(bank => {
    const customers = accounts
      .filter(acc => acc.bankId === bank.id)
      .map(acc => acc.clientId)
      .filter((id, idx, self) => self.indexOf(id) === idx)
      .map(id => clients.find(c => c.id === id))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(c => c.taxNumber);

    result[bank.name] = customers;
  });

  return result;
}

// 4 Saldos de clientes con más de 25.000 en Banco SANTANDER ordenados desc.
function richClientsBalances() {
  return accounts
    .filter(acc => acc.bankId === 1 && acc.balance > 25000)
    .map(acc => acc.balance)
    .sort((a, b) => b - a);
}

// 5 Ids de bancos ordenados por la cantidad total administrada
function banksRankingByTotalBalance() {
  return banks
    .map(b => ({
      id: b.id,
      total: accounts
        .filter(acc => acc.bankId === b.id)
        .reduce((sum, acc) => sum + acc.balance, 0)
    }))
    .sort((a, b) => a.total - b.total)
    .map(b => b.id);
}

// 6 Bancos con número de clientes exclusivamente suyos
function banksFidelity() {
  const result = {};

  banks.forEach(bank => {
    const onlyClients = clients.filter(c => {
      const cBanks = accounts
        .filter(acc => acc.clientId === c.id)
        .map(acc => acc.bankId);

      return cBanks.length > 0 &&
        cBanks.every(bid => bid === bank.id);
    });

    result[bank.name] = onlyClients.length;
  });

  return result;
}

// Helper para saldo mínimo por banco
function getMinClient(bankId) {
  const accs = accounts.filter(acc => acc.bankId === bankId);
  if (accs.length === 0) return null;
  return accs.reduce((min, a) => (a.balance < min.balance ? a : min)).clientId;
}

// 7 Cliente con menos dinero por banco
function banksPoorClients() {
  const result = {};
  banks.forEach(bank => {
    result[bank.name] = getMinClient(bank.id);
  });
  return result;
}

// 8 Agregar cliente, sumar cuenta en BANCO ESTADO y obtener ranking
function newClientRanking() {
  const newClient = { id: 7, taxNumber: "12345678", name: "PABLO PRUEBA" };
  clients.push(newClient);
  accounts.push({ clientId: 7, bankId: 3, balance: 9000 });

  const ordered = getTotalBalanceByClient()
    .sort((a, b) => b.total - a.total)
    .map(c => c.id);

  return ordered.indexOf(newClient.id) + 1;
}


/* IMPRESIÓN – No modificar */
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
console.log('Pregunta 2');
console.log(sortClientsTotalBalances());
console.log('Pregunta 3');
console.log(banksClientsTaxNumbers());
console.log('Pregunta 4');
console.log(richClientsBalances());
console.log('Pregunta 5');
console.log(banksRankingByTotalBalance());
console.log('Pregunta 6');
console.log(banksFidelity());
console.log('Pregunta 7');
console.log(banksPoorClients());
console.log('Pregunta 8');
console.log(newClientRanking());
