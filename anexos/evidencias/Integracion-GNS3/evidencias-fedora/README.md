# Evidencias del laboratorio GNS3 en Fedora

La verificación se realizó el 26 de noviembre de 2026 sobre el proyecto
`2b304ae9-80ac-4bb9-9c56-9b7b2e68a35d`. Los resultados iniciales de ICMP que
el equipo proporcionó también constan en el informe, identificados por separado.

| Archivo | Origen y contenido |
| --- | --- |
| [01-api-topologia.txt](01-api-topologia.txt) | API local de GNS3. Proyecto abierto, estado de los seis nodos y cinco enlaces. |
| [02-switch.txt](02-switch.txt) | Extractos de Cisco IOS. VLAN, trunk, puertos, líneas de reenvío de Spanning Tree y configuración de arranque exportada por Dynamips. El `[OK]` de `write memory` corresponde a la ejecución informada por el equipo. |
| [03-debian.txt](03-debian.txt) | SSH a Debian. Interfaces, rutas, reenvío IPv4, reglas nftables, estado de servicios y ACL de Squid. |
| [04-pc-admin.txt](04-pc-admin.txt), [05-pc-soporte.txt](05-pc-soporte.txt), [06-pc-diagnostico.txt](06-pc-diagnostico.txt) | Consolas VPCS. Direccionamiento y repetición de los seis casos ICMP. La consola de PC-DIAGNOSTICO usa el nombre PC-DIAG. |
| [07-enlace-proxy.txt](07-enlace-proxy.txt) | Fedora. ICMP por `gns3tap0`, CONNECT bloqueado y HTTP permitido a un servidor temporal enlazado a la IP de Fedora en el laboratorio. |
| [08-topologia-gns3.png](08-topologia-gns3.png) | Captura real de GNS3 en Wayland. Se recortó la ventana al área de topología y al panel de nodos. |

La revisión se realizó con el laboratorio en ejecución. Queda por verificar
la recuperación tras reinicio y, para Squid, el acceso desde clientes de las
tres VLAN y un túnel TLS permitido dentro del montaje integrado.
