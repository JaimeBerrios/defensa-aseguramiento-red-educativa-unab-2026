# Validación de Squid desde las VLAN

Pruebas del 26 de noviembre de 2026 en GNS3. Se usó un cliente Linux temporal con curl 8.23.0 conectado por FastEthernet1/4. El destino de las solicitudes fue `www.debian.org` y el proxy fue el gateway de cada VLAN en TCP 3128. HTTP devolvió una redirección y se comprobó por separado la respuesta de HTTPS.

| VLAN | Origen | Ping al gateway | HTTP | CONNECT | TLS | HTTPS | Evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | `192.168.10.250` | 3/3 | 302 | 200 | TLS 1.3, certificado válido | HTTP/2 200 | [Cliente](../validacion-vlan-reintento/vlan-10.txt), [Squid](../validacion-vlan-reintento/squid-vlan-10.txt) |
| 20 | `192.168.20.250` | 3/3 | 302 | 200 | TLS 1.3, certificado válido | HTTP/2 200 | [Cliente](./vlan-20.txt), [Squid](./squid-vlan-20.txt) |
| 30 | `192.168.30.250` | 3/3 | 302 | 200 | TLS 1.3, certificado válido | HTTP/2 200 | [Cliente](./vlan-30.txt), [Squid](./squid-vlan-30.txt) |

El [primer intento](../validacion-vlan/01-api-topologia.txt) no alcanzó los gateways de las VLAN [10](../validacion-vlan/vlan-10.txt), [20](../validacion-vlan/vlan-20.txt) y [30](../validacion-vlan/vlan-30.txt). La activación del puerto temporal y la espera de convergencia precedieron las pruebas completadas.

Se restauró [FastEthernet1/4 a VLAN 1](99-puerto-restaurado.txt) y se eliminó el cliente temporal con su enlace. Se repitieron los seis flujos ICMP después de la limpieza.

| Flujo | Resultado | Evidencia |
| --- | --- | --- |
| Administración → Soporte | Permitido, dos respuestas | [Administración](post-pc-admin.txt) |
| Administración → Diagnóstico | Permitido, dos respuestas | [Administración](post-pc-admin.txt) |
| Soporte → Administración | Bloqueado, dos tiempos de espera | [Soporte](post-pc-soporte.txt) |
| Soporte → Diagnóstico | Bloqueado, dos tiempos de espera | [Soporte](post-pc-soporte.txt) |
| Diagnóstico → Administración | Bloqueado, dos tiempos de espera | [Diagnóstico](post-pc-diagnostico.txt) |
| Diagnóstico → Soporte | Bloqueado, dos tiempos de espera | [Diagnóstico](post-pc-diagnostico.txt) |
