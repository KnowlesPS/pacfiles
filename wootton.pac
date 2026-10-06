//Last Updated May 2026
function FindProxyForURL(url, host)
{
//if target is an IP on school networks do not proxy
//
//Wootton
if (isInNet(host,"10.14.40.0","255.255.252.0")) return "DIRECT";
//
//*setting for other primaries*
//Water Hall
if (isInNet(host,"172.16.16.0","255.255.248.0")) return "DIRECT";
//Knowles Primary
if (isInNet(host,"10.83.24.0","255.255.248.0")) return "DIRECT";
//New Horizons
if (isInNet(host,"10.2.192.0","255.255.224.0")) return "DIRECT";
//
//if client is in these subnets below and target does meet rule above then use specified proxy
//
if (isInNet(myIpAddress(), "10.14.40.0", "255.255.252.0"))
return "PROXY 10.14.40.1:8085; DIRECT";
//return "DIRECT";
//
//*setting for other primaries*
//Knowles
if (isInNet(myIpAddress(), "10.83.24.0", "255.255.248.0"))
return "DIRECT";
//Water Hall
if (isInNet(myIpAddress(), "172.16.16.0", "255.255.248.0"))
return "PROXY 172.16.17.254:8085; DIRECT";
//New Horizons
if (isInNet(myIpAddress(), "10.2.192.0","255.255.224.0"))
return "PROXY 10.2.192.1:805; DIRECT";
//else go direct
return "Direct"
}
