import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yuvaraj S | Senior Data Engineer",
  description:
    "Senior Data Engineer specializing in Azure Data Factory, Databricks, and ETL pipeline development. 3+ years of experience building scalable data solutions.",
  keywords:
    "Data Engineer, Azure, Databricks, ETL, Data Warehouse, PySpark, SQL",
  authors: [{ name: "Yuvaraj S" }],
  creator: "Yuvaraj S",
  publisher: "Yuvaraj S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    siteName: "Yuvaraj S Portfolio",
    title: "Yuvaraj S | Senior Data Engineer",
    description:
      "Senior Data Engineer specializing in Azure Data Factory, Databricks, and ETL pipeline development.",
    images: [
      {
        url: "https://your-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuvaraj S Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvaraj S | Senior Data Engineer",
    description:
      "Senior Data Engineer specializing in Azure Data Factory, Databricks, and ETL pipeline development.",
    images: ["https://your-portfolio.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
