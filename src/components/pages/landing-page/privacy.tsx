import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary text-center">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-medium text-base">1. Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li>Full name, email address, and phone number.</li>
              <li>Delivery address and order preferences.</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used solely for transactions and optional
              promotional purposes.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">3. Data Protection</h2>
            <p>
              We secure your data through encryption and multiple layers of
              protection.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">4. User Rights</h2>
            <p>
              You may access, update, or request the deletion of your personal
              data at any time.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">5. Policy Updates</h2>
            <p>
              We may update this policy, and any changes will be reflected on
              this page.
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
