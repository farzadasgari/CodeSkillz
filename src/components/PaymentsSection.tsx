import { CreditCard, Plus, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const PaymentsSection = () => {
  const paymentMethods = [
    { id: 1, type: "Visa", last4: "1234", expiry: "12/26" },
    { id: 2, type: "Mastercard", last4: "5678", expiry: "08/27" },
  ];

  const billingHistory = [
    { id: 1, date: "Oct 1, 2025", amount: "$99.99", status: "Paid" },
    { id: 2, date: "Sept 15, 2025", amount: "$149.99", status: "Paid" },
    { id: 3, date: "Aug 20, 2025", amount: "$129.99", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Payment Methods</h2>
        <p className="text-muted-foreground">Manage your payment methods and billing history</p>
      </div>

      {/* Payment Methods */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Saved Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-secondary transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {method.type} ending in {method.last4}
                  </p>
                  <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button variant="secondary" className="w-full gap-2 mt-4">
            <Plus className="w-4 h-4" />
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Auto-Renew Setting */}
      <Card className="border-border shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Auto-Renew Subscriptions</h3>
              <p className="text-sm text-muted-foreground">
                Automatically renew course subscriptions when they expire
              </p>
            </div>
            <Switch className="data-[state=checked]:bg-secondary" />
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Billing History</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {billingHistory.map((bill) => (
            <div
              key={bill.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">{bill.date}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Status: <span className="text-secondary font-medium">{bill.status}</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-foreground">{bill.amount}</span>
                <Button variant="ghost" size="sm" className="gap-2 text-secondary hover:text-secondary">
                  <FileText className="w-4 h-4" />
                  Invoice
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsSection;
