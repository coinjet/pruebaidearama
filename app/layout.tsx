export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Ideagrama</title>
        <meta name="description" content="Tú propones la idea. Nosotros generamos el prompt perfecto." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 flex items-center justify-between border-b dark:border-gray-700">
          <img src="/logo-ideagrama.png" alt="Ideagrama" className="h-10" />
          <div className="flex gap-2">
            <a href="/privacy" className="text-sm underline">Política de Privacidad</a>
            <a href="/terms" className="text-sm underline">Términos</a>
          </div>
        </header>
        <main className="p-4 max-w-3xl mx-auto">{children}</main>
        <footer className="p-4 border-t text-center text-sm dark:border-gray-700">
          © 2025 kreatoss. Todos los derechos reservados | <a className="underline" href="https://kreatoss.com">Diseño: kreatoss</a>
        </footer>
      </body>
    </html>
  )
}
