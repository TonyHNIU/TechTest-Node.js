var assert = require('assert');
const Invoice = require('../invoice.js');
const InvoiceLine = require('../invoiceLine.js');

describe('Invoice', function() {
    describe('#AddInvoiceLine()', function() {
        it('Test AddInvoiceLine function - one entry', function(done) {
            const invoice = new Invoice();

            invoice.AddInvoiceLine(new InvoiceLine(1, 10.99, 5, "Banana"));

            assert.equal(invoice.LineItems.length, 1);
            done();
        });
    });
});

describe('Invoice', function() {
    describe('#AddInvoiceLine()', function() {
        it('Test AddInvoiceLine function - three lines', function(done) {
            const invoice = new Invoice();

            invoice.AddInvoiceLine(new InvoiceLine(1, 10.99, 5, "Banana"));
            invoice.AddInvoiceLine(new InvoiceLine(2, 11.99, 5, "Orange"));
            invoice.AddInvoiceLine(new InvoiceLine(3, 13.99, 5, "Apple"));

            assert.equal(invoice.LineItems.length, 3);
            done();
        });
    });
});

describe('Invoice', function() {
    describe('#GetTotal()', function() {
        it('GetTotal must return 15.42', function(done) {
            const invoice = new Invoice();
            invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 4, "Banana"));
            invoice.AddInvoiceLine(new InvoiceLine(2, 5.21, 1, "Orange" ));
            assert.equal(invoice.GetTotal(), 15.42);
            done();
        });
    });
});

describe('Invoice', function() {
    describe('#MergeInvoices()', function() {
        it('MergeInvoices must merge added InvoiceLines from separate Invoices', function(done) {
            const invoice1 = new Invoice();

            invoice1.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

            const invoice2 = new Invoice();

            invoice2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
            invoice2.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

            invoice1.MergeInvoices(invoice2);
            assert.equal(invoice1.LineItems.length, 3);
            done();
        });
    });
});

describe('Invoice', function() {
    describe('#Clone()', function() {
        it('Test clone function on getTotal basis', function(done) {
            const invoice = new Invoice();

            invoice.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
            invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

            const ClonedInvoice = invoice.Clone();
            assert.equal(ClonedInvoice.GetTotal(), invoice.GetTotal());
            done();
        });
    });
});


describe('Invoice', function() {
    describe('#RemoveInvoiceLine()', function() {
        it('Test RemoveInvoiceLine function on getTotal basis', function(done) {
            const invoice = new Invoice();

            invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
            invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));

            invoice.RemoveInvoiceLine(1);
            assert.equal(invoice.GetTotal(), 10.99);
            done();
        });
    });
});