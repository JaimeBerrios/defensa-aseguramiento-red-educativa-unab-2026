# Evidencias del laboratorio GNS3

Las transcripciones originales permanecen en sus carpetas. El montaje registrado corresponde al proyecto local `Proyecto_GNS3_Fedora`. El archivo de trabajo local, las imágenes y los respaldos de disco quedan fuera del paquete académico de evidencias.

| Elemento | Evidencia primaria | Alcance |
| --- | --- | --- |
| Identidad, nodos y enlaces | [API](evidencias-fedora/01-api-topologia.txt) y [captura](evidencias-fedora/08-topologia-gns3.png) | Seis nodos y cinco enlaces del montaje regular |
| VLAN, troncal y configuración de arranque | [Cisco IOS](evidencias-fedora/02-switch.txt) | Estado observado y configuración guardada, recuperación posreinicio pendiente |
| Direccionamiento, filtrado y proxy | [Debian](evidencias-fedora/03-debian.txt) | Subinterfaces, rutas, nftables efectivo, reglas heredadas y ACL de Squid |
| Fedora, HTTP y CONNECT bloqueado | [Enlace y proxy](evidencias-fedora/07-enlace-proxy.txt) | HTTP permitido y CONNECT rechazado por política |
| Fedora, CONNECT permitido y TLS | [Cliente](validacion-final/05-fedora.txt), [Squid](validacion-final/07-squid-registro.txt) | CONNECT 200, TLS 1.3 y HTTPS 200 desde el anfitrión |
| HTTP y HTTPS desde cada VLAN | [Matriz final](validacion-vlan-final/README.md) | IP de origen, gateway, protocolo y registro de Squid para cada VLAN |
| Restauración de Fa1/4 | [Antes](validacion-vlan-final/00-puerto-inicial.txt), [después](validacion-vlan-final/99-puerto-restaurado.txt) | Puerto de acceso en VLAN 1 y configuración de interfaz restituida |
| ICMP tras retirar el cliente | [Administración](validacion-vlan-final/post-pc-admin.txt), [Soporte](validacion-vlan-final/post-pc-soporte.txt), [Diagnóstico](validacion-vlan-final/post-pc-diagnostico.txt) | Dos recorridos permitidos y cuatro bloqueados |
| Ensayo individual de TLS | [Negociación](../evidencias-genesis-florentin/prueba-permitida.txt), [registro](../evidencias-genesis-florentin/registro-accesos.txt) | Ensayo previo por loopback, separado de la integración |
