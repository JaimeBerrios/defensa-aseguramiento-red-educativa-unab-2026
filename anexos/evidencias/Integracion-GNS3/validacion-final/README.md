# Matriz de validación del laboratorio GNS3

Pruebas realizadas el 26 de noviembre de 2026. La [consulta de topología](01-api-topologia.txt) identifica las tres VPCS y el enlace de Fedora con el cortafuegos.

| Prueba | Esperado | Resultado | Evidencia |
| --- | --- | --- | --- |
| Administración → Soporte | Permitido | 2 respuestas, 1.110 y 1.180 ms | [PC-ADMIN](02-pc-admin.txt) |
| Administración → Diagnóstico | Permitido | 2 respuestas, 1.242 y 1.640 ms | [PC-ADMIN](02-pc-admin.txt) |
| Soporte → Administración | Bloqueado | 2 tiempos de espera | [PC-SOPORTE](03-pc-soporte.txt) |
| Soporte → Diagnóstico | Bloqueado | 2 tiempos de espera | [PC-SOPORTE](03-pc-soporte.txt) |
| Diagnóstico → Administración | Bloqueado | 2 tiempos de espera | [PC-DIAGNÓSTICO](04-pc-diagnostico.txt) |
| Diagnóstico → Soporte | Bloqueado | 2 tiempos de espera | [PC-DIAGNÓSTICO](04-pc-diagnostico.txt) |
| Estado de Squid | Servicio activo y escucha TCP 3128 | Activo, en escucha y configuración válida | [Estado y ACL](06-squid-estado.txt) |
| HTTPS desde Fedora | CONNECT permitido y certificado válido | CONNECT 200, TLS 1.3 con certificado verificado, HTTP/2 200 y TCP_TUNNEL/200 | [Cliente Fedora](05-fedora.txt), [registro de Squid](07-squid-registro.txt) |
| HTTP y HTTPS desde VLAN 10 | Probar acceso y correlacionar el registro de Squid | Pendiente de cliente Linux en el segmento | [Topología](01-api-topologia.txt) |
| HTTP y HTTPS desde VLAN 20 | Probar acceso y correlacionar el registro de Squid | Pendiente de cliente Linux en el segmento | [Topología](01-api-topologia.txt) |
| HTTP y HTTPS desde VLAN 30 | Probar acceso y correlacionar el registro de Squid | Pendiente de cliente Linux en el segmento | [Topología](01-api-topologia.txt) |
