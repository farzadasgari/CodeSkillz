import { Download, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PurchasesSection = () => {
  const purchases = [
    {
      id: 1,
      courseName: "Python Programming Masterclass",
      date: "Oct 1, 2025",
      price: "$99.99",
      receiptUrl: "#",
    },
    {
      id: 2,
      courseName: "Machine Learning Fundamentals",
      date: "Sept 15, 2025",
      price: "$149.99",
      receiptUrl: "#",
    },
    {
      id: 3,
      courseName: "Web Development Bootcamp",
      date: "Aug 20, 2025",
      price: "$129.99",
      receiptUrl: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Purchase History</h2>
        <p className="text-muted-foreground">View and manage your course purchases</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search purchases by course name or date..."
          className="pl-10 border-primary/30 focus:border-secondary"
        />
      </div>

      {/* Purchases Table - Desktop */}
      <Card className="border-border shadow-sm hidden md:block">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">All Purchases</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Course Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Purchase Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Price</th>
                  <th className="text-right py-4 px-6 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="py-4 px-6 font-medium text-foreground">{purchase.courseName}</td>
                    <td className="py-4 px-6 text-muted-foreground">{purchase.date}</td>
                    <td className="py-4 px-6 font-semibold text-secondary">{purchase.price}</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="w-4 h-4" />
                          Receipt
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-secondary">
                          <ExternalLink className="w-4 h-4" />
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Purchases Cards - Mobile */}
      <div className="md:hidden space-y-4">
        {purchases.map((purchase) => (
          <Card key={purchase.id} className="border-border shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{purchase.courseName}</h3>
                <p className="text-sm text-muted-foreground">{purchase.date}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-secondary">{purchase.price}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Receipt
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PurchasesSection;
