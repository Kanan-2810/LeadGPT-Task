import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full font-sans text-slate-900 antialiased">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 overflow-hidden px-6 pb-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
