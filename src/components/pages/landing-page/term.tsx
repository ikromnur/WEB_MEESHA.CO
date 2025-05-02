"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary text-center">
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-medium text-base">1. Introduction</h2>
            <p>
              By using our services, you agree to the following terms and
              conditions.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">2. Our Services</h2>
            <p>
              We provide online ordering and flower delivery services based on
              your needs.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">3. Orders & Payment</h2>
            <ul className="list-disc pl-5">
              <li>Orders can be placed 24/7 via our website.</li>
              <li>
                Payments are accepted via bank transfer and digital wallets.
              </li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">4. Delivery</h2>
            <p>
              We strive for timely delivery, but delays due to external factors
              are beyond our control.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="font-medium text-base">
              5. Cancellations & Changes
            </h2>
            <p>
              Orders can be canceled or modified up to 12 hours before the
              scheduled delivery time.
            </p>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
