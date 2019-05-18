# Usage

## Initialization

```
const api = new API({
  host: 'http://localhost',
  version: 'v1',
});
```

## Methods

### Authentication

```
 api.authentication({ username, password })
```

### Payments list

Returns the list of existing payments

```
api.payments.list();
```

### Create payment

Creates a new payment

```
 api.payments.create({
  payeeId,
  payerId,
  paymentSystem,
  paymentMethod,
  amount,
  currency,
  comment,
})
```

### Get payment

Returns an existing payment

```
 api.payments.get(idPayment)
```

### Approve payment

Approves a payment, effectively it moves money from a payer account to a payee account.

```
 api.payments.approve(idPayment)
```

### Cancel payment

Cancels a created payment that hasn’t been approved yet.

```
 api.payments.cancel(idPayment)
```
