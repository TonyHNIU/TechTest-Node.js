class InvoiceLine {
    constructor(InvoiceLineId, Cost = -1, Quantity = 1, Description = "") {
        this.InvoiceLineId = InvoiceLineId;
        this.Cost = Cost;
        this.Quantity = Quantity;
        this.Description = Description;
    }
}

module.exports = InvoiceLine;