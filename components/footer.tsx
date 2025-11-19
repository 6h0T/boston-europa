export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "white", color: "var(--saas-text)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Boston Asset Manager</h3>
            <p className="text-sm" style={{ color: "var(--saas-muted)" }}>Institución de asesoramiento financiero autorizada por FINRA y SEC.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--saas-muted)" }}>
              <li>
                <a href="#empresa" className="hover:opacity-100 transition">
                  La empresa
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-100 transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces útiles</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--saas-muted)" }}>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Bolsa de Madrid
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Banco de España
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Redes sociales</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--saas-muted)" }}>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://wa.me/">
                  <span className="hover:opacity-100 transition">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: "var(--saas-border)", color: "var(--saas-muted)" }}>
          <p className="mb-2">
            Sociedad de asesoramiento financiero autorizada por FINRA en los Estados Unidos bajo el número 310985.
          </p>
          <p className="mb-2">P.º de la Castellana, 77, 28046 Madrid, España</p>
          <p>Copyright © 2017-2025 Boston Asset Manager. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
