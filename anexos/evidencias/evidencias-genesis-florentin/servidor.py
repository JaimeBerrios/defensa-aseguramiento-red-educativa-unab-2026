from http.server import HTTPServer, BaseHTTPRequestHandler
import ssl

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        contenido = b"ACCESO HTTPS AUTORIZADO - LABORATORIO SQUID Y TLS"
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.send_header("Content-Length", str(len(contenido)))
        self.end_headers()
        self.wfile.write(contenido)

servidor = HTTPServer(("127.0.0.1", 443), Handler)

contexto = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
contexto.minimum_version = ssl.TLSVersion.TLSv1_2
contexto.load_cert_chain("servidor.crt", "servidor.key")

servidor.socket = contexto.wrap_socket(
    servidor.socket, server_side=True
)

print("Servidor HTTPS activo en 127.0.0.1:443", flush=True)
servidor.serve_forever()
