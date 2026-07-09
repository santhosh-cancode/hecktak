import React, { useState } from 'react';
import './BillingShowcase.css';

const billingFeatures = [
  {
    title: "Instant Invoicing",
    desc: "Generate professional invoices in under 5 seconds with customized GST branding."
  },
  {
    title: "Smart Inventory",
    desc: "Real-time stocks tracker with auto-reorder alerts to prevent running out of items."
  },
  {
    title: "GST & Tax Filing Ready",
    desc: "Export localized tax-compliant spreadsheets (GST/VAT) with a single tap."
  },
  {
    title: "Multi-payment Terminal",
    desc: "Integrated UPI QR code generation, card machines, and cash registers."
  }
];

const availableItems = [
  { id: 1, name: "Consultation Call", price: 1500 },
  { id: 2, name: "Website Setup (Static)", price: 12000 },
  { id: 3, name: "Premium WebApp Development", price: 35000 },
  { id: 4, name: "Digital Marketing Pack", price: 8500 }
];

function BillingShowcase() {
  const [customerName, setCustomerName] = useState("Jane Doe");
  const [invoiceItems, setInvoiceItems] = useState([
    { id: 1, name: "Consultation Call", price: 1500, quantity: 1 },
    { id: 2, name: "Website Setup (Static)", price: 12000, quantity: 1 }
  ]);
  const [isInvoiceIssued, setIsInvoiceIssued] = useState(false);

  const handleAddItem = (item) => {
    const existingItem = invoiceItems.find(i => i.id === item.id);
    if (existingItem) {
      setInvoiceItems(invoiceItems.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setInvoiceItems([...invoiceItems, { ...item, quantity: 1 }]);
    }
    setIsInvoiceIssued(false);
  };

  const handleRemoveItem = (id) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== id));
    setIsInvoiceIssued(false);
  };

  const calculateSubtotal = () => {
    return invoiceItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  const handleIssueInvoice = () => {
    if (invoiceItems.length === 0) return;
    setIsInvoiceIssued(true);
    setTimeout(() => {
      setIsInvoiceIssued(false);
      setInvoiceItems([]); // Reset invoice list
    }, 2500);
  };

  return (
    <section id="billing" className="billing-showcase-section">
      <div className="bg-glow-sphere billing-sphere"></div>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Interactive Demo</span>
          <h2 className="section-title">Billing & POS Solutions</h2>
          <p className="section-subtitle">
            Experience our custom invoicing engine. Click around to see how Hecktak builds enterprise billing applications.
          </p>
        </div>

        <div className="billing-grid">
          {/* Left Panel: Features */}
          <div className="billing-features">
            <h3 className="features-headline">Why choose our Custom POS Systems?</h3>
            <p className="features-subtext">
              Generic billing platforms are slow and loaded with features you don't need. We build custom-tailored dashboards designed around your specific corporate workflows.
            </p>
            <div className="features-list">
              {billingFeatures.map((feat, idx) => (
                <div key={idx} className="feat-item">
                  <div className="feat-number">0{idx + 1}</div>
                  <div className="feat-content">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Interactive Dashboard */}
          <div className="glass-panel billing-terminal">
            <div className="terminal-header">
              <span className="terminal-dot"></span>
              <h4>HECKTAK BILLING ENGINE v1.4</h4>
            </div>

            <div className="terminal-body">
              <div className="terminal-controls">
                <label className="form-label">Customer Name</label>
                <input 
                  type="text" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)} 
                  className="form-control terminal-input"
                  placeholder="Enter Customer Name"
                />
              </div>

              {/* Add Items bar */}
              <div className="terminal-add-items">
                <span className="add-label">Quick Add Services:</span>
                <div className="items-buttons">
                  {availableItems.map(item => (
                    <button 
                      key={item.id} 
                      onClick={() => handleAddItem(item)}
                      className="btn-add-tag"
                    >
                      + {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Invoice Display */}
              <div className="terminal-receipt">
                <div className="receipt-header">
                  <span className="receipt-brand">INVOICE PREVIEW</span>
                  <span>Date: {new Date().toLocaleDateString()}</span>
                </div>
                <div className="receipt-meta">
                  <span>Bill To: <strong>{customerName || "N/A"}</strong></span>
                </div>

                <table className="receipt-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceItems.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="empty-receipt-msg">No items added. Add items above to start billing.</td>
                      </tr>
                    ) : (
                      invoiceItems.map(item => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>₹{item.price}</td>
                          <td>₹{item.price * item.quantity}</td>
                          <td>
                            <button 
                              onClick={() => handleRemoveItem(item.id)} 
                              className="btn-remove-item"
                              aria-label="Remove item"
                            >
                              &times;
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                {invoiceItems.length > 0 && (
                  <div className="receipt-summary">
                    <div className="summary-row">
                      <span>Subtotal:</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="summary-row">
                      <span>GST (18%):</span>
                      <span>₹{tax}</span>
                    </div>
                    <div className="summary-row total-row">
                      <span>Total Invoice:</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button 
                onClick={handleIssueInvoice}
                disabled={invoiceItems.length === 0} 
                className={`btn btn-primary btn-block terminal-submit ${isInvoiceIssued ? 'success-state' : ''}`}
              >
                {isInvoiceIssued ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="success-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Invoice Issued & Emailed!
                  </>
                ) : "Issue & Print Invoice"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BillingShowcase;
