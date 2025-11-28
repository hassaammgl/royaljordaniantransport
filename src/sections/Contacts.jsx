import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for quotes, service inquiries, or general questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">contact@uslogistics.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                Office Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                123 Logistics Way
                <br />
                Transportation City, TX 75001
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                Working Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
