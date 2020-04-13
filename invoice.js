const math = require('./invoice.js');
const InvoiceLine = require('./invoiceLine.js');

class Invoice {
    constructor(InvoiceDate = new Date(), InvoiceNumber = 0, LineItems = []) {
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNumber = InvoiceNumber;
        this.LineItems = LineItems;
    }

    /**
     * Adds a line to invoice
     * @param {Object} line - a line to add
    */
    AddInvoiceLine(line) {
        this.LineItems.push(line);
    };

    /**
     * Removes a line
    */
    RemoveInvoiceLine(id) {
        this.LineItems = this.LineItems.filter(item => item.InvoiceLineId !== id);
    };

    GetTotal() {
        return this.LineItems.map((a) => a.Cost).reduce((a,b) => a+b,0).toFixed(2);
    };

    MergeInvoices(invoiceForMerge) {
        this.LineItems = this.LineItems.concat(invoiceForMerge.LineItems)
    }

    Clone() {
        return this;
    };
}

module.exports = Invoice;